# Changelog
All notable changes to this project will be documented in this file.

---

## [v0.1.30](https://github.com/Bejibun-Framework/bejibun-utils/compare/v0.1.29...v0.1.30) - 2026-08-25

### 🩹 Fixes
#### `isEmpty()`
Replaced `Bun.stringWidth()` with a simple `trim() === ""` check for string emptiness. The previous implementation measured terminal display width on every call, which is far more expensive than a length check.

#### `isCommandExists()`
Added a `Map` cache so each command is only spawned once. Previously the function spawned `which`/`where` on every call despite claiming results were cached.

#### `StrBuilder.startsWith()` / `endsWith()` / `contains()`
These query methods no longer overwrite `this.value` with `"true"` or `"false"`. Previously, chaining like `str.startsWith("h").toUpper()` would produce `"TRUE"` instead of the original string uppercased.

#### `ArrBuilder.only()` / `except()`
Converted the key lookup from `Array.includes()` to `Set.has()`, reducing complexity from O(n·m) to O(n+m).

#### `ObjectBuilder.parseFormData()`
Fixed data loss for repeated non-bracket form fields (e.g. `tags=a&tags=b`). Previously only the first value was kept; now a third occurrence correctly converts the string to an array.

### 📖 Changes
#### `index.ts`
Added deep-import documentation to the barrel file, listing all available deep import paths for smaller bundles and faster cold starts.

#### JSDoc
Added JSDoc comments to all protected properties, type/interface properties, and enums across all source files.

#### Tests
Recreated the full test suite (119 tests across 6 files): `utils.test.ts`, `arr.test.ts`, `str.test.ts`, `enum.test.ts`, `object.test.ts`, `luxon.test.ts`.

### 📦 Dependencies

