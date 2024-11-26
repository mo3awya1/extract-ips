# Script Explanation: Extract Text from <strong> Elements
This script extracts text content from all <strong> elements on a webpage and downloads them as a text file. Below is a step-by-step explanation of how the script works.


# Step 1: Find All <strong> Elements
The script locates all <strong> elements on the page using the querySelectorAll method.

1. **Clone the repository:**
   ```bash
   var ipElements = document.querySelectorAll('strong'); // Find all <strong> elements
  document.querySelectorAll('strong') selects all <strong> elements in the document.
The result is a NodeList containing all matched elements.

