import React from 'react'
import { render, getByTestId, fireEvent } from '@testing-library/react';
import Form from './form'

describe('test the simple form', ()=> {
   test ('check if id is here', ()=> {
    const { getByTestId } = render(<form data-testid="form" />);
    expect(getByTestId('form')).toBeInTheDocument();
   })

   test('check if firstname exists', ()=> {
       const {getByTestId } = render( <input data-testid="firstName" />);
       expect( getByTestId('firstName')).toBeInTheDocument()
   })

   test('check if submit button exist', ()=> {
       const {getByTestId} = render(<button data-testid='clickme' />)
       expect( getByTestId('clickme')).toBeInTheDocument()
   })

   test('check if submit button is clicked', ()=> {
    const {getByTestId} = render(<button data-testid='clickme' />)
    fireEvent.click(getByTestId('clickme'))
    // expect(getByTestId('clickme'))

    })
  
})