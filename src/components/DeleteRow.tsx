import { FC } from 'react';

interface DeleteRowProps {
  handleDeleteRow: (id: number) => void;
  rowId: number;
}

const DeleteRow: FC<DeleteRowProps> = ({ handleDeleteRow, rowId }) => {
  const deleteRow = () => {
    handleDeleteRow(rowId);
  };

  return (
    <button
      type='button'
      onClick={deleteRow}
      data-testid={`delete-button-${rowId}`}
    >
      Delete Row
    </button>
  );
};

export default DeleteRow;
