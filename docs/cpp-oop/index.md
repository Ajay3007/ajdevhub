ï»¿---
title: C++ / OOP
---
# Ã°Å¸Å¡â€” OOP in Modern C++ Ã¢â‚¬â€ Hands-On Examples

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

# Ã°Å¸â€œÂ Project Structure

```text
oops/
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ Main.cpp                         # Starter example / entry point
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ shallow_vs_deep_copy/            # Deep copy vs shallow copy demos
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ smart_pointers/                  # unique_ptr/shared_ptr/weak_ptr demos
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ friend_function_vs_friend_class/ # Friend usage examples
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ operator_overloading/            # Operator <<, +, ==, etc.
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ .vscode/                         # Build tasks for VS Code
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ [cpp_oop_interview_checklist.pdf]({{ site.baseurl }}/assets/pdfs/oops/cpp_oop_interview_checklist.pdf)
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ [cpp_oop_interview_checklist_extended.pdf]({{ site.baseurl }}/assets/pdfs/oops/cpp_oop_interview_checklist_extended.pdf)
Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ README.md
```

# Concepts Demonstrated
## Ã¢Å“â€ Object-Oriented Fundamentals

- Class, Object, Encapsulation

- Inheritance (basic examples)

- Composition vs Aggregation

- Access Specifiers: public / private / protected

## Ã¢Å“â€ Important C++ Concepts

- Constructors / Destructors

- Initialization lists

- Friend functions & friend classes

- Operator overloading

- Copy constructor, deep vs shallow copy

- Move semantics (Rule of 5)

- Smart pointers (Rule of 0)

- RAII and memory safety

## Ã¢Å“â€ Interview-Oriented Topics

- Overload resolution

- Member vs non-member operator overload

- Unique vs shared ownership

- When to use weak_ptr

# Ã°Å¸Â§Â© UML Diagrams (ASCII)
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

# Ã°Å¸â€œÅ¡ Folder-by-Folder Usage

## Ã°Å¸â€Â¹ shallow_vs_deep_copy/

### Demonstrates:

- Why shallow copying is dangerous

- Correct implementation of deep copy constructor

- Rule of 3: destructor, copy constructor, copy assignment

## Ã°Å¸â€Â¹ smart_pointers/

### Shows:

- unique_ptr and the Rule of 0

- shared_ptr reference counting

- weak_ptr to avoid circular references

## Ã°Å¸â€Â¹ friend_function_vs_friend_class/

### Explains:

- How friend functions access private members

- When friend classes are appropriate

- Why friends should be used sparingly

## Ã°Å¸â€Â¹ operator_overloading/

### Examples:

- Overloading operator<<

- Arithmetic operators (+, -)

- Comparison operators (==, <)

- Member vs friend operator overloads

# Next Step

## Car Simulation Project

[Car Simulation Project](https://ajay3007.github.io/car_project/)

# Ã°Å¸â€œâ€ž Included PDF Checklists

- [cpp_oop_interview_checklist.pdf]({{ site.baseurl }}/assets/pdfs/oops/cpp_oop_interview_checklist.pdf)

- [cpp_oop_interview_checklist_extended.pdf]({{ site.baseurl }}/assets/pdfs/oops/cpp_oop_interview_checklist_extended.pdf)

## These contain:

- 25+ interview-oriented OOP topics

- UML diagrams

- Best practices for modern C++

- Memory management rules

- Example questions & summary tables

- Perfect for fast revision before interviews.

## Ã°Å¸â€œâ€ž License
This project is open for educational use.

---

## Ã°Å¸â€˜Â¨Ã¢â‚¬ÂÃ°Å¸â€™Â» Author
Created by **Ajay Gupt** as part of C++ OOP learning and system design practice.

If you like this repo, consider Ã¢Â­Â starring it!

