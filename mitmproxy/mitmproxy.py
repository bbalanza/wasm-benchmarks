from mitmproxy import http

from bs4 import BeautifulSoup



POST_SERVER = "192.168.2.7"

POST_SERVER_PORT = 8000

POST_SERVER_URL = f"{POST_SERVER}:{POST_SERVER_PORT}"



def request(flow):

    """

    Redirect HTTPS requests to example.com/ourserver 

    to our local webserver webserver 

    """

    if flow.request.pretty_host == "example.com" and flow.request.path=="/ourserver":

        flow.request.host = POST_SERVER

        flow.request.port = POST_SERVER_PORT

        flow.request.scheme = "http"



def response(flow):

    js_snippet = 'function xml_http_post(url, data, callback) {         var req = new XMLHttpRequest();        req.open("POST", url, true) ;         req.send(data);    }    function calcaulate_performance() {        var plt = window.performance.timing.domComplete - window.performance.timing.requestStart;        console.log("Calculated PLT: " + plt);        xml_http_post("https://example.com/ourserver",  plt , null)    }    window.addEventListener ? window.addEventListener("load", calcaulate_performance, true) : window.attachEvent && window.attachEvent("onload", calcaulate_performance);'



    # Add Javascript snippet to the body

    html = flow.response.get_text()

    soup = BeautifulSoup(html, "lxml")

    h1 = soup.new_tag("script")

    h1.string = js_snippet 

    soup.body.insert(0, h1)

    flow.response.set_text(str(soup))



    # Remove content-security-policy header if present.

    if "content-security-policy" in flow.response.headers:

        del flow.response.headers['content-security-policy']



    # Add header for CORS to our local webserver's response.

    if flow.request.pretty_host == POST_SERVER and flow.request.port == POST_SERVER_PORT:

        flow.response.headers["Access-Control-Allow-Origin"] = "*"
