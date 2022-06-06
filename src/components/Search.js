import React, { useState } from 'react'

import '../styles/Search.css';
import { ToggleColumns } from './ToggleColumns';
import { ProductList } from './ProductList';
import { FilterForm } from './FilterForm';

export const Search = (props) => {
  const { products } = props;

  const [price, setPrice] = useState({ from: '', to: '' });

  const [columns, setColumns] = useState({
    id: { isVisible: true, name: 'ID' },
    name: { name: 'Name', notChange: true },
    department: { isVisible: true, name: 'Department' },
    price: { isVisible: true, name: 'Price' },
    currency: { isVisible: true, name: 'Currency' },
  });

  const onPriceInputChange = (name, value) => {
    price[name] = Number(value);

    setPrice(price => ({...price}));
  }

  const onCheckboxClick = (name, checked) => {
    columns[name].isVisible = checked;
    setColumns(columns => ({...columns}));
  }

  const hasFrom = price.from > 0;
  const hasTo = price.to > 0;

  const showAll = price.from === '' && price.to === '';
  const showNone = (hasTo && price.from > price.to) || (price.from === 0 && price.to === 0);

  const filteringPredicate = (i) =>
    (hasFrom ? i.price >= price.from : true) &&
    (hasTo ? i.price <= price.to : true);

  const displayedProducts = showAll ? products : showNone ? [] : products.filter(filteringPredicate);

  return (
    <div className="Products">
      <FilterForm
        price={price}
        onPriceInputChange={onPriceInputChange} />

      <ToggleColumns
        onCheckboxClick={onCheckboxClick}
        columns={columns} />

      <ProductList
        products={displayedProducts}
        columns={Object.entries(columns).filter(column => column[1].isVisible || column[1].notChange)} />
    </div>
  );
}

export default Search;
