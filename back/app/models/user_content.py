from app.database import connection


def create_user_content_table():
    cursor = connection.cursor()
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS User_Content (
            user_content_id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            content_id INT NOT NULL,
            role ENUM('owner', 'collaborator', 'viewer') DEFAULT 'viewer',
            FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE,
            FOREIGN KEY (content_id) REFERENCES Content(content_id) ON DELETE CASCADE
        )
        """
    )
    connection.commit()