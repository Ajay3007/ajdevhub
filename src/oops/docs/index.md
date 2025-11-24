---
title: OOP in Modern C++ — Hands-On Examples
layout: default
---

# 🚗 OOP in Modern C++ — Hands-On Examples

A clean, structured repository of **Modern C++ OOP examples**, focusing on:

- Classes & Objects  
- Constructors & Initialization Lists  
- Encapsulation & Access Modifiers  
- Friend Functions & Friend Classes  
- Operator Overloading  
- Shallow vs Deep Copy  
- Copy/Move Semantics (Rule of 3/5/0)  
- Smart Pointers (`unique_ptr`, `shared_ptr`, `weak_ptr`)  
- Memory Safety via RAII  
- UML Diagrams & OOP design basics  

This repository is built for **interview preparation**, **C++ learning**, and **architecture practice**.

---

## Project Structure
'''
oops/
├── Main.cpp
├── shallow_vs_deep_copy/
├── smart_pointers/
├── friend_function_vs_friend_class/
├── operator_overloading/
├── .vscode/
├── cpp_oop_interview_checklist.pdf
└── README.md
'''


---

## Concepts Demonstrated

- Object-oriented fundamentals  
- Initialization lists & constructor details  
- Friend functions & classes  
- Operator overloading  
- Deep copy vs shallow copy; Rule of 3/5/0  
- Smart pointers & RAII

---

## Folder-by-Folder Quick Start

### shallow_vs_deep_copy
```bash
cd shallow_vs_deep_copy
g++ -std=c++17 deep_copy.cpp -o deep_copy
./deep_copy
```

### smart_pointers
```bash
cd smart_pointers
g++ -std=c++17 smart_example.cpp -o smart_example
./smart_example
```

### friend_function_vs_friend_class
```bash
cd friend_function_vs_friend_class
g++ -std=c++17 friend_example.cpp -o friend_example
./friend_example
```

### operator_overloading
```bash
cd operator_overloading
g++ -std=c++17 op.cpp -o op
./op
```


