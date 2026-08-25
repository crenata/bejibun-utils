/**
 * Cold-start benchmark for @bejibun/utils.
 *
 * Measures import time by spawning fresh OS processes and timing how long it
 * takes to import the package and call a representative function. Two metrics:
 *   1. "Full process time" - spawn -> exit. Includes Bun's own boot time.
 *   2. "Import + first call" - measured inside the process, from import to
 *      the first function call returning. Isolates the package's own cost.
 *
 * Run: bun run scripts/coldstart.mjs
 */
import {spawnSync} from "node:child_process";
import {fileURLToPath} from "node:url";
import path from "node:path";
import {updateReadmeSection} from "./readme-writer.mjs";
import {printTable} from "./table-format.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TRIALS = 30;
const runtime = process.execPath;

function runTrials(scriptPath) {
    const times = [];

    for (let i = 0; i < TRIALS; i++) {
        const t0 = performance.now();
        const res = spawnSync(runtime, [scriptPath], {encoding: "utf8"});
        const wallTime = performance.now() - t0;
        if (res.status !== 0) {
            console.error("Benchmark process failed:", res.stderr);
            process.exit(1);
        }
        const internalTime = parseFloat(res.stderr.trim());
        times.push({wallTime, internalTime});
    }

    return times;
}

function stats(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    const sum = arr.reduce((a, b) => a + b, 0);

    return {
        min: sorted[0],
        median: sorted[Math.floor(sorted.length / 2)],
        mean: sum / arr.length
    };
}

const baseline = runTrials(path.join(__dirname, "coldstart-baseline.mjs"));
const optimized = runTrials(path.join(__dirname, "coldstart-optimized.mjs"));

const baseWall = stats(baseline.map((t) => t.wallTime));
const optWall = stats(optimized.map((t) => t.wallTime));
const baseInt = stats(baseline.map((t) => t.internalTime));
const optInt = stats(optimized.map((t) => t.internalTime));

// Console table output
printTable({
    title: "COLD START BENCHMARK",
    subtitle: `${TRIALS} fresh process spawns per variant`,
    headers: ["Metric", "Baseline", "Optimized", "Speedup"],
    rows: [
        {
            cells: [
                "Full process (spawn \u2192 exit)",
                `${baseWall.median.toFixed(1)}ms`,
                `${optWall.median.toFixed(1)}ms`,
                `${(baseWall.median / optWall.median).toFixed(2)}x`
            ]
        },
        {
            cells: [
                "Import \u2192 first call (utils only)",
                `${baseInt.median.toFixed(1)}ms`,
                `${optInt.median.toFixed(1)}ms`,
                `${(baseInt.median / optInt.median).toFixed(2)}x`
            ]
        }
    ]
});

// Markdown table for README
const table = [
    "| | baseline | optimized | speedup |",
    "|---|---|---|---|",
    `| Full process (spawn \u2192 exit) | ${baseWall.median.toFixed(1)}ms | ${optWall.median.toFixed(1)}ms | **${(baseWall.median / optWall.median).toFixed(2)}x** |`,
    `| Import \u2192 first call (utils own cost) | ${baseInt.median.toFixed(1)}ms | ${optInt.median.toFixed(1)}ms | **${(baseInt.median / optInt.median).toFixed(2)}x** |`
].join("\n");

updateReadmeSection("COLDSTART", table);
