/**
 * Module dependencies.
 */
var Strategy = require('./strategy');


/**
 * Module version.
 */
// NOTE: Removed in CRA's fork of passport-totp because pkginfo did not work with esbuild
// require('pkginfo')(module, 'version');

/**
 * Expose constructors.
 */
exports.Strategy = Strategy;
