import mysql.connector
from mysql.connector import Error

def create_connection():
    """
    Establishes and returns a connection to the database.
    """
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="root",
            password="Str0ngP@ssw0rd!",
            database="personal_knowledge_management"
        )
        if connection.is_connected():
            print("Database connection successful")
            return connection
    except Error as e:
        print(f"Error: {e}")
        return None

connection = create_connection()
