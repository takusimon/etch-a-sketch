const container = document.querySelector(".container")

function gridCreation (boxcount=16){
    const boxDimensions = 960/boxcount;
    container.replaceChildren();
    for (let b=0; b< boxcount; b++){
        for (let i=0;i<boxcount;i++) {
            const gridBox = document.createElement('div');
            gridBox.setAttribute("style", `width:${boxDimensions}px; height:${boxDimensions}px; border:1px solid black; boxSizing:border-box;`);
            gridBox.addEventListener('mouseover', () => gridBox.classList.add('hovered'));
            gridBox.addEventListener('mouseout',() => gridBox.classList.add('trail'));
            container.appendChild(gridBox);
        };
    };
};
gridCreation();

const gridButton = document.querySelector('.grid-specs');
gridButton.addEventListener('click', () =>{
    let userInput = prompt('Enter a grid value e.g. 16 = 16 * 16 grid');

    if (1 <= userInput && userInput <= 100){
        gridCreation(userInput);
    } else {
        alert("This is not a valid value");
    }
})