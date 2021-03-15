from flask import Flask, jsonify, request, redirect
import os

import db_question as db
import question as ques
from answer import answer as ans

from flask_cors import CORS

app = Flask(__name__)
CORS(app)



dp_ip = os.getenv('dp_ip')
con_db = {}
con_db['user'] = 'postgres'
con_db['password'] = 'postgres'
con_db['host'] = str(dp_ip)
con_db['port'] = '5432'
con_db['database'] = 'my_db'


@app.route('/')
def hello_world():
    return "Hello World ! :D"

@app.route('/play')
def getAllQuestion():
    result = db.question(con_db).getQuestion()
    dataNow = result
    return jsonify({
        'data' : result
    }), 200

@app.route('/getscore', methods=['POST'])
def getScore():
    listAns = request.json
    conn = db.question(con_db)
    result = conn.getScore(listAns)
    return jsonify({
        'data' : result
    }), 200

@app.route('/insert', methods=['POST'])
def insertQuestion():
    conn = db.question(con_db)
    data = request.json
    sheet = ques.question(1,data['ques'], data['ansA'], data['ansB'], data['ansC'], data['ansD'], data['ansCorrect'])
    result = conn.insert(sheet)
    return jsonify({
        'data' : result
    }), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
