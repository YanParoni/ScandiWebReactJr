import React, { Component } from 'react'
import Categories from './Categories'
import { HeaderContainer, NavContainer } from './styles/style-nav'

export default class Navbar extends Component {
  render() {
    return (
      <HeaderContainer>
      <NavContainer>
     <Categories/>
     </NavContainer>
     </HeaderContainer>
    )
  }
}
