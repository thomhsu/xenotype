import React, {useEffect} from 'react'
import styled from 'styled-components/macro'

import { useGameState } from '../gameState/gameStateProvider'
import { AlienTurn, createStartingDeck } from '../engine'
import Track from './Track'
import { DeckTable } from './deckTable'
import bloodSpatterImg from '../assets/blood-splatter.png'
import { color } from '../styles/styleVariables'

export default function Main() {
  const [state, dispatch] = useGameState()

  useEffect(() => {
    createStartingDeck(dispatch)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      { 
        state.currentPlayer === 'aliens'
          ? <AlienTurn />
          : null
      }
      <Header>
        <h1>Xenotype</h1>
        <img src={bloodSpatterImg} alt='Gruesome blooood' />
      </Header>
      <Track />
      <DeckTable />
    </>
  )
}

const Header = styled.header`
  display: flex;
  width: 100vw;
  height: 4em;
  justify-content: center;
  align-items: center;
  color: ${color.background};
  background-color: black;
  position: relative;
  overflow: hidden;
  img {
    height: 100%;
    position: absolute;
    right: 0;
  }
`
