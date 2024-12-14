from flask import Flask,jsonify, request

from flask_cors import CORS
from app.routes.auth import auth
from app.routes.content import content
from app.routes.category import category_bp
from app.routes.tag import tag_bp
from app.routes.version import version_bp
from app.routes.reminder import reminder_bp
from app.routes.profile import profile_bp


app = Flask(__name__)
CORS(app)

# Register Blueprints
app.register_blueprint(auth, url_prefix='/api/auth')
app.register_blueprint(profile_bp, url_prefix='/api/user')
app.register_blueprint(content, url_prefix='/api/content')
app.register_blueprint(category_bp, url_prefix='/api/categories')
app.register_blueprint(tag_bp, url_prefix='/api/tags')
app.register_blueprint(version_bp, url_prefix='/api/versions')
app.register_blueprint(reminder_bp, url_prefix='/api/reminders')
@app.route('/')
def home():
    return jsonify({'message': 'Welcome to the Flask MySQL API!'})

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
