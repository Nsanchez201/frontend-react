import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';

test('renders learn react link', () => {
  render(<UserProfile />);
  const linkElement = screen.getByText(/ /i);
  expect(linkElement).toBeInTheDocument();
});