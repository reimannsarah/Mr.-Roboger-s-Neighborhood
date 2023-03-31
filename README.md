Test:
Code: beepBoopNeighbor(number);
Expected Output:

Description: beepBoopNeighbor();

Test#1
Test: "It should return an array of numbers from 0 up to the inputted number"
Code: beepBoopNeighbor(10);
Expected Output: [1,2,3,4,5,6,7,8,9,10]

Test#2
Test: "It should replace any number containing a 1, with 'beep'"
Code: beepBoopNeighbor(10);
Expected Output: ["beep",2,3,4,5,6,7,8,9,"beep"];

Test #3
Test: "It should replace any number containing a 2 with 'boop'"
Code: beepBoopNeighbor(10);
Expected Output: ["beep","boop"3,4,5,6,7,8,9."beep"]

Test#4
Test: "It should replacee any number containing a 3 with 'Won't you be my neighbor?"
Code: beepBoopNeighbor(10);
Expected Output: ["beep","boop","won't you be my neighbor?",4,5,6,7,8,9,"beep"]

Test#5
Test: "It should run the 'neighbor' replacement before it runs the 'boop' or 'beep' replacement"
Code: beepBoopNeighbor(13);
Expected Output: ["beep","boop","won't you be my neighbor?",4,5,6,7,8,9,"beep","beep","boop","Won't you be my neighbor?"]

