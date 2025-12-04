# 📘 DSA: Strings Learning Roadmap (Beginner → Advanced)

## 1. Basics of Strings (Foundations)

These are must-know before solving problems.

- Mutable vs Immutable (C++: std::string is mutable)

- Character arrays vs string class

- Common operations: length, substring, concatenation, comparison

- ASCII & Unicode basics

### -> [Click here for more details](string-basics.md)

## 🔍 2. Two Pointers on Strings

Used for many interview problems (palindrome, substring checks).

**Key patterns:**

- Move pointers from left & right

- Shrink/expand window on conditions

## 🪟 3. Sliding Window (Very Important)

Strings + Sliding Window = 20% of interview questions.

### Understand two types:

#### 🔸 Fixed Window

E.g., find anagrams of a pattern.

#### 🔸 Variable Window

E.g., longest substring with K distinct characters.

## 🧮 4. Hashing for Strings

### Character frequency arrays

- For lowercase → size 26

- For ASCII → size 256

- For Unicode → use hash maps

### Rolling Hash / Rabin-Karp

- Efficient substring search

- Used for detecting duplicate substrings, plagiarism, etc.

### Interview problems:

- Rabin-Karp implementation

- Longest duplicate substring (binary search + rolling hash)

## 🔤 5. Pattern Matching Algorithms

### KMP (Knuth–Morris–Pratt)

Why important?

- Used for substring search in O(n + m)

- LPS array is commonly asked in interviews.

### Z-Algorithm

- Alternate fast pattern matching

- Helps in string prefix-based problems

### Trie (String Tree)

- Useful for autocomplete, prefix search, dictionary problems

### Problems:

- Word search

- Longest common prefix

- Implement Trie

## 🧩 6. Advanced String Topics

These help in elite interviews.

### Suffix Array

- Used for lexicographical ordering of suffixes

- **Applications:** substring search, LCP computation

### Suffix Tree / Compressed Trie

- Extremely fast substring search

- Rare but high-reward for deep interviews

### Manacher’s Algorithm

- O(n) longest palindromic substring


# 📝 Must Do String Problems

## 🔹 Level 1 – Easy

1. Reverse string

2. Palindrome check

3. Count occurrences of characters

4. Remove duplicates

5. String compression

6. [Leetcode 412. Fizz Buzz](https://leetcode.com/problems/fizz-buzz/description/) - **[Solution](Leetcode-412.cpp)**

7. [Leetcode 14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/) - **[Solution](https://leetcode.com/problems/longest-common-prefix/solutions/7391572/horizontal-scanning-approach-on-solution-9y18/)**



## 🔹 Level 2 – Medium

1. Longest substring without repeating

2. Longest palindromic substring

3. Group anagrams

4. Valid parentheses

5. Multiply large numbers (string simulation)

6. [Leetcode 271. Encode and Decode Strings{Premium Problem}](https://leetcode.com/problems/encode-and-decode-strings/description/) - **[My Leetcode Solution link](https://leetcode.com/problems/encode-and-decode-strings/solutions/7391904/encode-decode-strings-fixed-length-heade-3h9i/)**

    - If you can't see the problem, **[Click Here](leetcode-271.md)**

7. [Leetcode 647. Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/description/) - **[My Leetcode Solution link]()**

8. 



## 🔹 Level 3 – Hard

1. Minimum window substring

2. Word break (DP + String)

3. Regular expression matching (DP)

4. Wildcard matching

5. KMP + Z-algorithm applications

6. Longest duplicate substring (binary search + hash)

