// Baseline = the previously published npm release, installed under the local alias
// `@bejibun-baseline/utils` by `bun run install-deps` (see benchmarks/package.json).
const realLog = console.log;
console.log = () => {}; // silence output, we only care about timing here

const t0 = performance.now();
const {isEmpty} = await import("@bejibun-baseline/utils");
isEmpty("hello");

const t1 = performance.now();
console.log = realLog;
process.stderr.write(String(t1 - t0));
