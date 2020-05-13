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
      <HeaderSpacer align='right' ><h4>survivors</h4></HeaderSpacer>
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
      <HeaderSpacer align='left' ><h4>aliens</h4></HeaderSpacer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  padding: 1rem 0;
  border-bottom: 1px solid black;
  h4 {
    margin: 0 1rem;
  }
`

const HeaderSpacer = styled.div`
  width: 8rem;
  text-align: ${props => props.align};
`

const Space = styled.div`
  height: 2rem;
  width: 2rem;
  box-shadow: ${props => props.center ? '0 0 0 3px black' : '0 0 0 2px black'};
  border-radius: 4px;
  background-color: ${props => props.active ? 'rgb(140,40,46)' : 'lightgrey'};
  margin: 0.25rem;
`
