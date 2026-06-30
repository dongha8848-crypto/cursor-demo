// RFC 5322 compliant pattern (case-insensitive).
// Source: https://uibakery.io/regex-library/email — "RFC 5322 compliant regex"
const RFC_5322_EMAIL_RE =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\u0001-\u0008\u000b\u000c\u000e-\u001f\u0021\u0023-\u005b\u005d-\u007f]|\\[\u0001-\u0009\u000b\u000c\u000e-\u007f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\u0001-\u0008\u000b\u000c\u000e-\u001f\u0021-\u005a\u0053-\u007f]|\\[\u0001-\u0009\u000b\u000c\u000e-\u007f])+)\])/i;

// RFC 5321 SMTP path length limit.
// Source: https://truelist.io/blog/javascript-validate-email
const MAX_EMAIL_LENGTH = 254;

/**
 * 사용자 배열에서 이메일 필드만 추출한다.
 * @param {Array<{ email?: unknown }>} users - 사용자 객체 배열
 * @returns {unknown[]} 추출된 이메일 값 배열
 */
export function extractEmails(users) {
  if (!Array.isArray(users)) {
    return [];
  }
  return users.map((user) => user.email);
}

/**
 * 이메일 문자열이 RFC 5322 형식인지 검증한다.
 * @param {unknown} email - 검증할 값
 * @returns {boolean} 유효하면 true
 */
export function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  const trimmed = email.trim();
  if (trimmed.length === 0 || trimmed.length > MAX_EMAIL_LENGTH) return false;
  return RFC_5322_EMAIL_RE.test(trimmed);
}

/**
 * 사용자 배열에서 유효한 이메일만 추출한다.
 * @param {Array<{ email?: unknown }>} users - 사용자 객체 배열
 * @returns {string[]} 유효한 이메일 문자열 배열
 */
export function getValidEmails(users) {
  return extractEmails(users).filter(isValidEmail);
}
