.PHONY: all build clean

COMPILER = emcc
FILE = spectralnorm.gpp-0.cpp
BINARY = spectralnorm.gpp-0.o
OUTPUT = spectralnorm.gpp-0.js
BASE_FLAGS = -pipe -Wall -O3 -fomit-frame-pointer -std=c++17
SIMD_FLAGS = -msimd128 -mavx
EXTRA_FLAGS = -DSIMDE_ENABLE_OPENMP -fopenmp-simd 
PTHREAD_FLAGS = -s USE_PTHREADS=1 -s PTHREAD_POOL_SIZE=8
LINKER_FLAG = -march=ivybridge 

all: build clean
build: ${FILE}
	@echo "Building binary ..."
	@${COMPILER} -c ${BASE_FLAGS} ${EXTRA_FLAGS} ${SIMD_FLAGS} ${FILE} -o ${BINARY} 
link: build
	@echo "Linking ..."
	@${COMPILER} ${EXTRA_FLAGS} ${BINARY} -o ${OUTPUT} ${LINKER_FLAG} 
clean: link
	@echo "Cleaning tmp files ..."
	@rm -if *tmp* *temp*