const endpoint = 'https://api.adviceslip.com/advice'

export async function generateAdvice() {
  const res = await fetch(endpoint)
  const data = await res.json()
  return data
}