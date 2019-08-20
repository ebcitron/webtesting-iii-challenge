import React from 'react';
import Display from './Display';
import {render} from '@testing-library/react';



describe('<Display />', () => {
    it('renders without crashing', () => {
        render(<Display />);
    });
    it('open and unlocked', () => {
        const {getByText, queryByText } = render(<Display closed={false} locked={false} />);
        const unlock = getByText(/unlocked/i);
        const open = getByText(/closed/i);
        
        expect(unlock.className).toMatch(/\red-led\b/i);
        
        expect(queryByText(/closed/i)).toBe(null);


    });
});