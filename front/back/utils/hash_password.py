import bcrypt
def hash_password(password):
    """Hash a password for storing."""
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode(), salt)

def check_password(password, hashed):
    """Check hashed password."""
    return bcrypt.checkpw(password.encode(), hashed)