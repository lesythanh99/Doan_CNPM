import psycopg2
from question import question as ques


class question:
    def __init__(self, conn):
        self.conn = conn

    def insert(self, data):
        con = None
        try:
            con = psycopg2.connect(
                user=self.connect_db["user"],
                password=self.connect_db["password"],
                host=self.connect_db["host"],
                port=self.connect_db["port"],
                database=self.connect_db["database"],
            )
            cur = con.cursor()
            sql = "INSERT INTO listquestion VALUES (%s,%s,%s,%s,%s,%s,%s) "
            result = (
                data.idques,
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
                user=self.connect_db["user"],
                password=self.connect_db["password"],
                host=self.connect_db["host"],
                port=self.connect_db["port"],
                database=self.connect_db["database"],
            )
            cur = con.cursor()
            sql = "SELECT * FROM listquestion OFFSET floor(random()*40) LIMIT 15"
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
