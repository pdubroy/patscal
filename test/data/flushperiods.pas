PROGRAM FLUSHPERIODS;

CONST PERIOD=‘.’;

VAR INFILE, OUTFILE: TEXT;
    INNAME, OUTNAME, LINEBUF: STRING;

BEGIN
    (*First get the files open.*)
    (*Get input filename.*)
    WRITE(‘Name of input file: ’);
    READLN(INNAME);
    (*Supply the default suffix .TEXT if needed.*)
    IF POS(‘.’, INNAME)=Ø THEN INNAME:=CONCAT(INNAME,‘.TEXT’);

    (*Turn off automatic error checking so program can do it.*)
    (*$I-*)
    (*Input file should already exist, so open with reset.*)
    RESET(INFILE,INNAME);
    (*If it doesn’t work, complain and stop program.*)
    IF IORESULT≠Ø THEN BEGIN
        WRITELN(‘File not found.’);
        EXIT(PROGRAM)
    END;
    (*Turn automatic error checking back on.*)
    (*$I+*)

    (*Get output filename.*)
    WRITE(‘Name of output file: ’);
    READLN(OUTNAME);
    (*Supply default suffix .TEXT if needed.*)
    IF POS(‘.’, OUTNAME)=Ø THEN OUTNAME:=CONCAT(OUTNAME, ‘.TEXT’);
    (*Open file with rewrite.*)
    REWRITE(OUTFILE,OUTNAME);

    (*Now do the job.*)
    WHILE (NOT EOF(INFILE)) AND (NOT EOF(OUTFILE)) DO BEGIN
        READLN(INFILE,LINEBUF);
        IF LENGTH(LINEBUF) >Ø THEN
            IF POS(PERIOD, LINEBUF)=1 THEN DELETE(LINEBUF, 1, 1);
        WRITELN(OUTFILE,LINEBUF)
    END;

    (*Now clean up.*)
    (*If the output file isn’t complete…*)
    IF EOF(OUTFILE) THEN BEGIN
        WRITELN(‘Not enough room in output file!’);
        (*…Then throw it away.*)
        CLOSE(OUTFILE,PURGE)
    END
    (*If it’s okay, then lock it into the directory.*)
    ELSE CLOSE(OUTFILE,LOCK);
    CLOSE(INFILE)
END.
