# _Portfolio Landing Page_

#### By Sarah Reimann
#### A program that transforms a number into a list of all the numbers leading up to that number and returns the list of numbers with certain replacements made.

## Technologies Used

* HTML
* CSS
* JavaScript


## Description

This is a simple program that takes one number as the input, makes an array of each number starting from 0 and ending at the inputted number. It then loops through the array finding numbers that contain 1s, 2s, and 3s, then replaces those numbers with "Beep!", "Boop!". and "Won't you be my neighbor?" respectively. The hierarchy of replacement is as follows: If a number contains a 3, it will always be replaced with "Won't you be my neighbor?". If a number contains 2 but not 3, it will always be replaced with "Boop!". If a number contains a 1 and no 2 or 3, it will always be replaced with "Beep!".

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of the directory
* open index.html in your browser
* Input a number
* Click the submit button

## Known Bugs


## License

\_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\_

Copyright (c) _March 31, 2023, Sarah Reimann

TESTS

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

