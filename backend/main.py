from typing import Optional

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from functions import *

origins = [
    "http://localhost",
    "http://localhost:3000",
    "https://localhost:3000"
]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    response = [{"hello": "Brittany"}, {"hello": "Simon"}]
    return {"items": response}


@app.get("/simon")
def read_simon():
    response = [{"hello": "Simon"}, {"hello": "Takman"}]
    return {"items": response}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}


@app.get("/user/{number}")
def give_largest_number(number: int):
    lnumber = largestNumber(number)
    return {"number": lnumber}
