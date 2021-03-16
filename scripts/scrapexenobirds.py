import requests
import json
import sys

#vars
#updates for later: allow different country?
apiQuery = "https://www.xeno-canto.org/api/2/recordings?query=cnt:United_States+type:song+q_gt:C+len:5-12"


try:
    response = requests.get(apiQuery)
except requests.exceptions.RequestException as e:  # This is the correct syntax
    print("Error reaching api:")
    raise SystemExit(e)

if response.status_code != 200:
    sys.exit("Error calling api")

response = json.loads(response.text)
birdsByGenus = {}

#for each page
for x in range(1, (response["numPages"]) + 1):
    pageResponse = requests.get(apiQuery + "&page=" + str(x))
    res = json.loads(pageResponse.text)

    #for each bird in the current page
    for i in range(0, len(res["recordings"])):
        gen = res["recordings"][i]["gen"]

        #see if we already found one of the genus
        #if so, add it to the common name array
        if birdsByGenus.get(gen) == None:
            newGenus = {gen: [res["recordings"][i]["en"]]}
            birdsByGenus.update(newGenus)

        #if its new, create a new genus and common name array
        else:
            #no repeats!
            if res["recordings"][i]["en"] in birdsByGenus.get(gen):
                continue
            updatedList = birdsByGenus.get(gen)
            updatedList.append(res["recordings"][i]["en"])
            updatedGenus = {gen: updatedList}
            birdsByGenus.update(updatedGenus)


jsonBirdsByGenus = json.dumps(birdsByGenus, indent = 4)
print(jsonBirdsByGenus)

newFile = open("birdsByGenus.json", "x")
newFile.write(jsonBirdsByGenus)
newFile.close()