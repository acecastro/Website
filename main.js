/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu') 
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click' , () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('nav__link')

const LinkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu classList //
    navMenu.classList.remove('show-menu')
}   
navLink.forEach(n => n.addEventListener ('click', LinkAction))


/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
   const header = document.getElementById('header')
   this.scrollY >= 50 ? header.classList.add('blur-header')
                      : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

         /* CONTINUATION SA BAHAY */

/*=============== EMAIL JS ===============*/
const contactForm =  document.getElementById('contact-form')
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_xxl8hyt','template_xe8t80t','#contact-form','Fxh7l_ZwFO_2tKdpl')
        .then(() =>{
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            // Remove message after five seconds
            setTimeout(() =>{
                contactMessage.textContent = ''
            },  5000) 
            
            // Clear input fields
            contactForm.reset() 

        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌' 
        })
}

contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 59,
        sectionId = current.getAttribute('id')
        sectionClass = document.querySelector('.nav__menu a[href*=' *sectionId* ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop * sectionHeight){
            sectionClass.classList.add('active_link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/



