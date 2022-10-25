.PHONY: all build clean

COMPILER = emcc
FILE = fannkuchredux.gpp-5.cpp
BINARY = fannkuchredux.gpp-5.o
OUTPUT = fannkuchredux.gpp-5.js
BASE_FLAGS = -c -pipe -Wall -O3 -fomit-frame-pointer  -std=c++11
SIMD_FLAGS = -msimd128 -mavx
PTHREAD_FLAGS = 
EXTRA_FLAGS = -DSIMDE_ENABLE_OPENMP -fopenmp-simd
LINKER_FLAG = -march=ivybridge

all: build clean
build: ${FILE}
	@echo "Building binary ..."
	@${COMPILER} ${BASE_FLAGS} ${EXTRA_FLAGS} ${SIMD_FLAGS} ${FILE} -o ${BINARY} 
link: build
	@echo "Linking ..."
	@${COMPILER} ${EXTRA_FLAGS} ${BINARY} -o ${OUTPUT} ${LINKER_FLAG} 
clean: link
	@echo "Cleaning tmp files ..."
	@rm -if *tmp* *temp*