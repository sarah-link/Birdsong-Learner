import requests
import json
import sys
from bs4 import BeautifulSoup


try:
    response = requests.get(url="https://en.wikipedia.org/wiki/List_of_bird_genera",)
except requests.exceptions.RequestException as e:  # This is the correct syntax
    print("Error reaching wikipedia:")
    raise SystemExit(e)

if response.status_code != 200:
    sys.exit("Error reaching wikipedia")


soup = BeautifulSoup(response.content, 'html.parser')

# the 'body' that we need is only one div element, then find ul's within for lists of genera
soup = soup.find_all("div", id="mw-content-text")[0].find_all("ul")

genusToFamily = {}

for s in soup:
    family = s.find_all("b")
    #there are two ul's we can get: one that includes the family name and one that doesn't
    #if it's the one that doesn't, skip it
    if len(family) == 0:
        continue

    family = family[0]
    a = family.find_all("a")
    #there's one "unknown" family that we can skip
    if len(a) == 0:
        continue

    #the family name is the first link
    targetFamily = family.find_all("a")[0].decode_contents()

    #all the genus names are links, which makes things easy!
    genera = s.find_all("a")
    for i in range(1, len(genera)):
        genus = genera[i].decode_contents()
        toAdd = {genus: targetFamily}
        genusToFamily.update(toAdd)

genusToFamily = json.dumps(genusToFamily, indent = 4)

newFile = open("genusToFamily.json", "x")
newFile.write(genusToFamily)
newFile.close()