#include <stdio.h>
#include <stdlib.h>

int subarraysWithKDistinct(int *nums, int numsSize, int k)
{
    // What I will be returning.
    int subarrays = 0;

    // The first index of the subarray.
    int i = 0;

    // Iterate through nums.
    for (i; i < numsSize; i++)
    {
        // The integers included in THIS subarray.
        int *numsEncountered = calloc(numsSize, sizeof(int));
        // numsEncountered count.
        int neCount = 0;

        // The final index of the subarray.
        int j = i;

        // Iterate to the end of nums
        for (j; j < numsSize; j++)
        {
            // Does numsEncountered include nums[j]?
            int isNew = 1;
            for (int z = 0; z < neCount; z++)
            {
                if (numsEncountered[z] == nums[j])
                {
                    isNew = 0;
                    break;
                }
            }

            // if it is new, make sure you add it to numsEncountered.
            if (isNew)
            {
                numsEncountered[neCount] = nums[j];
                neCount++;
            }

            // Now, IF neCount === k, we can count this subarray!
            if (neCount == k)
            {
                subarrays++;
            }
            else if (neCount > k)
            {
                // We gotta break the loop; there's now too many distinct nums.
                break;
            }
        }

        free(numsEncountered);
    }
    return subarrays;
}

int main()
{
    int nums[5] = {1, 2, 1, 2, 3};
    int sol = subarraysWithKDistinct(nums, 5, 2);
    printf("Expected: 7\n");
    printf("Actual: %d\n", sol);

    int a[5] = {1, 2, 1, 3, 4};
    int s = subarraysWithKDistinct(a, 5, 3);
    printf("Expected: 3\n");
    printf("Actual: %d\n", s);
}