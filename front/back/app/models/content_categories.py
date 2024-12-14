from app.database import connection


def create_content_categories_table():
    cursor = connection.cursor()
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS Content_Categories (
            content_id INT NOT NULL,
            category_id INT NOT NULL,
            PRIMARY KEY (content_id, category_id),
            FOREIGN KEY (content_id) REFERENCES Content(content_id) ON DELETE CASCADE,
            FOREIGN KEY (category_id) REFERENCES Category(category_id) ON DELETE CASCADE
        )
        """
    )
    connection.commit()