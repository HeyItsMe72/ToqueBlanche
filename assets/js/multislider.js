const d = document;
let leftPosition;


export default function carousel(btn) {
    const 
        $slidersList = btn.parentElement.previousElementSibling,
        $carousel = $slidersList.parentElement,
        $sliders = $slidersList.children,

        $slidersListWidth = $slidersList.offsetWidth,
        $carouselWidth = $carousel.offsetWidth, 
        $sliderWidth = $sliders[0].offsetWidth
    ;

    const Move = (value) => {
        $slidersList.style.left === "" ?
            leftPosition = 0
            : leftPosition = parseFloat($slidersList.style.left.slice(0, -2) * -1);
    
        if (leftPosition < ($slidersListWidth - $carouselWidth) && value === 2) {
            $slidersList.style.left = `${-1 * (leftPosition + $sliderWidth)}px`;
        } else if (leftPosition > 0 && value === 1) {
            $slidersList.style.left = `${-1 * (leftPosition - $sliderWidth)}px`;
        }
    }

    if (btn.id === "prev") Move(1);
    if (btn.id === "next") Move(2); 
}


d.addEventListener("click", e => {
    if (e.target.matches(".button")) {
        e.preventDefault();
        let classes = new Set(e.target.classList);
        if(classes.has("button")){
        carousel(e.target);
        }
    }
});

