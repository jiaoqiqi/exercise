#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

int main(void){
	pid_t pid;
	printf("process creation study\n");
	pid = fork();
	switch(pid){
		case 0:
			printf("child process is running,curlPid is %d,ParentPid is %d\n",pid,getppid());
			break;
		case -1:
			perror("Process creation falied\n");
			break;
		default:
			printf("Parent process is running,childPid is %d,ParentPid is %d\n",pid,getpid());
			break;
	}
		exit(0);
	
}