- Bumped [`@bejibun/logger`](https://github.com/Bejibun-Framework/bejibun-logger) from `^0.1.22` to `^0.2.1`
- Bumped `eslint` from `^10.8.1` to `^10.9.1`
- Bumped `typescript-eslint` from `^8.67.0` to `^8.68.0`

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.29](https://github.com/Bejibun-Framework/bejibun-utils/compare/v0.1.28...v0.1.29) - 2026-08-20

### 🩹 Fixes
#### `ObjectBuilder.parseFormData()`
Removed the manual per-field type conversion that ran while walking `FormData` entries -- it duplicated (and partially conflicted with) the coercion already done by `normalize()`, including a no-op `Number.isNaN(value)` check that never actually converted numeric strings.

### 📖 Changes
#### `ObjectBuilder.parseFormData(raw?: boolean)` / `Object.parseFormData(value, raw?: boolean)`
Added an optional `raw` parameter (default `false`) to skip the final `normalize()` pass and return the parsed structure with its original string values.

**Example:**
```ts
import Object from "@bejibun/utils/facades/Object";
 
Object.parseFormData(formData); // normalized: numbers, booleans, nulls, dates coerced
Object.parseFormData(formData, true); // raw: values kept as submitted
```

#### Tooling
- Added `prettier` + `.prettierrc.json` / `.prettierignore` and an `eslint.config.js` (flat config, `typescript-eslint`) for consistent formatting/linting across `src`
- Added `bun run format`, `bun run eslint`, and `bun run lint` scripts; `bun run build` now runs `lint` before compiling
- `alias` script now runs `tsc-alias` directly instead of via `bunx`

### 📦 Dependencies

- Bumped `@types/luxon` from `^3.7.1` to `^3.7.4`
- Bumped `tsc-alias` (devDependency) from `^1.8.16` to `^1.9.2`
- Added `@eslint/js` (devDependency) `^10.0.1`
- Added `eslint` (devDependency) `^10.8.1`
- Added `eslint-config-prettier` (devDependency) `^10.1.8`
- Added `globals` (devDependency) `^17.11.0`
- Added `prettier` (devDependency) `^3.9.6`
- Added `typescript` (devDependency) `^6.0.3`
- Added `typescript-eslint` (devDependency) `^8.67.0`

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.28](https://github.com/Bejibun-Framework/bejibun-utils/compare/v0.1.27...v0.1.28) - 2025-12-14

### 🩹 Fixes

### 📖 Changes
What's New :
#### Enum
- Rename `getName()` to `getKey()`
- `hasValue()` Checks if the enum contains the specified value.
- `hasKey()` Checks if the enum contains the specified key.

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.27](https://github.com/Bejibun-Framework/bejibun-utils/compare/v0.1.25...v0.1.27) - 2025-12-10

### 🩹 Fixes

### 📖 Changes
What's New :
- `Str.ipToFileName()` Convert IP to correct filename.

### ❤️Contributors
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.25](https://github.com/Bejibun-Framework/bejibun-utils/compare/v0.1.24...v0.1.25) - 2025-12-09

### 🩹 Fixes

### 📖 Changes
What's New :
- `Object.serialize(value: any)` Convert object values into actual value, e.g. `{name: ""}` into `{name: null}`.
- `Object.parseFormData(value: any)` Convert form data to object and serialized.

### ❤️Contributors
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.24](https://github.com/Bejibun-Framework/bejibun-utils/compare/v0.1.23...v0.1.24) - 2025-12-07

### 🩹 Fixes
- Empty validation for class - [#2](https://github.com/Bejibun-Framework/bejibun-utils/issues/2)
  
Previously `isEmpty` was not working for variable instanceof class, it was give wrong returns.

### 📖 Changes

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.23](https://github.com/Bejibun-Framework/bejibun-utils/compare/v0.1.22...v0.1.23) - 2025-12-03

### 🩹 Fixes
- Empty validation for file - [#1](https://github.com/Bejibun-Framework/bejibun-utils/issues/1)

### 📖 Changes

### ❤️Contributors
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.22](https://github.com/Bejibun-Framework/bejibun-utils/compare/v0.1.21...v0.1.22) - 2025-11-29

### 🩹 Fixes

### 📖 Changes
What's New :
- `Str.random(size?: number)` Generate random string.

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.21](https://github.com/Bejibun-Framework/bejibun-utils/compare/v0.1.18...v0.1.21) - 2025-11-14

### 🩹 Fixes

### 📖 Changes
What's New :
- `isModuleExists(module: string)` Check if module installed

### ❤️Contributors
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.18](https://github.com/Bejibun-Framework/bejibun-utils/compare/v0.1.17...v0.1.18) - 2025-10-27

### 🩹 Fixes

### 📖 Changes
Breaking Changes :
- Restructure and separating class

```ts
// v0.1.17
Luxon.datetime;
Luxon.duration;
Luxon.interval;

// v0.1.18
Luxon.DateTime;
Luxon.Duration;
Luxon.Interval;
```

Please upgrade to this version carefully.

### ❤️Contributors
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.17](https://github.com/Bejibun-Framework/bejibun-utils/compare/v0.1.16-rc1...v0.1.17) - 2025-10-23

### 🩹 Fixes
- Fix `isEmpty` check NaN

### 📖 Changes

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.16-rc1](https://github.com/Bejibun-Framework/bejibun-utils/compare/v0.1.15...v0.1.16-rc1) - 2025-10-23

### 🩹 Fixes

### 📖 Changes
What's New :
- Extend date time to luxon

### ❤️Contributors
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.15](https://github.com/Bejibun-Framework/bejibun-utils/compare/v0.1.14...v0.1.15) - 2025-10-23

### 🩹 Fixes

### 📖 Changes
What's New :
- Adding `isCommandExists(command: string)`

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.14](https://github.com/Bejibun-Framework/bejibun-utils/compare/v0.1.13...v0.1.14) - 2025-10-20

### 🩹 Fixes

### 📖 Changes
Chore :
- Refactor some codes to bun native

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.13](https://github.com/Bejibun-Framework/bejibun-utils/compare/v0.1.0...v0.1.13) - 2025-10-19

### 🩹 Fixes

### 📖 Changes
What's New :
- Adding `Str.toLowerCase()` & `Str.toUpperCase()`

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.0](https://github.com/Bejibun-Framework/bejibun-utils/compare/v0.1.0...v0.1.0) - 2025-10-16

### 🩹 Fixes

### 📖 Changes
What's New :
- Utils helper

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-utils/blob/master/CHANGELOG.md