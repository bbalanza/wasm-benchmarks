.PHONY: all build link clean

COMPILER = em++
FILE = mandelbrot.gpp.cpp
BINARY = mandelbrot.gpp.o
OUTPUT = ./pkg/emscripten.js
BASE_FLAGS = -pipe -Wall -O3 -fomit-frame-pointer -std=c++17
SIMD_FLAGS = -msimd128 -msse4.1
PTHREAD_FLAGS =  -pthread -s USE_PTHREADS=1 -s PTHREAD_POOL_SIZE=8
COMPILER_FLAGS = -s USE_BOOST_HEADERS=1 -pthread -s USE_PTHREADS=1 
LINKER_FLAGS = -march=ivybridge -s ALLOW_MEMORY_GROWTH -std=c++17 
ES6_MODULE_FLAGS = -s EXPORT_ES6=1 -s MODULARIZE=1 -s EXPORT_NAME=wasm

all: build link clean
build: ${FILE}
	@echo "Building binary ..."
	@${COMPILER} -c ${BASE_FLAGS} ${COMPILER_FLAGS} ${SIMD_FLAGS} ${FILE} -o ${BINARY}
link: build
	@echo "Linking ..."
	@${COMPILER}  ${BINARY} -o ${OUTPUT} ${LINKER_FLAGS} ${ES6_MODULE_FLAGS} ${LIBRARY_FLAGS} ${PTHREAD_FLAGS} 
clean: link
	@echo "Cleaning tmp files ..."
	@rm -if *tmp* *temp* *./dist/*