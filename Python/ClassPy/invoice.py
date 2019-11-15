class Invoice:

    def __init__(self, client, total):
        self.client = client
        self.total = total

    def formatter(self):
        return f'{self.client} Tottal: ${self.total}'

google = Invoice('Google', 100)
print(google.formatter())
