#include <stdio.h>

int main()
{
    int a = 0;
    int ans = 1;
    printf("Enter numbers or enter 0 to exit:\n");
    scanf("%d", &a);
    while (a != 0)
    {
        ans = ans * a;
        scanf("%d", &a);
    }
    printf("%d", ans);
    return 0;
}