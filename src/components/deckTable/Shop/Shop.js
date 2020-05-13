import React from 'react'
import styled from 'styled-components/macro'

import { useGameState } from '../../../gameState/gameStateProvider'
import CurrentPlayerIndicator from './CurrentPlayerIndicator'
import { color } from '../../../styles/styleVariables'

export default function Shop() {
  const [state, dispatch] = useGameState()

  return (
    <Container>
      <CurrentPlayerIndicator />
      <h3>Shop</h3>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50rem;
  height: 100%;
  background-color: white;
  padding: 1rem;
  box-shadow: inset 0 0 0.5em grey;
`
