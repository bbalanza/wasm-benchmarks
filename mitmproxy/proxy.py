from mitmproxy import http
from bs4 import BeautifulSoup

POST_SERVER = "77.251.187.213"
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

    js_snippet = "function listenToStop() { const body = document.body; const config = { attributes: true }; const callback = (mutationList, observer) => { deliverPayload(); observer.disconnect(); }; const observer = new MutationObserver(callback); observer.observe(body, config); } function deliverPayload() { const uri = 'https://example.com/ourserver' const payload = '=*DONE*=' var req = new XMLHttpRequest(); req.open('POST', uri, true); req.send(payload); } listenToStop();"

    html = flow.response.get_text()
    soup = BeautifulSoup(html, "lxml")
    h1 = soup.new_tag("script")
    h1.string = js_snippet 
    soup.body.insert(0, h1)
    flow.response.set_text(str(soup))

    if "content-security-policy" in flow.response.headers:
        del flow.response.headers['content-security-policy']

    if flow.request.pretty_host == POST_SERVER and flow.request.port == POST_SERVER_PORT:
        flow.response.headers["Access-Control-Allow-Origin"] = "*"
