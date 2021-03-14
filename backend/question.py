class question:
    def __init__(self, idques=None, ansA=None, ansB=None, ansC=None, ansD=None, ansCorrect=None):
        self.idques = idques
        self.ansA = ansA
        self.ansB = ansB
        self.ansC = ansC
        self.ansD = ansD
        self.ansCorrect = ansCorrect
    def parseQuestion(self, data):
        self.idques = idques
        self.ansA = data[0]
        self.ansB = data[1]
        self.ansC = data[2]
        self.ansD = data[3]
        self.ansCorrect = data[4]
    def toJson(self):
        return {
            'idques': self.idques,
            'ansA':self.ansA,
            'ansB': self.ansB,
            'ansC': self.ansC,
            'ansD':self.ansD,
            'ansCorrect':self.ansCorrect,
        }