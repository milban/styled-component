import React, { Component } from "react"
import styled, { createGlobalStyle, css } from "styled-components"

const GlobalStyel = createGlobalStyle`
  body{
    margin: 0px;
    padding: 0px;
  }
`

const awesomeCard = css`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px,
    rgba(0, 0, 0, 0.024) 0px -6px 16px -6px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`

const Input = styled.input.attrs({
  required: true
})`
  border: none;
  border-radius: 5px;
  ${awesomeCard}
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
