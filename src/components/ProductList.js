import React from 'react'

export const ProductList = (props) => {
  const { products, columns } = props;

  return (
    <div id="product-list">
      <header>
        <strong>Product List ({products.length} items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            {columns.map((column, columnIndex) =>
              <td key={columnIndex}>{column[1].name}</td>
            )}
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) =>
              <tr key={index}>
                  {columns.map((column, columnIndex) =>
                    <td key={columnIndex}>{product[column[0]]}</td>
                  )}
              </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}
