.PHONY: all build clean

COMPILER = emcc
FILE = fasta.gpp-8.cpp
BINARY = fasta.gpp-8.o
OUTPUT = fasta.gpp-8.js
BASE_FLAGS = -pipe -Wall -O3 -fomit-frame-pointer -std=c++17
SIMD_FLAGS = -msimd128 -msse2
COMPILER_FLAGS = -s USE_BOOST_HEADERS=1 -s USE_PTHREADS=1 
LINKER_FLAGS = -s USE_BOOST_HEADERS=1 -s USE_PTHREADS=1 -s PTHREAD_POOL_SIZE=8 -march=ivybridge 
PTHREAD_FLAGS = -lpthread 
LIBRARY_FLAGS = 

all: build clean
build: ${FILE}
	@echo "Building binary ..."
	@${COMPILER} -c ${BASE_FLAGS} ${COMPILER_FLAGS} ${SIMD_FLAGS} ${FILE} -o ${BINARY} 
link: build
	@echo "Linking ..."
	@${COMPILER}  ${BINARY} -o ${OUTPUT} ${LINKER_FLAGS} ${LIBRARY_FLAGS} ${PTHREAD_FLAGS} 
clean: link
	@echo "Cleaning tmp files ..."
	@rm -if *tmp* *temp*