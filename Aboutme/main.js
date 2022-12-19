function handleClick(id) {
    console.log('Element Clicked');
    document.getElementById(id).style.color="red";
    
}

function delayHandleClick (ID) {
    setTimeout(()=>handleClick(ID), 3000)
}

