#include <stdio.h>

int main()
{
    int n = 4;
    /////Upper Triangle
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n - i; j++)
        {
            printf(" ");
        }
        for (int j = 1; j <= i; j++)
        {
            printf("%d", j);
        }
        for (int j = i - 1; j >= 1; j--)
        {
            printf("%d", j);
        }
        printf("\n");
    }
    ////Lower Triangle
    for (int i = 1; i <= n - 1; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            printf(" ");
        }
        for (int j = 1; j <= n - i; j++)
        {
            printf("%d", j);
        }
        for (int j = n - i - 1; j >= 1; j--)
        {
            printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}
>>>>>>> Tabnine >>>>>>>// {"conversationId":"dafa3fb3-3ba6-4aa7-abf0-1bcf1c626493","source":"instruct"}