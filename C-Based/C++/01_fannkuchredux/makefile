.PHONY: all build clean

COMPILER = sudo /workspaces/01-wasm-c/emsdk/upstream/emscripten/emcc
FILE = fannkuchredux.gpp-5.cpp
BINARY = fannkuchredux.gpp-5.cppo
OUTPUT = fannkuchredux.gpp-5.js
BASE_FLAGS = -c -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge -std=c++11
SIMD_FLAGS = -msimd128 -mavx
PTHREAD_FLAGS = 
EXTRA_FLAGS = -DSIMDE_ENABLE_OPENMP -fopenmp-simd
LINKER_FLAG = 

all: build clean
build: ${FILE}
	@echo "Building binary ..."
	@${COMPILER} ${BASE_FLAGS} ${EXTRA_FLAGS} ${SIMD_FLAGS} ${FILE} -o ${BINARY} ${LINKER_FLAG}
link: build
	@echo "Linking ..."
	@${COMPILER} ${EXTRA_FLAGS} ${BINARY} -o ${OUTPUT} ${LINKER_FLAG} 
clean: link
	@echo "Cleaning tmp files ..."
	@rm -if *tmp*