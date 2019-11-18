import React, { Component } from 'react'

const images = [
  { name: 'DaftpunktocatThomas', image: './images/cat-daftpunk1.gif' },
  { name: 'DaftpunktocatGuy', image: './images/cat-daftpunk2.gif' },
  { name: 'DoctocatBrown', image: './images/cat-docbrown.jpg' },
  { name: 'Grinchtocat', image: './images/cat-grinch.gif' },
  { name: 'Heisencat', image: './images/cat-heisenberg.png' },
  { name: 'Stormtroopocat', image: './images/cat-stormtrooper.png' }
]

class CreateArry extends Component {
  render() {
    return <main>{<h1></h1> {this.props.image}}</main>
  }
}

export default CreateArry
