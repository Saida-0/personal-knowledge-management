from app.database import connection


def create_version_table():
    cursor = connection.cursor()
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS Version (
            version_id INT AUTO_INCREMENT PRIMARY KEY,
            content_id INT NOT NULL,
            version_number INT NOT NULL,
            content_text TEXT NOT NULL,
            modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            modified_by INT,
            FOREIGN KEY (content_id) REFERENCES Content(content_id) ON DELETE CASCADE,
            FOREIGN KEY (modified_by) REFERENCES User(user_id) ON DELETE SET NULL
        )
        """
    )
    connection.commit()