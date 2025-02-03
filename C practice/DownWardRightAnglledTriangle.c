#include <stdio.h>

int main()
{
    int n = 5;
    for (int i = 0; i < n; i++)
    {
        int len = n - i;
        for (int j = 0; j < len; j++)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}