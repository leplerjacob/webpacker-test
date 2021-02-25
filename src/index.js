import _ from 'lodash';
import './style.css';
import Img from './image.jpg';
import Data from './data.xml';
// import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';


function component() {
    const element = document.createElement('div');

    element.addEventListener("click", (e) => {
        e.preventDefault();
        element.innerHTML = element.innerHTML == "SUp!" ? _.join(["Hello", "webpack"], ' ') : _.join(["SUp!"]);
    })
    // lodash currently included via a script, is require for this line to work. <<step complete: imported _ from 'lodash' >>
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myImage = new Image();
    myImage.src = Img;

    document.body.appendChild(myImage);

    console.log(Data.dataset.record)

    return element;
}

document.body.appendChild(component());

function componentTwo(){
    console.log(toml.title);
    console.log(toml.owner.name);

    console.log(yaml.title);
    console.log(yaml.owner.name);

    console.log(json.title);
    console.log(json.owner.name);
}

// document.body.appendChild(componentTwo())