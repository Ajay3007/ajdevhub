```markdown
// copied from src/DSA/Arrays/TwoPointers/two-pointer.md
# 🚀 Two Ponters Technique

- Two pointers = using two indices that move across an array/string to solve a problem efficiently.

- It usually reduces complexity from **O(n²)** to **O(n)**.

**There are 5 major types of two-pointers patterns.**

## 1️⃣ Opposite Direction Pointers (Left + Right)

```bash
Array: [4, 7, 9, 12, 15, 20]
         ↑                ↑
         l                r
Opposite-direction pointers
```

**Used mostly when:**

- Array/string is sorted

- You are looking for a pair satisfying some condition

**Example problems:**

- Pair Sum (Two Sum in Sorted Array)

- Container With Most Water

- Valid Palindrome

- Reverse a string / linked list

**Template:**
```cpp
int l = 0, r = n - 1;

while (l < r) {
    // Check condition
    if (arr[l] + arr[r] == target) return true;

    if (arr[l] + arr[r] < target) l++;
    else r--;
}
```

## 2️⃣ Sliding Window (Two Pointers in same direction)

```bash
Array: [3, 5, 7, 1, 4, 9]
         ↑--------↑
         l        r
Sliding window
```

Both `l` and `r` move forward.

**Used when:**

- You need a window growing/shrinking

**You want:**

- Largest substring without repeating characters

- Minimum window substring

- Subarray sum constraints

- Fixed-size or variable-size windows

**You want:**

**[For more on Sliding Window Click Here](../SlidingWindow/sliding-window.md)**

## 3️⃣ Fast & Slow Pointers (Tortoise & Hare)

**Used for:**

- Detecting cycles in linked lists

- Finding middle of linked list

- Removing Nth node from end

- Checking if number is happy

**Template:**
```cpp
ListNode* slow = head;
ListNode* fast = head;

while (fast && fast->next) {
    slow = slow->next;
    fast = fast->next->next;
}
```

## 4️⃣ Same Direction but With Gap / K-distance Pointers

**Used for:**

- Removing duplicates in sorted array

- Merging sorted arrays

- Comparing substrings

- K-distance apart comparisons

**Example:**

Move valid elements forward:
```cpp
int i = 0;
for (int j = 0; j < n; j++) {
    if (arr[j] != arr[i]) {
        i++;
        arr[i] = arr[j];
    }
}
```

## 5️⃣ Two Pointers on Two Arrays

**Used for:**

- Merging sorted arrays (merge sort)

- Intersection of arrays

- Comparing elements of two sequences simultaneously

**Template:**

```cpp
int i = 0, j = 0;
while (i < n && j < m) {
    if (a[i] == b[j]) { ... i++; j++; }
    else if (a[i] < b[j]) i++;
    else j++;
}
```

## ⭐ Must Do Problems

### Level 1 — Basics

#### 1. [Leetcode 125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/description/)

- **For my Leetcode Solution link click [Efficient O(n) palindrome check using two pointers and character normalization](https://leetcode.com/problems/valid-palindrome/solutions/7386854/efficient-on-palindrome-check-using-two-yt59z/)**

#### 2. [Leetcode 26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

- **For my Leetcode Solution link click [Remove Duplicates from Sorted Array — In-place Two-Pointer (O(n))](https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/7389802/remove-duplicates-from-sorted-array-in-p-jar9/)**


### Level 2 — Medium

#### 1. [Leetcode 167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/)

- **For my Solution click [PDF Solution](https://raw.githubusercontent.com/Ajay3007/ajdevhub/master/src/DSA/Arrays/TwoPointers/leetcode-167.pdf)**

#### 2. [Leetcode 15. 3Sum](https://leetcode.com/problems/3sum/description/)

- **For my Leetcode Solution link click [Three-Sum Using Sorting + Two Pointers (C++, O(n²))](https://leetcode.com/problems/3sum/solutions/7388635/three-sum-using-sorting-two-pointers-c-o-r6ta/)**


### Level 3 — Hard

#### 1. [Leetcode 42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/description/)

- **For my Leetcode Solution link click [Trapping Rain Water — Prefix/Suffix Max Approach (O(n) Time, O(n) Space)](https://leetcode.com/problems/trapping-rain-water/solutions/7388828/trapping-rain-water-prefixsuffix-max-app-zatc/)**

- **My Leetcode Optimal Solution link click [Trapping Rain Water — Optimal O(1)-Space Two-Pointer Approach](https://leetcode.com/problems/trapping-rain-water/solutions/7389700/trapping-rain-water-optimal-o1-space-two-snbg/)**
```
