.PHONY: all build clean

COMPILER = emcc
FILE = mandelbrot.gcc-6.c 
BINARY = mandelbrot.gcc-6.o  
OUTPUT = mandelbrot.gcc-6.gcc_run.js
BASE_FLAGS = -pipe -Wall -O3 -fomit-frame-pointer 
SIMD_FLAGS = -msimd128 -msse2 
PTHREAD_FLAGS = 
COMPILER_FLAGS = -DSIMDE_ENABLE_OPENMP -fopenmp-simd -fno-finite-math-only -sALLOW_MEMORY_GROWTH
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