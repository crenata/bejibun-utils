<div align="center">

<img src="https://github.com/crenata/bejibun/blob/master/public/images/bejibun.png?raw=true" width="150" alt="Bejibun" />

![GitHub top language](https://img.shields.io/github/languages/top/crenata/bejibun-utils)
![GitHub all releases](https://img.shields.io/github/downloads/crenata/bejibun-utils/total)
![GitHub issues](https://img.shields.io/github/issues/crenata/bejibun-utils)
![GitHub](https://img.shields.io/github/license/crenata/bejibun-utils)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/crenata/bejibun-utils?display_name=tag&include_prereleases)

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

### Available Helpers
List of available functions.
- `isEmpty()` Check if variable is empty
- `isNotEmpty()` Check if variable is not empty
- `defineValue()` Define value if empty use default value
- `ask()` Command prompt
- `isCommandExists()` Check if command available
- `isModuleExists()` Check if module installed
  
#### Enum
- `Enum.setEnums(enums).getKey()` Get key by value.
- `Enum.setEnums(enums).getValue()` Get value by key.
- `Enum.setEnums(enums).toArray()` Convert enums into an array.
- `Enum.setEnums(enums).hasValue()` Checks if the enum contains the specified value.
- `Enum.setEnums(enums).hasKey()` Checks if the enum contains the specified key.
  
#### Str
- `Str.toLowerCase()` Convert string to lower
- `Str.toPascalCase()` Convert string to pascal case
- `Str.toUpperCase()` Convert string to upper
- `Str.random()` Generate random string
- `Str.ipToFileName()` Convert IP to correct filename
  
#### Luxon
- `Luxon.datetime` -> DateTime
- `Luxon.duration` -> Duration
- `Luxon.interval` -> Interval
  
#### Object
- `Object.serialize()` Convert values into actual value
- `Object.parseFormData()` Convert form data into object and auto serialize

## Contributors
- [Havea Crenata](mailto:havea.crenata@gmail.com)

## ☕ Support / Donate

If you find this project helpful and want to support it, you can donate via crypto :

| EVM                                                                                                     | Solana                                                                                                  |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/crenata/bejibun/blob/master/public/images/EVM.png?raw=true" width="150" /> | <img src="https://github.com/crenata/bejibun/blob/master/public/images/SOL.png?raw=true" width="150" /> |
| 0xdABe8750061410D35cE52EB2a418c8cB004788B3                                                              | GAnoyvy9p3QFyxikWDh9hA3fmSk2uiPLNWyQ579cckMn                                                            |

Or you can buy this `$BJBN (Bejibun)` tokens [here](https://pump.fun/coin/CQhbNnCGKfDaKXt8uE61i5DrBYJV7NPsCDD9vQgypump), beware of bots.