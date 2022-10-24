export async function fetchAsset(uri = '') {
  const url = new URL(uri)
  const fasta = await fetch(url, {
    headers: {
      "Content-Type": "text/plain"
    }
  });
  return await fasta.text();
}

export async function stopRun(uri = '') {
  const url = new URL(uri)
  const request = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({Done: true}),
  }
  try {
    const resp = await fetch(uri, request)
    console.log(resp.status)
  } catch (e){
    console.log(e)
  }
  return 
}