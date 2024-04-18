import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../app/login/page';

describe('Login Component', () => {
  it('should render email and password fields', () => {
    render(<Login />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Senha')).toBeInTheDocument();
  });

  it('should enable login button when email and password are filled', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');
    const loginButton = screen.getByText('ENTRAR');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(loginButton).toBeEnabled();
  });

  it('should disable login button when email or password are empty', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');
    const loginButton = screen.getByText('ENTRAR');

    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(loginButton).toBeDisabled();
    
  });
});
