import React from 'react'
import styled from 'styled-components/macro'

import { useGameState } from '../gameState/gameStateProvider'
import { color } from '../styles/styleVariables'

export default function Track() {
  const [state, dispatch] = useGameState()

  const TOTAL_TRACK_SQUARES = 21
  const CENTER_SQUARE = 10
  const trackArr = [...Array(TOTAL_TRACK_SQUARES)].map((_, i) => i)

  return (
    <Container>
      <h2>survivor</h2>
      {
        trackArr.map((space, i) => {
          return (
            <Space
              active={i === state.trackPosition}
              key={'space'+i} 
              center={i === CENTER_SQUARE}
            />
          )
        })
      }
      <h2>alien</h2>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  padding: 1rem;
  h2 {
    margin: 0 1rem;
  }
`

const Space = styled.div`
  height: 2rem;
  width: 2rem;
  border: ${props => props.center ? '3px solid blue' : '1px solid navy'};
  background-color: ${props => props.active ? 'grey' : 'initial'};
  margin: 0.25rem;
`
