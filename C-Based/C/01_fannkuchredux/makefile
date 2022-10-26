.PHONY: all build link clean

COMPILER = emcc
FILE = fannkuchredux.gcc-6.c 
BINARY = fannkuchredux.gcc-6.o
OUTPUT = fannkuchredux.gcc-6.gcc_run.js
BASE_FLAGS = -pipe -Wall -O3 -fomit-frame-pointer 
SIMD_FLAGS = -msimd128 -msse4.1
COMPILER_FLAGS = -pthread
LINKER_FLAGS = -march=ivybridge -sALLOW_MEMORY_GROWTH 
PTHREAD_FLAGS = -pthread -lpthread -s USE_PTHREADS=1 -s PTHREAD_POOL_SIZE=8
LIBRARY_FLAGS = 

all: build link clean
build: ${FILE}
	@echo "Building binary ..."
	@${COMPILER} -c ${BASE_FLAGS} ${COMPILER_FLAGS} ${SIMD_FLAGS} ${FILE} -o ${BINARY} 
link: build
	@echo "Linking ..."
	@${COMPILER}  ${BINARY} -o ${OUTPUT} ${LINKER_FLAGS} ${LIBRARY_FLAGS} ${PTHREAD_FLAGS} 
clean: link
	@echo "Cleaning tmp files ..."
	@rm -if *tmp* *temp*