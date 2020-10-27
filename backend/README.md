## Installation
Install python3:
https://www.python.org/downloads/release/python-390/
Click on the macOS 64-bit installer

Install needed python3 dependencies:
`pip3 install -r requirements.txt`

## Start
To run the app:
`uvicorn main:app --reload`

## Test API

To test:
`curl --location --request GET 'http://localhost:8000/bmi/45/145'`


## Sources
- https://fastapi.tiangolo.com/
