from app.database import connection


def create_attachment_table():
    cursor = connection.cursor()
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS Attachment (
            attachment_id INT AUTO_INCREMENT PRIMARY KEY,
            content_id INT NOT NULL,
            file_path VARCHAR(255) NOT NULL,
            file_type ENUM('pdf', 'image', 'doc') NOT NULL,
            uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (content_id) REFERENCES Content(content_id) ON DELETE CASCADE
        )
        """
    )
    connection.commit()