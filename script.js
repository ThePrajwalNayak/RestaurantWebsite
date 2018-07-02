window.onscroll = function () {
    var header = document.getElementById('navWrapper');
    var offset = header.offsetTop;
    var windowYOffset = window.pageYOffset;

    console.log('offset - ' + window.pageYOffset);
    if (windowYOffset > 30) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
    removeClassActive();
    if (windowYOffset < 765) {
        document.getElementById('liHome').classList.add('active');
    } else if (windowYOffset > 766 & windowYOffset < 1319) {
        document.getElementById('liAbout').classList.add('active');
    } else if (windowYOffset > 1320 & windowYOffset < 2030) {
        document.getElementById('liAward').classList.add('active');
    } else if (windowYOffset > 2031 & windowYOffset < 2051) {
        document.getElementById('liReview').classList.add('active');
    } else if (windowYOffset > 2052) {
        document.getElementById('liFooter').classList.add('active');
    }
}

function removeClassActive() {
    var clazz = ['liHome', 'liAbout', 'liAward', 'liReview', 'liFooter'];
    for (var i = 0; i < clazz.length; i++) {
        document.getElementById(clazz[i]).classList.remove('active');
    }
}