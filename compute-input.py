import sys 
import json

parsed = json.loads(sys.argv[1])
print (json.dumps(parsed))