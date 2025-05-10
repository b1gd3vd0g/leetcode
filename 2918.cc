#include <vector>
#include <iostream>
using namespace std;

class Solution {
public:
    long long minSum(vector<int>& nums1, vector<int>& nums2) {
        int z1 = 0, z2 = 0;
        long long s1 = 0, s2 = 0;
        for (int i = 0; i < nums1.size(); i++) {
            if (nums1[i] == 0) {
                z1++;
            } else {
                s1 += nums1[i];
            }
        }
        for (int i = 0; i < nums2.size(); i++)
        {
            if (nums2[i] == 0) {
                z2++;
            } else {
                s2 += nums2[i];
            }
        }
        // Now we have the number of zeros and the sums of each vector.
        if (z1 == 0 || z2 == 0) {
            // At least one vector has no zeros.
            if (z1 + z2 == 0) {
                // Both vectors have no zeros.
                if (s1 == s2) {
                    return s1;
                } else {
                    return -1;
                }
            } else {
                // Only one vector has zeros.
                if (z1 == 0) {
                    // nums2 has zeros.
                    if (s2 + z2 <= s1) {
                        return s1;
                    } else {
                        return -1;
                    }
                } else {
                    // nums1 has zeros.
                    if (s1 + z1 <= s2) {
                        return s2;
                    } else {
                        return -1;
                    }
                }
            }
        }
        // Both vectors have zeros.
        return max(s1 + z1, s2 + z2);
    }
};

int main() {
    Solution s;
    vector<int> nums1 = {0, 1, 2, 3};
    vector<int> nums2 = {0, 4, 5, 6};
    cout << s.minSum(nums1, nums2) << endl;
    return 0;
}