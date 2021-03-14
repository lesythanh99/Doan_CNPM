from flask import Flask, jsonify, request, redirect
import os

from actions.db_question import db_question as db
from model.question import question as ques


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

@app.route('/play'):
def getAllQuestion():
    result = db.question(con_db).getQuestion()
    return jsonify({
        'data' : result
    }), 200



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)