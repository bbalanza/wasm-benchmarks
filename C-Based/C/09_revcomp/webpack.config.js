module.exports = {
    resolve: {
        fallback: {
            fs: false,
            worker_threads: false,
            perf_hooks: false,
            os: false,
            crypto: false,
        },
    },
};