import { Fragment } from 'react';
import Table from './components/Table';
import data from './data/data.json';
import { RootEntity, CategoryEntity } from './types';
import './App.css';

function App() {
  const { Category, Item }: RootEntity = data;

  // sort data to display in order
  const tableStructure: CategoryEntity[] = Category.sort(
    (a, b) => a.DisplayOrder - b.DisplayOrder
  );

  return (
    <>
      {tableStructure.map((headers: CategoryEntity) => {
        return (
          <Fragment key={headers.CategoryID}>
            <Table headers={headers} data={Item} />
          </Fragment>
        );
      })}
    </>
  );
}

export default App;
