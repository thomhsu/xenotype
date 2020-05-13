import React from 'react'
import styled from 'styled-components/macro'

import { useGameState } from '../../gameState/gameStateProvider'
import { color } from '../../styles/styleVariables'

export default function ResourceTracker({ player }) {
  const [state, dispatch] = useGameState()

  if (player === 'survivors') {
    return (
      <Container>
        <p>AP: {`${state.ap.survivors}`}</p>
        <p>Scrap: {`${state.resources.survivors}`}</p>
      </Container>
    )
  } else if (player === 'aliens') {
    return (
      <Container>
        <p>AP: {`${state.ap.aliens}`}</p>
        <p>Biomass: {`${state.resources.aliens}`}</p>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  width: 12rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

