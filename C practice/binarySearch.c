#include <stdio.h>

int binarySearch(int arr[], int target, int size)
{
    int s = 0, e = size - 1;
    ;
    printf("Value of e %d", e);
    while (s <= e)
    {
        int mid = s + (e - s) / 2;
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] < target)
            s = mid + 1;
        else
            e = mid - 1;
    }
    return -1;
}
int main()
{
    int arr[10];
    for (int i = 0; i < 10; i++)
    {
        printf("Enter %d th number", i);
        scanf("%d", &arr[i]);
    }
    int size = sizeof(arr) / sizeof(arr[0]);
    /////Implement Binary Search
    printf("Enter the number to search for in array\n");
    int target = 0;
    scanf("%d", &target);
    int index = binarySearch(arr, target, size);
    if (index == -1)
        printf("Not found\n");
    else
        printf("The target number is found at index %d\n", index);
    return 0;
}