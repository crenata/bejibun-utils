<div align="center">

<img src="https://github.com/Bejibun-Framework/bejibun/blob/master/public/images/bejibun.png?raw=true" width="150" alt="Bejibun" />

![GitHub top language](https://img.shields.io/github/languages/top/Bejibun-Framework/bejibun-utils)
![NPM Downloads](https://img.shields.io/npm/d18m/%40bejibun%2Futils)
![GitHub issues](https://img.shields.io/github/issues/Bejibun-Framework/bejibun-utils)
![GitHub](https://img.shields.io/github/license/Bejibun-Framework/bejibun-utils)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/Bejibun-Framework/bejibun-utils?display_name=tag&include_prereleases)

</div>

# Utils of Bejibun
Any utils for Bejibun Framework.

## Usage

### Installation
Install the package.

```bash
# Using Bun
bun add @bejibun/utils

# Using Bejibun
bun ace install @bejibun/utils
```

### Deep Imports
For smaller bundles and faster cold starts, prefer deep imports instead of the root barrel:

```ts
import Arr from "@bejibun/utils/facades/Arr";
import Str from "@bejibun/utils/facades/Str";
import Object from "@bejibun/utils/facades/Object";
import Enum from "@bejibun/utils/facades/Enum";
import Luxon from "@bejibun/utils/facades/Luxon";
import {isEmpty, isNotEmpty, defineValue} from "@bejibun/utils/utils";
```

### Available Helpers

#### Utilities
- `isEmpty(value)` Check if variable is empty
- `isNotEmpty(value)` Check if variable is not empty
- `defineValue(value, defaultValue)` Return value if not empty, otherwise default
- `ask(question)` Prompt user for input on stdin
- `isCommandExists(command)` Check if command is available on PATH (cached)
- `isModuleExists(module)` Check if Node module can be resolved

#### Enum
- `Enum.setEnums(enums)` Create a builder for the given enum

The builder exposes:
- `.getKey(value)` Get key by value
- `.getValue(key)` Get value by key
- `.hasKey(key)` Check if the enum contains the specified key
- `.hasValue(value)` Check if the enum contains the specified value

#### Str
- `Str.toLowerCase(value)` Convert string to lowercase
- `Str.toUpperCase(value)` Convert string to uppercase
- `Str.toPascalCase(value)` Convert string to PascalCase
- `Str.toSnakeCase(value, delimiter?)` Convert string to snake_case (default delimiter `_`)
- `Str.toCamelCase(value)` Convert string to camelCase
- `Str.startsWith(value, needles)` Check if string starts with any needle
- `Str.endsWith(value, needles)` Check if string ends with any needle
- `Str.contains(value, needles)` Check if string contains any needle
- `Str.random(size?)` Generate random alphanumeric string (default length 32)
- `Str.ipToFileName(value)` Convert IP/address to filesystem-safe filename

All `Str` methods accept an optional `combine` flag to return the builder for chaining:
```ts
Str.toUpperCase("hello", true).toSnakeCase(); // "HELLO" → "hello"
```

#### Arr
- `Arr.first(array)` Get first element
- `Arr.last(array)` Get last element
- `Arr.only(array, keys)` Get elements at specified indices
- `Arr.except(array, keys)` Get elements excluding specified indices
- `Arr.pluck(array, key)` Extract a property from each element

#### Object
- `Object.serialize(value)` Normalize values (empty strings → null, numeric strings → numbers, etc.)
- `Object.parseFormData(formData, raw?)` Parse FormData into nested object. Pass `raw: true` to skip normalization.
- `Object.only(object, keys)` Get only the specified keys
- `Object.except(object, keys)` Get all keys except the specified ones
- `Object.first(object)` Get the first property value
- `Object.last(object)` Get the last property value

#### Luxon
- `Luxon.DateTime` Luxon DateTime class
- `Luxon.Duration` Luxon Duration class
- `Luxon.Interval` Luxon Interval class

## ☕ Support / Donate

If you find this project helpful and want to support it:

[![Donate](https://img.shields.io/badge/Donate-Support%20Me-orange?style=for-the-badge)](https://donate.bejibun.com)

Or you can buy this `$BJBN (Bejibun)` tokens [here](https://pump.fun/coin/CQhbNnCGKfDaKXt8uE61i5DrBYJV7NPsCDD9vQgypump).