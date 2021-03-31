import requests

data = {}
# data['idques'] = ''
# data['ques'] = "This is the question ?"
# data['ansA'] = "Answer A"
# data['ansB'] = "Answer B"
# data['ansC'] = "Answer C"
# data['ansD'] = "Answer D"
# data['ansCorrect'] = "Answer A"
# # data['swapAns'] = '2'
# data['idOfTest'] = '2'

# data['idOfUser'] = '2'
# data['email'] = 'thanh_1751220074@dau.edu.vn'
# data['password'] = '123456789'
# data["nameUser"] = "Le Si Thanh"
# data["dateOfBirth"] = "04/04/1999"
# data["adress"] = 'Da Nang'
# data["company"] = "DAUer"

data['timeStart'] = '07:30'
data['timeFinish'] = "07:50"
data['status'] = "Chua bat dau"
data['nameTest'] = "TOLEICA"
data['numOfQuestion'] = "30"
data['isEnable'] = "0"
data['author'] = "Mr A"
data['passwdOfTest'] = '12345678'
data['limitOfNumUser'] = '20'


report = requests.post('http://localhost:5000/create-test', json=data)
print(report.text)
