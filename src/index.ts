import * as ohm from "ohm-js";

export const grammar = ohm.grammar(`
  Pascal {
    Program = ""

    // "x := 3", "z9 := 1 + 2"
    Statement =
      | unsignedInteger ":" Statement -- labeled
      | Variable ":=" Expression -- assignment

    //+ "z9"
    Variable = identifier

    unsignedNumber =
      | unsignedNumber e sign? unsignedInteger -- scientific
      | unsignedInteger "." unsignedInteger -- real
      | unsignedInteger -- int

    Expression = SimpleExpression (relOp SimpleExpression)*

    //+ "1 + 2", "-1 OR 3", "-1 OR +3 + 2"
    SimpleExpression =
      | SimpleExpression or sign? Term -- or
      | SimpleExpression addOp sign? Term -- add
      | sign? Term -- term

    Term = Factor (mulOp Factor)*

    // Like Free Pascal, allow a sign before a factor.
    // https://www.freepascal.org/docs-html/ref/refse81.html#x143-16700012.1
    Factor =
      | unsignedConstant
      | Variable
      | identifier

    unsignedConstant =
      | identifier
      | unsignedInteger
      | nil
      | "'" any "'" -- char

    unsignedInteger = digit+

    constant =
      | sign identifier -- ident
      | sign unsignedNumber -- number
      | unsignedConstant

    //+ "x", "z9"
    identifier = letter alnum*

    addOp = "+" | "-"
    sign = ("+" | "-")
    mulOp = "*" | "/" | div | mod | and
    relOp = "<=" | "<" | "=" | "<>" | ">=" | ">" | in

    keyword = program | in | or | div | mod | and | nil

    program = caseInsensitive<"PROGRAM"> ~alnum
    in = caseInsensitive<"IN"> ~alnum
    or = caseInsensitive<"OR"> ~alnum
    div = caseInsensitive<"DIV"> ~alnum
    mod = caseInsensitive<"MOD"> ~alnum
    and = caseInsensitive<"AND"> ~alnum
    nil = caseInsensitive<"NIL"> ~alnum
    e = caseInsensitive<"E"> ~alnum
  }
`);
