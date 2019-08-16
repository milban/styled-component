import React, { Component } from "react"
import styled, { createGlobalStyle, css, keyframes } from "styled-components"

const GlobalStyel = createGlobalStyle`
  body{
    margin: 0px;
    padding: 0px;
  }
`

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyel />
        <Button danger={false}>Safe</Button>
        <Button danger={true}>Danger</Button>
        <Anchor href="https://google.com">Go to Google</Anchor>
      </Container>
    )
  }
}

const Container = styled.div`
  background-color: yellow;
`

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  color: white;
  min-width: 120px;
  font-size: 40px;
  font-weight: 400;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "red" : "green")};
  ${props => {
    if (props.danger) {
      return css`
        animation: ${rotation} 2s linear infinite;
      `
    }
  }}
`
const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export default App
