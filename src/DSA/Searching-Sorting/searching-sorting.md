# 📘 Searching & Sorting

## ✅ 1. Linear Search (Basics)

Even though simple, it's the foundation for understanding search operations.

**Learn:**

- Iterative linear search

- Sentinel linear search

- Searching unsorted arrays


## ✅ 2. Binary Search (Important)

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

## 🔥 Binary Search on Answer (Advanced)

**Used when:**

- Search space is monotonic

- You cannot directly see the sorted array, but decisions are monotonic

**Examples:**

- Allocate books

- Aggressive cows

- Minimum days to make bouquets

- Koko eating bananas

## 🧠 Practical Sorting Problems

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

# 📝 Must Do Practice Problems

## 🔹 Level 1 – Easy

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



## 🔹 Level 2 – Medium

1. [Leetcode 34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/) - **[My Approach & Leetcode Solution link](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/7403935/two-binary-searches-to-locate-target-ran-6k3i/)**

2. [Leetcode 540. Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/description/) - **[My Approach & Leetcode Solution link](https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/7404225/single-element-in-a-sorted-array-parity-ktevy/)**

3. [Rotation Count in a Rotated Sorted Array](https://www.geeksforgeeks.org/dsa/find-rotation-count-rotated-sorted-array/) - **[Click for My Approach](Kth_rotation.pdf)**

**[Click here for Solution](Kth_rotation.cpp)**

4. [Leetcode 153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/) - **[My Approach & Leetcode Solution link](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/7407426/binary-search-to-locate-rotation-point-o-vh1h/)**

This problem is exactly same as the above problem 3. Rotation Count in a Rotated Sorted Array 

5. [Leetcode 33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/description/) - **[My Approach & Leetcode Solution link](https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/7407549/search-in-rotated-sorted-array-find-rota-q0h3/)**

This problem is also the modified version of the previous problem 4 and hence problem 3.




## 🔹 Level 3 – Hard

1. 



