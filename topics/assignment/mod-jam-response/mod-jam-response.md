Tittle : Mod Jam Response
Author: Weini WANG

1.Abhinav: Chateau Jose (https://abhivoleti.github.io/cart253_2/topics/Mod-Jam/)

This is a really interesting game. Abhi transformed the original concept into a Pokémon fighting game, which is a unique and creative idea. I really like this version, and I was curious about how he added pictures into the code. By reviewing his code, I discovered that images are added in a similar way to how sounds are implemented — by preloading the images and using functions to position and size them. This technique will definitely help me when I add images to my next project.
He also created a clear instruction page to help players understand how to play the game, which makes the gameplay experience much easier to follow. However, I think the instruction page could be improved by adding a return button to go back to the main page, since it’s a little confusing to start the game after reading the instructions.
Additionally, I think he could make the game more engaging by changing the fly’s movement pattern. I also learned from his code how to use the arrow keys to move the fly — I initially thought it required the keyPressed() function, but it actually uses keyIsDown() to make it work smoothly. Lastly, I think he should add more comments in his code to make it easier for others to read and understand.

2.Aliyah:Sir Croaksworth (https://xp30n.github.io/CART-253/topics/mod-jam/)

I really like Aliyah’s game. She created a story for the frog, Sir Croaksworth, and developed the original frog-catching concept into a more narrative-driven adventure, which adds humour and personality to the gameplay. Her dialogue system and the typewriter text effect immediately caught my attention. Instead of displaying all the dialogue at once, she designed it so that the text appears gradually — letter by letter — just like the typewriter effect you’d see in classic RPGs. It made me curious about how she implemented it.
By examining her code, I learned how the typewriter effect works. She used three main variables: currentText, fullText, and charIndex. The program checks whether the frame count divided by a speed value leaves no remainder — meaning that every few frames, it adds the next character from fullText to currentText. She did an excellent job using arrays and counting each letter by index to create the typewriter effect.
She also used a for loop to generate repeated appearances of the fly and fireball on the game screen. Additionally, she added a great sound effect that starts when the letters begin appearing and stops once the full line has finished.
Overall, I think this project is a fantastic example of how storytelling can be expressed through code.