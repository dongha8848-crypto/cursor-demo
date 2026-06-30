# cursor-demo

RFC 5322 기반 이메일 검증·중복 제거 유틸리티 데모 프로젝트입니다.  
Cursor.AI를 활용해 설계·구현·테스트한 실습 저장소입니다.

- **버전:** 1.0.0
- **저장소:** https://github.com/dongha8848-crypto/cursor-demo

## 요구 사항

- Node.js v18.20.0 이상

## 빠른 시작

```bash
npm test
node src/index.js
```

예상 출력:

```
hello cursor
[ 'alice@example.com', 'bob@test.org' ]
```

## API

### `src/email.js`

| 함수 | 설명 |
|------|------|
| `extractEmails(users)` | 사용자 배열에서 `email` 필드 추출 |
| `isValidEmail(email)` | RFC 5322 형식 검증 (254자 SMTP 길이 제한 포함) |
| `getValidEmails(users)` | 유효한 이메일만 반환 |

### `src/uniqueEmails.js`

| 함수 | 설명 |
|------|------|
| `uniqueEmails(emails)` | 대소문자 무시 중복 제거, 첫 등장 순서 유지 |

## 프로젝트 구조

```
cursor-demo/
├── src/
│   ├── index.js           # 진입점
│   ├── email.js           # 이메일 추출·검증 모듈
│   ├── email.test.js
│   ├── uniqueEmails.js    # 중복 제거 유틸
│   └── uniqueEmails.test.js
├── .cursor/rules/         # Cursor 코딩 규칙
└── package.json
```

---

## 릴리스 노트

### v1.0.0

**RFC 5322 기반 이메일 검증·중복 제거 유틸과 테스트 스위트를 포함한 첫 정식 릴리스입니다.**

#### ✨ 기능

- **`src/email.js`** — 이메일 유틸 모듈
  - `extractEmails` — 사용자 배열에서 이메일 필드 추출
  - `isValidEmail` — RFC 5322 정규식 검증 + RFC 5321 254자 길이 제한
  - `getValidEmails` — 유효한 이메일만 반환
- **`src/uniqueEmails.js`** — 대소문자 무시 중복 제거 (`uniqueEmails`)
- **`src/index.js`** — `uniqueEmails(getValidEmails(users))` 파이프라인 연동

#### 🐛 버그 수정

- 해당 없음 (초기 릴리스)

#### 🧹 기타

- ESM(`"type": "module"`) 전환 및 `npm test` 스크립트 설정
- `node:test` 테스트 7개 추가 — 전부 통과
- `.cursor/rules/coding-style.mdc` 코딩 규칙 추가

#### 커밋 목록

- 프로젝트 초기 설정 추가 (`7f0b5c2`)
- 진입점 및 이메일 유틸 연동 (`7f58cec`)
- uniqueEmails 유틸 함수 추가 (`da589dc`)
- 코딩 스타일 규칙 추가 (`f92bade`)
- 이메일 모듈 테스트 추가 (`5b0b890`)
- uniqueEmails 테스트 추가 (`2d965a3`)
- RFC 5322 이메일 검증 모듈 추가 (`443311b`)

---

## 참고

- 이메일 정규식: [UI Bakery RFC 5322](https://uibakery.io/regex-library/email)
- SMTP 길이 제한: [TrueList — RFC 5321](https://truelist.io/blog/javascript-validate-email)
- 관련 이슈: [#1 Cursor.AI 활용 가이드](https://github.com/dongha8848-crypto/cursor-demo/issues/1)

## 라이선스

ISC
