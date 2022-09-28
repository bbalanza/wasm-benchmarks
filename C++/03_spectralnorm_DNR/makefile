.PHONY: all build clean

COMPILER = sudo /workspaces/01-wasm-c/emsdk/upstream/emscripten/emcc
FILE = spectralnorm.gpp-0.cpp
BINARY = spectralnorm.gpp-0.o
OUTPUT = spectralnorm.gpp-0.html
BASE_FLAGS = -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge -std=c++17
SIMD_FLAGS = -msimd128 -mavx
EXTRA_FLAGS = -DSIMDE_ENABLE_OPENMP -fopenmp-simd 
PTHREAD_FLAGS = 
LINKER_FLAG = 

all: build clean
build: ${FILE}
	@echo "Building binary ..."
	@${COMPILER} -c ${BASE_FLAGS} ${EXTRA_FLAGS} ${SIMD_FLAGS} ${FILE} -o ${BINARY} ${LINKER_FLAG}
link: build
	@echo "Linking ..."
	@${COMPILER} ${EXTRA_FLAGS} ${BINARY} -o ${OUTPUT} ${LINKER_FLAG} 
clean: link
	@echo "Cleaning tmp files ..."
	@rm -if *tmp*