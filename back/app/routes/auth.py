from flask import Blueprint, request, jsonify
from utils.hash_password import hash_password, check_password
from app.models.user import create_user_table
from app.database import connection
from mysql.connector import Error



auth = Blueprint('auth', __name__)

@auth.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    hashed_password = hash_password(password)

    try:
        cursor = connection.cursor()
        cursor.execute(
            "INSERT INTO User (username, email, password_hash) VALUES (%s, %s, %s)",
            (username, email, hashed_password)
        )
        connection.commit()
        return jsonify({"message": "User registered successfully."}), 201
    except Error as e:
        return jsonify({"error": str(e)}), 400

@auth.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM User WHERE email = %s", (email,))
    user = cursor.fetchone()

    if user and check_password(password, user['password_hash'].encode()):
        return jsonify({"message": "Login successful.", "user": user}), 200
    else:
        return jsonify({"error": "Invalid credentials."}), 401
