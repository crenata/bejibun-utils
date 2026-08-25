// Optimized = the local repo's source, imported directly from src/.
const realLog = console.log;
console.log = () => {}; // silence output, we only care about timing here

const t0 = performance.now();
const {isEmpty} = await import("../../src/utils/utils.js");
isEmpty("hello");

const t1 = performance.now();
console.log = realLog;
process.stderr.write(String(t1 - t0));
