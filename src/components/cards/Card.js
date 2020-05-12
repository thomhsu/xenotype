import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Card({ card }) {
  const [ active, setActive ] = useState(false)

  return (
    <Container onClick={() => setActive(!active)} active={active} >
      <h4>{card.name}</h4>
      <p>{card.description}</p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 8rem;
  height: 12rem;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
  padding: 1rem;
  margin: 0.25rem;
  position: relative;
  bottom: ${props => props.active ? '1rem' : '0'};
  box-shadow: ${props => props.active ? '0.15em 0.15em 0.5em grey' : 'none'};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`
