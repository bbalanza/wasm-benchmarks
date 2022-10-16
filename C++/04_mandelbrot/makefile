.PHONY: all build clean

COMPILER = sudo /workspaces/01-wasm-c/emsdk/upstream/emscripten/emcc
FILE = mandelbrot.gpp-0.cpp
BINARY = mandelbrot.gpp-0.o
OUTPUT = mandelbrot.gpp-0.js
BASE_FLAGS = -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge -std=c++17
SIMD_FLAGS = 
EXTRA_FLAGS = -sALLOW_MEMORY_GROWTH
PTHREAD_FLAGS =  -pthread -s USE_PTHREADS=1 -s PTHREAD_POOL_SIZE=8
LINKER_FLAG = 

all: build clean
build: ${FILE}
	@echo "Building binary ..."
	@${COMPILER} -c ${BASE_FLAGS} ${SIMD_FLAGS} ${FILE} -o ${BINARY} ${LINKER_FLAG}
link: build
	@echo "Linking ..."
	@${COMPILER} ${EXTRA_FLAGS} ${BINARY} -o ${OUTPUT} ${LINKER_FLAG} ${PTHREAD_FLAGS} 
clean: link
	@echo "Cleaning tmp files ..."
	@rm -if *tmp*