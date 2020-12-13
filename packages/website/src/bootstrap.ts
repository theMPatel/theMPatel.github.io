const _NS = 'wasm_app';
const rustapp = import('../../rust-app')
    .then(wasm_api => {
        window[_NS] = wasm_api;
    })
    .catch(console.error);

export function doGreet(): void {
    if (window[_NS]) {
        window[_NS].greet();
    }
}