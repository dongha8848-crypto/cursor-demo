import { getValidEmails } from './email.js';
import { uniqueEmails } from './uniqueEmails.js';

console.log('hello cursor');

const users = [
  { email: 'alice@example.com' },
  { email: 'not-an-email' },
  { email: 'bob@test.org' },
  { email: 'ALICE@example.com' },
];

console.log(uniqueEmails(getValidEmails(users)));
