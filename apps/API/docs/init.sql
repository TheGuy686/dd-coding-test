-- Create the user 'user' with password 'user' for localhost and all hosts (%)
-- CREATE USER IF NOT EXISTS 'user'@'localhost' IDENTIFIED BY 'user';
-- CREATE USER IF NOT EXISTS 'user'@'%' IDENTIFIED BY 'user';

-- -- Grant all privileges to the user 'darkside_code_test' for localhost and all hosts (%)
-- GRANT ALL ON *.* TO 'darkside_code_test'@'localhost';
-- GRANT ALL ON *.* TO 'darkside_code_test'@'%';

-- -- Create the user 'user' for localhost without granting privileges
-- CREATE USER IF NOT EXISTS 'user'@'localhost' IDENTIFIED BY 'user';

-- -- Grant all privileges to the user 'user' for localhost
-- GRANT ALL PRIVILEGES ON *.* TO 'user'@'localhost';
-- FLUSH PRIVILEGES;

-- -- Create the database 'darkside_code_test' if it doesn't exist
CREATE DATABASE IF NOT EXISTS `darkside_code_test`;

-- -- Set the SQL mode globally and for the current session
-- SET GLOBAL sql_mode = 'NO_ENGINE_SUBSTITUTION';
-- SET SESSION sql_mode = 'NO_ENGINE_SUBSTITUTION';

-- -- Flush privileges to apply changes
-- FLUSH PRIVILEGES;

-- Use the 'darkside_code_test' database
USE `darkside_code_test`;
