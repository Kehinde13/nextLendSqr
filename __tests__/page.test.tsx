
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Home from '../app/page'

const pushMock: jest.Mock = jest.fn()

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: pushMock,
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: () => null
    };
  }
}));

describe('Home', () => {
  it('renders the Home component with login form', () => {
    render(<Home />)

    // Assert that the images are rendered
    const logoImage = screen.getAllByAltText('lendSqr logo')
    expect(logoImage[0]).toBeInTheDocument()  
  }),

  it('renders the Login form', () => {
    render(<Home />)

    // check if the login component is rendered
    expect(screen.getByText('Welcome !')).toBeInTheDocument();

    //check if Email and Password input is rendered
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  }),

  it('redirects the user to the dashboard', () => {
    render(<Home />);

    // Simulate form submission
    const loginButton = screen.getByText('Log In')
     fireEvent.click(loginButton) 

    // Assert that router.push was called with 'dashboard'
    expect(pushMock).toHaveBeenCalledWith('dashboard')
  })
})
