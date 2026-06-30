/**
 * 이메일 배열에서 중복을 제거한다. 대소문자는 무시하고 첫 등장 순서를 유지한다.
 * @param {string[]} emails - 이메일 문자열 배열
 * @returns {string[]} 중복이 제거된 이메일 배열
 */
export function uniqueEmails(emails) {
  if (!Array.isArray(emails)) {
    return [];
  }

  const seen = new Set();
  const result = [];

  for (const email of emails) {
    if (typeof email !== 'string') continue;

    const trimmed = email.trim();
    const key = trimmed.toLowerCase();

    if (key.length === 0 || seen.has(key)) continue;

    seen.add(key);
    result.push(trimmed);
  }

  return result;
}
