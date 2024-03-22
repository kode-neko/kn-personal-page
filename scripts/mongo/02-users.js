db = connect( 'mongodb://localhost' );

db.createUser({
  user: 'perpage-admin',
  pwd: '1234',
  roles: [
    { role: 'dbOwner', db: 'perpage' }
  ]
});

db.createUser({
  user: 'perpage-user',
  pwd: 'qwerty',
  roles: [
    { role: 'readWrite', db: 'perpage' }
  ]
});
