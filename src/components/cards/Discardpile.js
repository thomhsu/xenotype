import React from 'react'
import styled from 'styled-components/macro'

import { CardTemplate } from './CardTemplate'
import { useGameState } from '../../gameState/gameStateProvider'

export default function Discardpile({ player }) {
  const [state, dispatch] = useGameState()

  return (
    <Container>
      <Deck player={player} empty={!state.playerDiscard[player].length}>
        {
          state.playerDiscard[player].length
            ? <h3>{player}</h3>
            : null
        }
      </Deck>
      <h4>Discard:</h4> {state.playerDiscard[player].length}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    display: contents;
  }
`

const Deck = styled(CardTemplate)`
  opacity: 0.5;
  justify-content: center;
  ${props => props.empty && 'border: 2px dotted black'};
  background-color: ${props => props.player === 'survivors' ? 'darkseagreen' : 'black'};
  ${props => props.empty && 'background-color: white'};
  color: ${props => props.player === 'survivors' ? 'black' : 'white'};
  h3 {
    position: relative;
    bottom: 2rem;
    text-transform: capitalize;
    ${props => props.player === 'survivors' && 'transform: scale(0.7)'};
  }
`
