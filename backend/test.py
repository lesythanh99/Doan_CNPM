import requests

data = {}
data['idques'] = ''
data['ques'] = "This is the question ?"
data['ansA'] = "Answer A"
data['ansB'] = "Answer B"
data['ansC'] = "Answer C"
data['ansD'] = "Answer D"
data['ansCorrect'] = "Answer A"
data['swapAns'] = '2'
report = requests.post('http://localhost:5000/insert', json=data)
print(report.text)
