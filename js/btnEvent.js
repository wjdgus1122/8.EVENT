(function(){
    const box = document.querySelector('.con');
    const box_1 = document.querySelector('.add_color');
    const box_2 = document.querySelector('.remove_color');

    const color_full = () => {
        box.classList.add('colorful');
    }

    const color_remove = () => {
        box.classList.remove('colorful');
    }

    box_1.addEventListener('click', color_full);
    box_2.addEventListener('click', color_remove);
})();