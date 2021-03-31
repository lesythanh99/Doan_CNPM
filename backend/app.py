from flask import Flask, jsonify, request, redirect
import os
import json
import db_question as db_ques
import question as ques
import account as acc
import db_account as db_acc

from flask_cors import CORS

app = Flask(__name__)
CORS(app)


dp_ip = os.getenv("dp_ip")
con_db = {}
con_db["user"] = "postgres"
con_db["password"] = "postgres"
con_db["host"] = str(dp_ip)
con_db["port"] = "5432"
con_db["database"] = "my_db"


@app.route("/")
def hello_world():
    return "Hello World ! :D"


# Lay danh sach cau hoi
@app.route("/play-test", methods=["POST"])
def getQuestionByIdTest():
    data = request.json
    result = db_ques.question(con_db).getQuestion(data["idOfTest"])
    return jsonify({"data": result}), 200


# Them cau hoi
@app.route("/create-question", methods=["POST"])
def insertQuestion():
    conn = db_ques.question(con_db)
    data = request.json
    sheet = ques.question(
        1,
        data["ques"],
        data["ansA"],
        data["ansB"],
        data["ansC"],
        data["ansD"],
        data["ansCorrect"],
        data["swapAns"],
        data["idOfTest"],
    )
    result = conn.insert(sheet)
    return jsonify({"data": result}), 200


@app.route("/register", methods=["POST"])
def register():
    conn = db_acc.account(con_db)
    data = request.json
    sheet = acc.account(
        1,
        data["email"],
        data["password"],
        data["nameUser"],
        data["dateOfBirth"],
        data["adress"],
        data["company"],
    )
    result = conn.insert(sheet)
    return jsonify({"data": result})

@app.route("/get-account")
def getAccount():
    data = request.json
    result = db_acc.account(con_db).getAccount()
    return jsonify({"data": result}), 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
