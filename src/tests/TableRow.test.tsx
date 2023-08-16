import { describe, expect } from 'vitest';
import { render } from '@testing-library/react';
import TableRow from '../components/TableRow';

const mockData = {
  CategoryID: 1327,
  ItemID: 7363,
  Name: 'Category 1 Menu 3',
  InputID: 7,
  ColumnWiseDisplayOrder: 1,
  DropDownID: null,
  IsActive: true,
  IsHeader: 'N',
  RowWiseDisplayOrder: 4,
  Value: null,
  ListNo: null,
  RestaurentID: 1051,
  IsCollection: false,
  ADO: 1,
  IsRedundant: null,
};

describe('TableRow component', () => {
  test('renders the "Delete Row" button if isCollection is true', () => {
    const { getByTestId } = render(
      <TableRow isCollection={true} rowData={[mockData]} key={''} />
    );

    const button = getByTestId('delete-button');

    expect(button).toBeVisible();
  });

  test('does not render the "Delete Row" button if isCollection is false', () => {
    const { queryByTestId } = render(
      <TableRow isCollection={false} rowData={[mockData]} key={''} />
    );

    const button = queryByTestId('delete-button');
    expect(button).toBeNull();
  });
});
