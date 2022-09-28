.PHONY: all build clean

COMPILER = sudo ../../emsdk/upstream/emscripten/emcc
FILE = pidigits.gcc-2.c 
OUTPUT = pidigits.gcc-2.gcc_run.html
BASE_FLAGS = -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge
SIMD_FLAGS = 
PTHREAD_FLAGS = 
EXTRA_FLAGS = 
LINKER_FLAG = -lgmp

EXPORTED_FUNCTIONS = _main
EXPORTED_RUNTIME_METHODS = ccall,cwrap

all: build clean
build: ${FILE}
	@echo "Building..."
	@${COMPILER} ${BASE_FLAGS} ${EXTRA_FLAGS} -msimd128 ${SIMD_FLAGS} -s EXPORTED_FUNCTIONS=${EXPORTED_FUNCTIONS} -s EXPORTED_RUNTIME_METHODS=${EXPORTED_RUNTIME_METHODS}  ${FILE} -o ${OUTPUT} ${LINKER_FLAG}
clean: build
	@echo "Cleaning tmp files..."
	@rm -if *tmp*