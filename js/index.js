/* Navbar search bar */
$(".btn").on("click", () => {
    $(".input").toggleClass("inclicked");
    $(".btn").toggleClass("close");
});

let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos){
        document.getElementById("navbar").style.top = "0";
    }else if (prevScrollpos == prevScrollpos){
        document.getElementById('navbar').style.top = "150px";
    }else{
        document.getElementById("navbar").style.top = "-150px";
    }

    prevScrollpos = currentScrollPos;
}

/*
let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos){
        document.getElementById("navbar").style.top = "0";
        document.getElementById('fun').style.top = '-150px';
    }else{
        document.getElementById("navbar").style.top = "-150px";
        document.getElementById('fun').style.top = '0';
    }

    prevScrollpos = currentScrollPos;
}
 */