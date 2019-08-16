import React, { Component } from "react"
import styled, { createGlobalStyle } from "styled-components"

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
`
const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`

export default App
