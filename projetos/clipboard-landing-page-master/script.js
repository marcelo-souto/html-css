const scrollbtn = document.querySelector('.scrollbtn')

function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showBtn() {
    if (window.scrollY === 0) {
        scrollbtn.classList.add('hidden')
        scrollbtn.classList.remove('showing')
    } else {
        scrollbtn.classList.add('showing')
        scrollbtn.classList.remove('hidden')
    }
}

scrollbtn.addEventListener('click', goToTop)
window.addEventListener('scroll', showBtn)

