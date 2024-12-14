from flask import Flask
from app.routes.auth import auth
from app.routes.content import content
from app.routes.category import category_bp
from app.routes.tag import tag_bp
from app.routes.version import version_bp
from app.routes.reminder import reminder_bp

from app.database import connection

def create_app():
    app = Flask(__name__)

    # Register Blueprints
    app.register_blueprint(auth, url_prefix='/api/auth')
    app.register_blueprint(content, url_prefix='/api/content')
    app.register_blueprint(category_bp, url_prefix='/api/category')
    app.register_blueprint(tag_bp, url_prefix='/api/tag')
    app.register_blueprint(version_bp, url_prefix='/api/version')
    app.register_blueprint(reminder_bp, url_prefix='/api/reminder')

    return app