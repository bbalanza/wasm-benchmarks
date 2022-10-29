export async function fetchAsset(uri = 'https://greenlab.myddns.me/assets/fasta.txt') {
  const url = new URL(uri)
  const fasta = await fetch(url, {
    headers: {
      "Content-Type": "text/plain"
    }
  });
  return await fasta.text();
}

export async function stopRun({uri = 'https://greenlab.myddns.me/stop/', log = ''}) {
    const url = new URL(uri)
  // timeout from https://dmitripavlutin.com/timeout-fetch-request/
  const timeout = 10000
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const request = {
    method: "POST",
    signal: controller.signal,
    body: JSON.stringify(log),
  }
  try {
    const resp = await fetch(url, request)
    clearTimeout(id);
    console.log("Status: " + resp.status + "\nLog: " + log)
  } catch (e){
    console.log(e)
  }
  return 
}