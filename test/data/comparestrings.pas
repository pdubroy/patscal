PROGRAM COMPARESTRINGS;
VAR S: STRING;
    T: STRING[40];

BEGIN
  S:= 'SOMETHING';
  T:= 'SOMETHING BIGGER';
  IF S = T THEN
    WRITELN('Strings do not work very well')
  ELSE
    IF S > T THEN
      WRITELN(S,' is greater than ',T)
    ELSE
      IF S < T THEN
        WRITELN(S,' is less than ',T);
  IF S = 'SOMETHING' THEN
    WRITELN(S,' equals ',S);
  IF S > 'SAMETHING' THEN
    WRITELN(S,' is greater than SAMETHING');
  IF S = 'SOMETHING             ' THEN
    WRITELN('BLANKS DON''T COUNT')
  ELSE
    WRITELN('BLANKS APPEAR TO MAKE A DIFFERENCE');
  S:='XXX';
  T:='ABCDEF';
  IF S > T THEN
    WRITELN(S,' is greater than ',T)
  ELSE
    WRITELN(S,' is less than ',T)
END.
