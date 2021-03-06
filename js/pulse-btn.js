var buttons = document.getElementsByClassName('btn');
var forEach = Array.prototype.forEach;

forEach.call(buttons, function (b) {
    b.addEventListener('click', addElement);
});

function addElement(b) {
    var addDiv = document.createElement('div'),
        mValue = Math.max(this.clientWidth, this.clientHeight),
        rect   = this.getBoundingClientRect();
        sDiv   = addDiv.style,
        px     = 'px';

    sDiv.width = sDiv.height = mValue + px;
    sDiv.left = b.clientX - rect.left - (mValue / 2) + px;
    sDiv.top = b.clientY - rect.top - (mValue / 2) + px;
    
    addDiv.classList.add('pulse');
    this.appendChild(addDiv);
}