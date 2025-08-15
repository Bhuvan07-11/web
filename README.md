A JavaScript function that processes a dictionary of dates and values, aggregating them by days of the week.
Problem Description
Given a dictionary D where:

Key is in format YYYY-MM-DD (date string)
Value is an integer

The function returns a new dictionary D where:

Keys are day names: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
Values are the sum of all values from the input dictionary for that particular day

Features

✅ Aggregates values by day of the week
✅ Handles missing days (sets them to 0)
✅ Supports negative values
✅ Accumulates multiple dates falling on the same day
✅ Handles empty input dictionaries
✅ Comprehensive unit tests included

Examples
Input:
javascript{
  "2020-01-01": 4,
  "2020-01-02": 4, 
  "2020-01-03": 6,
  "2020-01-04": 8,
  "2020-01-05": 2,
  "2020-01-06": -6,
  "2020-01-07": 2,
  "2020-01-08": -2
}
Output:
javascript{
  "Mon": -6,
  "Tue": 2,
  "Wed": 2,
  "Thu": 4,
  "Fri": 6,
  "Sat": 8,
  "Sun": 2
}
Usage
javascriptconst input = {
  "2020-01-01": 4,
  "2020-01-02": 4,
  "2020-01-03": 6
};

const result = solution(input);
console.log(result);
// Output: { Mon: 0, Tue: 0, Wed: 4, Thu: 4, Fri: 6, Sat: 0, Sun: 0 }
How to Run
Browser Console

Open browser developer tools (F12)
Go to Console tab
Copy and paste the code from solution.js
Press Enter to run

Node.js
bashnode solution.js
Online Runners

JSFiddle
CodePen
Repl.it

Running Tests
The file includes comprehensive unit tests that automatically run when you execute the script. Tests cover:

Basic functionality
Missing days handling
Empty input
Multiple dates on same day
Negative values

#unit Test case
<img width="980" height="914" alt="Screenshot 2025-08-15 182837" src="https://github.com/user-attachments/assets/e44fd4c2-049f-4997-b61a-5504a0361a65" />


Algorithm Complexity

Time Complexity: O(n) where n is the number of entries in input dictionary
Space Complexity: O(1) as output size is always fixed (7 days)

File Structure
├── solution.js          # Main solution with unit tests
├── README.md           # This documentation
└── package.json        # Project metadata (optional)
Contributing

Fork the repository
Create a feature branch
Make your changes
Add tests for new functionality
Submit a pull request

License
MIT License - feel free to use this code for learning or projects.
