export async function fetchAsset(uri = '') {
    const url = new URL(uri)
    const fasta = await fetch(url, {
        headers: {
          "Content-Type": "text/plain"
        }
      });
      return await fasta.text();
}