const rustapp = import('rust-app');

export function doGreet(): void {
    rustapp
        .then(m => m.greet())
        .catch(console.error);
}