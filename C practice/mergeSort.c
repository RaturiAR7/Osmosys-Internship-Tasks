#include <stdio.h>

void merge(int arr[], int s, int e)
{
    int mid = s + (e - s) / 2;
    int l1 = mid - s + 1;
    int l2 = e - mid;
    int arr1[l1], arr2[l2];
    int k = s;
    for (int i = 0; i < l1; i++)
    {
        arr1[i] = arr[k++];
    }
    for (int i = 0; i < l2; i++)
    {
        arr2[i] = arr[k++];
    }
    int i1 = 0, i2 = 0;
    k = s;
    while (i1 < l1 && i2 < l2)
    {
        if (arr1[i1] < arr2[i2])
        {
            arr[k] = arr1[i1];
            i1++;
            k++;
        }
        else
        {
            arr[k] = arr2[i2];
            i2++;
            k++;
        }
    }
    while (i1 < l1)
    {
        arr[k++] = arr1[i1++];
    }
    while (i2 < l2)
    {
        arr[k++] = arr2[i2++];
    }
}
void mergeSort(int arr[], int s, int e)
{
    if (s >= e)
        return;
    int mid = s + (e - s) / 2;
    mergeSort(arr, s, mid);
    mergeSort(arr, mid + 1, e);
    merge(arr, s, e);
}
int main()
{
    int n = 10;
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        printf("Enter a number\n");
        scanf("%d", &arr[i]);
    }
    ////MergeSort
    mergeSort(arr, 0, n);
    for (int i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }
    return 0;
}