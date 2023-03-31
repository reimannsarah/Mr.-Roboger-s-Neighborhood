Test:
Code: beepBoopNeighbor(number);
Expected Output:

Description: beepBoopNeighbor();

Test#1
Test: "It should return an array of numbers from 0 up to the inputted number"
Code: beepBoopNeighbor(10);
Expected Output: [1,2,3,4,5,6,7,8,9,10]

Test: "It should find and return 'true' for each element that includes a 1"
Code: beepBoopNeighbor(10);
Expected Output: 


Test#2
Test: "It should replace any number containing a 1, with 'beep'"
Code: beepBoopNeighbor(10);
Expected Output: ["beep",2,3,4,5,6,7,8,9,"beep"];

Test #3
Test: "It should replace any number containing a 2 with 'boop'"
Code: beepBoopNeighbor(10);
Expected Output: ["beep","boop"3,4,5,6,7,8,9."beep"]

Test#4
Test: "It should replcae any number containing a 3 with 'Won't you be my neighbor?'"
Code: beepBoopNeighbor(10);
Expected Output: ["beep","boop","won't you be my neighbor?",4,5,6,7,8,9,"beep"]
