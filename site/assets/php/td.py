
import MySQLdb
from summa import summarizer
from summa import keywords
import re
from google import google

def uppercase(matchobj):
    return matchobj.group(0).upper()

def capitalize(s):
    return re.sub('^([a-z])|[\.|\?|\!]\s*([a-z])|\s+([a-z])(?=\.)', uppercase, s)



db=MySQLdb.connect(user="root",passwd="",db="euler",unix_socket="/opt/lampp/var/mysql/mysql.sock")

cursor = db.cursor()

cursor.execute("SELECT id FROM notes ORDER BY time DESC LIMIT 1")

blog_id = int(cursor.fetchone()[0])

cursor.execute("SELECT title FROM notes ORDER BY time DESC LIMIT 1")

title = cursor.fetchone()[0]

cursor.execute("SELECT data FROM notes ORDER BY time DESC LIMIT 1")

text = cursor.fetchone()[0]

text = capitalize(text)
key_str = ""
sum_str = ""

try :
    sumi = summarizer.summarize(text, ratio=0.3, split = True)
    
    for i in sumi:
        sum_str += i
        sum_str += " "

except:

    pass


try:

    key =  keywords.keywords(text, split = True)[:10]
    
    for i in key:
        key_str += i
        key_str += " "


except:

    pass


query = title + " " + key_str
num_page = 1
search_results = google.search(query, num_page)
rate = len(search_results)
for result in search_results:
    hotline = str(result.link)
    try:
        cursor.execute("INSERT INTO links values ('%s', '%d', '%d', NULL)" % (hotline, rate, blog_id))
        db.commit()
        rate-=1
        
    except:
        print "kata"
        pass

try:
    cursor.execute("UPDATE notes SET data = '%s' ORDER BY time DESC LIMIT 1" % text)
    db.commit()
except:
    pass


try:
    cursor.execute("UPDATE notes SET keywords = '%s' ORDER BY time DESC LIMIT 1" % key_str)
    db.commit()
except:
    pass

try:
    cursor.execute("UPDATE notes SET summary = '%s' ORDER BY time DESC LIMIT 1" % sum_str)
    db.commit()
except:
    pass

db.close()
#print r.get_ranked_phrases()[:10]"""



