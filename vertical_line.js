function createVerticalLine(opt) {

    opt = Object.assign({}, {
        dir: 'vertical'
    }, opt);

    var vertical = (opt.dir === 'vertical');
    if (!vertical && opt.dir !== 'horizontal') {
        throw new Error('invalid dir: ' + opt.dir);
    }

    var div = document.createElement('div');
    var innerDiv = document.createElement('div');
    div.appendChild(innerDiv);
    div.style.position = 'fixed';
    div.style.top = vertical ? '0' : '10px';
    div.style.left = vertical ? '10px' : '0';
    div.style.zIndex = '1000000';
    div.style.cursor = vertical ? 'col-resize' : 'row-resize';
    innerDiv.style.backgroundColor = 'blue';
    innerDiv.style.width = vertical ? '1px' : '100vw';
    innerDiv.style.height = vertical ? '100vh' : '1px';
    innerDiv.style.margin = vertical ? '0 5px' : '5px 0';
    document.body.appendChild(div);

    var dragging = false;
    div.addEventListener('mousedown', function (e) {
        e.preventDefault();
        if (dragging) return;
        dragging = true;
    });

    document.addEventListener('mouseup', function (e) {
        if (!dragging) return;
        dragging = false;
    });

    document.addEventListener('mousemove', e => {
        if (!dragging) return;
        if (vertical) {
            div.style.left = (e.clientX - div.clientWidth / 2) + 'px';
        } else {
            div.style.top = (e.clientY - div.clientHeight / 2) + 'px';
        }
    });

}