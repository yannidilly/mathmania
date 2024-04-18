// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signInWithPopup } from 'firebase/auth';
// import { GoogleAuthProvider } from 'firebase/auth';
// import { renderHook } from '@testing-library/react-hooks';
// import { AuthContextProvider, useAuth } from '../app/context/Auth';
// import { jest } from '@jest/globals';

// // Mockando o módulo firebase/auth
// jest.mock('firebase/auth', () => ({
//   createUserWithEmailAndPassword: jest.fn(),
//   signInWithEmailAndPassword: jest.fn(),
//   updateProfile: jest.fn(),
//   signInWithPopup: jest.fn(),
//   GoogleAuthProvider: jest.fn(),
//   getAuth: jest.fn(() => ({
//       signOut: jest.fn(),
//       onAuthStateChanged: jest.fn()
//   })),
// }));

// jest.mock('firebase/app', () => ({
//   initializeApp: jest.fn(() => ({
//       // Você pode retornar um objeto simulado ou qualquer outra configuração necessária
//   })),
// }));

// jest.mock('firebase/auth', () => ({
//   getAuth: jest.fn(() => ({
//       // Novamente, você pode retornar um objeto simulado ou qualquer outra configuração necessária
//   })),
//   signInWithEmailAndPassword: jest.fn(),
//   createUserWithEmailAndPassword: jest.fn(),
//   // Outros mocks de funções de autenticação...
// }));


// // Simula um sucesso de login com email e senha
// firebaseAuth.signInWithEmailAndPassword.mockResolvedValue({
//   user: {
//       uid: '12345',
//       displayName: 'Test User',
//       email: 'test@example.com',
//       accessToken: 'fakeAccessToken'
//   }
// });

// // Simula uma falha de login com email e senha
// firebaseAuth.signInWithEmailAndPassword.mockRejectedValue(new Error('auth/invalid-credentials'));

// describe('AuthContext tests', () => {
//     test('signInWithEmail should call signInWithEmailAndPassword', async () => {
//       const email = 'test@example.com';
//       const password = 'password123';
  
//       const { result } = renderHook(() => useAuth(), {
//           wrapper: AuthContextProvider,
//       });
  
//       // Execute a função signInWithEmail
//       await act(() => result.current[1].signInWithEmail(email, password));
//     });
// });
