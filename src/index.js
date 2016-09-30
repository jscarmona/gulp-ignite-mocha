import gulp from 'gulp';
import mocha from 'gulp-mocha';
import { IGNITE_UTILS } from 'gulp-ignite/utils';

export default {
  /**
   * Task name
   * @type {String}
   */
  name: 'mocha',

  /**
   * Task description
   * @type {String}
   */
  description: 'Run mocha tests',

  /**
   * Task default configuration
   * @type {Object}
   */
  config: {
    src: ['./client/app/**/*.spec.js'],
    options: {},
  },

  /**
   * Task help options
   * @type {Object}
   */
  help: {},

  /**
   * Task function
   * @param {object} config
   * @param {Function} end
   * @param {Function} error
   */
  fn(config, end, error) {
    return gulp.src(config.src, { read: false })
      .pipe(mocha(config.options))
      .on('error', () => error(null, false))
      .on('end', () => IGNITE_UTILS.notify('Mocha Complete'));
  },
};
