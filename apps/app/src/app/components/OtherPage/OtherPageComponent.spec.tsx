import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { OtherPageComponent } from './OtherPageComponent';
//hello

describe('OtherPageComponent', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(
        <OtherPageComponent />
    );

    expect(baseElement).toBeTruthy();
  });
});
