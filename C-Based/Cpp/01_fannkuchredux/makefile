.PHONY: all build link clean

COMPILER = em++
FILE = fannkuchredux.gpp-6.cpp
BINARY = fannkuchredux.gpp-6.o
OUTPUT = ./pkg/emscripten.js
BASE_FLAGS = -c -pipe -Wall -O3 -fomit-frame-pointer  -std=c++17
SIMD_FLAGS = -msimd128 -mavx
COMPILER_FLAGS = -DSIMDE_ENABLE_OPENMP -s USE_BOOST_HEADERS=1 -pthread -s USE_PTHREADS=1 
PTHREAD_FLAGS =  -pthread -s USE_PTHREADS=1 -s PTHREAD_POOL_SIZE=8
LINKER_FLAGS = -march=ivybridge -DSIMDE_ENABLE_OPENMP -fopenmp-simd -fopenmp  -std=c++17
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