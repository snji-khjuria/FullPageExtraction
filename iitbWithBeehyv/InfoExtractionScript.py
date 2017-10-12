import re
import cgi
import sys
import json
import os
def loadIntoPatternsStore(patternsStore, line):
    components = line.split("\t")
    groupId = components[0]
    websiteName = components[1]
    patternType = components[2]
    missed = int(components[3])
    junk = int(components[4])
    total = int(components[5])
    leftPattern = components[6]
    rightPattern = components[7]

    if groupId in patternsStore:
        (websiteName, patternType, missed, junk, total, patterns) = patternsStore[groupId]
        patterns.append((leftPattern, rightPattern))
    else:
        patternsStore[groupId] = (websiteName, patternType, missed, junk, total, [(leftPattern, rightPattern)])
def readProductPatternStore(fileLocation):
    patternsStore = {}
    index=0
    with open(fileLocation) as f:
        for line in f: 
            if index==0:
                index=1
                continue
            line = line.strip() #or some other preprocessing
            loadIntoPatternsStore(patternsStore, line)
#             print("line is " + line)
    output = []
    for (k, v) in patternsStore.items():
        output.append(v)
    return output
# patternsStore = readProductPatternStore(productPatternsLocation)



def loadRelationIntoPatternsStore(patternsStore, line):
    components = line.split("\t")
    groupId = components[0]
    websiteName = components[1]
    patternType = components[2]
    missed = int(components[3])
    junk = int(components[4])
    total = int(components[5])
    leftPattern = components[6]
    middlePattern = components[7]
    rightPattern = components[8]

    if groupId in patternsStore:
        (websiteName, patternType, missed, junk, total, patterns) = patternsStore[groupId]
        patterns.append((leftPattern, middlePattern, rightPattern))
    else:
        patternsStore[groupId] = (websiteName, patternType, missed, junk, total, [(leftPattern, middlePattern, rightPattern)])


def readRelationPatternStore(fileLocation):
    patternsStore = {}
    index=0
    with open(fileLocation) as f:
        for line in f: 
            if index==0:
                index=1
                continue
            line = line.strip() #or some other preprocessing
            loadRelationIntoPatternsStore(patternsStore, line)
#             print("line is " + line)
    output = []
    for (k, v) in patternsStore.items():
        output.append(v)
    return output

def mergePatternsGroup(p1, p2, p3):
    p1.extend(p2)
    p1.extend(p3)
    return p1
            
def writePatternsToFile(fileLocation, productPatterns):
    header = "GroupId\tWebsiteName\tPatternType\tMissed\tJunk\tOutof\tLeftPattern\tRightPattern"
    groupId = 1
    output = []
    output.append(header)
    for (website, pType, missed, junk, total, patterns) in productPatterns:
        rowPrefix = str(groupId) + "\t" + website + "\t" + pType
        rowPrefix+="\t" + str(missed) + "\t" + str(junk) + "\t" + str(total)
        for (l, r) in patterns:
            row = rowPrefix + "\t" + l + "\t" + r
            output.append(row)
        groupId+=1
#     print("output is ")
#     for item in output:
#         print(item)
    writeListToFile(fileLocation, output)
    print("Output written at location: " + fileLocation)
    
    
def writeListToFile(loc, l):
    with open(loc, 'w') as f:
        for item in l:
            f.write(item+"\n")

def doProcessingWithoutClass(s, regExpIn, regExpOut):
    allManaged =  re.sub(regExpIn, regExpOut, s)
    removeQuoteIn = r'"[^"]*"'
    removeQuoteOut = r'""'
    return re.sub(removeQuoteIn, removeQuoteOut, allManaged)


# def doProcessingWithoutClass(s):
#     i = "class[\s]*=[\s]*"
#     o       = "class="
#     s = re.sub(i, o, s)
#     i = "([^class])=\"[^\"]*\""
#     o = "\\1=\"\""
#     return re.sub(i, o, s)

#read the page from pageLocation
def readPage(pageLocation):
    htmlPageContent = ""
    with open(pageLocation, 'r') as myfile:
        htmlPageContent = myfile.read().strip()
    return htmlPageContent


#remove elements which were actually tag
def isTag(s):
    if s.find("<")!=-1 and s.find(">")!=-1:
        return True
    return False


#preprocess results before writing it to file
def preprocessResults(output):
    result = []
    for o in output:
        if isTag(o):
            continue
        result.append(o)
    return result

#document processing logic at this stage is about removing multiple whitespaces into single one 
def preprocessDocument(document):
    return ' '.join(document.split())



