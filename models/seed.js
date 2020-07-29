// const Stories = require('./stories');
// const Choices = require('./choices');

// const seed = () => {
//     return Promise.all([
//         Stories.create({ story_id: 1, story_value: 'Welcome to the Maze. Your main objective is to survive and escape. Be aware that each of your choices will affect your chances. Are you ready to proceed?' }),
//         Stories.create({ story_id: 2, story_value: 'You are heading to the survival shop to get some gear. The owner only has rope and a shovel. Which one do you pick?' }),
//         Stories.create({ story_id: 3, story_value: 'You ran into the maze enthusiastically and hit a fork in the road. To your right is a foggy corridor, and to the left you hear a loud noise. Which way do you choose? Noise or fog?' }),
//         Stories.create({ story_id: 4, story_value: 'The rope is too short! Do you want to jump? Or do you want to go back to the shop for more tools?' }),
//         Stories.create({ story_id: 5, story_value: "After leaving the shop, an old man saw your shovel and approach to asks for your help. He wants you to help dig up his buried treasure. Will you help?" }),
//         Stories.create({ story_id: 6, story_value: 'The fog is getting thicker. Are you sure you want to continue? Of course you do! As you continue, the fog dissipates and you almost fell into a hole! What do you want to do?' }),
//         Stories.create({ story_id: 7, story_value: 'You turned the corner and fell into a swamp! What do you want to do?' }),
//         Stories.create({ story_id: 8, story_value: 'You finally enter the maze and see a ladder straight ahead of you and a brigh light to your left. Follow the bright light or climb the ladder?' }),
//         Stories.create({ story_id: 9, story_value: 'The old man leads you into a canyon and suddenly grabs your shovel and hits you with it. Your vision starts to fade, and you start seeing your deceased grandpa.' }),
//         Stories.create({ story_id: 10, story_value: 'You keep on sinking further and further...' }),
//         Stories.create({ story_id: 11, story_value: 'You were eaten by an alligator or a crocodile, your choice, either way you were eaten.' }),

//         Choices.create({})
//     ]).catch(err)console.log(`error populating your Stories table with data`))