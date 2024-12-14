from flask import Blueprint, request, jsonify
from mysql.connector import Error
from app.database import connection

version_bp = Blueprint('version', __name__)

@version_bp.route('/versions', methods=['GET'])
def get_versions():
    try:
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM Version")
        versions = cursor.fetchall()
        return jsonify(versions), 200
    except Error as e:
        return jsonify({"error": str(e)}), 500

@version_bp.route('/versions', methods=['POST'])
def add_version():
    data = request.json
    content_id = data.get('content_id')
    version_data = data.get('version_data')

    try:
        cursor = connection.cursor()
        cursor.execute("INSERT INTO Version (content_id, version_data) VALUES (%s, %s)", (content_id, version_data))
        connection.commit()
        return jsonify({"message": "Version added successfully."}), 201
    except Error as e:
        return jsonify({"error": str(e)}), 400
