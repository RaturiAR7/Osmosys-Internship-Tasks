#include <stdio.h>
#include <ctype.h>
#include <string.h>

int main()
{
    char str[100];
    printf("Enter a string:\n");
    gets(str);

    size_t len = strlen(str);
    if (len > 0 && str[len - 1] == '\n')
    {
        str[len - 1] = '\0';
    }

    for (int i = 0; str[i] != '\0'; i++)
    {
        str[i] = tolower(str[i]);
    }

    for (int i = 0; str[i] != '\0'; i++)
    {
        if (i == 0 || str[i - 1] == ' ')
        {
            str[i] = toupper(str[i]);
        }
    }

    printf("Formatted string:\n");
    puts(str);
    return 0;
}
