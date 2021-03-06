/* eslint no-unused-expressions: 0 */

import { expect } from 'chai';
import task from '../src';

describe('Task', () => {
  describe('#name', () => {
    it('should be a string', () => {
      expect(task.name).to.be.a('string');
    });

    it('should equal `mocha`', () => {
      expect(task.name).to.equal('mocha');
    });
  });

  describe('#description', () => {
    it('should be a string', () => {
      expect(task.name).to.be.a('string');
    });
  });

  describe('#config', () => {
    it('should be an object', () => {
      expect(task.config).to.be.a('object');
    });

    it('should equal the default config', () => {
      expect(task.config).to.eql({
        src: ['./client/app/**/*.spec.js'],
        options: {},
      });
    });
  });

  describe('#fn', () => {
    it('should be a function', () => {
      expect(task.fn).to.be.a('function');
    });
  });
});
