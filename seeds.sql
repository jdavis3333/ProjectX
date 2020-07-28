INSERT INTO stories(story_id, story_value) 
VALUES (1, 'Welcome to the Maze Runner. Are you ready to proceed?'),
(2, 'Head to the survival shop to get some gear, the owner only has rope and a shovel. Which one do you pick?'),
(3, "You ran into the maze and hit a fork in the road. Go right or left?");

INSERT INTO choices(choice_value, story_id) 
VALUES ("yes", 3), ("no",2)