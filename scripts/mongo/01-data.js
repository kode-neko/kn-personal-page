db = connect('mongodb://localhost/perpage');

db.contact.insertMany([
  {name: 'testrrrrr', mail: 'mail@mail.es', msg: 'test test test'}
])