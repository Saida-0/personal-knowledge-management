from app.database import connection


def create_tag_table():
    cursor = connection.cursor()
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS Tag (
            tag_id INT AUTO_INCREMENT PRIMARY KEY,
            tag_name VARCHAR(50) NOT NULL UNIQUE
        )
        """
    )
    connection.commit()