#include <stdio.h>
#include <stdlib.h>

int main()
{
    int *list = malloc(3 * sizeof(int));
    if (list == NULL)
    {
        return 1;
    }
    list[0] = 10;
    list[1] = 20;
    list[2] = 30;
    int *tmp = malloc(4 * sizeof(int));
    if (tmp == NULL)
    {
        free(list);
        return 1;
    }
    for (int i = 0; i < 3; i++)
    {
        tmp[i] = list[i];
    }
    tmp[3] = 40;
    free(list);
    list = tmp;
    for (int i = 0; i < 4; i++)
    {
        printf("%d ", list[i]);
    }

    return 0;
}