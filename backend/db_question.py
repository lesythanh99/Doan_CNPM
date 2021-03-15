import psycopg2
from question import question as ques


class question:
    def __init__(self, conn):
        self.conn = conn

    def insert(self, data):
        con = None
        try:
            con = psycopg2.connect(
                user=self.conn["user"],
                password=self.conn["password"],
                host=self.conn["host"],
                port=self.conn["port"],
                database=self.conn["database"],
            )
            cur = con.cursor()
            sql = "INSERT INTO listquestion (ques, ansa, ansb, ansc, ansd, anscorrect) VALUES (%s,%s,%s,%s,%s,%s) "
            result = (
                data.ques,
                data.ansA,
                data.ansB,
                data.ansC,
                data.ansD,
                data.ansCorrect,
            )
            cur.execute(sql, result)
            con.commit()
            con.close()
            return "RE"
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

    def getQuestion(self):
        con = None
        try:
            con = psycopg2.connect(
                user=self.conn["user"],
                password=self.conn["password"],
                host=self.conn["host"],
                port=self.conn["port"],
                database=self.conn["database"],
            )
            cur = con.cursor()
            sql = "select * from listquestion order by random() limit 10"
            cur.execute(sql)
            con.commit()
            rows = cur.fetchall()
            ans = []
            for row in rows:
                r = ques()
                r.parseQuestion(row)
                ans.append(r.toJson())
            con.close()
            return ans
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()
    def getScore(self, listAns):
        con = None
        score = 0
        try:
            con = psycopg2.connect(
                user=self.conn["user"],
                password=self.conn["password"],
                host=self.conn["host"],
                port=self.conn["port"],
                database=self.conn["database"],
            )
            cur = con.cursor()
            for row in listAns:
                sql = 'SELECT anscorrect from listquestion where %s = idques'
                v = (row.idques,)
                cur.execute(sql,v)
                con.commit()
                r = cur.fetchone()
                if r :
                    c = ques()
                    c.parseQuestion(r)
                    if c.ansCorrect == row.ans:
                        score++
            return score
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

