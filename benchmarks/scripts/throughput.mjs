/**
 * Throughput benchmark - the hot path.
 *
 * Measures raw call speed for all key utility functions on both the baseline
 * (npm release @bejibun/utils@0.1.29) and the optimized local version.
 * Output is silenced so we're measuring compute, not I/O.
 *
 * Run: bun run scripts/throughput.mjs
 */
import {updateReadmeSection} from "./readme-writer.mjs";
import {printTable} from "./table-format.mjs";

const ITERATIONS = 200_000;
const WARMUP = 5_000;

// --- Load both versions ---
const baselineUtils = await import("@bejibun-baseline/utils");
const baselineStr = (await import("@bejibun-baseline/utils/facades/Str")).default;
const baselineObject = (await import("@bejibun-baseline/utils/facades/Object")).default;

const optimizedUtils = await import("../../src/utils/utils.js");
const optimizedArr = (await import("../../src/facades/Arr.js")).default;
const optimizedStr = (await import("../../src/facades/Str.js")).default;
const optimizedObject = (await import("../../src/facades/Object.js")).default;

// --- Test data ---
const testString = "hello world benchmark string";
const testArray = Array.from({length: 100}, (_, i) => ({id: i, name: `item${i}`}));
const testArrKeys = ["0", "5", "10", "20", "50", "99"];
const testObj = {name: "John", age: "30", active: "true", email: "john@example.com", role: "admin"};
const testObjKeys = ["name", "email"];
const testFormData = new FormData();
testFormData.append("user[name]", "John");
testFormData.append("user[email]", "john@example.com");
testFormData.append("tags", "a");
testFormData.append("tags", "b");
testFormData.append("tags", "c");

function benchFn(label, fn) {
    for (let i = 0; i < WARMUP; i++) fn(i);
    const t0 = performance.now();
    for (let i = 0; i < ITERATIONS; i++) fn(i);
    const t1 = performance.now();
    return t1 - t0;
}

function fmt(ms) {
    return ms < 1 ? `${(ms * 1000).toFixed(0)}\u00B5s` : `${ms.toFixed(1)}ms`;
}

function fmtOps(ms) {
    return Math.round(ITERATIONS / (ms / 1000)).toLocaleString() + "/s";
}

function sp(bMs, oMs) {
    const r = bMs / oMs;
    return r >= 1.05 ? `${r.toFixed(2)}x` : r <= 0.95 ? `${r.toFixed(2)}x` : "~1.0x";
}

// ===========================
// Benchmark all functions
// ===========================

// --- Utils (both versions) ---
const bIsEmpty = benchFn("isEmpty", (i) => baselineUtils.isEmpty("test" + i));
const oIsEmpty = benchFn("isEmpty", (i) => optimizedUtils.isEmpty("test" + i));

const bIsNotEmpty = benchFn("isNotEmpty", (i) => baselineUtils.isNotEmpty("test" + i));
const oIsNotEmpty = benchFn("isNotEmpty", (i) => optimizedUtils.isNotEmpty("test" + i));

const bDefineValue = benchFn("defineValue", (i) => baselineUtils.defineValue("val" + i, "default"));
const oDefineValue = benchFn("defineValue", (i) =>
    optimizedUtils.defineValue("val" + i, "default")
);

// --- Arr (new in optimized, no baseline) ---
const oArrOnly = benchFn("Arr.only", (i) => optimizedArr.only(testArray, testArrKeys));
const oArrExcept = benchFn("Arr.except", (i) => optimizedArr.except(testArray, testArrKeys));
const oArrFirst = benchFn("Arr.first", (i) => optimizedArr.first(testArray));
const oArrLast = benchFn("Arr.last", (i) => optimizedArr.last(testArray));
const oArrPluck = benchFn("Arr.pluck", (i) => optimizedArr.pluck(testArray, "name"));

// --- Str (only functions that exist in both versions) ---
const bStrToUpperCase = benchFn("Str.toUpperCase", (i) => baselineStr.toUpperCase(testString));
const oStrToUpperCase = benchFn("Str.toUpperCase", (i) => optimizedStr.toUpperCase(testString));

