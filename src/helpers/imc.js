export const levels = [
  {
    title: 'Magreza',
    color: '#96a3ab',
    icon: 'down',
    imc: [0, 18.5],
  },
  {
    title: 'Normal',
    color: '#0ead69',
    icon: 'up',
    imc: [18.6, 24.9],
  },
  {
    title: 'Sobrepeso',
    color: '#e2b039',
    icon: 'down',
    imc: [25, 30],
  },
  {
    title: 'Obesidade',
    color: '#c3423f',
    icon: 'down',
    imc: [30.1, 99],
  },
]

export const calculateImc = (altura, peso) => {
  const imc = peso / (altura * altura)
  let result = null
  levels.forEach(level => {
    if (imc >= level.imc[0] && imc <= level.imc[1]) {
      result = { ...level }
      result.imcCalc = parseFloat(imc.toFixed(2))
    }
  })
  return result
}