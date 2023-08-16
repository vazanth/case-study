import { FC, useState, useEffect } from 'react';
import data from '../data/data.json';
import { ItemDataEntity, RootEntity } from '../types';

interface DropdownProps {
  dropDownId: number;
}

const Dropdown: FC<DropdownProps> = ({ dropDownId }) => {
  const [options, setOptions] = useState<ItemDataEntity[]>([]);
  const { ItemData }: RootEntity = data;

  useEffect(() => {
    const filteredItems = ItemData.filter(
      (item) => item.DropDownID === dropDownId
    );
    setOptions(filteredItems);
  }, [dropDownId, ItemData]);

  return (
    <select name='status'>
      {options.map((option: ItemDataEntity, index: number) => {
        return (
          <option
            key={`${option.ListItemName}-${index}`}
            value={option.ListItemName}
          >
            {option.ListItemName}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
