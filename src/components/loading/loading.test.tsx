import React from 'react'
import {shallow } from 'enzyme'
import Loading from './Loading'


 const loadingProps = {
     loading: true,
 }

describe('Renders component', () => {
    it('Should render Loading component without errors', () => {
      shallow(<Loading {...loadingProps} />)
    })

    it('Should render loading', () => {
        const wrapper = shallow(<Loading />)
        const loading = 
       expect(wrapper.find('.lds-facebook')).toBeDefined()
    })
  })