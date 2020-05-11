import React from 'react'
import styled from 'styled-components/macro'

import { GameStateProvider } from './gameState/gameStateProvider'
import GlobalStyles from './styles/GlobalStyles'
import Track from './components/Track'
import { color } from './styles/styleVariables'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Main>
        <GameStateProvider>
          <Header>
            <h1>Untitled Card Game</h1>
          </Header>
          <Track />
        </GameStateProvider>
      </Main>
    </>
  )
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${color.background};
`

const Header = styled.header`
  display: flex;
  width: 100vw;
  height: 4em;
  justify-content: center;
  align-items: center;
  color: ${color.background};
  background-color: black;
`
