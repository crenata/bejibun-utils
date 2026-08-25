# Benchmarks

Speed comparison: baseline (previously published npm release) vs the optimized `@bejibun/utils` in this repo.

## Running

```bash
# Run all benchmarks (installs baseline from npm first)
bun run bench

# Or run individually (after install-deps)
bun run install-deps
bun run coldstart
bun run throughput
```

## Cold Start

Measures import time by spawning fresh OS processes. Two metrics:

- **Full process time** — spawn → exit (includes Bun boot time)
- **Import + first call** — measured inside the process, isolates the package's own cost

<!-- BENCHMARK:COLDSTART:START -->

|                                      | baseline | optimized | speedup    |
| ------------------------------------ | -------- | --------- | ---------- |
| Full process (spawn → exit)          | 41.2ms   | 24.1ms    | **1.71x**  |
| Import → first call (utils own cost) | 28.6ms   | 1.8ms     | **15.87x** |

<!-- BENCHMARK:COLDSTART:END -->

## Throughput

Raw call speed for key utility functions. 200,000 iterations each, output silenced.

<!-- BENCHMARK:THROUGHPUT:START -->

| Method                        | baseline (0.1.29) | optimized | speedup   | baseline ops/s | optimized ops/s |
| ----------------------------- | ----------------- | --------- | --------- | -------------- | --------------- |
| `isEmpty(string)`             | 35.1ms            | 20.8ms    | **1.68x** | 5,704,692/s    | 9,599,902/s     |
| `isNotEmpty(string)`          | 20.8ms            | 17.6ms    | **1.19x** | 9,599,210/s    | 11,383,602/s    |
| `defineValue(str, default)`   | 22.4ms            | 22.5ms    | **0.99x** | 8,931,746/s    | 8,876,582/s     |
| `Arr.only(keys)`              | ---               | 174.1ms   | **new**   | ---            | 1,148,572/s     |
| `Arr.except(keys)`            | ---               | 278.4ms   | **new**   | ---            | 718,508/s       |
| `Arr.first(array)`            | ---               | 8.1ms     | **new**   | ---            | 24,724,055/s    |
| `Arr.last(array)`             | ---               | 6.0ms     | **new**   | ---            | 33,517,585/s    |
| `Arr.pluck(array, key)`       | ---               | 70.7ms    | **new**   | ---            | 2,830,336/s     |
| `Str.toUpperCase(str)`        | 23.1ms            | 24.2ms    | **0.95x** | 8,652,201/s    | 8,252,208/s     |
| `Str.toLowerCase(str)`        | 3.1ms             | 2.1ms     | **1.48x** | 63,717,705/s   | 94,178,409/s    |
| `Str.toPascalCase(str)`       | 250.4ms           | 229.7ms   | **1.09x** | 798,651/s      | 870,832/s       |
| `Str.ipToFileName(str)`       | 97.3ms            | 79.7ms    | **1.22x** | 2,054,549/s    | 2,508,439/s     |
| `Str.toSnakeCase(str)`        | ---               | 15.1ms    | **new**   | ---            | 13,234,276/s    |
| `Str.toCamelCase(str)`        | ---               | 25.3ms    | **new**   | ---            | 7,912,146/s     |
| `Str.startsWith(str, needle)` | ---               | 14.3ms    | **new**   | ---            | 13,947,808/s    |
| `Str.endsWith(str, needle)`   | ---               | 10.2ms    | **new**   | ---            | 19,634,209/s    |
| `Str.contains(str, needle)`   | ---               | 13.6ms    | **new**   | ---            | 14,675,934/s    |
| `Object.serialize(obj)`       | 115.5ms           | 77.4ms    | **1.49x** | 1,731,474/s    | 2,584,742/s     |
| `Object.parseFormData(fd)`    | 519.1ms           | 534.5ms   | **0.97x** | 385,283/s      | 374,160/s       |
| `Object.only(obj, keys)`      | ---               | 10.0ms    | **new**   | ---            | 19,917,986/s    |
| `Object.except(obj, keys)`    | ---               | 37.7ms    | **new**   | ---            | 5,309,229/s     |
| `Object.first(obj)`           | ---               | 4.2ms     | **new**   | ---            | 48,078,842/s    |
| `Object.last(obj)`            | ---               | 6.2ms     | **new**   | ---            | 32,115,936/s    |

<!-- BENCHMARK:THROUGHPUT:END -->
