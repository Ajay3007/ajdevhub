```markdown
// copied from src/DSA/Searching-Sorting/searching-sorting.md
# ðŸ“˜ Searching & Sorting
{% include dsa-sidebar.html %}

## âœ… 1. Linear Search (Basics)

Even though simple, it's the foundation for understanding search operations.

**Learn:**

- Iterative linear search

- Sentinel linear search

- Searching unsorted arrays


## âœ… 2. Binary Search (Important)

Most used searching technique in interviews.

**Learn:**

- Basic binary search on sorted array

- Lower bound / Upper bound concepts

- Handling integer overflow (mid = low + (high-low)/2)

- Searching ranges

- Binary search on answers (Advanced)

**You must master:**

- Search in rotated sorted array

- First/last occurrence

- Kth element problems

- Peak element

- Binary search on monotonic functions


## ðŸ”¥ Binary Search on Answer (Advanced)

**Used when:**

- Search space is monotonic

- You cannot directly see the sorted array, but decisions are monotonic

**Examples:**

- Allocate books

- Aggressive cows

- Minimum days to make bouquets

- Koko eating bananas


# [For Sorting Guide Click Here](sorting.md)

## ðŸ§  Practical Sorting Problems

**Learn how sorting enables solutions:**

- Sorting + Two Pointers

- Sorting + Greedy

- Sorting + Binary Search

**Must-practice problems:**

- Merge intervals

- Meeting rooms

- Largest number

- Sort characters by frequency

- Top K frequent elements

- Kth smallest/largest (use sorting or heaps)

# ðŸ“ Must Do Practice Problems

## ðŸ”¹ Level 1 â€“ Easy

1. [Leetcode 704. Binary Search](https://leetcode.com/problems/binary-search/description/)

**Solution**

```cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int n = nums.size();
        int left = 0, right = n-1;
        int mid;
        while(left <= right) {
            mid = left + (right - left)/2;
            if(nums[mid] > target) right = mid - 1;
            else if(nums[mid] < target) left = mid + 1;
            else return mid;
        }
        return -1;
    }
};
```

2. [Floor/Ceil of an Element in a Sorted Array - Approach]({{ site.baseurl }}/assets/pdfs/DSA/Searching-Sorting/floorAndCeil.pdf)

3. [Leetcode 35. Search Insert Position](https://leetcode.com/problems/search-insert-position/description/) - **[My Approach]({{ site.baseurl }}/assets/pdfs/DSA/Searching-Sorting/floorAndCeil.pdf)**

4. [Leetcode 744. Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/)

    - This is similar to finding Ceil of an element in a Sorted Array.

# etc... (rest of the file copied)
```


