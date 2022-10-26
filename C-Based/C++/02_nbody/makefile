.PHONY: all build clean

COMPILER = emcc
FILE = nbody.gpp-2.cpp
BINARY = nbody.gpp-2.cppo
OUTPUT = nbody.gpp-2.js
BASE_FLAGS = -c -pipe -Wall -O3 -fomit-frame-pointer -std=c++17
SIMD_FLAGS = -msimd128 -mavx
PTHREAD_FLAGS = 
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