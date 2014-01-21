import csv
import json

f = open( 'data1.tsv', 'r')
reader = csv.DictReader( f, fieldnames = ( "date","temp","cond","press" ),delimiter='\t' )
out = json.dumps( [ row for row in reader ] )
print out
