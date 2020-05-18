import React from 'react'
import { render, getByTestId, fireEvent , cleanup } from '@testing-library/react';
import Form from './form'

describe('test the simple form', ()=> {

    afterEach(cleanup)
   test ('check if id is here', ()=> {
    const { getByTestId } = render(<form data-testid="form" />);
    const linkElement = getByTestId('form')
    expect(linkElement).toBeInTheDocument();
   })

   test('check if firstname exists', ()=> {
       const {getByTestId } = render( <input data-testid="firstName" />);
       const linkElement = getByTestId('firstName')
       expect(linkElement).toBeInTheDocument()
   })

   test('check if submit button exist', ()=> {
       const {getByTestId} = render(<button data-testid='clickme' />)
       const linkElement = getByTestId('clickme')
       expect( getByTestId('clickme')).toBeInTheDocument()
   })

   test('check if submit button is clicked', ()=> {
    const {getByTestId} = render(<button data-testid='clickme' />)
    const linkElement = getByTestId('clickme')
    fireEvent.click(linkElement)

    })
  
})