import { render, screen } from '@testing-library/react';
import Restaurant from './Restaurant';

test('renders learn react link', () => {
  render(<Restaurant />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});