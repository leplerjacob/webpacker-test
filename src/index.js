import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    element.addEventListener = _.join(["Hello", "webpack"], ' ');


    return element;
}

document.body.appendChild(component());
