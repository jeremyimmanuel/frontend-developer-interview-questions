const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');
const block3 = document.getElementById('block3');


const block1BgColor = getComputedStyle(block1);
console.log(block1BgColor);

let prevId = null;

let blocks = document.querySelectorAll('.block');
console.log(typeof blocks);
console.log(blocks);
blocks.forEach(block => {
    block.addEventListener('click', e => {
        if (prevId != null) {
            const prevBlock = document.getElementById(prevId);
            // get prev's colour
            const prevColor = getComputedStyle(prevBlock).backgroundColor;
            // get curr's colour
            const currColor = getComputedStyle(document.getElementById(e.target.id)).backgroundColor;
            // set curr's colour to prevColor
            block.style.backgroundColor = prevColor;
            prevBlock.style.backgroundColor = currColor;
            prevId = null;
        } else {
            prevId = e.target.id;
            console.log(prevId);
        }
    })
});