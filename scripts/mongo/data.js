conn = Mongo();
db = conn.getDB('perpage')

db.contact.insertMany([
  {name: 'test', mail: 'mail@mail.es', msg: 'test test test'}
])