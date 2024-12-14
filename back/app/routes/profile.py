import os
from flask import Blueprint, request, jsonify, send_from_directory
from werkzeug.utils import secure_filename
from app.database import connection

# Blueprint
profile_bp = Blueprint('profile', __name__)

# Upload folder configuration
UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Helper function to check allowed file extensions
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@profile_bp.route('/profile', methods=['GET'])
def get_profile():
    user_id = request.args.get('user_id')
    if not user_id:
        return jsonify({'message': 'Missing user_id parameter'}), 400

    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM User WHERE user_id = %s", (user_id,))
    user = cursor.fetchone()

    if not user:
        return jsonify({'message': 'User not found'}), 404

    return jsonify(user)


@profile_bp.route('/profile', methods=['POST'])
def update_profile():
    user_id = request.form.get('user_id')
    username = request.form.get('username')
    email = request.form.get('email')
    profile_picture = request.files.get('profile_picture')

    if not user_id:
        return jsonify({'message': 'Missing user_id parameter'}), 400

    cursor = connection.cursor()

    # Handle profile picture upload
    profile_picture_path = None
    if profile_picture and allowed_file(profile_picture.filename):
        filename = secure_filename(profile_picture.filename)
        profile_picture_path = os.path.join(UPLOAD_FOLDER, filename)
        profile_picture.save(profile_picture_path)

    # Update user in database
    query = "UPDATE User SET username = %s, email = %s"
    params = [username, email]

    if profile_picture_path:
        query += ", profile_picture = %s"
        params.append(profile_picture_path)

    query += " WHERE user_id = %s"
    params.append(user_id)

    cursor.execute(query, params)
    connection.commit()

    return jsonify({'message': 'Profile updated successfully', 'profile_picture': profile_picture_path})


@profile_bp.route('/uploads/<filename>', methods=['GET'])
def serve_file(filename):
    """
    Serve profile picture files from the uploads directory.
    """
    try:
        return send_from_directory(UPLOAD_FOLDER, filename)
    except FileNotFoundError:
        return jsonify({'message': 'File not found'}), 404
