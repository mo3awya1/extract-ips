// Extract text from all <strong> elements and save as a text file

var ipElements = document.querySelectorAll('strong'); // Find all <strong> elements
var ips = [];

// Extract text from elements and remove quotes
ipElements.forEach(function(e) {
    ips.push(e.innerHTML.replace(/["']/g, ''));
});

// Convert the array to a single string
var ipsString = ips.join('\n');

// Create a downloadable link for the text
var a = document.createElement('a');
a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(ipsString);
a.download = 'bazokaips.txt'; // File name
document.body.appendChild(a);
a.click();

// Clean up the link after downloading
document.body.removeChild(a);
