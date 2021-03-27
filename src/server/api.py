import requests
from flask import Flask, request
app = Flask(__name__)

api_key = 'mi5qSSqdhmrNXBjLq5MBMwuqcS0q8aE4u52fwqrG8CkrBjjksgdV8ZblHdh4ThtDqQVFapfOwrCqadcTH4sJIMhQgEcWpc0bK_9ms_rJ1H-xMT1Amp4tmH_PhAg3X3Yx'

@app.route('/lowestratedparkinglots', methods=['GET'])
def get_lowest_reated_parking():
  url = 'https://api.yelp.com/v3/businesses/search'
  passed_param = request.args.get('location', 'Los Angeles')
  params = {'location': passed_param}
  headers = {'Authorization': f'Bearer {api_key}'}
  r = requests.get(url, params=params, headers=headers)
  return r.content