#Pattern is (l, r) and match them to htmlPageContent
def findEntitySetwrtPattern(htmlPageContent, (l, r)):
    #for each start location of pattern find its end
    #for each end page find the pattern right
    #extract everything till that point
    #after extraction move one point above that pattern string
    results = []
    for m in re.finditer(re.escape(l), htmlPageContent):
        start = m.start()
        end = m.end()
        rightPage = htmlPageContent[end:]
        rightLoc  = rightPage.find(r)
        if rightLoc==-1:
            break
        element = rightPage[:rightLoc]
        if len(element)>1 and len(element)<300:
            results.append(element)
    return set(results)

def createRegExpFromWordStr(wordsStr):
#     wordsStr = getWordsStr(words)
#     print("wordsstr is " + wordsStr)
    return ("(" + wordsStr +")[\s]*=[\s]*\"([^\"]*)\"", "\\1=\\2")

def getRegExpForMatch(patternType):
    words = patternType.split("_")
    wordStr = words[1]
    return createRegExpFromWordStr(wordStr)

def extractSet(patterns, htmlPageContent):
    output = []
    for pattern in patterns:
        output.extend(findEntitySetwrtPattern(htmlPageContent, pattern))
    return set(output)

def applyPatternsToPageLocation(patternsStore, inputPageLocation, websitesPatternApplicable):
#     patternsStore      = readProductPatternStore(patternsFileLocation)
    plainPageContent   = preprocessDocument(readPage(inputPageLocation))
    results = []
    for pattern in patternsStore:
        (websiteName, patternType, missed, junk, total, lrPatterns) = pattern
        if patternType=="plainPattern":
            pageContent = plainPageContent
        else:
            (regExpIn, regExpOut) = getRegExpForMatch(patternType)
            noValuePageContent = doProcessingWithoutClass(plainPageContent, regExpIn, regExpOut)
            pageContent = noValuePageContent
        resultsPerPattern = preprocessResults(list(extractSet(lrPatterns, pageContent)))
        if (len(resultsPerPattern)>0):
            results.extend(resultsPerPattern)
            if not websiteName in websitesPatternApplicable:
                websitesPatternApplicable.add(websiteName)
#             results.append((websiteName, resultsPerPattern, missed, junk, total))
#         print(resultsPerPattern)
    return list(set(results))


#Pattern is (l, m, r) and match them to htmlPageContent
def findRelationSetwrtPattern(htmlPageContent, (l, mid, r)):
    #for each start location of pattern find its end
    #for each end page find the pattern right
    #extract everything till that point
    #after extraction move one point above that pattern string
    results = []
    for m in re.finditer(re.escape(l), htmlPageContent):
        start = m.start()
        end = m.end()
        rightPage = htmlPageContent[end:]
        rightLoc  = rightPage.find(r)
        if rightLoc==-1:
            break
        substr = rightPage[:rightLoc]
#         print("substr is " + substr)
        mLoc = substr.find(mid)
#         print("mloc is " + str(mLoc))
        if mLoc==-1:
            continue
        e1 = substr[:mLoc].strip()
        e2 = substr[mLoc+len(mid):].strip()
#         print(e1)
#         print(e2)
        if len(e1)>1 and len(e2)>=1 and len(e1)<100 and len(e2)<500:
#             print("Appending " + str((e1, e2)))
            results.append((e1, e2))
    return set(results)



#input: all the pattern found and new html page
#output: extract set of elements from the page that are in our set(whose definition we know)
def extractRelationSet(patterns, htmlPageContent):
    output = []
    for pattern in patterns:
        output.extend(findRelationSetwrtPattern(htmlPageContent, pattern))
    return output

#remove elements which were actually tag
def isTagPair((a,b)):
    if a.find("<")!=-1 and a.find(">")!=-1 and b.find("<")!=-1 and b.find(">")!=-1:
        return True
    return False


#preprocess results before writing it to file
def preprocessRelationResults(output):
    result = []
    for o in output:
        if isTagPair(o):
            continue
        result.append(o)
    return result

def prefixStatus((l1, r1), (l2, r2)):
    if (l1.startswith(l2) or l1.endswith(l2)) and len(l1)>len(l2):
        if r1==r2:
            l1 = l1.split(" ")
            if l1[len(l1)-1]!=l2:
                return True
    return False


def removeJunk(s):
    l = list(s)
    total = len(l)
    output = []
    for index in range(0, total):
        flag=True
        for j in range(0, total):
            if index==j:
                continue
            if prefixStatus(l[index], l[j]):
                flag=False
        if flag==True:
            output.append(l[index])
    return output

