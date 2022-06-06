import React from 'react'

export const FilterForm = (props) => {
  const { price, onPriceInputChange } = props;

  return (
    <div>
      <label htmlFor="priceFrom">Price From:</label>
      <input
        value={price.from}
        onChange={(e) => onPriceInputChange('from', e.target.value)}
        type="number"
        id="priceFrom"
        name="priceFrom"
        placeholder="Price from..." />

      <label htmlFor="priceTo">Price To:</label>
      <input
        value={price.to}
        onChange={(e) => onPriceInputChange('to', e.target.value)}
        type="number"
        id="priceTo"
        name="priceTo"
        placeholder="Price to..." />
    </div>
  )
}
