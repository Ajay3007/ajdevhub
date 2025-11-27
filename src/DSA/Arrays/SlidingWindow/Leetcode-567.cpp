#include <bits/stdc++.h>
using namespace std;

bool checkAllZero(vector<int> &freqS1)
{
    for (int i = 0; i < 26; i++)
    {
        if (freqS1[i] != 0)
            return false;
    }
    return true;
}

bool checkInclusion(string s1, string s2)
{
    int k = s1.length(), n = s2.length();
    if (k > n)
        return false;
    vector<int> freqS1(26, 0);
    for (int i = 0; i < k; i++)
    {
        freqS1[s1[i] - 'a']++;
    }
    int l = 0, r = k - 1;
    while (r < n)
    {
        vector<int> freqS1_dup(freqS1.begin(), freqS1.end());
        int i = l;
        int j;
        while (i <= r)
        {
            j = s2[i] - 'a';
            if (freqS1_dup[j] != 0)
            {
                freqS1_dup[j]--;
            }
            else
            {
                break;
            }
            i++;
        }
        if (i == r + 1)
        {
            if (checkAllZero(freqS1_dup))
                return true;
        }
        l++;
        r++;
    }
    return false;
}

int main()
{
    string s1, s2;
    cin >> s1 >> s2;
    if (checkInclusion(s1, s2))
        cout << "True\n";
    else
        cout << "False\n";
    return 0;
}