def applyRelationPatternsToPageLocation(patternsStore, inputPageLocation, websitesPatternApplicable):
#     patternsStore      = readProductPatternStore(patternsFileLocation)
    plainPageContent   = preprocessDocument(readPage(inputPageLocation))
    results = []
    for pattern in patternsStore:
        (websiteName, patternType, missed, junk, total, lmrPatterns) = pattern
        if patternType=="plainPattern":
            pageContent = plainPageContent
        else:
            (regExpIn, regExpOut) = getRegExpForMatch(patternType)
            noValuePageContent = doProcessingWithoutClass(plainPageContent, regExpIn, regExpOut)
            pageContent = noValuePageContent
        resultsPerPattern = preprocessRelationResults(list(extractRelationSet(lmrPatterns, pageContent)))
        if (len(resultsPerPattern)>0):
            results.extend(resultsPerPattern)
            if not websiteName in websitesPatternApplicable:
                websitesPatternApplicable.add(websiteName)
#             results.append((websiteName, resultsPerPattern, missed, junk, total))
#         print(resultsPerPattern)
    return list(set(removeJunk(results)))






def preprocessCategories(categories, productNames):
    if "Home" in categories:
        categories.remove("Home")
    if len(productNames)==1:
        if productNames[0] in categories:
            categories.remove(productNames[0])
    return categories


def getHtmlHeader():
    return "<html><head><style>\nh1 {background-color:#C4C5F4;}\n\
            tr:nth-child(even) {\n\
             background-color: #dddddd;\n\
             }\n\
             body{\n\
                  padding-bottom:40px;\n\
		}\n\
            table, tr, td {\n\
            border-collapse: collapse;\n\
            border: 1px solid black;\n\
            }\n\
            #footer{\n\
            background-color:#0493B2;\n\
            text-align: center;\n\
            position:fixed;\n\
            bottom:0;\n\
            left:0;\n\
            width:100%;\n\
            }\n\
            </style></head><body bgcolor=\"#DAF7A6\">\n\
            <img src=\"/home/sanjeevk/Desktop/Beehyv/repos/iitbWithBeehyv/htmlBlitData/beehyvLogo.png\" alt=\"Beehyv Technologies\" style=\"width:100%;height:200px;\">"

def getJavaScript():
    return "<script>\n\
function myDisplayFunction(elt) {\n\
    var x = document.getElementById(elt);\n\
    if (x.style.display === \"none\") {\n\
        x.style.display = \"block\";\n\
    } else {\n\
        x.style.display = \"none\";\n\
    }\n\
}\n\
</script>"


def removeTerminatedAnd(s):
    return re.sub("&amp;", "&", s)

def getHtmlFooter():
    return "<footer id=\"footer\"><font color=\"red\"><b>Powered by IIT BOMBAY</b></font></footer></body>"+getJavaScript()+"</html>"


def getTabularInfo(title, count, divId, items):
    items = list(items)
    output = "<h1 onclick=myDisplayFunction(\""+divId+"\")><font color=\"green\">"+ title +" (" + count + ")</font>"+"</h1>"
    output+="<div id="+divId+" style=\"display:none;\">"
    if len(items)==0:
        output+="Failed to extract this section"
        output+="</div>"
        return output
    output+="<table align=\"center\">"
    for (k, v) in items:
        output+="<tr>"
        k = removeTerminatedAnd(k)
        v = removeTerminatedAnd(v)
        output+="<td><font color=\"blue\" size=5px><xmp>"+k+"</xmp></font></td><td><font color=\"blue\" size=5px><xmp>"+v+"</xmp></font></td>"
        output+="</tr>"
    output+="</table></div>"
    return output
    
def applyProductFiltering(s):
    s = list(s)
    if len(s)==2:
        if len(s[0])>len(s[1]):
            return set([s[1]])
        else:
            return set([s[0]])
    else:
        return set(s)

def getHtmlSection(title, count, divId, items):
    items = list(items)
    output = "<h1 onclick=myDisplayFunction(\""+divId+"\")><font color=\"green\">"+ title +" (" + count + ")</font>"+"</h1>"
    output+="<div id="+divId+" style=\"display:none;\">"
    if len(items)==0:
        output+="Failed to extract this section"
        output+="</div>"
        return output    
    output+="<ul>"
    for item in items:
        item = removeTerminatedAnd(item)
        output+="<font size=5px color=\"blue\"><li background-color:><xmp>"+item+"</xmp></li></font>"
    output+="</ul></div></hr>"
    return output

def doExtraction(inputPageLocation, productNameFiltering=False):
    patternsLocation = "patterns"
    productNameLoc     = patternsLocation + "/ProductPatterns.tsv"
    categoriesLoc      = patternsLocation + "/categoryPatterns.tsv"
