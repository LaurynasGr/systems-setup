/**
 * Converts every PNG in assets/apps into an optimized web-ready WebP in
 * src/assets/apps (original dimensions retained). Requires ImageMagick.
 *
 * Run with: make optimize-images
 */

import { $ } from 'bun'

const ROOT = `${import.meta.dir}/..`
const INPUT_DIR = `${ROOT}/assets/apps`
const OUTPUT_DIR = `${ROOT}/src/assets/apps`
const QUALITY = 80

await $`mkdir -p ${OUTPUT_DIR}`

let converted = 0
let skipped = 0

for await (const name of new Bun.Glob('*.png').scan(INPUT_DIR)) {
    const inputPath = `${INPUT_DIR}/${name}`
    const input = Bun.file(inputPath)
    const outputPath = `${OUTPUT_DIR}/${name.replace(/\.png$/, '.webp')}`
    const output = Bun.file(outputPath)

    if ((await output.exists()) && output.lastModified > input.lastModified) {
        skipped++
        continue
    }

    await $`magick ${inputPath} -quality ${QUALITY} ${outputPath}`
    // a fresh Bun.file: `output` cached a stale (missing-file) stat during the exists() check above
    const webp = Bun.file(outputPath)
    const saved = Math.round((1 - webp.size / input.size) * 100)
    console.log(
        `${name} -> ${outputPath.replace(`${ROOT}/`, '')} (${Math.round(webp.size / 1024)}KB, ${saved}% smaller)`,
    )
    converted++
}

console.log(`Done: ${converted} converted, ${skipped} already up to date.`)
