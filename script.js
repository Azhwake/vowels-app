
// Function to count vowels in the input text
function countVowels(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u']; // Array of vowels
    let count = 0;
  
    // Loop through each character in the input text
    for (let char of text.toLowerCase()) {
      // Check if the character is a vowel
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  // Add event listener to the "Count" button
  document.querySelector("#count-btn").addEventListener("click", function() {
    // Get the text from the textarea
    const inputText = document.querySelector("#input-text").value;
  
    // Call the countVowels function to count vowels
    const vowelCount = countVowels(inputText);
  
    // Display the result in the #vowel-count span
    document.querySelector("#vowel-count").textContent = vowelCount;
  });
  