import styled from 'styled-components/macro'

export const PlayfieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  opacity: ${props => props.activeTurn ? '1' : '0.3'};
  transition: opacity 0.2s ease-in-out;
  background-color: ${props => props.activeTurn ? 'white' : 'slategrey'};
  padding: 1rem;
  text-align: center;
`