import React from 'react'
import styled from 'styled-components/macro'

import { useGameState } from '../../gameState/gameStateProvider'
import { color } from '../../styles/styleVariables'

export default function ShipDeck() {
  const [state, dispatch] = useGameState()

  return (
    <Container>
      <CurrentPlayer player={state.currentPlayer} />
      <h3>Ship Deck</h3>
    </Container>
  )
}

const CurrentPlayer = ({ player }) => {
  return (
    <PlayerIndicator>
      <h3>
        Current Player
      </h3>
      <h4>
        <Arrow direction='left' active={player === 'survivors'} />
          {player}
        <Arrow direction='right' active={player === 'aliens'} />
      </h4>
    </PlayerIndicator>
  )
}

const Arrow = ({ direction, active }) => (
  <ArrowSpan active={active} >
    {direction === 'left' && (
      <span>&larr;</span>
    )}
    {direction === 'right' && (
      <span>&rarr;</span>
    )}
  </ArrowSpan>
)

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

const PlayerIndicator = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-shadow: 0.15em 0.15em 0.5em grey;
  h4 {
    margin-top: 0.5rem;
  }
`

const ArrowSpan = styled.span`
  visibility: ${props => props.active ? 'initial' : 'hidden' };
  span {
    margin: 0 1em;
  }
`
