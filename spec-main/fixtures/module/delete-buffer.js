const path = require('path');
const { remote } = require('electron');
const { Buffer } = window;

delete window.Buffer;
delete global.Buffer;

// Test that remote.js doesn't use Buffer global
if (remote) {
  remote.require(path.join(__dirname, 'print_name.js')).echo(Buffer.from('bar'));
}

window.test = Buffer.from('buffer');
