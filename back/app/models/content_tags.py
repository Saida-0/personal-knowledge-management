from app.database import connection


def create_content_tags_table():
    cursor = connection.cursor()
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS Content_Tags (
            content_id INT NOT NULL,
            tag_id INT NOT NULL,
            PRIMARY KEY (content_id, tag_id),
            FOREIGN KEY (content_id) REFERENCES Content(content_id) ON DELETE CASCADE,
            FOREIGN KEY (tag_id) REFERENCES Tag(tag_id) ON DELETE CASCADE
        )
        """
    )
    connection.commit()