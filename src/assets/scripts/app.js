let currentIndex = 0;

/** Collection of WorkItems */
const workItems = document.querySelectorAll('.work .item');
const workItemsCount = workItems.length;

/** Collection of item descriptions */
const detailItems = document.querySelectorAll('#details-container .item');

const closeButton = document.querySelector('#close-button');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');
const openCloseButton = document.querySelector('#buttonOpenCloseMenu');
const menuMobileItems = document.querySelector('#menu-mobile-items');


function loadGalleryItem(index) {
    detailItems.forEach(item => item.classList.add('item-hide'));
    detailItems[index].classList.toggle('item-hide');
}

// receives a boolean, shows the screen and modifies the scroll
function doAnimation(showDetailsContainer){
    document.querySelector('#screen').style['animation-name'] = 'fade-in';
    document.querySelector('body').style['overflow'] = showDetailsContainer ? 'hidden':'auto';
    setTimeout(() => {
        document.querySelector('#details-container').style.display = showDetailsContainer ? 'block':'none';
    }, 1000);
    setTimeout(() => {
        document.querySelector('#screen').style = '';
    }, 2000);
}

workItems.forEach(item => {
    item.onclick = e => {
        e.preventDefault();
        currentIndex = parseInt(item.getAttribute('data-id'));
        loadGalleryItem(currentIndex);
        doAnimation(true);
    }
});

openCloseButton.onclick = () => 
    menuMobileItems.classList.toggle('menu-mobile-closed')

closeButton.onclick = e => {
    e.preventDefault();
    doAnimation(false);
};

//control the index so that it does not overflow the collection of items
prevButton.onclick = () => {
    if (currentIndex - 1 < 0) {
        return;
    }
    currentIndex--;
    loadGalleryItem(currentIndex);
};

nextButton.onclick = () => {
    if (currentIndex + 1 == workItemsCount) {
        return;
    }
    currentIndex++;
    loadGalleryItem(currentIndex);
};