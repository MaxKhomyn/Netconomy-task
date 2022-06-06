import React from 'react';
import { render, fireEvent } from '@testing-library/react'

import { FilterForm } from '../../src/components/FilterForm'

describe('FilterForm component', () => {
  it('should invoke the onPriceInputChange callback after "price from" input value changed', () => {
    // given
    const onPriceInputChange = jest.fn();
    const { getByLabelText } = render(<FilterForm
      price={{from: -1, to: -1}}
      onPriceInputChange={onPriceInputChange}
    />);

    // when
    fireEvent.change(getByLabelText('Price From:'), { target: {
      name: 'from',
      value: 123
    }});

    // then
    expect(onPriceInputChange).toHaveBeenCalledWith('from', "123");
  });

  it('should invoke the onPriceInputChange callback after "price to" input value changed', () => {
    // given
    const onPriceInputChange = jest.fn();
    const { getByLabelText } = render(<FilterForm
      price={{from: -1, to: -1}}
      onPriceInputChange={onPriceInputChange}
    />);

    // when
    fireEvent.change(getByLabelText('Price To:'), { target: {
      name: 'to',
      value: 456
    }});

    // then
    expect(onPriceInputChange).toHaveBeenCalledWith('to', "456");
  });

  it('should display the "price from" in input according to passed props', () => {
    // given
    const { getByLabelText } = render(<FilterForm price={{from: 123, to: -1}}/>);
    const input = getByLabelText('Price From:')

    // then
    expect(Number(input.value)).toBe(123);
  });

  it('should display the "price to" in input according to passed props', () => {
    // given
    const { getByLabelText } = render(<FilterForm price={{from: -1, to: 456}}/>);
    const input = getByLabelText('Price To:')

    // then
    expect(Number(input.value)).toBe(456);
  });
});
