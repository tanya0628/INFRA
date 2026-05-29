/* MOBILE DROPDOWN */

const dropdowns = document.querySelectorAll(".dropdown, .submenu");

dropdowns.forEach(dropdown => {

    dropdown.addEventListener("click", function(e){

        if(window.innerWidth <= 768){

            e.stopPropagation();
            this.classList.toggle("active");

        }

    });

});