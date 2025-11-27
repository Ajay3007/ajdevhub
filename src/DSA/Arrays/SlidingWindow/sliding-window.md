# 🚀 Sliding Window

Sliding Window is used when we deal with **contiguous subarrays or substrings**.

**Common keywords:**

- longest
- smallest
- maximum
- minimum
- subarray/substring
- at most / at least K distinct
- average of size K

## ⭐ 2. Types of Sliding Window

You must know BOTH:

### 1️⃣ Fixed-Size Window (size = K)

Useful when **K is fixed.**

#### 📌 Examples

Max sum of subarray size K

First negative number in window size K

#### 2️⃣ Variable-Size Window (stretch/shrink)

Used when the **window grows** until a **condition** becomes **invalid**, then we **shrink**.

#### 📌 Examples

Longest substring without repeating characters

Longest subarray with sum ≤ K

Minimum window substring

Fruits into baskets (max subarray with at most 2 distinct fruits)

## ⭐ Templates (MOST IMPORTANT PART)
### 🔶 Template 1 — Fixed Size Window (size = K)

```cpp
int left = 0;
long long sum = 0, best = 0;

for (int right = 0; right < n; right++) {
    sum += arr[right]; // expand window

    if (right - left + 1 == K) {
        best = max(best, sum);
        sum -= arr[left]; // shrink
        left++;
    }
}
```

### 🔶 Template 2 — Variable Window (Most Important)

```cpp
int left = 0;
for (int right = 0; right < n; right++) {
    // Add arr[right] and make window bigger

    while (window_invalid_condition) {
        // Shrink window
        left++;
    }

    // track best window
}
```

Use when:
👉 window size is always exactly K

### 🔶 Template 2 — Variable Window (Most Important)

```cpp
int left = 0;
for (int right = 0; right < n; right++) {
    // Add arr[right] and make window bigger

    while (window_invalid_condition) {
        // Shrink window
        left++;
    }

    // track best window
}
```

### 🔶 Template 3 — Window with Frequency Map

Used for substring problems.

unordered_map<char,int> freq;
int left = 0;

```cpp
for (int right = 0; right < s.size(); right++) {
    freq[s[right]]++;

    while (condition_invalid) {
        freq[s[left]]--;
        left++;
    }

    ans = max(ans, right - left + 1);
}
```

## ⭐ Top 5 Sliding Window Patterns

#### 🔸 Pattern 1: Longest substring without repeating characters

Condition: window is invalid when any character count > 1

👉 shrink until all chars have freq 1

#### 🔸 Pattern 2: At most K distinct characters

Condition: invalid when freq_map.size() > K

#### 🔸 Pattern 3: Sum ≤ K

When sum exceeds K → shrink window

#### 🔸 Pattern 4: Minimum window substring

A classic variable window with two hash maps:

- need

- have

Shrink window only when it satisfies the target.

#### 🔸 Pattern 5: Fixed Size

Very direct.

## ⭐ Must-Do Sliding Window Problems
### Level 1 — Basics

**1. [Leetcode 121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)**

**- Brute Force Approach:**
For every prices[i], check profit for every prices[j]; where, j>i
take maximum of all profits.
In formal, find max(prices[j]−prices[i]), for every i and j such that j>i.

Time Complexity - O(n^2)

**- Optimal Solution**
We can maintain two variables - minprice(buy) and maxprofit corresponding to the smallest buy and maximum profit (maximum difference between selling price and minprice(buy)) obtained so far respectively.

Time Complexity : O(n)

**[Solution Leetcode 121](Leetcode-121.cpp)**

**2. [Leetcode 567. Permutation in String](https://leetcode.com/problems/permutation-in-string/description/)**

**- Brute Force Approach:**

```cpp
s1 = "abc"; 
s2 = "badcbalm";
```

Check for each permutation of s1 whether it is present in s2 or not!

**- Optimal Solution**

1. Use hashmap or array(size - 26) to store frequency of each character of s1.
2. Decide a window size(size = s1, say k
) in s2.
3. For each possible window size check the same frequency matches with the original frequency of s1.

**[Solution Leetcode 567](Leetcode-567.cpp)**

Max sum subarray of size K

First negative number in window size K

Count occurrences of anagrams

### Level 2 — Medium

Longest substring without repeating

Longest repeating character replacement

Fruits into baskets

Minimum window substring

Subarray sum equals K (prefix + sliding combination)

Binary subarray with sum

### Level 3 — Hard

Subarrays with K different integers

Minimum size subarray sum

Longest substring with at most K distinct characters

Count substring with exactly K distinct

Max consecutive ones III

Number of nice subarrays

Longest subarray with sum ≤ K

Sliding window maximum (Deque, bonus)

