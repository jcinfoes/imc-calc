import { useState } from 'react'
import { Container } from './App.styles'
import { levels, calculateImc } from './helpers/imc'
import logo from './assets/powered.png'
import leftArrow from './assets/leftarrow.png'
import GridItem from './components/GridItem/GridItem'

export default function App() {
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const [showItem, setShowItem] = useState(null)
  const [showError, setShowError] = useState('')

  function handleChange(e) {
    setShowError(false)
    if (e.target.name === 'altura')
      setAltura(parseFloat(e.target.value))
    else
      setPeso(parseFloat(e.target.value))
  }

  function handleClickButton() {
    if (peso <= 0 || altura <= 0) {
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
    } else {
      setShowItem(calculateImc(altura, peso))
    }
  }

  function handleClickBack() {
    setShowItem(null)
    setAltura(0)
    setPeso(0)
  }

  return (
    <Container>
      <header>
        <img src={logo} alt='logo' />
      </header>

      <main>
        <div className="left-side">
          <h1>Calcule o seu IMC</h1>
          <p>
            Esta é a sigla para Índice de Massa Corporal, parâmetro
            adotado pela Organização Mundial de Saúde para calcular o
            peso ideal de cada pessoa.
          </p>

          <input
            type='number'
            placeholder='Informe a sua altura. Ex: 1.5 (em metros)'
            name='altura'
            value={altura > 0 ? altura : ''}
            onChange={handleChange}
            disabled={showItem ? true : false}
          />

          <input
            type='number'
            placeholder='Informe o seu peso. Ex: 75.3 (em kg)'
            name='peso'
            value={peso > 0 ? peso : ''}
            onChange={handleChange}
            disabled={showItem ? true : false}
          />

          <div className="error">
            {showError && (
              <strong>
                Por favor, informe todos os campos!
              </strong>
            )}
          </div>

          <button
            onClick={handleClickButton}
            disabled={showItem ? true : false}
          >
            Calcular
          </button>
        </div>

        <div className="right-side">
          {!showItem && (
            <div className="grid">
              {levels.map((e, i) => (
                <GridItem key={i} item={e} />
              ))}
            </div>
          )}
          {showItem && (
            <div className="rightBig">
              <div className="rightArrow" onClick={handleClickBack}>
                <img src={leftArrow} alt="seta" width={25} />
              </div>
              <GridItem item={showItem} />
            </div>
          )}
        </div>

      </main>
    </Container>
  )
}
