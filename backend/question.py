class question:
    def __init__(self, idques=None, ques=None , ansA=None, ansB=None, ansC=None, ansD=None, ansCorrect=None):
        self.idques = idques
        self.ques = ques
        self.ansA = ansA
        self.ansB = ansB
        self.ansC = ansC
        self.ansD = ansD
        self.ansCorrect = ansCorrect
    def parseQuestion(self, data):
        self.idques = data[0]
        self.ques = data[1]
        self.ansA = data[2]
        self.ansB = data[3]
        self.ansC = data[4]
        self.ansD = data[5]
        self.ansCorrect = data[6]
    def toJson(self):
        return {
            'idques': self.idques,
            'ques' : self.ques,
            'ansA':self.ansA,
            'ansB': self.ansB,
            'ansC': self.ansC,
            'ansD':self.ansD,
            'ansCorrect':self.ansCorrect,
        }