							////////////////Word Duels////////////////

Word Duels is a game designed by Konrad Jasman and Isaac Morton for the 2021 UVEC Engineering Competition - Programming event. 

We hope to develop this application into a supplement for early-stage computer education, to build vocabulary and improve keyboard familiarity 
in both children and seniors. In addition, we are aware of the benefits of vocabulary-based memory activities, such as crossword puzzles and scrabble,
in preventing alzheimers and hope our program has similar benefits; pending research. 

This is the source distribution for Word Duels.

Recent changes can be found in "CHANGELOG". Bugs and issues can be found in "ISSUES". Documentation is found in "LOG". "FEATURES" contains details relevant to creation and maintenance of the software, not intended for users. Scroll down for PLAYGUIDE


					PLAYGUIDE

			******************Overview******************
PREMISE
The premise of the game is as follows: two players flip a virtual to determine who goes first. The first player picks a word, and if the word is within the given 
dictionary, it will be sent to the second player - who then selects a word that begins with the same letter as the last one ended with. 
If the word PLAYER2 enters is in the dictionary, PLAYER1 must now find a word that begins with the letter that PLAYER1's word ended with.

SCORING
Each round can earn a maxiumum of 10 points. The user loses one point per second, up to a maximum of 10. A user can not earn less than 0 points.
If a user enters a word already used in the duel, they will recieve a pentaly. In quick play, the penalty is an automatic loss.
This can be modified in cusotm to instead deduct points, or not punish the user. 


EXAMPLE ROUND
PLAYER1 enters "apple", PLAYER2 must pick a word that begins with letter "e". PLAYER2 enters "electric". Now, PLAYER1 must find a word beginning with "c". 




			******************Game Modes******************
			
Quickplay: This is a "click 'n go" gamemode, with rules to ensure a fast-paced and competitive game. 
The default settings for quickplay are as follows:
Duplicate word punishment: Loss. 
Win condition: First to 100 Points.

Custom: In this gamemode, everything can be customized. The user can change parameters for game length, 
punishment conditions for duplicate words and win conditions. Note, due to time constraints this feature 
may not be implemented at time of presentation. 
