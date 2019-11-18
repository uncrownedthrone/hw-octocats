import React, { Component } from 'react'
import Daftpunk1 from './images/cat-daftpunk1.gif'
import Daftpunk2 from './images/cat-daftpunk2.gif'
import Docbrown from './images/cat-docbrown.jpg'
import Grinch from './images/cat-grinch.gif'
import Heisenberg from './images/cat-heisenberg.png'
import Stormtrooper from './images/cat-stormtrooper.png'

class GeneratePhotos extends Component {
  render() {
    return (
      <main classe='margin'>
        <ul>
          <li>
            <img src={Daftpunk1} />
          </li>
        </ul>
        <ul>
          <li>
            <img src={Daftpunk2} />
          </li>
        </ul>
        <ul>
          <li>
            <img src={Docbrown} />
          </li>
        </ul>
        <ul>
          <li>
            \ <img src={Heisenberg} />
          </li>
        </ul>
        <ul>
          <li>
            <img src={Grinch} />
          </li>
        </ul>
        <ul>
          <li>
            <img src={Stormtrooper} />
          </li>
        </ul>
      </main>
    )
  }
}

export default GeneratePhotos
