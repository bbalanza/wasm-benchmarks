.PHONY: all build link clean

COMPILER = sudo /workspaces/01-wasm/emsdk/upstream/emscripten/emcc
FILE = revcomp.gcc-7.c
BINARY = revcomp.gcc-7.o
OUTPUT = revcomp.gcc-7.html
BASE_FLAGS = -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge 
SIMD_FLAGS = -msimd128 -mavx 
COMPILER_FLAGS =
LINKER_FLAGS = --preload-file ../../assets -sALLOW_MEMORY_GROWTH
PTHREAD_FLAGS = -pthread -lpthread -s USE_PTHREADS=1 -s PTHREAD_POOL_SIZE=8
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