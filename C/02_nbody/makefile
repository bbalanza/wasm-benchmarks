.PHONY: all build clean

COMPILER = sudo ../../emsdk/upstream/emscripten/emcc
FILE = nbody.gcc-8.c 
OUTPUT = nbody.gcc-8.gcc_run.html
BASE_FLAGS = -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge
SIMD_FLAGS = -msimd128 -mavx 
PTHREAD_FLAGS = 
EXTRA_FLAGS = -static 
LINKER_FLAG = -lm

EXPORTED_FUNCTIONS = _main
EXPORTED_RUNTIME_METHODS = ccall,cwrap

all: build clean
build: ${FILE}
	@echo "Building..."
	@${COMPILER} ${BASE_FLAGS}  ${SIMD_FLAGS} -s EXPORTED_FUNCTIONS=${EXPORTED_FUNCTIONS} -s EXPORTED_RUNTIME_METHODS=${EXPORTED_RUNTIME_METHODS}  ${FILE} -o ${OUTPUT} ${LINKER_FLAG}
clean: build
	@echo "Cleaning tmp files..."
	@rm -if *tmp*