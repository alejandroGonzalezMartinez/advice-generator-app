import { useEffect, useState } from 'react'
import { generateAdvice } from '../services/generateAdvice'

export function useAdvice() {
  const [advice, setAdvice] = useState(
    {
      adviceId: '',
      advice: ''
    }
  )

  async function getAdvice() {
    const data  = await generateAdvice()
    setAdvice(
      {
        adviceId: `ADVICE #${data.slip.id}`,
        advice: `"${data.slip.advice}"`
      }
    )
  }

  useEffect(() => {
    getAdvice()
  }, [])

  return {...advice, getAdvice}
}