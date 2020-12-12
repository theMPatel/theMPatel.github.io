.PHONY: all build-rust
all: build-rust

build-rust:
	wasm-pack build ${RUST_ROOT} --out-dir ${PACKAGE_ROOT}/rust-app --target bundler

deploy:
	${PROJECT_ROOT}/tools/deploy.sh