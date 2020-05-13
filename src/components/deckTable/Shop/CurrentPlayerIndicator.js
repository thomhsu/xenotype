import React from 'react'
import styled from 'styled-components/macro'

import { useGameState } from '../../../gameState/gameStateProvider'
import { color } from '../../../styles/styleVariables'

export default function CurrentPlayerIndicator() {
  const [state, dispatch] = useGameState()

  return (
    <>
      <CurrentPlayer player={state.currentPlayer} />
    </>
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
