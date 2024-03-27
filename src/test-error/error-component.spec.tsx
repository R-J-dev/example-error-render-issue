import { render } from '@testing-library/react';
import { ErrorComponent } from './error-component';

it('should throw', () => {
  expect(() => render(<ErrorComponent />)).toThrow('test error in component');
});
