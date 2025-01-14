import '@testing-library/jest-dom'
import { useRouter } from "next/navigation";
import { fireEvent, render, screen} from '@testing-library/react';
import SearchBar from "./searchbar";


jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}))

describe('SearchBar Component', () => {
  let pushMock

  beforeEach(() => {
    pushMock = jest.fn()
    useRouter.mockReturnValue({push: pushMock})
  })

  it('render correctly with initial values', () => {
    render(<SearchBar />)
    expect(screen.getByLabelText('Where')).toBeInTheDocument()
    expect(screen.getByLabelText('Check In')).toBeInTheDocument()
    expect(screen.getByLabelText('Check Out')).toBeInTheDocument()
    expect(screen.getByLabelText('Guests')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('show error message when location is empty and search is clicked', async() => {
    render(<SearchBar />)
    const searchButton = screen.getByRole('button')
    fireEvent.click(searchButton)
    expect(screen.getByText('Please fill in the Destination.')).toBeInTheDocument()
  })
  
})