// src/UserList.test.js
import { render, screen, waitFor } from '@testing-library/react';
import UserList from '../UserList';

test('loads and displays users', async () => {
  render(<UserList />);

  await waitFor(() => {
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByText(/Leanne Graham/i)).toBeInTheDocument();
  });
});
