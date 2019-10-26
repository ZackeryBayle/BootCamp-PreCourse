# https://www.google.com/search?&q=python+tutorial+development

uri = 'https://www.google.com/search?&q='

tags = ['python', 'development', 'tutorial']
formated_tags = '+'.join(tags)
query_uri = f'{uri}{formated_tags}'


print(query_uri)

