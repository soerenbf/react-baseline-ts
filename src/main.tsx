import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/hello.component';
import { Lifecycle } from './components/lifecycle.component';

import '../scss/styles.scss';

ReactDOM.render(
    <div>
        <Hello compiler="Typescript" framework="React" />
        <Lifecycle />
    </div>,
    document.getElementById("entry")
);