CREATE USER 'perpage-user'@'%' IDENTIFIED BY 'qwerty';
GRANT SELECT,INSERT,UPDATE,DELETE ON perpage.* TO 'perpage-user'@'%';