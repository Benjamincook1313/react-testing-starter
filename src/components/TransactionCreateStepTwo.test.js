import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; 
import TransactionCreateStepTwo from './TransactionCreateStepTwo';

// testing user interactions

// test('on initial render, the pay button is disabled', async () => {
//   render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}}/>)

//   // screen.debug();
//   // screen.getByRole('');
//   expect(await screen.findByRole('button', { name: /pay/i })).toBeDisabled();
// });

// // testing condition rendering

// test('if amount and note is entered, the pay button becomes enabled', async () => {
//   render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}}/>)

//   // Mocking

//   userEvent.type(screen.getByPlaceholderText(/amount/i ), '50');
//   userEvent.type(screen.getByPlaceholderText(/add a note/i ), 'dinner');

//   // screen.getByRole('');
//   expect(await screen.findByRole('button', { name: /pay/i })).toBeEnabled();

// });

// test('on initial render, the pay button is disabled', async () => {
//   render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}}/>)

//   // screen.debug();
//   // screen.getByRole('');
// });

// combining unit tests into one integration test
test('if amount and note is entered, the pay button becomes enabled', async () => {
  render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}}/>)

  expect(await screen.findByRole('button', { name: /pay/i })).toBeDisabled();
  // Mocking
  userEvent.type(screen.getByPlaceholderText(/amount/i ), '50');
  userEvent.type(screen.getByPlaceholderText(/add a note/i ), 'dinner');

  // screen.getByRole('');
  expect(await screen.findByRole('button', { name: /pay/i })).toBeEnabled();

});