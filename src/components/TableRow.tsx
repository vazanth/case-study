/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, Fragment, useEffect, useState } from 'react';
import Dropdown from './DropDown';
import InputBox from './InputBox';
import Label from './Label';
import DeleteRow from './DeleteRow';
import { ItemEntity } from '../types';

interface TableRowProps {
  rowData: ItemEntity[];
  isCollection: boolean;
}

interface ComponentsType {
  [key: number]: (props: any) => JSX.Element;
}

const Components: ComponentsType = Object.freeze({
  1: (props: any) => <InputBox {...props} />,
  2: (props: any) => <InputBox {...props} />,
  3: (props: any) => <Dropdown {...props} />,
  4: (props: any) => <Label {...props} />,
  5: (props: any) => <Label {...props} />,
  7: (props: any) => <Label {...props} />,
});

const TableRow: FC<TableRowProps> = ({ rowData, isCollection }) => {
  const [tableData, setTableData] = useState<ItemEntity[]>([]);

  useEffect(() => {
    if (isCollection && rowData.length) {
      const copyItemEntity = structuredClone(rowData);
      const lastItem = copyItemEntity[copyItemEntity.length - 1];
      const ColumnWiseDisplayOrder = lastItem.ColumnWiseDisplayOrder + 1;
      const newItem = {
        ...lastItem,
        Name: '',
        ColumnWiseDisplayOrder,
      };
      setTableData([...rowData, newItem]);
    } else {
      setTableData(rowData);
    }
  }, [rowData, isCollection]);

  const handleDeleteRow = (rowId: number) => {
    setTableData((prevData) =>
      prevData.filter((item: ItemEntity) => item.RowWiseDisplayOrder !== rowId)
    );
  };

  return (
    <tr>
      {tableData.map((data: ItemEntity, index: number) => (
        <Fragment key={`${data.ItemID}-${data.Name}`}>
          {data.IsHeader === 'Y' ? (
            <th>{data.Name}</th>
          ) : (
            <>
              {isCollection && index === tableData.length - 1 ? (
                <>
                  <td data-testid='delete-button'>
                    <DeleteRow
                      handleDeleteRow={(rowId: number) =>
                        handleDeleteRow(rowId)
                      }
                      rowId={data.RowWiseDisplayOrder}
                    />
                  </td>
                </>
              ) : (
                <td>
                  {Components[data.InputID]({
                    label: data.Name,
                    dropDownId: data.DropDownID,
                    inputId: data.InputID,
                  })}
                </td>
              )}
            </>
          )}
        </Fragment>
      ))}
    </tr>
  );
};

export default TableRow;
