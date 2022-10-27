.PHONY: all build clean

COMPILER = emcc
FILE = mandelbrot.gcc-6.c 
BINARY = mandelbrot.gcc-6.o  
OUTPUT = ./pkg/emscripten.js
BASE_FLAGS = -pipe -Wall -O3 -fomit-frame-pointer 
SIMD_FLAGS = -msimd128 -msse2 
ES6_MODULE_FLAGS = -s EXPORT_ES6=1 -s MODULARIZE=1 -s EXPORT_NAME=wasm
PTHREAD_FLAGS = 
COMPILER_FLAGS = -DSIMDE_ENABLE_OPENMP -fopenmp-simd -fno-finite-math-only 
LINKER_FLAGS = -s ALLOW_MEMORY_GROWTH
PTHREAD_FLAGS = 
LIBRARY_FLAGS = -march=ivybridge -lm

all: build link clean
build: ${FILE}
	@echo "Building binary ..."
	@${COMPILER} -c ${BASE_FLAGS} ${COMPILER_FLAGS} ${SIMD_FLAGS} ${FILE} -o ${BINARY}
link: build
	@echo "Linking ..."
	@${COMPILER}  ${BINARY} -o ${OUTPUT} ${LINKER_FLAGS} ${ES6_MODULE_FLAGS} ${LIBRARY_FLAGS} ${PTHREAD_FLAGS} 
clean: link
	@echo "Cleaning tmp files ..."
	@rm -if *tmp* *temp*