#     firstCategoriesLoc = patternsLocation + "/firstCategories.tsv"
#     lastCategoriesLoc  = patternsLocation + "/lastCategories.tsv"
    specLoc            = patternsLocation + "/specs.tsv"
    firstSpecLoc       = patternsLocation + "/firstSpecs.tsv"
    lastSpecLoc        = patternsLocation + "/lastSpecs.tsv"
    relationLoc        = patternsLocation + "/tablePatterns.tsv"
    productNamePatternsGroup = readProductPatternStore(productNameLoc)
    categoriesPatternsGroup  = readProductPatternStore(categoriesLoc)
#     catFirstPatternsGroup    = readProductPatternStore(firstCategoriesLoc)
#     catLastPatternsGroup     = readProductPatternStore(lastCategoriesLoc)
    specLocPatternsGroup     = readProductPatternStore(specLoc)
    specFirstPatternsGroup   = readProductPatternStore(firstSpecLoc)
    specLastPatternsGroup    = readProductPatternStore(lastSpecLoc)
    relationsPatternGroup    = readRelationPatternStore(relationLoc)
    websitesPatternApplicable = set([])
    mergedCategoryGroup = categoriesPatternsGroup
#     mergedCategoryGroup      = mergePatternsGroup(categoriesPatternsGroup, catFirstPatternsGroup, catLastPatternsGroup)
    mergedSpecGroup          = mergePatternsGroup(specLocPatternsGroup, specFirstPatternsGroup, specLastPatternsGroup)
    productNames = applyPatternsToPageLocation(productNamePatternsGroup, inputPageLocation, websitesPatternApplicable)
    if productNameFiltering==True:
        productNames = applyProductFiltering(productNames)
    categories   = applyPatternsToPageLocation(mergedCategoryGroup, inputPageLocation, websitesPatternApplicable)
    categories   = preprocessCategories(categories, list(productNames))
    specs        = applyPatternsToPageLocation(mergedSpecGroup, inputPageLocation, websitesPatternApplicable)
    tabularInfo  = applyRelationPatternsToPageLocation(relationsPatternGroup, inputPageLocation, websitesPatternApplicable)
    tabularInfo  = list(set(tabularInfo))
    #output = []
    #output.extend(("productName", productNames))
    #output.extend(("productCategories", categories))
    #output.extend(("specs", specs))
    output = getHtmlHeader()
    sitesCount = str(len(list(websitesPatternApplicable)))
    output += getHtmlSection("Patterns Belong to Following Websites", sitesCount, "site", websitesPatternApplicable)
    productNamesCount  = str(len(list(productNames)))
    output += getHtmlSection("ProductName", productNamesCount, "productName", productNames)
    categoryCount = str(len(list(categories)))
    output += getHtmlSection("Categories", categoryCount, "category", categories)
    specsCount = str(len(list(specs)))
    output += getHtmlSection("Specs", specsCount, "specs", specs)
    tabularSection = getTabularInfo("Detailed Description", str(len(tabularInfo)), "specTable", tabularInfo)
#     print("Tabular section is")
    if len(tabularInfo)>0:
        output+=tabularSection
    output += getHtmlFooter()
    return output

#    return json.dumps(output)
    #print("Product names: ")
    #print(productNames)
    #print("Categories: ")
    #print(categories)
    #print("Specs: ")
    #print(specs)
def getAllDirectoriesInLocation(loc):
    listOfSubDir = [loc+"/"+f for f in os.listdir(loc)]
    return listOfSubDir

def writeOutputToFile(location, data):
    text_file = open(location, "w")
    text_file.write(data)
    text_file.close()


def doExtractionOnDirectory(directoryLocation, outputFileName, flag):
    allDirs = getAllDirectoriesInLocation(directoryLocation)
    for d in allDirs:
        print("Processing " + d +"...")
        inputLocation = d+"/page.html"
        outputLocation = d+"/output.html"
        data = doExtraction(inputLocation, flag)
        writeOutputToFile(outputLocation, data)
    print("Number of files Processed " + str(len(allDirs)))
#     print("all dirs are ")
#     print(allDirs)
    
# doExtraction("unseenDocs/page.html")
#if __name__ == "__main__":
#     print doExtraction(sys.argv[1])
directoryLocation = sys.argv[1]
outputLocation    = sys.argv[2]
if len(sys.argv)==4:
    flag = True
else:
    flag = False
#print("Flag is " + str(flag))
doExtractionOnDirectory(directoryLocation, outputLocation, flag)
