.PHONY: all build clean

COMPILER = emcc
FILE = nbody.gcc-8.c 
BINARY = nbody.gcc-8.o
OUTPUT = nbody.gcc-8.gcc_run.js
BASE_FLAGS = -pipe -Wall -O3 -fomit-frame-pointer 
SIMD_FLAGS = -msimd128 -mavx
COMPILER_FLAGS = 
LINKER_FLAGS = -static
PTHREAD_FLAGS = 
LIBRARY_FLAGS = -march=ivybridge -lm

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