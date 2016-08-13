import gulp from 'gulp';
import mocha from 'gulp-mocha';
import yargs from 'yargs';

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
    src: ['./client/app/*.spec.js'],
    watchFiles: ['./client/app/*.js'],
    options: {},
  },

  /**
   * Task help options
   * @type {Object}
   */
  help: {
    watch: 'Watch test files for changes. (Default: false)',
  },

  /**
   * Task function
   * @param {object} config
   * @param {Function} end
   * @param {Function} error
   */
  fn(config, end, error) {
    const runTests = () => (
      gulp.src(config.src, { read: false })
        .pipe(mocha(config.options))
        .on('error', () => {
          error(null, false);
        })
    );

    if (yargs.argv.w || yargs.argv.watch) {
      gulp.watch(config.watchFiles, runTests);
    }

    return runTests();
  },
};
