PROGRAM MAKEFILE;

VAR
    F: FILE OF REAL;
    I: INTEGER;

BEGIN
    (*Open with REWRITE since this is a new file.*)
    REWRITE(F, '*REALS.DATA');

    (*Read 10 numbers and store them in the file.*)
    FOR I:=1 TO 10 DO
    BEGIN
        (*Put a prompt on the screen.*)
        WRITE('-->');

        (*Read a number from the keyboard.*)
        READ(F^);

        (*Store the number in the file.*)
        PUT(F)
    END;

    (*Close the file and lock it.*)
    CLOSE(F, LOCK)
END.
