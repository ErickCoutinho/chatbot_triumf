# chatbot/chat_api.py
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from chatbot.main import process_input

app = FastAPI()

# Liberar CORS para o front
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ou defina o endereço do front: ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatMessage(BaseModel):
    message: str


@app.post("/chat")
async def chat_endpoint(chat_message: ChatMessage):
    response = process_input(chat_message.message)
    return {"response": response}
