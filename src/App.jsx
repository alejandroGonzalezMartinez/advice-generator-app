import { useAdvice } from './custom_hooks/useAdvice'
import iconDice from './assets/images/icon-dice.svg'
import './App.css'

function App() {
  const { adviceId, advice, getAdvice } = useAdvice()

  return (
    <main className='box'>
      <h1 className='adviceNumber'>
        {adviceId}
      </h1>
      <p className="adviceText">
        {advice}
      </p>
      <div className='divider' />
      <button onClick={getAdvice} className='button'>
        <img src={iconDice} alt="button icon" className='icon' />
      </button>
    </main>
  )
}

export default App
