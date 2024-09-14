// String comparison
// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

// In other words, strings are compared letter-by-letter.

// For example:

// alert( 'Z' > 'A' ); // true
// alert( 'Glow' > 'Glee' ); // true
// alert( 'Bee' > 'Be' ); // true
// The algorithm to compare two strings is simple:

// Compare the first character of both strings.
// If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
// Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
// Repeat until the end of either string.
// If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
// In the first example above, the comparison 'Z' > 'A' gets to a result at the first step.

// The second comparison 'Glow' and 'Glee' needs more steps as strings are compared character-by-character:

// G is the same as G.
// l is the same as l.
// o is greater than e. Stop here. The first string is greater.


// -------------------------------------

/* Comparison of different types
When comparing values of different types, JavaScript converts the values to numbers.

For example:

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1
For boolean values, true becomes 1 and false becomes 0.

For example:

alert( true == 1 ); // true
alert( false == 0 ); // true
A funny consequence
It is possible that at the same time:

Two values are equal.
One of them is true as a boolean and the other one is false as a boolean.
For example:

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!
From JavaScript’s standpoint, this result is quite normal. An equality check converts values using the numeric conversion (hence "0" becomes 0), while the explicit Boolean conversion uses another set of rules. */

// --------------------------------------------------------------------------
// let obj = { name: "Alice" };
// console.log(obj + 1);
let obj = {
    name: "Alice",
    toString: function() {
      return this.name;
    }
  };
  
  console.log(obj + 1); // "Alice1"
  
