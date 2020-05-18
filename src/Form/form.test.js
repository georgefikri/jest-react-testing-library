import React from 'react'
import { render, getByTestId, fireEvent , cleanup } from '@testing-library/react';
import Form from './form'

import renderer from 'react-test-renderer'

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

    // snapshot testing
    test('snapshot testing button submit', ()=> {
        const tree = renderer.create( <button data-testid='clickme'>click me</button>).toJSON()
        expect(tree).toMatchSnapshot();
    })
    
    test('snapshot testing the whole form', ()=> {
        const fName = renderer.create(<Form />).toJSON();
        expect(fName).toMatchSnapshot() 
    })
})