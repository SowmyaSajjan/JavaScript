# SPEED TYPING GAME


We will be designing a typing game using JavaScript that presents a simple typing challenge and finds the performance of typing by calculating the Characters Per Minute (CPM), Words Per Minute (WPM) and the accuracy of the typed characters.
The game shows a series of quotes that have to be typed in a specified time limit, as fast as possible. A higher typing speed would show a higher WPM value. Incorrectly typed characters would be marked accordingly during typing.
We will create the HTML layout first, style it using CSS and then write the logic in JavaScript. 
The HTML Layout: The HTML layout defines the element structure that would be shown on the page. This includes:
 

Header Portion: This section shows the statistics of the current typing session. This includes the display of the time left, number of errors, accuracy, WPM and CPM.
Quote Section: This section shows the current text that has to be typed in the input area.
Input Area: This section contains the input area where the text has to be typed.
Restart Button: This is the restart button which would be shown once the time runs out and the game finishes.


Note: Each of the portions is filled with dummy data to make styling easier. 
The CSS Styling: CSS is used to style the different portions and make it more visually appealing.
 

The header portion is displayed using the flex layout.
Adequate padding and margin are given to each element.
The text size of each element is such that it is easily readable by the user when playing the game.
Two additional classes are defined to denote the letters that are typed correctly or incorrectly. These classes would be dynamically added or removed when required.


Main Logic of the game: The main logic of the game is defined in a JavaScript file. There are several functions that work together to run the game.

Step 1: Selecting all the elements and defining variables
The required elements in the HTML layout are first selected using the querySelector() method. They are assigned variable names so that they could be easily accessed and modified. Other variables that would be accessed throughout the program are also defined in the beginning.
 


Step 2: Preparing the text to be displayed
A function updateQuote() is defined which handles the following things: 
 

Getting the text 

	Quotes have been used as the text that has to be typed to play the game. Each quote is taken one by one from a predefined array. A variable keeps track of the current quote index and increments it whenever a new one is requested.
	
Splitting the characters into elements 

	Each of the characters in the text is separated into a series of <span> elements. This makes it possible to individually change the color of each character depending upon if it has been correctly typed by the user. These elements are appended to a variable quote_text.
 

Step 3: Getting the currently typed text by the user
A function processCurrentText() is defined which will be invoked whenever the user types or changes anything in the input box. It is hence used with the oninput event handler of the input box. This function handles the following things:
 

Getting the current value of the input box 

	The value property of the input area is used to get the current text typed by the user. This is split into an array of characters to compare with the quote text. This is stored in curr_input_array.
	
Coloring the characters of the quote text 

	The characters of the displayed quote are colored ‘red’ or ‘green’ depending on whether it has been typed correctly. This is done by selecting the span elements of the quote we have created earlier and looping through them. The element has then applied the classes created above depending on if it matches the typed text.
	
Calculating the errors and accuracy 

	Every time the user makes a mistake during typing, the errors variable is incremented. This is used to calculate the accuracy value by dividing the number of correctly typed characters with the total number of characters typed by the user. 
 
Moving to next quote 
When the length of the input text matches the quote text length, the updateQuote() function is called which changes the quote and clears the input area. The number of total errors is also updated to be used for the next quote.
 


character_coloring
Coloring of the characters based its correctness

Step 4: Starting a new game
A function startGame() is defined which will be invoked when the user focuses on the input box. It is hence used with the onfocus event handler of the input box. This function handles the following things:
 

Reset all values 
All the values are reset to their default ones before the starting of a new game. We create a different function named resetValues() which handles this. 
 
Update the quote text 
A new quote text is made ready and displayed by calling the updateQuote() function. 
 
Creating a new timer 
A timer keeps track of the number of seconds left and displays it to the user. It is created using the setInterval() method which repeatedly calls the updateTimer() function defined below. Before creating a new timer, the previous timer instance is cleared using clearInterval().
 
Step 5: Updating the timer
A function updateTimer() is defined which will be invoked every second to keep track of the time. This function handles the following things:
 

Update the time values 

All the variables that keep track of the time are updated. The timeLeft value is decremented, the timeElapsed value is incremented, and the timer text is updated to the current time left.

Finishing the game 

This portion is triggered when the time limit is reached. It calls the finishGame() function defined below which finishes the game.
 
Step 6: Finishing the game

A function finishGame() is defined which will be invoked when the game has to be finished. This function handles the following things:
 
Deleting the timer 
The timer instance created before is removed.
Displaying the restart game text and button 
The quoted text displayed to the user is changed to one that indicates that the game is over. The ‘Restart’ button is also displayed by setting the display property to ‘block’.
Calculating the CPM and WPM of the current session 
The Characters Per Minute (CPM) is calculated by dividing the total number of characters typed with the time elapsed and then multiplying the result with 60. It is rounded off to prevent decimal points.
The Words Per Minute (WPM) is calculated by dividing the CPM by 5 and then multiplying the result with 60. The 5 denotes the average number of characters per word. It is rounded off to prevent decimal points.
 

Final Demonstration
The game is now ready to be played in any browser.
