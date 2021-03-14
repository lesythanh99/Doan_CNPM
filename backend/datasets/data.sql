create table listquestion (
    idques SERIAL PRIMARY KEY,
    ques text,
    ansa text,
    ansb text,
    ansc text,
    ansd text,
    anscorrect text
);
SELECT	* FROM listquestion OFFSET floor(random() * ( SELECT COUNT(*) FROM listquestion)) LIMIT 2;
select * from listquestion order by random() limit 2;