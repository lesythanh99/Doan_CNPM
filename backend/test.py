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

data['email'] = 'thanh_1751220074@dau.edu.vn'
data['password'] = '123456789'
# data["nameUser"] = "Le Si Thanh"
# data["dateOfBirth"] = "04/04/1999"
# data["adress"] = 'Da Nang'
# data["company"] = "DAU"
report = requests.post('http://localhost:5000/login', json=data)
print(report.text)
