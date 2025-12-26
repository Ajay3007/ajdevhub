---
title: C++ / OOP
---
# 🚗 OOP in Modern C++ — Hands-On Examples

![C++17](https://img.shields.io/badge/C++-17-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20Linux-lightgrey)
![License](https://img.shields.io/badge/License-Educational-green)
![GitHub Repo](https://img.shields.io/badge/GitHub-Ajay3007-black?logo=github)

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

# 📁 Project Structure

```text
oops/
├── Main.cpp                         # Starter example / entry point
├── shallow_vs_deep_copy/            # Deep copy vs shallow copy demos
├── smart_pointers/                  # unique_ptr/shared_ptr/weak_ptr demos
├── friend_function_vs_friend_class/ # Friend usage examples
├── operator_overloading/            # Operator <<, +, ==, etc.
├── .vscode/                         # Build tasks for VS Code
├── [cpp_oop_interview_checklist.pdf](https://raw.githubusercontent.com/Ajay3007/ajdevhub/master/src/oops/cpp_oop_interview_checklist.pdf)
├── [cpp_oop_interview_checklist_extended.pdf](https://raw.githubusercontent.com/Ajay3007/ajdevhub/master/src/oops/cpp_oop_interview_checklist_extended.pdf)
└── README.md
```

# Concepts Demonstrated
## ✔ Object-Oriented Fundamentals

- Class, Object, Encapsulation

- Inheritance (basic examples)

- Composition vs Aggregation

- Access Specifiers: public / private / protected

## ✔ Important C++ Concepts

- Constructors / Destructors

- Initialization lists

- Friend functions & friend classes

- Operator overloading

- Copy constructor, deep vs shallow copy

- Move semantics (Rule of 5)

- Smart pointers (Rule of 0)

- RAII and memory safety

## ✔ Interview-Oriented Topics

- Overload resolution

- Member vs non-member operator overload

- Unique vs shared ownership

- When to use weak_ptr

# 🧩 UML Diagrams (ASCII)
## Friend Function vs Friend Class

```UML
+------------------+             +------------------+
|     Student      | <---------> |     Printer      |
+------------------+  friend     +------------------+
| - name           |             |  + print(Student)|
| - age            |             +------------------+
+------------------+
```

## Shallow vs Deep Copy

```UML
 Shallow Copy:
+----------+       +---------+
| Obj A    | ----> |  Heap   |
| ptr=AAA  |       | [data]  |
+----------+       +---------+
| Obj B    | ----> same AAA  |
+----------+

 Deep Copy:
+----------+       +---------+
| Obj A    | ----> | Heap1   |
+----------+       +---------+
| Obj B    | ----> | Heap2   |
+----------+       +---------+
```

## Smart Pointer Ownership

```UML
unique_ptr  ---> sole owner of object
shared_ptr  ---> reference counted shared ownership
weak_ptr    ---> observer (non-owning reference)
```

# 📚 Folder-by-Folder Usage

## 🔹 shallow_vs_deep_copy/

### Demonstrates:

- Why shallow copying is dangerous

- Correct implementation of deep copy constructor

- Rule of 3: destructor, copy constructor, copy assignment

## 🔹 smart_pointers/

### Shows:

- unique_ptr and the Rule of 0

- shared_ptr reference counting

- weak_ptr to avoid circular references

## 🔹 friend_function_vs_friend_class/

### Explains:

- How friend functions access private members

- When friend classes are appropriate

- Why friends should be used sparingly

## 🔹 operator_overloading/

### Examples:

- Overloading operator<<

- Arithmetic operators (+, -)

- Comparison operators (==, <)

- Member vs friend operator overloads

# Next Step

## Car Simulation Project

[Car Simulation Project](https://ajay3007.github.io/car_project/)

# 📄 Included PDF Checklists

- [cpp_oop_interview_checklist.pdf](https://raw.githubusercontent.com/Ajay3007/ajdevhub/master/src/oops/cpp_oop_interview_checklist.pdf)

- [cpp_oop_interview_checklist_extended.pdf](https://raw.githubusercontent.com/Ajay3007/ajdevhub/master/src/oops/cpp_oop_interview_checklist_extended.pdf)

## These contain:

- 25+ interview-oriented OOP topics

- UML diagrams

- Best practices for modern C++

- Memory management rules

- Example questions & summary tables

- Perfect for fast revision before interviews.

## 📄 License
This project is open for educational use.

---

## 👨‍💻 Author
Created by **Ajay Gupt** as part of C++ OOP learning and system design practice.

If you like this repo, consider ⭐ starring it!
