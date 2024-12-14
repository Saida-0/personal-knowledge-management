from flask import Blueprint, request, jsonify
from mysql.connector import Error
from app.database import connection

reminder_bp = Blueprint('reminder', __name__)

@reminder_bp.route('/reminders', methods=['GET'])
def get_reminders():
    try:
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM Reminder")
        reminders = cursor.fetchall()
        return jsonify(reminders), 200
    except Error as e:
        return jsonify({"error": str(e)}), 500

@reminder_bp.route('/reminders', methods=['POST'])
def add_reminder():
    data = request.json
    content_id = data.get('content_id')
    reminder_date = data.get('reminder_date')
    message = data.get('message')

    try:
        cursor = connection.cursor()
        cursor.execute("INSERT INTO Reminder (content_id, reminder_date, message) VALUES (%s, %s, %s)", (content_id, reminder_date, message))
        connection.commit()
        return jsonify({"message": "Reminder added successfully."}), 201
    except Error as e:
        return jsonify({"error": str(e)}), 400
