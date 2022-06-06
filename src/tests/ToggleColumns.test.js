import React from 'react';
import { fireEvent, render } from '@testing-library/react'

import { ToggleColumns } from '../components/ToggleColumns';
import { MOCK_COLUMNS_ALL_BUT_ID } from './mocks';

describe('verify_pack.ToggleColumn', () => {
  
  const columns = MOCK_COLUMNS_ALL_BUT_ID
  const displayNameColumn = 'Name'
  const column = 'name'

  it(`should invoke the onCheckboxClick callback after "name" checkbox was clicked`, () => {
    // given
    const spy = jest.fn();
    const { getByLabelText } = render(<ToggleColumns
      columns={columns}
      onCheckboxClick={spy}
    />);

    // when
    const checkbox = getByLabelText(displayNameColumn)
    fireEvent.click(checkbox, { target: { name: displayNameColumn }})

    // then
    expect(spy).toHaveBeenCalledWith(column, !columns[column].isVisible);
  });

  const columnShouldBeChecked = (columns, columnName) => columns[columnName].isVisible

  it('should display (un)checked column checkboxes after initial render', () => {
    for (const column in columns) {
      // given
      const { getByLabelText } = render(<ToggleColumns
        columns={columns}
        onCheckboxClick={() => {}}
      />);

      // then
      const checkbox = getByLabelText(columns[column].name);

      if (columnShouldBeChecked(columns, column)){
        expect(checkbox).toBeChecked();
      } else {
        expect(checkbox).not.toBeChecked();
      }
    }
  });
});
