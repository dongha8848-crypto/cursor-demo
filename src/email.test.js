import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractEmails, isValidEmail, getValidEmails } from './email.js';

test('extractEmails extracts email fields from users', () => {
  const users = [{ email: 'a@b.com' }, { email: 'c@d.com' }];
  assert.deepEqual(extractEmails(users), ['a@b.com', 'c@d.com']);
});

test('extractEmails returns empty array for non-array input', () => {
  assert.deepEqual(extractEmails(null), []);
  assert.deepEqual(extractEmails(undefined), []);
});

test('isValidEmail validates email format (RFC 5322)', () => {
  assert.equal(isValidEmail('a@b.com'), true);
  assert.equal(isValidEmail('user@example.org'), true);
  assert.equal(isValidEmail('user+tag@example.com'), true);
  assert.equal(isValidEmail('Alice@Example.COM'), true);
  assert.equal(isValidEmail('invalid'), false);
  assert.equal(isValidEmail('a@b'), false);
  assert.equal(isValidEmail(123), false);
  assert.equal(isValidEmail('a'.repeat(250) + '@b.com'), false);
});

test('getValidEmails returns only valid emails', () => {
  const users = [
    { email: 'a@b.com' },
    { email: 'invalid' },
    { email: 'c@d.org' },
    { email: '' },
    { email: 'x@y.co' },
  ];
  assert.deepEqual(getValidEmails(users), ['a@b.com', 'c@d.org', 'x@y.co']);
});
