from app.database import connection


def create_link_table():
    cursor = connection.cursor()
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS Link (
            link_id INT AUTO_INCREMENT PRIMARY KEY,
            content_id INT NOT NULL,
            linked_content_id INT NOT NULL,
            FOREIGN KEY (content_id) REFERENCES Content(content_id) ON DELETE CASCADE,
            FOREIGN KEY (linked_content_id) REFERENCES Content(content_id) ON DELETE CASCADE
        )
        """
    )
    connection.commit()