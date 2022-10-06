.PHONY: all build link clean

COMPILER = sudo /workspaces/01-wasm-c/emsdk/upstream/emscripten/emcc
FILE = revcomp.gpp-2.cpp
BINARY = revcomp.gpp-2.o
OUTPUT = revcomp.gpp-2.html
BASE_FLAGS = -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge 
SIMD_FLAGS = -msimd128 -mavx 
COMPILER_FLAGS = -std=c++11
LINKER_FLAGS = -std=c++11
PTHREAD_FLAGS = 
LIBRARY_FLAGS = 

all: build link clean
build: ${FILE}
	@echo "Building binary ..."
	@${COMPILER} -c ${BASE_FLAGS} ${COMPILER_FLAGS} ${SIMD_FLAGS} ${FILE} -o ${BINARY} ${LIBRARY_FLAGS}
link: build
	@echo "Linking ..."
	@${COMPILER}  ${BINARY} -o ${OUTPUT} ${LINKER_FLAGS} ${LIBRARY_FLAGS} ${PTHREAD_FLAGS} 
clean: link
	@echo "Cleaning tmp files ..."
	@rm -if *tmp*