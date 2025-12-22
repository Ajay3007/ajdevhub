# 🚀 Data Structures & Algorithms (DSA) — Learning Hub

Welcome to my **DSA Learning Hub**, a continuously growing collection of notes, explanations, UML diagrams, code snippets, and runnable examples that I’m building while mastering Computer Science fundamentals in **C++**.

This section is part of my broader learning journey across Systems, Networking, and Backend Engineering.

---

## 📘 What This Section Contains

- Clear explanations of fundamental & advanced data structures  
- C++ implementations (iterative + recursive)  
- Time & space complexities  
- Real-world use cases  
- Visual diagrams (UML-style & algorithm flows)  
- Interview-style patterns & problem breakdowns  
- Notes based on my own intuition + references  

---

# ⭐ 1. The DSA Structure

## 📌 A. Core Data Structures

- [Arrays](../../src/DSA/Arrays/arrays.md)

- [strings](../../src/DSA/Strings/string.md)

- [Hash maps / hash sets]

- [Linked Lists](../../src/DSA/LinkedList/linked-list.md)

- [Stacks & queues]

- [Priority queues (heaps)]

- [Binary trees & BST]

- [Graphs]

- [Tries]

- [Dynamic Programming]

- [Bit manipulation]

## 📌 B. Algorithms

- [Searching & Sorting (binary search patterns, custom comparator, stable sort, counting sort)](../../src/DSA/Searching-Sorting/searching-sorting.md)

- [Sliding window](../../src/DSA/Arrays/SlidingWindow/sliding-window.md)

- [Two pointers](../../src/DSA/Arrays/TwoPointers/two-pointer.md)

- [Backtracking]

- [Greedy]

- [BFS/DFS]

- [Dijkstra / BFS on weighted graphs]

- [Topological sort]

- [KMP / Rabin Karp (string)]

- [Union-Find]


# 📚 Table of Contents

## 1️⃣ **Basics**
- [Recursion Deep Dive](../../src/recursion/recursion.md)
- [Memory Layout & Stack vs Heap]

---

## 2️⃣ **Core Data Structures**

### 🔹 Linear Data Structures
- [Arrays](../../src/DSA/Arrays/arrays.md)
- [Linked Lists](../../src/DSA/LinkedList/linked-list.md)
- [Stacks]
- [Queues]

### 🔹 Hashing & Maps
- [Hash Tables]
- [Collision Handling]
- [C++ `unordered_map` Internals]

### 🔹 Trees
- [Binary Trees]
- [Binary Search Trees]
- [AVL Tree]
- [Trie]
- [Heap / Priority Queue]

### 🔹 Graphs
- [Graph Representations]
- [BFS / DFS]
- [Topological Sort]
- [Dijkstra]
- [Union-Find DSU]

---

## 3️⃣ **Algorithms**

### 🔹 Searching
- [Binary Search + Variants](../../src/DSA/Searching-Sorting/searching-sorting.md)

### 🔹 Sorting
- [Searching & Sorting Techniques](../../src/DSA/Searching-Sorting/sorting.md)

### 🔹 Dynamic Programming
- [DP Basics]
- [1D DP Patterns]
- [2D Grid DP]
- [Knapsack Family]
- [LCS / LIS / Edit Distance]

### 🔹 Greedy Algorithms
- [Greedy Strategy Basics]
- [Intervals Problems]
- [Huffman Coding]

---

# 🧩 C++ Code Standards for DSA

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
