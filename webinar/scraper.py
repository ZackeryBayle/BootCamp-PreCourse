import requests
import statistics
from bs4 import BeautifulSoup

baseball = [
    "https:..mlb.com/news"
]


def ranking(websites):
    link_dic = {}

    for url in websites:
        res = requests.get(url)
        r_soup = BeautifulSoup(res.text, "lxml")
        links = r_soup.find_all("a")

        for key in links:
            if key in link_dic:
                link_dic[key] += 1
            else:
                link_div[key] = 1
        print(link_dic)

        print(links)
        print(res)


ranking(baseball)