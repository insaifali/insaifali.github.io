
var see_content = document.querySelector('.see_content');
var contact_details = document.querySelector('.contact_details');

see_content.addEventListener('click', () => {
    var container = document.querySelector('.container');
    var content_container = document.querySelector('.content_container');
    if (container.style.maxHeight) {
        container.style.maxHeight = null;
        contact_details.classList.remove('active');


    } else {
        container.style.maxHeight = container.scrollHeight + "px";
        contact_details.classList.add('active');
    
    }

})




const filterButtons = document.querySelectorAll(".filter_button button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        card.classList.add("hide");

        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");
        }
    });
};

filterButtons.forEach(button => button.addEventListener("click", filterCards));


