import React from 'react'
import {shallow } from 'enzyme'
import Card from './Card'


 const cardProps = {
     imgSrc: 'image link',
     title: 'title',
     handleClick: function(){},
     handleDelete: function(){},
 }

describe('Renders component', () => {
    it('Should render Card component without errors', () => {
      shallow(<Card {...cardProps} />)
    })
  })