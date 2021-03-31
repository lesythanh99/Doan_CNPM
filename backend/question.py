class question:
    def __init__(
        self,
        idques=None,
        ques=None,
        ansA=None,
        ansB=None,
        ansC=None,
        ansD=None,
        ansCorrect=None,
        swapAns=None,
        idoftest=None,
    ):
        self.idques = idques
        self.ques = ques
        self.ansA = ansA
        self.ansB = ansB
        self.ansC = ansC
        self.ansD = ansD
        self.ansCorrect = ansCorrect
        self.swapAns = swapAns
        self.idoftest = idoftest

    def parseQuestion(self, data):
        self.idques = data[0]
        self.ques = data[1]
        self.ansA = data[2]
        self.ansB = data[3]
        self.ansC = data[4]
        self.ansD = data[5]
        self.ansCorrect = data[6]
        self.swapAns = data[7]
        self.idoftest = data[8]

    def toJson(self):
        return {
            "idques": self.idques,
            "idoftest": self.idoftest,
            "ques": self.ques,
            "ansA": self.ansA,
            "ansB": self.ansB,
            "ansC": self.ansC,
            "ansD": self.ansD,
            "ansCorrect": self.ansCorrect,
            "swapAns": self.swapAns,
        }