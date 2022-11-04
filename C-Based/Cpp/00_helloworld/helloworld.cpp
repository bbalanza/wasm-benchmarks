#ifdef __EMSCRIPTEN__
#include <emscripten.h>
#endif
#include <cstdio>

int helloworld(int argc, char *argv[]) {
  if (argc < 2) {
    printf("Hello world!\n");
  } else {
    printf("Hello world %s!\n", argv[1]);
  }
  return 0;
}
int EMSCRIPTEN_KEEPALIVE run(){
    int argc = 2;
    char * argv[] = {"\0", "user"};
    return helloworld(argc, argv);
}