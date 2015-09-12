var assert = require('assert')
var path = require('path')
var expectedNodeVersion = require('../')

var cwd

// From npm environment variable
process.env.npm_package_engines_node = '3.0.0'
assert.equal(expectedNodeVersion(), '3.0.0')

// Unset npm env var for further tests
delete process.env.npm_package_engines_node

// From .npmrc file
cwd = path.join(__dirname, './nvmrc')
assert.equal(expectedNodeVersion(cwd), '4.0.0')

// From package.json file
cwd = path.join(__dirname, './packageJsonEngines')
assert.equal(expectedNodeVersion(cwd), '>=0.10.0')

// Preferres .npmrc file
cwd = path.join(__dirname, './both')
assert.equal(expectedNodeVersion(cwd), '3.0.0', 'Loads the preferred configuration file')

