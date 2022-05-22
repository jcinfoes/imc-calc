import React from 'react'
import { Container } from './GridItem.styles'
import downImage from '../../assets/down.png'
import upImage from '../../assets/up.png'

export default function GridItem({ item }) {
  return (
    <Container style={{ backgroundColor: item.color }}>
      <div className="icon">
        <img
          src={item.icon === 'up' ? upImage : downImage}
          alt="icone"
        />
      </div>
      <h3>{item.title}</h3>
      {item.imcCalc && (
        <h4>Seu IMC é de <strong>{item.imcCalc}</strong> kg/m²</h4>
      )}
      <p>
        IMC entre <strong>{item.imc[0]}</strong>
        {' e '}
        <strong>{item.imc[1]}</strong>
      </p>
    </Container>
  )
}
