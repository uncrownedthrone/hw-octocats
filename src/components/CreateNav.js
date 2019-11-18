import React, { Component } from 'react'

import logo from '../images/githublogo.jpeg'

class CreateNav extends Component {
  render() {
    return (
      <nav class='navBarMain'>
        <nav class='navBarOne'>
          <img src={logo} class='logo' />
          <h3 class='titleOne'>Octodex</h3>
          <h5>Home</h5>
          <h5>FAQ</h5>
        </nav>
        <nav class='navBarTwo'>
          <h5 class='follow'>
            <a href='#'>Follow us on Twitter</a>
          </h5>
          <h5 class='toGitHub'>
            <a href='#'>Back to GitHub.com</a>
          </h5>
        </nav>
      </nav>
    )
  }
}

export default CreateNav
