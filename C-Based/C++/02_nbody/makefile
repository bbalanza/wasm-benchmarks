.PHONY: all build link clean

COMPILER = em++
FILE = nbody.gpp-2.cpp
BINARY = nbody.gpp-2.cppo
OUTPUT = ./pkg/emscripten.js
BASE_FLAGS = -c -pipe -Wall -O3 -fomit-frame-pointer -std=c++17
SIMD_FLAGS = -msimd128 -mavx
COMPILER_FLAGS = -s USE_BOOST_HEADERS=1 -pthread -s USE_PTHREADS=1 
ES6_MODULE_FLAGS = -s EXPORT_ES6=1 -s MODULARIZE=1 -s EXPORT_NAME=wasm
LINKER_FLAGS = -march=ivybridge -std=c++17

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