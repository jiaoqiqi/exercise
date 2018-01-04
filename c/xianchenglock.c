#include <stdio.h> 
#include <sys/types.h>
#include <unistd.h> 
#include <ctype.h>
#include <pthread.h> 

#define MAX_THREAD 3 /* 线程的个数 */
unsigned long long main_counter, counter[MAX_THREAD]; 
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER; //init
/* unsigned long  long是比long还长的整数 */
void* thread_worker(void*);

int main(int argc, char* argv[]){        
      int i, rtn, ch;      
      pthread_t pthread_id[MAX_THREAD] = {0}; /* 存放线程id*/ 
      for (i=0; i<MAX_THREAD; i++){        
        rtn=pthread_create(&pthread_id[i],NULL,(void *)thread_worker,i);
      } 


      do{
           pthread_mutex_lock(&mutex);
           unsigned long long sum = 0;    
           for (i=0; i<MAX_THREAD; i++){                 
                sum += counter[i];              
                    printf("%llu ", counter[i]);
          }  
           printf("%llu/%llu", main_counter, sum);
           pthread_mutex_unlock(&mutex);   
      } while ((ch = getchar()) != 'q');

    pthread_mutex_destroy(&mutex);
    return 0;  
}               
 void* thread_worker(void* p)
 {      
     int thread_num;  
     thread_num=p;
     /* 在这里填写代码，把main中的i的值传递给thread_num */ 

     for(;;)
      { /* 无限循环 */
          pthread_mutex_lock(&mutex);       
          counter[thread_num]++; /* 本线程的counter加一 */ 
          main_counter++; /* 主counter 加一 */
          pthread_mutex_unlock(&mutex);   
      }
 }      