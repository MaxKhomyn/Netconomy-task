import React from 'react'

export const ToggleColumns = (props) => {
  const { onCheckboxClick, columns} = props;

  return (
    <div className="toggle-columns">
      {
        Object.keys(columns).map((key, index) => {
          const column = columns[key];

          return ( 
            <div key={index}>
              <label htmlFor={key}>
                {column.name}
              </label>

              {
                column.notChange ?? 
                <input
                  id={key}
                  name={key}
                  checked={column.isVisible}
                  type="checkbox"
                  onChange={() => onCheckboxClick(key, !column.isVisible)}
                />
              }
              </div>
          )
        })
      }
    </div>
  );
}
