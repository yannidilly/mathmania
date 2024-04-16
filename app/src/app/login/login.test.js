import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../login/page';

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

  // Você pode adicionar mais testes para cobrir outros cenários, como o envio do formulário, 
  // a chamada da função de login com e-mail/senha, a chamada da função de login com o Google, etc.
});
