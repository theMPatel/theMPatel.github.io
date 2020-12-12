.PHONY: all build-rust
all: build-rust

build-rust:
	cd ${RUST_ROOT} && wasm-pack build

deploy:
	${PROJECT_ROOT}/tools/deploy.sh