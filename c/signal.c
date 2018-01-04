#include <stdio.h> 
#include <sys/types.h> 
#include <unistd.h> 
#include <ctype.h> 
#include <pthread.h> 

#define MAX_THREAD 3 

unsigned long long main_counter,counter[MAX_THREAD]; 
void* thread_worker(void*); 

pthread_mutex_t main_counter_mutex = PTHREAD_MUTEX_INITIALIZER; 
pthread_mutex_t counter_mutex = PTHREAD_MUTEX_INITIALIZER; 
 

int main(int argc,char argv[]){ 
 	int i,rtn; 
 	char ch; 

 	pthread_t pthread_id[MAX_THREAD]={0}; 
 	for(i=0;i<MAX_THREAD;i++){ 
  
		pthread_create(&pthread_id[i],NULL,thread_worker,(void*)i); 
   } 
 	do{ 
  
		unsigned long long sum=0; 
		pthread_mutex_lock(&counter_mutex); 
  
		for(i=0;i<MAX_THREAD;i++){
			sum+=counter[i]; 
			printf("counter[%d]=%llu\n",i,counter[i]); 
  
		} 
  
		printf("main_counter=%llu/sum=%llu\n",main_counter,sum); 
  

		pthread_mutex_unlock(&counter_mutex); 
 	}while((ch=getchar())!='q'); 
 	return 0; 
} 

void* thread_worker(void* p){ 
int thread_num;   
thread_num=(int)p; 
  
for(;;){ 
	pthread_mutex_lock(&main_counter_mutex); 
	main_counter++; 
	pthread_mutex_unlock(&main_counter_mutex); 
	pthread_mutex_lock(&counter_mutex);  
	counter[thread_num]++; 
	pthread_mutex_unlock(&counter_mutex); 
	} 
}