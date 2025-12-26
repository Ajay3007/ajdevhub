ï»¿```markdown
// copied from src/DSA/Arrays/arrays.md
# Ã°Å¸Å¡â‚¬ Arrays Mastery Guide
{% include dsa-sidebar.html %}

## Ã¢Â­Â 1. Array Concepts You Must Master
### Ã°Å¸â€Â¹ Basic Operations

- Traversal

- Searching

- Prefix sums

- Suffix sums

- Sorting techniques

- Using hash maps to optimize

### Ã°Å¸â€Â¹ Core Patterns

**Arrays revolve around 10 major patterns:**

**1. Sliding Window**

**2. Two Pointers**

**3. Prefix Sum**

**4. Binary Search on Sorted Array**

**5. Binary Search on Answer**

**6. KadaneÃ¢â‚¬â„¢s Algorithm**

**7. Sorting + Greedy**

**8. Intervals**

**9. Matrix as Array of Arrays**

**10. Hashmap + Array Combo**

We will cover each with template + example.

## Ã¢Â­Â Must-Do Array Problems - Practice

#### 1. [Leetcode 1. Two Sum](https://leetcode.com/problems/two-sum/description/)

#### 2. [Leetcode 217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/description/)

#### 3. [Leetcode 219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/description/)

#### 4. [Leetcode 242. Valid Anagram](https://leetcode.com/problems/valid-anagram/description/)

#### 5. [Leetcode 49. Group Anagrams](https://leetcode.com/problems/group-anagrams/description/)

#### 6. [Leetcode 238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/description/)

#### 7. [Leetcode 347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/description/)

#### 8. [Leetcode 13. Roman to Integer](https://leetcode.com/problems/roman-to-integer/description/)

#### 9. [Leetcode 953. Verifying an Alien Dictionary](https://leetcode.com/problems/verifying-an-alien-dictionary/description/)

#### 10. [Leetcode 128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/)

#### 11. [Leetcode 41. First Missing Positive](https://leetcode.com/problems/first-missing-positive/description/)


## Ã¢Â­Â Pattern Ã¢â€ â€™ Template Ã¢â€ â€™ Example

### Ã°Å¸â€Â¶ [Pattern 1: Sliding Window](SlidingWindow/sliding-window.md)

Sliding Window is used when we deal with **contiguous subarrays or substrings**.

#### Ã°Å¸â€œÅ’ Template (Variable-size window)

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

#### Ã°Å¸â€œËœ Example

1. [Longest substring without repeating characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)


### Ã°Å¸â€Â¶ [Pattern 2: Two Pointers](TwoPointers/two-pointer.md)

Used when array is sorted, or when you're searching for pairs.

#### Ã°Å¸â€œÅ’ Template

```cpp
int left = 0, right = n - 1;

while (left < right) {
    int sum = arr[left] + arr[right];
    if (sum == target) { ... }
    else if (sum < target) left++;
    else right--;
}
```

#### Ã°Å¸â€œËœ Example

Two Sum (sorted)

3-sum

Container With Most Water

### Ã°Å¸â€Â¶ Pattern 3: Prefix Sum

Instant sum queries from index `l` to `r`.

#### Ã°Å¸â€œÅ’ Template

```cpp
vector<int> pref(n+1, 0);
for (int i = 0; i < n; i++) pref[i+1] = pref[i] + arr[i];

// sum of l..r
int sum = pref[r+1] - pref[l];
```

#### Ã°Å¸â€œËœ Example

Subarray sum equals K

Range sum queries

### Ã°Å¸â€Â¶ Pattern 4: KadaneÃ¢â‚¬â„¢s Algorithm

Max subarray sum in O(n).

#### Ã°Å¸â€œÅ’ Template

```cpp
int max_ending_here = 0, best = INT_MIN;

for (int x : arr) {
    max_ending_here = max(x, max_ending_here + x);
    best = max(best, max_ending_here);
}
```

### Ã°Å¸â€Â¶ Pattern 5: Sorting + Greedy

Used in:

Meeting rooms

Task scheduling

Minimum arrows to burst balloons

### Ã°Å¸â€Â¶ Pattern 6: Binary Search

Used on sorted arrays.

#### Ã°Å¸â€œÅ’ Standard Template

```cpp
int l = 0, r = n - 1;
while (l <= r) {
    int mid = l + (r - l) / 2;
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) l = mid + 1;
    else r = mid - 1;
}
```

### Ã°Å¸â€Â¶ Pattern 7: Binary Search on Answer

Used when the array is not sorted but the answer lies in a monotonic search space.
#### Examples:

Koko eating bananas

Minimum pages allocation

Aggressive cows

### Ã°Å¸â€Â¶ Pattern 8: Intervals (Important!)

Many array problems are actually interval problems.

#### Steps:

1. Sort by start

2. Merge or process based on end

### Ã°Å¸â€Â¶ Pattern 9: Matrix as Array of Arrays

2D array concepts:

- Row-wise traversal

- Column-wise traversal

- Diagonal traversal

- Simulation problems

### Ã°Å¸â€Â¶ Pattern 10: Hashmap + Array Combo

Most-used pattern in arrays.

#### Examples:

- Two sum

- Group anagrams

- Top K frequent

- Subarray sum K
```

