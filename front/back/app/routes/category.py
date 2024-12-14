from flask import Blueprint, request, jsonify
from mysql.connector import Error
from app.database import connection

category_bp = Blueprint('category', __name__)

@category_bp.route('/categories', methods=['GET'])
def get_categories():
    try:
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM Category")
        categories = cursor.fetchall()
        return jsonify(categories), 200
    except Error as e:
        return jsonify({"error": str(e)}), 500

@category_bp.route('/categories', methods=['POST'])
def add_category():
    data = request.json
    name = data.get('name')
    description = data.get('description')

    try:
        cursor = connection.cursor()
        cursor.execute("INSERT INTO Category (name, description) VALUES (%s, %s)", (name, description))
        connection.commit()
        return jsonify({"message": "Category added successfully."}), 201
    except Error as e:
        return jsonify({"error": str(e)}), 400