const bStrToLowerCase = benchFn("Str.toLowerCase", (i) => baselineStr.toLowerCase(testString));
const oStrToLowerCase = benchFn("Str.toLowerCase", (i) => optimizedStr.toLowerCase(testString));

const bStrToPascalCase = benchFn("Str.toPascalCase", (i) => baselineStr.toPascalCase(testString));
const oStrToPascalCase = benchFn("Str.toPascalCase", (i) => optimizedStr.toPascalCase(testString));

const bStrIpToFileName = benchFn("Str.ipToFileName", (i) =>
    baselineStr.ipToFileName("192.168.1.1:8080/api")
);
const oStrIpToFileName = benchFn("Str.ipToFileName", (i) =>
    optimizedStr.ipToFileName("192.168.1.1:8080/api")
);

// --- Str (new in optimized, no baseline) ---
const oStrToSnakeCase = benchFn("Str.toSnakeCase", (i) => optimizedStr.toSnakeCase(testString));
const oStrToCamelCase = benchFn("Str.toCamelCase", (i) => optimizedStr.toCamelCase(testString));
const oStrStartsWith = benchFn("Str.startsWith", (i) =>
    optimizedStr.startsWith(testString, "hello")
);
const oStrEndsWith = benchFn("Str.endsWith", (i) => optimizedStr.endsWith(testString, "string"));
const oStrContains = benchFn("Str.contains", (i) => optimizedStr.contains(testString, "world"));

// --- Object (only functions that exist in both versions) ---
const bObjSerialize = benchFn("Object.serialize", (i) => baselineObject.serialize(testObj));
const oObjSerialize = benchFn("Object.serialize", (i) => optimizedObject.serialize(testObj));

const bObjParseFormData = benchFn("Object.parseFormData", (i) =>
    baselineObject.parseFormData(testFormData, true)
);
const oObjParseFormData = benchFn("Object.parseFormData", (i) =>
    optimizedObject.parseFormData(testFormData, true)
);

// --- Object (new in optimized, no baseline) ---
const oObjOnly = benchFn("Object.only", (i) => optimizedObject.only(testObj, testObjKeys));
const oObjExcept = benchFn("Object.except", (i) => optimizedObject.except(testObj, testObjKeys));
const oObjFirst = benchFn("Object.first", (i) => optimizedObject.first(testObj));
const oObjLast = benchFn("Object.last", (i) => optimizedObject.last(testObj));

// ===========================
// Console table output
// ===========================

function cmp(name, bMs, oMs) {
    if (bMs === null) return [name, "---", fmt(oMs), "new", fmtOps(oMs)];
    return [name, fmt(bMs), fmt(oMs), sp(bMs, oMs), fmtOps(oMs)];
}

