create table listquestion (
    idques SERIAL PRIMARY KEY,
    ques text,
    ansa text,
    ansb text,
    ansc text,
    ansd text,
    anscorrect text
);
select * from listquestion order by random() limit 10;