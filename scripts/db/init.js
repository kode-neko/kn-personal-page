conn = Mongo();
db = conn.getDB('perpage');

db.contact.insertMany([{
  name: 'test',
  mail: 'test@test.es',
  msg: 'test test test'
}])

db.createUser({
  user: 'perpage-admin',
  pwd: '1234',
  roles: [
    { role: 'dbOwner', db: 'perpage' }
  ]
});
db.createUser({
  user: 'perpage-user',
  pwd: '1234',
  roles: [
    { role: 'readWrite', db: 'perpage' }
  ]
})