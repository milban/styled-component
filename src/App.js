import React, { Component } from "react"
import styled, { createGlobalStyle, css, keyframes } from "styled-components"

const GlobalStyel = createGlobalStyle`
  body{
    margin: 0px;
    padding: 0px;
  }
`

const Input = styled.input.attrs({
  required: true
})`
  border: none;
  border-radius: 5px;
`

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyel />
        <Input placeholder="Hi" />
      </Container>
    )
  }
}

const Container = styled.div`
  background-color: yellow;
`

export default App
