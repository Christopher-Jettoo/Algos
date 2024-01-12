/*
345. Reverse Vowels of a String

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

var reverseVowels = function (str) {
  //store the vowels in variable
  // iterate over the string and save all the vowels in the string in reverse
  // iterate over the string again and replace vowels while also slicing the reverse string
  // return out the string
  let s = str.split("");
  let vowels = "aeiouAEIOU";
  let stringVowels = "";

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      stringVowels += s[i];
    }
  }

  stringVowels = stringVowels.split("").reverse();
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (stringVowels.includes(s[i])) {
      s[i] = stringVowels[counter];

      counter += 1;
    }
  }

  return s.join("");
};

console.log(reverseVowels("hellO")); // holle
