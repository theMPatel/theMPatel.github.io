.PHONY: all
all: build-rust

build-rust:
	cd ${RUST_ROOT} && wasm-pack build

deploy:
	${PROJECT_ROOT}/deploy.sh