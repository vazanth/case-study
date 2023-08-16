import { describe, expect } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react';
import DeleteRow from '../components/DeleteRow';
import TableRow from '../components/TableRow';

describe('DeleteRow component', () => {
  test('should call the function when the delete button is clicked', () => {
    const handleDeleteRow = vi.fn();
    const { getByTestId } = render(
      <DeleteRow handleDeleteRow={handleDeleteRow} rowId={2} /> // mocking with harcoded Id to see it's getting triggered
    );
    const deleteButton = getByTestId('delete-button-2'); // same id is used here as well

    fireEvent.click(deleteButton);

    expect(handleDeleteRow).toHaveBeenCalled();
  });

  test('Deletes a row based on RowWiseDisplayOrder', async () => {
    const mockData = [
      {
        CategoryID: 1424,
        ItemID: 7292,
        Name: 'Cooking hrs',
        InputID: 7,
        ColumnWiseDisplayOrder: 3,
        DropDownID: null,
        IsActive: true,
        IsHeader: 'Y',
        RowWiseDisplayOrder: 1,
        Value: null,
        ListNo: null,
        CategoryName: 'Availability Losses - Unplanned Job (Breakdown)',
        RestaurentID: 1051,
        IsCollection: true,
        ADO: 10,
        IsRedundant: null,
      },
      {
        CategoryID: 1424,
        ItemID: 6269,
        Name: 'Cooking Hrs - 1',
        InputID: 4,
        ColumnWiseDisplayOrder: 3,
        DropDownID: null,
        IsActive: true,
        IsHeader: 'N',
        RowWiseDisplayOrder: 14,
        Value: null,
        ListNo: 13,
        CategoryName: 'Availability Losses - Unplanned Job (Breakdown)',
        RestaurentID: 1051,
        IsCollection: true,
        ADO: 10,
        IsRedundant: null,
      },
      {
        CategoryID: 1424,
        ItemID: 7298,
        Name: 'Non Cooking Hrs',
        InputID: 7,
        ColumnWiseDisplayOrder: 4,
        DropDownID: null,
        IsActive: true,
        IsHeader: 'Y',
        RowWiseDisplayOrder: 1,
        Value: null,
        ListNo: null,
        CategoryName: 'Availability Losses - Unplanned Job (Breakdown)',
        RestaurentID: 1051,
        IsCollection: true,
        ADO: 10,
        IsRedundant: null,
      },
    ];

    const handleDeleteRow = vi.fn();

    const { queryByText } = render(
      <>
        <TableRow isCollection={true} rowData={mockData} key={''} />
      </>
    );

    const { getByTestId } = render(
      <DeleteRow handleDeleteRow={handleDeleteRow} rowId={14} />
    );

    await waitFor(() =>
      expect(queryByText('Cooking Hrs - 1')).toBeInTheDocument()
    );

    const deleteButton = getByTestId('delete-button-14');

    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(handleDeleteRow).toHaveBeenCalledWith(14);
    });
  });
});
