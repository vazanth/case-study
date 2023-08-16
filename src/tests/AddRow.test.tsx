/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import AddRow from '../components/AddRow';

describe('AddRow component', () => {
  test('should call the function when the add button is clicked', () => {
    const handleInsertRow = vi.fn();
    const { getByTestId } = render(
      <AddRow handleInsertRow={handleInsertRow} />
    );
    const addButton = getByTestId('add-button');

    fireEvent.click(addButton);

    expect(handleInsertRow).toHaveBeenCalled();
  });
});
