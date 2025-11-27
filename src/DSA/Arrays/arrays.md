# 🚀 Arrays Mastery Guide

## ⭐ 1. Array Concepts You Must Master
### 🔹 Basic Operations

- Traversal

- Searching

- Prefix sums

- Suffix sums

- Sorting techniques

- Using hash maps to optimize

### 🔹 Core Patterns

**Arrays revolve around 10 major patterns:**

**1. Sliding Window**

**2. Two Pointers**

**3. Prefix Sum**

**4. Binary Search on Sorted Array**

**5. Binary Search on Answer**

**6. Kadane’s Algorithm**

**7. Sorting + Greedy**

**8. Intervals**

**9. Matrix as Array of Arrays**

**10. Hashmap + Array Combo**

We will cover each with template + example.

## ⭐ Pattern → Template → Example

### 🔶 [Pattern 1: Sliding Window](SlidingWindow/sliding-window.md)

Sliding Window is used when we deal with **contiguous subarrays or substrings**.

#### 📌 Template (Variable-size window)

```cpp
int left = 0;
for (int right = 0; right < n; right++) {
    // expand window using arr[right]

    while (window_invalid) {
        // shrink window
        left++;
    }

    // track best window
}
```

#### 📘 Example

1. [Longest substring without repeating characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)


### 🔶 Pattern 2: Two Pointers

Used when array is sorted, or when you're searching for pairs.

#### 📌 Template

```cpp
int left = 0, right = n - 1;

while (left < right) {
    int sum = arr[left] + arr[right];
    if (sum == target) { ... }
    else if (sum < target) left++;
    else right--;
}
```

#### 📘 Example

Two Sum (sorted)

3-sum

Container With Most Water

### 🔶 Pattern 3: Prefix Sum

Instant sum queries from index `l` to `r`.

#### 📌 Template

```cpp
vector<int> pref(n+1, 0);
for (int i = 0; i < n; i++) pref[i+1] = pref[i] + arr[i];

// sum of l..r
int sum = pref[r+1] - pref[l];
```

#### 📘 Example

Subarray sum equals K

Range sum queries

### 🔶 Pattern 4: Kadane’s Algorithm

Max subarray sum in O(n).

#### 📌 Template

```cpp
int max_ending_here = 0, best = INT_MIN;

for (int x : arr) {
    max_ending_here = max(x, max_ending_here + x);
    best = max(best, max_ending_here);
}
```

### 🔶 Pattern 5: Sorting + Greedy

Used in:

Meeting rooms

Task scheduling

Minimum arrows to burst balloons

### 🔶 Pattern 6: Binary Search

Used on sorted arrays.

#### 📌 Standard Template

```cpp
int l = 0, r = n - 1;
while (l <= r) {
    int mid = l + (r - l) / 2;
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) l = mid + 1;
    else r = mid - 1;
}
```

### 🔶 Pattern 7: Binary Search on Answer

Used when the array is not sorted but the answer lies in a monotonic search space.
#### Examples:

Koko eating bananas

Minimum pages allocation

Aggressive cows

### 🔶 Pattern 8: Intervals (Important!)

Many array problems are actually interval problems.

#### Steps:

1. Sort by start

2. Merge or process based on end

### 🔶 Pattern 9: Matrix as Array of Arrays

2D array concepts:

- Row-wise traversal

- Column-wise traversal

- Diagonal traversal

- Simulation problems

### 🔶 Pattern 10: Hashmap + Array Combo

Most-used pattern in arrays.

#### Examples:

- Two sum

- Group anagrams

- Top K frequent

- Subarray sum K