import { FC } from 'react';

interface AddRowProps {
  handleInsertRow: () => void;
}

const AddRow: FC<AddRowProps> = ({ handleInsertRow }) => {
  const insertRow = () => {
    handleInsertRow();
  };

  return (
    <tr>
      <td colSpan={0}>
        <button type='button' onClick={insertRow} data-testid='add-button'>
          Add Row
        </button>
      </td>
    </tr>
  );
};

export default AddRow;
