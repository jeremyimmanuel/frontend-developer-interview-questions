const progressBar = document.querySelector('#progressbar')
const numberInput = document.getElementById('numberInput')

console.log('hi');
console.log(progressBar);


numberInput.addEventListener('input', function (e) {
    const multipler = e.target.value
    progressBar.style.width = multipler * 5 + 'px'
})
