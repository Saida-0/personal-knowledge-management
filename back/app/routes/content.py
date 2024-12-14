from flask import Blueprint, request, jsonify
from app.database import connection


content = Blueprint('content', __name__)

@content.route('/list', methods=['GET'])
def get_content_list():
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM Content")
    contents = cursor.fetchall()
    return jsonify(contents)

@content.route('/add', methods=['POST'])
def add_content():
    data = request.json
    title = data.get('title')
    content_type = data.get('content_type')
    content_text = data.get('content_text')
    summary = data.get('summary')
    url = data.get('url')

    cursor = connection.cursor()
    cursor.execute(
        """
        INSERT INTO Content (title, content_type, content_text, summary, url)
        VALUES (%s, %s, %s, %s, %s)
        """,
        (title, content_type, content_text, summary, url)
    )
    connection.commit()
    return jsonify({"message": "Content added successfully."}), 201
