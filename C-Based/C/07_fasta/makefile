.PHONY: all build clean

COMPILER = emcc
FILE = fasta.gcc-9.c 
BINARY = fasta.gcc-9.o 
OUTPUT = fasta.gcc-9.gcc_run.js
BASE_FLAGS = -pipe -Wall -O3 -fomit-frame-pointer 
BASE_SIMD_FLAGS = 
PTHREAD_FLAGS = 
COMPILER_FLAGS =
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