.PHONY: all build clean

COMPILER = sudo /workspaces/01-wasm-c/emsdk/upstream/emscripten/emcc
FILE = nbody.gpp-2.cpp
BINARY = nbody.gpp-2.cppo
OUTPUT = nbody.gpp-2.js
BASE_FLAGS = -c -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge -std=c++17
SIMD_FLAGS = -msimd128 -mavx
PTHREAD_FLAGS = 
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