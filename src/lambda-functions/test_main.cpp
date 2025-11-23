#include<bits/stdc++.h>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    []() {
        cout << "This is a lambda function declaration without call in C++17." << endl;
    };
    []() {
        cout << "This is a lambda function declaration & call in C++17." << endl;
    }();
    auto fun = []() {
        cout << "This is a lambda function in C++17." << endl;
    };
    fun(); // Calling the lambda function
    return 0;
}