.PHONY: all build clean

COMPILER = emcc
FILE = spectralnorm.gcc-5.c 
BINARY = spectralnorm.gcc-5.o
OUTPUT = spectralnorm.gcc-5.gcc_run.js
BASE_FLAGS = -pipe -Wall -O3 -fomit-frame-pointer 
SIMD_FLAGS = -msimd128 -msse2 
COMPILER_FLAGS = -DSIMDE_ENABLE_OPENMP -fopenmp-simd 
LINKER_FLAGS =
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