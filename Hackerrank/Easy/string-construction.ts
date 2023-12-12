/**
Amanda has a string of lowercase letters that she wants to copy to a new string. She can perform the following operations with the given costs. She can perform them any number of times to construct a new string p:
Append a character to the end of string p at a cost of 1 dollar
Choose any substring of p and append it to the end of p at no charge.
Given n strings s[i], find and print the minimum cost of copying each s[i]  to p[i] on a new line.
 */

function stringConstruction(s: Iterable<unknown> | ArrayLike<unknown>) {
  // Write your code here
  return new Set(Array.from(s)).size;
}
