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

    Expression = SimpleExpression (relOp SimpleExpression)*

    //+ "1 + 2", "-1 OR 3", "-1 OR +3 + 2"
    SimpleExpression =
      | SimpleExpression or sign? Term -- or
      | SimpleExpression addOp sign? Term -- add
      | sign? Term -- term

    Term = Factor (mulOp Factor)*

    Factor = unsignedConstant

    unsignedConstant =
      | identifier
      | unsignedInteger
      | nil
      | "'" any "'" -- char

    unsignedNumber =
      | unsignedNumber "E" sign? unsignedInteger -- scientific
      | unsignedInteger "." unsignedInteger -- real
      | unsignedInteger -- int

    unsignedInteger = digit+

    //+ "x", "z9"
    identifier = letter alnum*

    addOp = "+" | "-"
    sign = ("+" | "-")
    mulOp = "*" | "/" | div | mod | and
    relOp = "<=" | "<" | "=" | "<>" | ">=" | ">" | in

    keyword = program | in | or | div | mod | and | nil

    program = "PROGRAM" ~alnum
    in = "IN" ~alnum
    or = "OR" ~alnum
    div = "DIV" ~alnum
    mod = "MOD" ~alnum
    and = "AND" ~alnum
    nil = "NIL" ~alnum
  }
`);
