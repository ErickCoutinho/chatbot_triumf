from langchain_core.chat_history import InMemoryChatMessageHistory
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_openai import ChatOpenAI
from dotenv import load_dotenv
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
prompt_path = os.path.join(BASE_DIR, "prompts", "system_prompt.txt")

with open(prompt_path, "r", encoding="utf-8") as f:
    system_prompt = f.read()

load_dotenv(os.path.join(BASE_DIR, ".env"))

# Modelo
model = ChatOpenAI(model="gpt-3.5-turbo")

# Memória
memory = InMemoryChatMessageHistory(session_id="test-session")

# Prompt personalizado
prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system", system_prompt
        ),
        ("placeholder", "{chat_history}"),
        ("human", "{input}"),
    ]
)

# Executor simples (sem agent nem tools)
chat_chain = prompt | model

# Encapsula com memória
chat_with_memory = RunnableWithMessageHistory(
    chat_chain,
    lambda session_id: memory,
    input_messages_key="input",
    history_messages_key="chat_history",
)


def process_input(query):
    config = {"configurable": {"session_id": "test-session"}}
    return chat_with_memory.invoke({"input": query}, config).content


"""if __name__ == "__main__":
    print("Chat iniciado com Erick (Triumf). Digite 'sair' para encerrar.\n")
    while True:
        user_input = input("Cliente: ")
        if user_input.lower() in ["sair", "exit", "quit"]:
            print("Erick: Valeu! Qualquer coisa, chama.")
            break
        resposta = process_input(user_input)
        print("Erick:", resposta, "\n")"""
