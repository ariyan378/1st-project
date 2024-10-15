#include<stdio.h>
#include<stdlib.h>

//c language

struct myarray
{
    int total_size ;
    int used_data  ;

    int *ptr ;

};

void createarray( struct myarray *a , int tsize , int usize )
{
    a -> total_size = tsize ;
    a -> used_data  = usize ;
    a -> ptr = (int*)malloc(tsize*sizeof(int));
}

void show( struct myarray *a) {

    for ( int i = 0 ; i < a->used_data ; i++)
    {
        printf(" %d\n", (a -> ptr)[i]) ;

    }
}


void setval( struct myarray *a) {

    int n ;

    for ( int i = 0 ; i < a-> used_data ; i++)
    {
        printf(" Enter your element %d : ", i);
        scanf(" %d",   &n );
        (a->ptr)[i] = n;

    }
}

int main ()
{

    struct myarray marks ;

    createarray(&marks , 10, 2);
    printf("We are running serval now \n");
    setval(&marks);
    printf(" we are runing show now \n");
    show (&marks);

    return 0 ;
}

