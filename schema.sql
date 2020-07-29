-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS projectX;
-- Creates the "blogger" database --
CREATE DATABASE projectX;

-- USE maze_runner_db;

-- CREATE TABLE stories(
-- story_id INT NOT NULL,
-- story_value VARCHAR(500) NOT NULL,
-- root_story boolean,
-- PRIMARY KEY(story_id)
-- );

-- CREATE TABLE choices(
-- choice_id INT NOT NULL auto_increment,
-- choice_value VARCHAR(500),
-- story_id INT,
-- PRIMARY KEY(choice_id),
-- FOREIGN KEY(story_id) REFERENCES stories(story_id)
-- );
-- //story checkpoint 
-- //adventure history (stringify array or seq with story_id)