conn = Mongo();
db = conn.getDB('perpage')

db.createUser({
  user: 'animalikos-admin',
  pwd: '1234',
  roles: [
    { role: 'dbOwner', db: 'perpage' }
  ]
});

db.cerateUser({
  user: 'animalikos-user',
  pwd: 'qwerty',
  roles: [
    { role: 'readWrite', db: 'perpage' }
  ]
});
