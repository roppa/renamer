const test = require('tape').test;
const formatTitle = require('../utils/format-title');

test('Format title function', assert => {
  assert.equals(formatTitle('TEST'), 'test', 'should return lower case');
  assert.equals(formatTitle(' '), '-', 'should replace a space with a hyphen');
  assert.equals(formatTitle(' t e s t '), '-t-e-s-t-', 'should replace a space with a hyphen');
  assert.equals(formatTitle('      '), '-', 'should replace multiple spaces with a hyphen');
  assert.equals(formatTitle('**'), '-',
    'should replace non-alphamumeric space with a single hyphen');
  assert.equals(formatTitle('ABCD Example Title 2017 04 04'), 'abcd-example-title-2017-04-04',
    'should format a complete title');
  assert.end();
});