printTable({
    title: "THROUGHPUT BENCHMARK",
    subtitle: `${ITERATIONS.toLocaleString()} calls each, logging silenced, ${WARMUP.toLocaleString()} warmup calls`,
    headers: ["Method", "Baseline (0.1.29)", "Optimized", "Speedup", "Optimized ops/s"],
    rows: [
        {group: "Utils"},
        {cells: cmp("isEmpty(string)", bIsEmpty, oIsEmpty)},
        {cells: cmp("isNotEmpty(string)", bIsNotEmpty, oIsNotEmpty)},
        {cells: cmp("defineValue(str, default)", bDefineValue, oDefineValue)},
        {group: "Arr (new in 0.1.30)"},
        {cells: cmp("Arr.only(keys)", null, oArrOnly)},
        {cells: cmp("Arr.except(keys)", null, oArrExcept)},
        {cells: cmp("Arr.first(array)", null, oArrFirst)},
        {cells: cmp("Arr.last(array)", null, oArrLast)},
        {cells: cmp("Arr.pluck(array, key)", null, oArrPluck)},
        {group: "Str"},
        {cells: cmp("Str.toUpperCase(str)", bStrToUpperCase, oStrToUpperCase)},
        {cells: cmp("Str.toLowerCase(str)", bStrToLowerCase, oStrToLowerCase)},
        {cells: cmp("Str.toPascalCase(str)", bStrToPascalCase, oStrToPascalCase)},
        {cells: cmp("Str.ipToFileName(str)", bStrIpToFileName, oStrIpToFileName)},
        {group: "Str (new in 0.1.30)"},
        {cells: cmp("Str.toSnakeCase(str)", null, oStrToSnakeCase)},
        {cells: cmp("Str.toCamelCase(str)", null, oStrToCamelCase)},
        {cells: cmp("Str.startsWith(str, needle)", null, oStrStartsWith)},
        {cells: cmp("Str.endsWith(str, needle)", null, oStrEndsWith)},
        {cells: cmp("Str.contains(str, needle)", null, oStrContains)},
        {group: "Object"},
        {cells: cmp("Object.serialize(obj)", bObjSerialize, oObjSerialize)},
        {cells: cmp("Object.parseFormData(fd)", bObjParseFormData, oObjParseFormData)},
        {group: "Object (new in 0.1.30)"},
        {cells: cmp("Object.only(obj, keys)", null, oObjOnly)},
        {cells: cmp("Object.except(obj, keys)", null, oObjExcept)},
        {cells: cmp("Object.first(obj)", null, oObjFirst)},
        {cells: cmp("Object.last(obj)", null, oObjLast)}
    ]
});

// ===========================
// Markdown table for README
// ===========================

function tableRow(label, bMs, oMs) {
    if (bMs === null) {
        return `| \`${label}\` | --- | ${oMs.toFixed(1)}ms | **new** | --- | ${fmtOps(oMs)} |`;
    }
    return `| \`${label}\` | ${bMs.toFixed(1)}ms | ${oMs.toFixed(1)}ms | **${(bMs / oMs).toFixed(2)}x** | ${fmtOps(bMs)} | ${fmtOps(oMs)} |`;
}

const table = [
    "| Method | baseline (0.1.29) | optimized | speedup | baseline ops/s | optimized ops/s |",
    "|---|---|---|---|---|---|",
    tableRow("isEmpty(string)", bIsEmpty, oIsEmpty),
    tableRow("isNotEmpty(string)", bIsNotEmpty, oIsNotEmpty),
    tableRow("defineValue(str, default)", bDefineValue, oDefineValue),
    tableRow("Arr.only(keys)", null, oArrOnly),
    tableRow("Arr.except(keys)", null, oArrExcept),
    tableRow("Arr.first(array)", null, oArrFirst),
    tableRow("Arr.last(array)", null, oArrLast),
    tableRow("Arr.pluck(array, key)", null, oArrPluck),
    tableRow("Str.toUpperCase(str)", bStrToUpperCase, oStrToUpperCase),
    tableRow("Str.toLowerCase(str)", bStrToLowerCase, oStrToLowerCase),
    tableRow("Str.toPascalCase(str)", bStrToPascalCase, oStrToPascalCase),
    tableRow("Str.ipToFileName(str)", bStrIpToFileName, oStrIpToFileName),
    tableRow("Str.toSnakeCase(str)", null, oStrToSnakeCase),
    tableRow("Str.toCamelCase(str)", null, oStrToCamelCase),
    tableRow("Str.startsWith(str, needle)", null, oStrStartsWith),
    tableRow("Str.endsWith(str, needle)", null, oStrEndsWith),
    tableRow("Str.contains(str, needle)", null, oStrContains),
    tableRow("Object.serialize(obj)", bObjSerialize, oObjSerialize),
    tableRow("Object.parseFormData(fd)", bObjParseFormData, oObjParseFormData),
    tableRow("Object.only(obj, keys)", null, oObjOnly),
    tableRow("Object.except(obj, keys)", null, oObjExcept),
    tableRow("Object.first(obj)", null, oObjFirst),
    tableRow("Object.last(obj)", null, oObjLast)
].join("\n");

updateReadmeSection("THROUGHPUT", table);
