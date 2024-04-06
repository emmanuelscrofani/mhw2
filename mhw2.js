function Mode(event){
    const image = event.currentTarget;

    //LIGHT MODE
    if(image.src.includes('img/light-mode.png')){
   
        image.src='img/night-mode.png';

        document.querySelector('header').classList.add('head-night');

        const logo = document.querySelector('#logo');
        logo.src='img/kaizen_logo.png';

        const icon1 = document.querySelector('.icon1');
        icon1.src='img/profile.png';        
        
        const icon2 = document.querySelector('.icon2');
        icon2.src='img/search.png';
        
        document.querySelector('nav').classList.remove('nav-night');
        
        let links = document.querySelectorAll('.link');
        for(const link of links){
            link.classList.remove('link-night');
            link.classList.add('link-light');
        }

        let submenu = document.querySelectorAll('.sub-menu');
        for(const voice of submenu){
            voice.classList.remove('sub-menu-night');
            voice.classList.add('sub-menu-light');
        }

        let link2 = document.querySelectorAll('.link2');
        for(const link of link2){
            link.classList.remove('link2-night');
            link.classList.add('link2-light');
        }


        const elejs = document.querySelector('#elemento-js');
        elejs.textContent="LIGHT";
        elejs.classList.remove('elejs-n');
        elejs.classList.add('elejs-l');
        
        let accessori1 = document.querySelectorAll('.accessori-performance1');
        for(const accessorio of accessori1){
            accessorio.classList.remove('acc1-night');            
            accessorio.classList.add('acc1-light');
        }

        let accessori2 = document.querySelectorAll('.accessori-performance2');
        for(const accessorio of accessori2){
            accessorio.classList.remove('acc2-night');            
            accessorio.classList.add('acc2-light');
        }

        let intestazioni = document.querySelectorAll('h4');
        for(const intestazione of intestazioni){
            intestazione.classList.remove('h-night');
            intestazione.classList.add('h-light');
        }

        let paragrafi = document.querySelectorAll('p');
        for(const par of paragrafi){
            par.classList.remove('p-night');
            par.classList.add('p-light');
        }

        document.querySelector('footer').classList.remove('footer-night');
        document.querySelector('footer').classList.add('footer-light');
        
        const apple = document.querySelector('#app_pay');
        apple.src='img/apple_pay.png';

        const visa = document.querySelector('#vs');
        visa.src='img/visa.png';

    }
    //NIGHT MODE
    else{
        image.src='img/light-mode.png';

        document.querySelector('header').classList.add('head-night');

        document.querySelector('nav').classList.add('nav-night');

        
        const logo = document.querySelector('#logo');
        logo.src='img/KAIZEN_White.png';

        
        const icon1 = document.querySelector('.icon1');
        icon1.src='img/profile-night.png';        
        
        const icon2 = document.querySelector('.icon2');
        icon2.src='img/search-night.png';


        let linkss = document.querySelectorAll('.link');
        for(const link of linkss){
            link.classList.remove('link-light');
            link.classList.add('link-night');
        }

        let submenu = document.querySelectorAll('.sub-menu');
        for(const voice of submenu){
            voice.classList.remove('sub-menu-light');
            voice.classList.add('sub-menu-night');
        }

        let link2 = document.querySelectorAll('.link2');
        for(const link of link2){
            link.classList.remove('link2-light');
            link.classList.add('link2-night');
        }


        let intestazioni = document.querySelectorAll('h4');
        for(const intestazione of intestazioni){
            intestazione.classList.remove('h-light');
            intestazione.classList.add('h-night');
        }

        let paragrafi = document.querySelectorAll('p');
        for(const par of paragrafi){
            par.classList.remove('p-light');
            par.classList.add('p-night');
        }


        let links = document.querySelectorAll('a');
        for(const link of links){
            link.classList.add('a-night');
        }


        const elejs = document.querySelector('#elemento-js');
        elejs.textContent="NIGHT";
        elejs.classList.remove('elejs-l');
        elejs.classList.add('elejs-n');

    
        let accessori1 = document.querySelectorAll('.accessori-performance1');
        for(const accessorio of accessori1){
            accessorio.classList.remove('acc1-light');            
            accessorio.classList.add('acc1-night');
        }

        let accessori2 = document.querySelectorAll('.accessori-performance2');
        for(const accessorio of accessori2){
            accessorio.classList.remove('acc2-light');            
            accessorio.classList.add('acc2-night');
        }

        document.querySelector('footer').classList.remove('footer-light');
        document.querySelector('footer').classList.add('footer-night');

        const apple = document.querySelector('#app_pay');
        apple.src='img/apple_pay_white.png';

        const visa = document.querySelector('#vs');
        visa.src='img/visa_night.png';

    }

}

const icon = document.querySelector('.dark-mode');
icon.addEventListener('click', Mode);


function scrollNav() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
}

window.addEventListener('scroll', scrollNav);


function scrollHeader() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 1);
}

window.addEventListener('scroll', scrollHeader);


const h3 = document.createElement('h3');
h3.id="elemento-js";
const navbar = document.querySelector('nav');
navbar.appendChild(h3);



function openModal(event){
    const image = document.querySelector('.icon2');
    document.body.classList.add('no-scroll');
  //  modalView.style.top = window.pageYoffest + '2000px';
    modalView.classList.remove('hidden');

    document.querySelector('header').classList.add('header-none');

}

const open = document.querySelector('.icon2');
open.addEventListener('click', openModal);


function onModalClick(event){
    if(event.target.id === 'modal-content' || event.target.tagName === 'H2' || event.target.id === 'search-submit' || event.target.tagName === 'LABEL' || event.target.tagName === 'INPUT' || event.target.id === 'form'){
        return;
    }

    modalView.classList.add('hidden');
    document.body.classList.remove('no-scroll'); 

    document.querySelector('header').classList.remove('header-none');
    document.querySelector('header').classList.add('header');
}

const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);




/* MENU A TENDINA CON JS 
function subMenuVisible(event){

    const submenu = event.currentTarget.querySelector('.sub-menu');
    submenu.classList.remove('sub-menu');
    submenu.classList.add('sub-menu-visible');

}

const menu = document.querySelectorAll('.flex-item');
for(const item of menu){
    item.addEventListener('mouseover', subMenuVisible);
}



function subMenuHidden(event){
    const submenu = event.currentTarget.querySelector('.sub-menu-visible');
    submenu.classList.remove('sub-menu-visible');
    submenu.classList.add('sub-menu');
}



const subHid = document.querySelectorAll('.flex-item');
const subm = document.querySelectorAll('.sub-menu');
for(const links of subHid){
links.addEventListener('mouseout', subMenuHidden);
}
for(const links2 of subm){
    links2.addEventListener('mouseleave', subMenuHidden);

}

*/