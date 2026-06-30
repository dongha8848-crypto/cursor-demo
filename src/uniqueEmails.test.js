import { test } from 'node:test';
import assert from 'node:assert/strict';
import { uniqueEmails } from './uniqueEmails.js';

test('uniqueEmails removes duplicate emails case-insensitively', () => {
  const emails = [
    'alice@example.com',
    'bob@test.org',
    'ALICE@example.com',
    'bob@test.org',
  ];
  assert.deepEqual(uniqueEmails(emails), [
    'alice@example.com',
    'bob@test.org',
  ]);
});

test('uniqueEmails returns empty array for non-array input', () => {
  assert.deepEqual(uniqueEmails(null), []);
  assert.deepEqual(uniqueEmails(undefined), []);
});

test('uniqueEmails skips non-string and blank values', () => {
  assert.deepEqual(uniqueEmails(['a@b.com', '', '  ', 123, 'a@b.com']), [
    'a@b.com',
  ]);
});
