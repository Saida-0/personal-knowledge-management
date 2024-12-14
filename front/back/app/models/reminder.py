from app.database import connection


def create_reminder_table():
    cursor = connection.cursor()
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS Reminder (
            reminder_id INT AUTO_INCREMENT PRIMARY KEY,
            content_id INT NOT NULL,
            user_id INT NOT NULL,
            reminder_date DATE NOT NULL,
            message TEXT,
            is_active BOOLEAN DEFAULT TRUE,
            FOREIGN KEY (content_id) REFERENCES Content(content_id) ON DELETE CASCADE,
            FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE
        )
        """
    )
    connection.commit()