import os
def getAllDirectoriesInLocation(loc):
    listOfSubDir = [loc+"/"+f for f in os.listdir(loc)]
    return listOfSubDir

def removeAllFilessNamed(directory, fileName):
    subdirs = getAllDirectoriesInLocation(directory)
    for d in subdirs:
        fname = d+"/"+fileName
        os.remove(fname)
#         deletefile(fname)
        print("deleted " + fname)
    print("Everything is deleted")
    
removeAllFilessNamed("testingData", "output.html")
