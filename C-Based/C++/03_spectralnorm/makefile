.PHONY: all build clean

COMPILER = em++
FILE = spectralnorm.gpp-0.cpp
BINARY = spectralnorm.gpp-0.o
OUTPUT = ./pkg/emscripten.js
BASE_FLAGS = -pipe -Wall -O3 -fomit-frame-pointer -std=c++17
SIMD_FLAGS = 
COMPILER_FLAGS = 
LINKER_FLAGS = -march=ivybridge -std=c++17 
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