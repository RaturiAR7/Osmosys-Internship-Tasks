#include <stdio.h>
#include <stdlib.h>

typedef struct node
{
    int number;
    struct node *next;
} node;

node *insert(int num)
{
    node *p = malloc(sizeof(node));
    p->number = num;
    p->next = NULL;
    return p;
}
int main()
{
    node *head = NULL;
    head = malloc(sizeof(node));
    head->number = -1;
    head->next = NULL;
    node *tail = head;
    for (int i = 0; i < 4; i++)
    {
        tail->next = insert(i);
        tail = tail->next;
    }
    node *temp = head;
    while (temp != NULL)
    {
        printf("%d ", temp->number);
        temp = temp->next;
    }
    return 0;
}