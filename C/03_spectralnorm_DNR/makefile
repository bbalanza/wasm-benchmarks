.PHONY: all build clean

COMPILER = sudo ../../emsdk/upstream/emscripten/emcc
FILE = spectralnorm.gcc-5.c 
OUTPUT = spectralnorm.gcc-5.gcc_run.html
BASE_FLAGS = -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge
SIMD_FLAGS = -msse2 
PTHREAD_FLAGS = 
EXTRA_FLAGS = -DSIMDE_ENABLE_OPENMP -fopenmp-simd 
LINKER_FLAG = -lm

EXPORTED_FUNCTIONS = _main
EXPORTED_RUNTIME_METHODS = ccall,cwrap

all: build clean
build: ${FILE}
	@echo "Building..."
	@${COMPILER} ${BASE_FLAGS} ${EXTRA_FLAGS} -msimd128 ${SIMD_FLAGS} -s EXPORTED_FUNCTIONS=${EXPORTED_FUNCTIONS} -s EXPORTED_RUNTIME_METHODS=${EXPORTED_RUNTIME_METHODS}  ${FILE} -o ${OUTPUT} ${LINKER_FLAG}
clean: build
	@echo "Cleaning tmp files..."
	@rm -if *tmp*