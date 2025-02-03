#include <stdio.h>

int main()
{
    int n = 0;
    printf("Enter size of array\n");
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        printf("Enter an even number");
        scanf("%d", &arr[i]);
    }
    int evenNum = arr[0];
    for (int i = 0; i < n; i++)
    {
        if (evenNum != arr[i])
        {
            printf("Missing even number is: %d\n", evenNum);
            break;
        }
        evenNum += 2;
    }
    return 0;
}