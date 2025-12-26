ï»¿# Ã°Å¸Å¡â‚¬ Data Structures & Algorithms (DSA) Ã¢â‚¬â€ Learning Hub

{% include dsa-sidebar.html %}

Welcome to my **DSA Learning Hub**, a continuously growing collection of notes, explanations, UML diagrams, code snippets, and runnable examples that IÃ¢â‚¬â„¢m building while mastering Computer Science fundamentals in **C++**.

This section is part of my broader learning journey across Systems, Networking, and Backend Engineering.

---

## Ã°Å¸â€œËœ What This Section Contains

- Clear explanations of fundamental & advanced data structures  
- C++ implementations (iterative + recursive)  
- Time & space complexities  
- Real-world use cases  
- Visual diagrams (UML-style & algorithm flows)  
- Interview-style patterns & problem breakdowns  
- Notes based on my own intuition + references  

---

# Ã¢Â­Â 1. The DSA Structure

## Ã°Å¸â€œÅ’ A. Core Data Structures

- [Arrays](Arrays/arrays.md)

- [strings](Strings/string.md)

- [Hash maps / hash sets]

- [Linked Lists](LinkedList/linked-list.md)

- [Stacks & queues]

- [Priority queues (heaps)]

- [Binary trees & BST]

- [Graphs]

- [Tries]

- [Dynamic Programming]

- [Bit manipulation]

## Ã°Å¸â€œÅ’ B. Algorithms

- [Searching & Sorting (binary search patterns, custom comparator, stable sort, counting sort)](Searching-Sorting/searching-sorting.md)

- [Sliding window](Arrays/SlidingWindow/sliding-window.md)

- [Two pointers](Arrays/TwoPointers/two-pointer.md)

- [Backtracking]

- [Greedy]

- [BFS/DFS]

- [Dijkstra / BFS on weighted graphs]

- [Topological sort]

- [KMP / Rabin Karp (string)]

- [Union-Find]


# Ã°Å¸â€œÅ¡ Table of Contents

## 1Ã¯Â¸ÂÃ¢Æ’Â£ **Basics**
- [Recursion Deep Dive](recursion/recursion.md)
- [Memory Layout & Stack vs Heap]

---

## 2Ã¯Â¸ÂÃ¢Æ’Â£ **Core Data Structures**

### Ã°Å¸â€Â¹ Linear Data Structures
- [Arrays](Arrays/arrays.md)
- [Linked Lists](LinkedList/linked-list.md)
- [Stacks]
- [Queues]

### Ã°Å¸â€Â¹ Hashing & Maps
- [Hash Tables]
- [Collision Handling]
- [C++ `unordered_map` Internals]

### Ã°Å¸â€Â¹ Trees
- [Binary Trees]
- [Binary Search Trees]
- [AVL Tree]
- [Trie]
- [Heap / Priority Queue]

### Ã°Å¸â€Â¹ Graphs
- [Graph Representations]
- [BFS / DFS]
- [Topological Sort]
- [Dijkstra]
- [Union-Find DSU]

---

## 3Ã¯Â¸ÂÃ¢Æ’Â£ **Algorithms**

### Ã°Å¸â€Â¹ Searching
- [Binary Search + Variants](Searching-Sorting/searching-sorting.md)

### Ã°Å¸â€Â¹ Sorting
- [Searching & Sorting Techniques](Searching-Sorting/sorting.md)

### Ã°Å¸â€Â¹ Dynamic Programming
- [DP Basics]
- [1D DP Patterns]
- [2D Grid DP]
- [Knapsack Family]
- [LCS / LIS / Edit Distance]

### Ã°Å¸â€Â¹ Greedy Algorithms
- [Greedy Strategy Basics]
- [Intervals Problems]
- [Huffman Coding]

---

# Ã°Å¸Â§Â© C++ Code Standards for DSA

To maintain consistency across all DSA notes, all C++ code follows:

- Modern C++ (`C++17` or `C++20`)
- Clear naming conventions  
- UML diagrams before implementations  
- Separate `.hpp` and `.cpp` for big structures  
- Use of `std::vector`, `std::unique_ptr`, `std::stack`, `std::queue`

Example template:

```cpp
// Example: Basic Node structure for Linked List
struct Node {
    int data;
    std::unique_ptr<Node> next;

    Node(int d) : data(d), next(nullptr) {}
};
```

