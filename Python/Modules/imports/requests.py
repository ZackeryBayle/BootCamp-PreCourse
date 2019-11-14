import urllib.request
import inflection
import bs4 as bs

sauce = urllib.request.urlopen('https://www.dailysmarty.com').read()

soup = bs.BeautifulSoup(sauce,'html')

print(soup)