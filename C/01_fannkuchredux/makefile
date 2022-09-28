.PHONY: all build clean

COMPILER = sudo ../../emsdk/upstream/emscripten/emcc
FILE = fannkuchredux.gcc-6.c 
OUTPUT = fannkuchredux.gcc-6.gcc_run.html
BASE_FLAGS = -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge 
SIMD_FLAGS = -msimd128 -msse4.1 
PTHREAD_FLAGS = -pthread -s USE_PTHREADS=1 -s PTHREAD_POOL_SIZE=8
EXPORTED_FUNCTIONS = _main
EXPORTED_RUNTIME_METHODS = ccall,cwrap
LINKER_FLAG =

all: build clean
build: ${FILE}
	@echo "Building..."
	@${COMPILER} ${BASE_FLAGS} ${SIMD_FLAGS} ${PTHREAD_FLAGS} -s EXPORTED_FUNCTIONS=${EXPORTED_FUNCTIONS} -s EXPORTED_RUNTIME_METHODS=${EXPORTED_RUNTIME_METHODS}  ${FILE} -o ${OUTPUT} ${LINKER_FLAG}
clean: build
	@echo "Cleaning tmp files..."
	@rm -if *tmp*