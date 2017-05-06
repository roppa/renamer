const test = require('tape').test;
const fs = require('fs');
const mockFs = require('mock-fs');
const rename = require('../utils/rename');

const renameFiles = ['a-renamed', 'b-renamed', 'c-renamed', 'd-renamed'];
const renamedArray = ['a-renamed.pdf', 'b-renamed.pdf', 'c-renamed.pdf', 'd-renamed.pdf'];

test('Build', t => {
  mockFs({
    fake: {
      'a.pdf': 'a',
      'b.pdf': 'b',
      'c.pdf': 'c',
      'd.pdf': 'd',
    },
  });
  t.end();
});

test('Rename function', (assert) => {
  assert.plan(5);

  rename('fake', [])
    .catch(error => {
      assert.equal(typeof error === 'object', true, 'should reject with no params');
    });

  rename('uknown', renameFiles)
    .catch(error => {
      assert.equal(typeof error === 'object', true, 'should reject when error reading directory');
    });

  rename('fake', renameFiles)
    .then(result => {
      assert.equal(Array.isArray(result), true, 'should return an array');
      assert.deepEqual(result, renamedArray, 'should return list of renamed files');
      fs.readdir('fake', (error, files) => {
        if (error) {
          return assert.end(error);
        }

        assert.deepEqual(files, renamedArray, 'should rename files');
      });
    });
});

test('Teardown', t => {
  mockFs.restore();
  t.end();
});
