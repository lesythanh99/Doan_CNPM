import psycopg2
from  account import  account as acc

class account:
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
            sql1 = "SELECT * from account where email = %s"
            cur.execute(sql1, (data.email,))
            con.commit()
            arr = cur.fetchall()
            if len(arr) > 0 :
                con.close()
                return 'Exists'
            sql = "INSERT INTO account (email, password, nameUser, dateOfBirth, adress, company) VALUES (%s,%s,%s,%s,%s,%s) "
            result = (
                data.email,
                data.password,
                data.nameUser,
                data.dateOfBirth,
                data.adress,
                data.company,
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
    def getAccount(self):
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
            sql = "select * from account"
            cur.execute(sql)
            con.commit()
            rows = cur.fetchall()
            ans = []
            for row in rows:
                r = acc()
                r.parseAccount(row)
                ans.append(r.toJson())
            con.close()
            return ans
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()
    def getLogin(self, data):
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
            sql1 = "SELECT * from account where email = %s and password = %s"
            cur.execute(sql1, (data.email,data.password,))
            con.commit()
            arr = cur.fetchall()
            if len(arr) > 0 :
                con.close()
                return 'RE'
            con.close()
            return len(arr)
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()