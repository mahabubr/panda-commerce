const h2Color = document.getElementsByTagName('h2');
for (const changeColor of h2Color) {
    changeColor.style.color = 'lightblue';
}

const changeBg = document.getElementById('bagpack');
changeBg.style.backgroundColor = 'tomato'
changeBg.style.padding = '50px'
changeBg.style.borderRadius = '10px'

const createBorder = document.getElementsByClassName('card');
for (const border of createBorder) {
    border.style.borderRadius = '30px'
}

function addClick() {
    console.log('clicked')
}

const allBtn = document.getElementsByClassName('panda-btn-buy-now');

for (const btn of allBtn) {
    btn.addEventListener('click', function () {
        btn.style.display = 'none'
    })
}

document.getElementById('exampleInputEmail1').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const deleteBtn = document.getElementById('submit-btn');
    if (text === 'email') {
        deleteBtn.removeAttribute('disabled');
    }
    else {
        deleteBtn.setAttribute('disabled', true)
    }
})

document.getElementById('image-supply').addEventListener('mouseenter', function (event) {
    console.log(event.target)
    event.target.src = "one.png"
})
document.getElementById('image-supply').addEventListener('mouseout', function (event) {
    console.log(event.target)
    event.target.src = "shoes.png"
})

document.getElementById('subscribe').addEventListener('dblclick', function (event) {
    event.target.style.backgroundColor = 'orange'
})