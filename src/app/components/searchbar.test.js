import '@testing-library/jest-dom'
import { render, screen} from '@testing-library/react';
import SearchBar from "./searchbar";

it('render correctly', () => {
  render(<SearchBar />)
  const AddressText = screen.getByPlaceholderText('Destination')
  expect(AddressText).toBeInTheDocument()
})

// test('renders the "Hello World" message', () => {
//   render(<App />);
//   const helloWorldText = screen.getByText('Hello');
//   expect(helloWorldText).toBeInTheDocument();
// });