## 2024-10-13

- I'm a bit confused by the grammar for SimpleExpression. The first term can have a sign preceding it, but following terms can't? Why?
  - This makes it a bit difficult to adopt the usual Ohm formulation for binary operations.
  - `+2 OR -1` is accepted by fpc in macpas and iso mode. I'm gonna go with that.

## 2024-10-12

- Was naively converting the diagram to an Ohm grammar, and using iteration. Ran into ambiguity simple SimpleExpression — maybe make a video?
  - Also mention moving the `real` case before the `integer` case.
- Bug in extract examples with the first rule has an empty body.
