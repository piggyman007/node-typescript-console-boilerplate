import { expect } from 'chai';
import { greet } from './index';

describe('test index.ts', () => {
  it('Should greet success', () => {
    const message = greet('david');
    expect(message).eql('Hi david');
  });
});
