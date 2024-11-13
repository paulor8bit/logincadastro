import { render, screen } from '@testing-library/react';
import App from './App';
import { db } from './firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
