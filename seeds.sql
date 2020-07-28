INSERT INTO stories(story_id, story_value) 
VALUES 
(1, 'Welcome to the Maze. Your main objective is to survive and escape. Be aware that each of your choices will affect your chances. Are you ready to proceed?'),
(2, 'You are heading to the survival shop to get some gear. The owner only has rope and a shovel. Which one do you pick?'),
(3, "You ran into the maze enthusiastically and hit a fork in the road. To your right is a foggy corridor, and to the left you hear a loud noise. Which way do you choose? Noise or fog?"),
(4, "The rope is too short! Do you want to jump? Or do you want to go back to the shop for more tools?"),
(5, "After leaving the shop, an old man saw your shovel and approach to asks for your help. He wants you to help dig up 'his' buried treasure. Will you help?"),
(6, "The fog is getting thicker. Are you sure you want to continue? Of course you do! As you continue, the fog dissipates and you almost fell into a hole! What do you want to do?"),
(7, "You turned the corner and fell into a swamp! What do you want to do?"),
(8, "You finally enter the maze and see a ladder straight ahead of you and a brigh light to your left. Follow the bright light or climb the ladder?"),
(9, "The old man leads you into a canyon and suddenly grabs your shovel and hits you with it. Your vision starts to fade, and you start seeing your deceased grandpa."),
(10, "You keep on sinking further and further..."),
(11, "You were eaten by an alligator or a crocodile, your choice, either way you were eaten.");


INSERT INTO choices(choice_value, story_id) 
VALUES 
("yes", 3), 
("Left",6), ("Right", 7), 
("Ehh. Let's find another way", null), ("Jump!", null),
 ("Climb out", 10), ("Swim to the other side", 11);

INSERT INTO choices (choice_value, story_id)
VALUES
("no",2),
("Rope", 4), ("Shovel", 5),
("Jump", null), ("go back to the shop", null),
("Leave him and head for the maze", 8), ("Help him", 9);