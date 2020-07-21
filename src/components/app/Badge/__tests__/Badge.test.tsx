import React from 'react';
import { render } from '@testing-library/react';
import { Badge } from '../';

test('render custom text', () => {
    const { getByText } = render(<Badge color="accent">custom text</Badge>);
    const linkElement = getByText(/custom text/i);
    expect(linkElement).toBeInTheDocument();
});
