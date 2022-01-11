import psycopg2

class DataAccess:
    def __init__(self):
        __conn = None
        __cur = None

    def connect():
        __conn = psycopg2.connect("dbname=klass_test user=postgres password=postgres")
        __cur = __conn.cursor()
        # execute a statement
        print('PostgreSQL database version:')
        cur.execute('SELECT version()')



    def login():
        pass

    def signup():
        pass

if __name__ == "__main__":
    connect()
