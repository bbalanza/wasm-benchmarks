.PHONY: all build link clean

COMPILER = sudo /workspaces/01-wasm-c/emsdk/upstream/emscripten/emcc
FILE = knucleotide.gpp-2.cpp
BINARY = knucleotide.gpp-2.o
OUTPUT = knucleotide.gpp-2.html
BASE_FLAGS = -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge --stdlib=libstdc++
SIMD_FLAGS = 
COMPILER_FLAGS = -s USE_PTHREADS=1 -std=gnu++17
LINKER_FLAGS = -s USE_PTHREADS=1 -s PTHREAD_POOL_SIZE=8 
PTHREAD_FLAGS = -lpthread 
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