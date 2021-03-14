import requests

data = {}
data['idques'] = ""
data['ques'] = "This is the question ?"
data['ansa'] = "Answer A"
data['ansb'] = "Answer B"
data['ansc'] = "Answer C"
data['ansd'] = "Answer D"
data['anscorrect'] = "Answer A"
report = requests.post('http://localhost:5000/insert', json=data)
print(report.text)
