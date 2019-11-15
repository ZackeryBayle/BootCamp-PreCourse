import requests
from inflection import titleize
from bs4 import BeautifulSoup as bs
import json


url = 'https://dailysmarty.com/topics/python'


def titles_gen(links):
    titles = []

    def post_format(url):
        if 'posts' in url:
            url = url.split('/')[-1]
            url = url.replace('-', ' ')
            url = titleize(url)
            titles.append(url)



    for link in links:
        post_format(link['href'])

    return titles

r = requests.get(url)
soup = bs(r.text, 'html.parser')
links = soup.find_all('a')

titles = titles_gen(links)

for title in titles:
    print(title)
