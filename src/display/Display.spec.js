import React from 'react';
import Display from './Display';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('<Display />', () => {
    it('renders without crashing', () => {
        render(<Display />);
    });
    it('opened and unlocked', () => {
        const {getByText, queryByText } = render(<Display closed={false} locked={false} />);
        const unlock = getByText(/unlocked/i);
        const open = getByText(/open/i);

        expect(unlock).toHaveClass('green-led');
        
        expect(queryByText(/closed/i)).toBe(null);
               
        //expect(unlock.className).toMatch(/\red-led\b/i);
        
       // expect(queryByText(/closed/i)).toBe(null);
    })
        it('closed and unlocked', () => {
            const {getByText} = render(<Display closed={true} locked={false} /> );
            getByText(/unlocked/i);
            getByText(/closed/i);
        });
        it('closed and locked', () => {
            const {getByText} = render(<Display closed = {true} locked = {false} />);
            getByText(/^locked$/i);
            getByText(/closed/i);


        })
    });
});