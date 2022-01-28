function changeColor(t) {


    if (t.classList.contains('red-class')) {
        t.setAttribute('class', 'fa fa-heart-o');
    } else {
        t.setAttribute('class', 'red-class fa fa-heart');
    }
}
