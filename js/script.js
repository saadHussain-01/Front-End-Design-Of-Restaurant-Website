/* ==================Toggle Icon And Navbar ================== */    

let MenuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

MenuIcon.onclick = () =>{
    MenuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

/* ================== Scroll Section Active Link ================== */    

let sections= document.querySelectorAll('section');
let navlinks= document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top< offset + height){
            navlinks.forEach(links => {
               links.classList.remove('active');
               document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
        
    });


    /* ================== Sticky Navbar ================== */

    let header= document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    /* ================== Remove Toggle Icon And Navbar ================== */    

    MenuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


/* FORM VALIDATION */

function abcFunction(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if(name ===""){
        alert('please enter the Name');
        return false;
    }

    if(email ===""){
        alert('please enter the Email');
        return false;
    }

    if(subject ===""){
        alert('please enter the Subject');
        return false;
    }

    if(message ===""){
        alert('please enter the Message');
        return false;
    }

    
    return true;

}

