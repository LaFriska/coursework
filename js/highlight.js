const anchors = document.getElementsByTagName('a');
for (let i = 0; i < anchors.length; i++) {
    anchors[i].setAttribute('onclick', 'anim(\'' + anchors[i].href.split("#")[1] + '\')');
}
function anim(href){
    const element = document.getElementById(href);
    element.style.color = "red";
    element.style.transition = "color 1s";  // Apply transition only to the color property

    // Set a timeout to revert the color and fade back to black
    setTimeout(() => {
        element.style.color = "white";
    }, 1500);
}