let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// Remove last string
secretMessage.pop();
// Add more strings to the right
secretMessage.push('to', 'Program'); 
// Replace 'easily' with 'right'
secretMessage[secretMessage.indexOf('easily')] = 'right';
// Remove first string from array
secretMessage.shift();
// Add 'Programming' to the beginning of the array
secretMessage.unshift('Programming');
// Replace strings
secretMessage.splice(6, 5, 'know,');
// Print the array as a sentence
console.log(secretMessage.join(' '));