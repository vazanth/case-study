import { describe, expect } from 'vitest';
import { render } from '@testing-library/react';
import Table from '../components/Table';

describe('Table component', () => {
  test('renders the "Add Row" button if headers.IsCollection is true', () => {
    const headers = {
      CategoryID: 1394,
      CategoryName: 'Category 5',
      IsCollection: true,
      DisplayOrder: 5,
      CategoryIsActive: true,
    };

    const { getByRole } = render(<Table headers={headers} data={[]} />);

    const button = getByRole('button', { name: 'Add Row' });

    expect(button).toBeInTheDocument();
  });

  test('does not render the "Add Row" button if headers.IsCollection is false', () => {
    const headers = {
      CategoryID: 1394,
      CategoryName: 'Category 5',
      IsCollection: false,
      DisplayOrder: 5,
      CategoryIsActive: false,
    };

    const { queryByRole } = render(<Table headers={headers} data={[]} />);

    const button = queryByRole('button', { name: /add row/i });
    expect(button).toBeNull();
  });
});
