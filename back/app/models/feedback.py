from app.database import connection


def create_feedback_table():
    cursor = connection.cursor()
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS Rating_Feedback (
            feedback_id INT AUTO_INCREMENT PRIMARY KEY,
            content_id INT NOT NULL,
            user_id INT NOT NULL,
            rating INT CHECK (rating BETWEEN 1 AND 5),
            feedback TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (content_id) REFERENCES Content(content_id) ON DELETE CASCADE,
            FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE
        )
        """
    )
    connection.commit()