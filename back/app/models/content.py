from app.database import connection


def create_content_table():
    cursor = connection.cursor()
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS Content (
            content_id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            content_type ENUM('note', 'article', 'resource') NOT NULL,
            content_text TEXT,
            summary TEXT,
            url VARCHAR(255),
            pdf_path VARCHAR(255),
            pdf_metadata JSON,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
        """
    )
    connection.commit()