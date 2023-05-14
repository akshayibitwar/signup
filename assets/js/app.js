let cl = console.log;

const colorSelect = document.getElementById("colorSelect");
const allDivs = [...document.querySelectorAll(".all")];



const onColorChange = (eve) => {
    let val = eve.target.value;
    cl(val);
    allDivs.forEach(div => div.classList.add('d-none'));
    const selectedDivs = [...document.querySelectorAll("."+val)];
    selectedDivs.forEach(d => d.classList.remove('d-none'))
}


colorSelect.addEventListener('change', onColorChange);


// const changeColor = document.getElementById("changeColor");
// const allDivs = document.querySelectorAll(".all");

// const onFillterColor = (color) => {
//     let selectedColor = color.target.value;
//     // cl(selectedColor);
//     allDivs.forEach(div => div.classList.add("d-none"));
//     let selectedDiv = [...document.querySelectorAll("." + selectedColor)]
//     selectedDiv.forEach(div => div.classList.remove("d-none"))
// }

// changeColor.addEventListener("change", onFillterColor)