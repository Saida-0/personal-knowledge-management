from flask import Blueprint, request, jsonify
from mysql.connector import Error
from app.database import connection

tag_bp = Blueprint('tag', __name__)

@tag_bp.route('/tags', methods=['GET'])
def get_tags():
    try:
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM Tag")
        tags = cursor.fetchall()
        return jsonify(tags), 200
    except Error as e:
        return jsonify({"error": str(e)}), 500

@tag_bp.route('/tags', methods=['POST'])
def add_tag():
    data = request.json
    name = data.get('name')

    try:
        cursor = connection.cursor()
        cursor.execute("INSERT INTO Tag (name) VALUES (%s)", (name,))
        connection.commit()
        return jsonify({"message": "Tag added successfully."}), 201
    except Error as e:
        return jsonify({"error": str(e)}), 400
