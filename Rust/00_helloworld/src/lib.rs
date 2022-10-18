use wasm_bindgen::prelude::*;

fn log (s: &str) {
    use web_sys::console;
    console::log_1(&s.into())
}
macro_rules! console_log {
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}

#[wasm_bindgen]
pub fn helloworld() {
    console_log!("Hello {}!", "User")
}
