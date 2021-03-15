class answer:
    def __init__(self, idques=None, ans=None):
        self.idques = idques
        self.ans = ans
    def parseAnswer(self, data):
        self.idques = data[0]
        self.ans = data[1]
    def toJson(self):
        return {
            'idques' : self.idques,
            'ans' : self.ans
        }