# Rust with Node.js

## Installation

- Install rust using rustup `https://www.rust-lang.org/tools/install`
- Create a new project using `cargo new --lib web`
- Install deps for wasm build of rust code

```sh
rustup update
rustup target add wasm32-unknown-unknown
```

## Coding

- Add your code in `web/src/lib.rs`

## Build WASM

Use `cargo` to build rust lib to wasm

- Modify `Cargo.toml` file and add the following

```toml
[package]
...
...

[lib]
crate-type = ["cdylib"]

[dependencies]
...
...
```

- Run `cargo build --target wasm32-unknown-unknown --release`
- You can also compile the rust code to wasm using `rustc`: `rustc --target wasm32-unknown-unknown --crate-type=cdylib src/lib.rs -o web.big.wasm`
- `web.wasm` file is in `web/target/wasm32-unknown-unknown/release/web.wasm`

## Using WASM

- For web based usage, look into `webwasm` dir
- For nodejs based usage, look into `nodewasm` dir

Note that both projects use native `WebAssembly` modules for loading `web.wasm`. You might get better performance with `.dylib` files but I don't like to deal with `node-gyp`.
