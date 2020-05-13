import React from 'react'
import styled from 'styled-components/macro'

import { GameStateProvider } from './gameState/gameStateProvider'
import GlobalStyles from './styles/GlobalStyles'
import { Main } from './components'
import { color } from './styles/styleVariables'

export default function App() {

  return (
    <>
      <GlobalStyles />
      <Container>
        <GameStateProvider>
          <Main />
        </GameStateProvider>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`
