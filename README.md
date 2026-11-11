# News Summary — 11 November 2026

This entry prints a sourced, three-story summary of major world news reported on Wednesday, 11 November 2026. It covers COP31 in Türkiye, the Ebola outbreak in the Democratic Republic of Congo, and a US court ruling involving President Trump and the BBC.

## Run

With Node.js 22 and no installed dependencies:

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program checks that `summary.txt` contains 1–2,000 Unicode code points and is not blank, then prints it to standard output and writes the same UTF-8 bytes to `out/entry.txt` (or `/output/entry.txt` when `MAKEFUN_OUTPUT_DIR` is unset). The summary is stored locally, so runs need no network and are deterministic.
