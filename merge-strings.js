/*
1768. Merge Strings Alternately

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
 */

var mergeAlternately = function(word1, word2) {
    const mergeWordLength = word1.length + word2.length;
      let mergeWord = '';
  
      for (let i = 0; i < mergeWordLength; i++) {
          if (i < word1.length) {
              mergeWord += word1[i];
          }
          if (i < word2.length) {
              mergeWord += word2[i];
          }
      }
  
      return mergeWord;
  };

  
  console.log(mergeAlternately('abcDEF', 'xyz'))
  console.log(mergeAlternately('abc', 'xyz'))