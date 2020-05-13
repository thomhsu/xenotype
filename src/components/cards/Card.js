import React, { useState } from 'react'
import styled from 'styled-components/macro'

import { CardTemplate } from './CardTemplate'

export default function Card({ card }) {
  const [ active, setActive ] = useState(false)

  return (
    <ActiveCard onClick={() => setActive(!active)} active={active} >
      <h4>{card.name}</h4>
      <p>{card.description}</p>
    </ActiveCard>
  )
}

const ActiveCard = styled(CardTemplate)`
  bottom: ${props => props.active ? '1rem' : '0'};
  box-shadow: ${props => props.active ? '0.15em 0.15em 0.5em grey' : 'none'};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`
