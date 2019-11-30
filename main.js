for (let i = 1; i <= 3; i++) {
    const stepBlock = document.getElementById(`step-block-${i}`);
    const stepBorder = document.getElementById(`step-border-${i}`);

    stepBlock.onmouseover = () => {
        stepBorder.style.borderBottom = '3px solid #fff';
    }
    
    stepBlock.onmouseout = () => {
        stepBorder.style.borderBottom = '3px solid #000';
    }
}