---
title: Shallow vs Deep Copy
---


# Shallow vs Deep Copy


Short explanation and a link to the demo code.


### Key points
- Shallow copy copies pointer values — two objects share same memory (dangerous).
- Deep copy duplicates pointed-to data — safe independent objects.


### Run the demo
(Assuming the demo file is in a separate repo or this repo's examples)


```bash
# compile
# g++ -std=c++17 shallow_demo.cpp -o shallow_demo
# run
# ./shallow_demo