import ReactDOM from 'react-dom';
import React from 'react';
import { App } from './app';

export function init(): void {
    const elem = document.createElement("div");
    elem.id = 'root';
    document.body.append(elem);
    ReactDOM.render(
        React.createElement(App),
        elem,
    );
}

init();