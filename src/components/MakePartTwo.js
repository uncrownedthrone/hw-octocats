import React, { Component } from 'react'
import MakePartOne from './MakePartOne'

import DaftpunktocatThomas from '../images/cat-daftpunk1.gif'
import DaftpunktocatGuy from '../images/cat-daftpunk2.gif'
import DoctocatBrown from '../images/cat-docbrown.jpg'
import Grinchtocat from '../images/cat-grinch.gif'
import Heisencat from '../images/cat-heisenberg.png'
import Stormtroopocat from '../images/cat-stormtrooper.png'

const images = [
  { name: 'Daftpunktocat-Thomas', imageUrl: DaftpunktocatThomas },
  { name: 'Daftpunktocat-Guy', imageUrl: DaftpunktocatGuy },
  { name: 'Doctocat Brown', imageUrl: DoctocatBrown },
  { name: 'Grinchtocat', imageUrl: Grinchtocat },
  { name: 'Heisencat', imageUrl: Heisencat },
  { name: 'Stormtroopocat', imageUrl: Stormtroopocat }
]

class MakePartTwo extends Component {
  render() {
    return (
      <ul>
        {images.map(image => {
          return <MakePartOne name={image.name} imageUrl={image.imageUrl} />
        })}
      </ul>
    )
  }
}

export default MakePartTwo
