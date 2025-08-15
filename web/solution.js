// Dictionary Processing Function
function solution(D) {
    const result = {};
    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    // Initialize result dictionary with all days set to 0
    dayNames.forEach(day => {
        result[day] = 0;
    });
    
    // Process input dictionary
    for (const dateStr in D) {
        const value = D[dateStr];
        const date = new Date(dateStr);
        
        // Get day of week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
        const dayIndex = date.getDay();
        
        // Convert to our day names array index (0 = Monday, ..., 6 = Sunday)
        const adjustedIndex = dayIndex === 0 ? 6 : dayIndex - 1;
        const dayName = dayNames[adjustedIndex];
        
        // Add value to corresponding day
        result[dayName] += value;
    }
    
    return result;
}

// Unit Tests
function runTests() {
    console.log("Running unit tests...\n");
    
    // Test Case 1: Example from the problem
    const test1Input = {
        "2020-01-01": 4,
        "2020-01-02": 4,
        "2020-01-03": 6,
        "2020-01-04": 8,
        "2020-01-05": 2,
        "2020-01-06": -6,
        "2020-01-07": 2,
        "2020-01-08": -2
    };
    
    const test1Expected = {
        "Mon": -6,
        "Tue": 2,
        "Wed": 2,
        "Thu": 4,
        "Fri": 6,
        "Sat": 8,
        "Sun": 2
    };
    
    const test1Result = solution(test1Input);
    console.log("Test 1 - Basic functionality:");
    console.log("Input:", test1Input);
    console.log("Expected:", test1Expected);
    console.log("Result:", test1Result);
    console.log("Passed:", JSON.stringify(test1Result) === JSON.stringify(test1Expected));
    console.log("");
    
    // Test Case 2: Missing days (Thu & Fri)
    const test2Input = {
        "2020-01-01": 6,
        "2020-01-02": 14,
        "2020-01-05": 4,
        "2020-01-07": 4
    };
    
    const test2Expected = {
        "Mon": 2,
        "Tue": 4,
        "Wed": 6,
        "Thu": 8,
        "Fri": 0,
        "Sat": 12,
        "Sun": 14
    };
    
    const test2Result = solution(test2Input);
    console.log("Test 2 - Missing days:");
    console.log("Input:", test2Input);
    console.log("Expected:", test2Expected);
    console.log("Result:", test2Result);
    console.log("Passed:", JSON.stringify(test2Result) === JSON.stringify(test2Expected));
    console.log("");
    
    // Test Case 3: Empty input
    const test3Input = {};
    const test3Expected = {
        "Mon": 0,
        "Tue": 0,
        "Wed": 0,
        "Thu": 0,
        "Fri": 0,
        "Sat": 0,
        "Sun": 0
    };
    
    const test3Result = solution(test3Input);
    console.log("Test 3 - Empty input:");
    console.log("Input:", test3Input);
    console.log("Expected:", test3Expected);
    console.log("Result:", test3Result);
    console.log("Passed:", JSON.stringify(test3Result) === JSON.stringify(test3Expected));
    console.log("");
    
    // Test Case 4: Multiple dates for same day
    const test4Input = {
        "2020-01-06": 5,  // Monday
        "2020-01-13": 3,  // Monday
        "2020-01-20": -2  // Monday
    };
    
    const test4Expected = {
        "Mon": 6,  // 5 + 3 + (-2) = 6
        "Tue": 0,
        "Wed": 0,
        "Thu": 0,
        "Fri": 0,
        "Sat": 0,
        "Sun": 0
    };
    
    const test4Result = solution(test4Input);
    console.log("Test 4 - Multiple dates for same day:");
    console.log("Input:", test4Input);
    console.log("Expected:", test4Expected);
    console.log("Result:", test4Result);
    console.log("Passed:", JSON.stringify(test4Result) === JSON.stringify(test4Expected));
    console.log("");
    
    // Test Case 5: Negative values
    const test5Input = {
        "2020-01-01": -10,  // Wednesday
        "2020-01-02": 5,    // Thursday
        "2020-01-03": -3    // Friday
    };
    
    const test5Expected = {
        "Mon": 0,
        "Tue": 0,
        "Wed": -10,
        "Thu": 5,
        "Fri": -3,
        "Sat": 0,
        "Sun": 0
    };
    
    const test5Result = solution(test5Input);
    console.log("Test 5 - Negative values:");
    console.log("Input:", test5Input);
    console.log("Expected:", test5Expected);
    console.log("Result:", test5Result);
    console.log("Passed:", JSON.stringify(test5Result) === JSON.stringify(test5Expected));
    console.log("");
}

// Helper function to verify a specific date's day
function verifyDate(dateStr) {
    const date = new Date(dateStr);
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    console.log(`${dateStr} is a ${dayNames[date.getDay()]}`);
}

// Run the tests
runTests();

// Verify some dates from the examples
console.log("Date verification:");
verifyDate("2020-01-01");
verifyDate("2020-01-02");
verifyDate("2020-01-03");
verifyDate("2020-01-04");
verifyDate("2020-01-05");
verifyDate("2020-01-06");
verifyDate("2020-01-07");
verifyDate("2020-01-08");