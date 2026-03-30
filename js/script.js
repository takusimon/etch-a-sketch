const container = document.querySelector(".container")
for (let b=0; b< 16; b++){
    for (let i=0;i<16;i++) {
        const gridBox = document.createElement('div');
        gridBox.setAttribute("style", "width:50px; height:50px; border:1px solid black;");
        container.appendChild(gridBox);
    };
};