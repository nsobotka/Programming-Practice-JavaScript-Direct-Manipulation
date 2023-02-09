// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// 2. RAW TEXT STRINGS

var main = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

const name = ["Willy the Goblin", "Big Daddy", "Father Christmas"]

const loc = ["the soup kitchen", "Disneyland", "the White House"]

const action = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
    let out = main;
    var nameNew = randomValueFromArray(name);
    var locNew = randomValueFromArray(loc);
    var actionNew = randomValueFromArray(action);

    out = out.replaceAll(':insertx:', nameNew);
    out = out.replaceAll(':inserty:', locNew);
    out = out.replaceAll(':insertz:', actionNew);
    if (customName.value !== '') {
        const name = customName.value;
        out = out.replaceAll('Bob', name);
    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300 * 0.0714) + ' stone';
        const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
        out = out.replaceAll('94 farenheit', temperature);
        out = out.replaceAll('300 pounds', weight);
    }

    story.textContent = out;
    story.style.visibility = 'visible';
}