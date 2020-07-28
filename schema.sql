-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS maze_runner_db;
-- Creates the "blogger" database --
CREATE DATABASE maze_runner_db;

USE maze_runner_db;

CREATE TABLE stories(
story_id INT NOT NULL auto_increment,
story_value VARCHAR(500) NOT NULL,
root_story boolean,
PRIMARY KEY(story_id)
);

CREATE TABLE choices(
choice_id INT NOT NULL auto_increment,
choice_value VARCHAR(500),
story_id INT,
PRIMARY KEY(choice_id),
FOREIGN KEY(story_id) REFERENCES stories(story_id)
);