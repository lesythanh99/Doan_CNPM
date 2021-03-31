import psycopg2
from test import test as tes


class test:
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
            sql = "INSERT INTO test (timeStart, timeFinish, status, nameTest, numOfQuestion, isEnable, author, passwdOfTest,limitOfNumUser) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s) "
            result = (
                data.timeStart,
                data.timeFinish,
                data.status,
                data.nameTest,
                data.numOfQuestion,
                data.isEnable,
                data.author,
                data.passwdOfTest,
                data.limitOfNumUser,
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
    def getTest(self):
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
            sql = "select * from test"
            cur.execute(sql)
            con.commit()
            rows = cur.fetchall()
            ans = []
            for row in rows:
                r = tes()
                r.parseTest(row)
                ans.append(r.toJson())
            con.close()
            return ans
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()