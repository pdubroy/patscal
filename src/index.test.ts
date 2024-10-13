import { expect, test } from "bun:test";
import * as ohm from "ohm-js";
import { extractExamples } from "ohm-js/extras";

import { grammar } from "./index.ts";

test("extracted examples", () => {
  const examples = extractExamples(grammar.source.contents);
  for (const { example, shouldMatch, rule } of examples) {
    const message = `[${rule}] ${JSON.stringify(example)}`;
    expect(grammar.match(example, rule).succeeded(), message).toBe(shouldMatch);
  }
});
