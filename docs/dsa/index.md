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

- [Linked Lists]

- [Stacks & queues]

- [Priority queues (heaps)]

- [Binary trees & BST]

- [Graphs]

- [Tries]

- [Dynamic Programming]

- [Bit manipulation]

## 📌 B. Algorithms

- [Searching & Sorting (binary search patterns, custom comparator, stable sort, counting sort)](../../src/DSA/Searching-Sorting/searching-sorting.md)

- [Sliding window]

- [Two pointers]

- [Backtracking]

- [Greedy]

- [BFS/DFS]

- [Dijkstra / BFS on weighted graphs]

- [Topological sort]

- [KMP / Rabin Karp (string)]

- [Union-Find]


# 📚 Table of Contents

## 1️⃣ **Basics**
- [Recursion Deep Dive](./recursion.md)
- [Memory Layout & Stack vs Heap](./memory_layout.md)

---

## 2️⃣ **Core Data Structures**

### 🔹 Linear Data Structures
- [Arrays](./arrays.md)
- [Linked Lists](./linked_list.md)
- [Stacks](./stack.md)
- [Queues](./queue.md)

### 🔹 Hashing & Maps
- [Hash Tables](./hash_tables.md)
- [Collision Handling](./collision_handling.md)
- [C++ `unordered_map` Internals](./cpp_unordered_map.md)

### 🔹 Trees
- [Binary Trees](./binary_tree.md)
- [Binary Search Trees](./bst.md)
- [AVL Tree](./avl_tree.md)
- [Trie](./trie.md)
- [Heap / Priority Queue](./heap.md)

### 🔹 Graphs
- [Graph Representations](./graph_representation.md)
- [BFS / DFS](./graph_traversal.md)
- [Topological Sort](./toposort.md)
- [Dijkstra](./dijkstra.md)
- [Union-Find DSU](./dsu.md)

---

## 3️⃣ **Algorithms**

### 🔹 Searching
- [Linear Search](./linear_search.md)
- [Binary Search + Variants](./binary_search.md)

### 🔹 Sorting
- [Bubble / Selection / Insertion](./basic_sorts.md)
- [Merge Sort](./merge_sort.md)
- [Quick Sort](./quick_sort.md)
- [Heap Sort](./heap_sort.md)

### 🔹 Dynamic Programming
- [DP Basics](./dp_basics.md)
- [1D DP Patterns](./dp_1d.md)
- [2D Grid DP](./dp_grid.md)
- [Knapsack Family](./knapsack.md)
- [LCS / LIS / Edit Distance](./dp_strings.md)

### 🔹 Greedy Algorithms
- [Greedy Strategy Basics](./greedy.md)
- [Intervals Problems](./intervals.md)
- [Huffman Coding](./huffman.md)

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
