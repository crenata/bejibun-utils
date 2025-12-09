# Changelog
All notable changes to this project will be documented in this file.

---

## [v0.1.25](https://github.com/crenata/bejibun-utils/compare/v0.1.24...v0.1.25) - 2025-12-09

### 🩹 Fixes

### 📖 Changes
What's New :
- `Object.serialize(value: any)` Convert object values into actual value, e.g. `{name: ""}` into `{name: null}`.
- `Object.parseFormData(value: any)` Convert form data to object and serialized.

### ❤️Contributors
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/crenata/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.24](https://github.com/crenata/bejibun-utils/compare/v0.1.23...v0.1.24) - 2025-12-07

### 🩹 Fixes
- Empty validation for class - [#2](https://github.com/crenata/bejibun-utils/issues/2)
  
Previously `isEmpty` was not working for variable instanceof class, it was give wrong returns.

### 📖 Changes

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))

**Full Changelog**: https://github.com/crenata/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.23](https://github.com/crenata/bejibun-utils/compare/v0.1.22...v0.1.23) - 2025-12-03

### 🩹 Fixes
- Empty validation for file - [#1](https://github.com/crenata/bejibun-utils/issues/1)

### 📖 Changes

### ❤️Contributors
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/crenata/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.22](https://github.com/crenata/bejibun-utils/compare/v0.1.21...v0.1.22) - 2025-11-29

### 🩹 Fixes

### 📖 Changes
What's New :
- `Str.random(size?: number)` Generate random string.

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))

**Full Changelog**: https://github.com/crenata/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.21](https://github.com/crenata/bejibun-utils/compare/v0.1.18...v0.1.21) - 2025-11-14

### 🩹 Fixes

### 📖 Changes
What's New :
- `isModuleExists(module: string)` Check if module installed

### ❤️Contributors
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/crenata/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.18](https://github.com/crenata/bejibun-utils/compare/v0.1.17...v0.1.18) - 2025-10-27

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

**Full Changelog**: https://github.com/crenata/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.17](https://github.com/crenata/bejibun-utils/compare/v0.1.16-rc1...v0.1.17) - 2025-10-23

### 🩹 Fixes
- Fix `isEmpty` check NaN

### 📖 Changes

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))

**Full Changelog**: https://github.com/crenata/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.16-rc1](https://github.com/crenata/bejibun-utils/compare/v0.1.15...v0.1.16-rc1) - 2025-10-23

### 🩹 Fixes

### 📖 Changes
What's New :
- Extend date time to luxon

### ❤️Contributors
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/crenata/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.15](https://github.com/crenata/bejibun-utils/compare/v0.1.14...v0.1.15) - 2025-10-23

### 🩹 Fixes

### 📖 Changes
What's New :
- Adding `isCommandExists(command: string)`

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/crenata/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.14](https://github.com/crenata/bejibun-utils/compare/v0.1.13...v0.1.14) - 2025-10-20

### 🩹 Fixes

### 📖 Changes
Chore :
- Refactor some codes to bun native

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/crenata/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.13](https://github.com/crenata/bejibun-utils/compare/v0.1.0...v0.1.13) - 2025-10-19

### 🩹 Fixes

### 📖 Changes
What's New :
- Adding `Str.toLowerCase()` & `Str.toUpperCase()`

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/crenata/bejibun-utils/blob/master/CHANGELOG.md

---

## [v0.1.0](https://github.com/crenata/bejibun-utils/compare/v0.1.0...v0.1.0) - 2025-10-16

### 🩹 Fixes

### 📖 Changes
What's New :
- Utils helper

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/crenata/bejibun-utils/blob/master/CHANGELOG.md