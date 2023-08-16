/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState, useEffect } from 'react';
import TableRow from './TableRow';
import { CategoryEntity, ItemEntity } from '../types';
import AddRow from './AddRow';

interface TableProps {
  headers: CategoryEntity;
  data: ItemEntity[];
}

const Table: FC<TableProps> = ({ headers, data }) => {
  const [tableItems, setTableItems] = useState<ItemEntity[][]>([]);

  useEffect(() => {
    const filterByCategoryId = data.filter(
      (item: ItemEntity) => headers.CategoryID === item.CategoryID
    );

    const groupByRowWiseDisplay = filterByCategoryId.reduce(
      (result: any, item) => {
        const rowIndex = item.RowWiseDisplayOrder - 1;
        if (!result[rowIndex]) {
          result[rowIndex] = [];
        }
        result[rowIndex].push(item);
        return result;
      },
      []
    );

    // remove empty values from grouped array as data is not continous
    const filteredData = groupByRowWiseDisplay.filter(
      (item: ItemEntity) => item !== null
    );

    setTableItems(filteredData);
  }, [data, headers]);

  const handleInsertRow = () => {
    const lastArray = tableItems[tableItems.length - 1];
    const newRowNumber =
      lastArray.length > 0 ? lastArray[0].RowWiseDisplayOrder + 1 : 1;
    const newRow = lastArray.map((item) => {
      return { ...item, RowWiseDisplayOrder: newRowNumber };
    });

    const newArray = [...tableItems, newRow];
    setTableItems(newArray);
  };

  return (
    <table className='table'>
      <thead>
        <tr>
          <th
            className='tableheading'
            colSpan={
              headers.IsCollection && tableItems[1]
                ? tableItems[1]?.length + 1
                : tableItems[1]?.length
            }
          >
            {headers.CategoryName}
          </th>
        </tr>
      </thead>
      <tbody>
        {tableItems.map((rowData, index) => (
          <TableRow
            key={`${rowData[index]?.Name}--${index}`}
            rowData={rowData}
            isCollection={headers.IsCollection}
          />
        ))}
      </tbody>
      {headers.IsCollection ? (
        <tfoot>
          <AddRow handleInsertRow={handleInsertRow} />
        </tfoot>
      ) : null}
    </table>
  );
};

export default Table;
