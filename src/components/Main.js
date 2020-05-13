import React, {useEffect} from 'react'
import styled from 'styled-components/macro'

import { useGameState } from '../gameState/gameStateProvider'
import { AlientTurn } from '../engine'
import Track from './Track'
import { DeckTable } from './DeckTable'
import bloodSpatterImg from '../assets/blood-splatter.png'
import { survivorCards, alienCards } from './cards'
import { shuffle } from '../utils'
import { color } from '../styles/styleVariables'

export default function Main() {
  const [state, dispatch] = useGameState()

  useEffect(() => {
    function createStartingDeck() {
      const survivorStartingCards = []
      const alienStartingCards = []

      function addCards(factionCards, factionCardBucket) {
        for (let card in factionCards) {
          const copies = factionCards[card].baseQty
          Array(copies).fill().forEach(() => factionCardBucket.push(factionCards[card]))
        }
      }

      addCards(survivorCards, survivorStartingCards)
      addCards(alienCards, alienStartingCards)
      shuffle(survivorStartingCards)
      shuffle(alienStartingCards)

      dispatch({
        type: 'CREATE_STARTING_DECK',
        startingDecks: { survivors: survivorStartingCards,  aliens: alienStartingCards }
      })
    }

    createStartingDeck()
  }, [dispatch])

  return (
    <>
      { 
        state.currentPlayer === 'aliens'
          ? <AlientTurn />
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
