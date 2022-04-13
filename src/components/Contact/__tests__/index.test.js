import React from 'react';
import { render, cleanup, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact componet', () => {
    it('renders', () => {
        render(<ContactForm />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot();
    });

    it('h1 renders contact me', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('contact')).toHaveTextContent('Contact Me')
    })

    it('button renders submit', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('submit')).toHaveTextContent('Submit')
    })
})