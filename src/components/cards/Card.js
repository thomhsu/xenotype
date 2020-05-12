import React from 'react'
import styled from 'styled-components/macro'

import { useGameState } from '../gameState/gameStateProvider'
import { color } from '../styles/styleVariables'

export default function PlayField() {
  const [state, dispatch] = useGameState()

  return (
    <Container>
      {!state.playFieldItems.length && 'Nothing in play'}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8rem;
  border: 1px dotted black;
  background-color: white;
  padding: 1rem;
  h2 {
    margin: 0 1rem;
  }
`

