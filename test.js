import chai from 'chai';

const expect = chai.expect;

import createComponent from './index.js';

describe('createComponent', () => {
  it('Should be a function', () => {
    expect(createComponent).to.be.a('function');
  });
});
