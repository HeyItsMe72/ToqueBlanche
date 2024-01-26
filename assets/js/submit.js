const d = document,
    $form = d.querySelector(".contact-form"),
    $inputEmail = d.getElementById("email"),
    $textArea = d.getElementById("message"),
    $loader = d.querySelector(".contact-form-loader"),
    $message = d.querySelector(".contact-form-response"),
    $modal = d.querySelector(".modal")
;

function simulateMessage() {
    $modal.style.height = "max-content";
    $loader.classList.remove("none");
    setTimeout(() => {
        $loader.classList.add("none");
        $message.classList.remove("none");
        setTimeout(() => {
            $message.classList.add("none");
            $inputEmail.value = "";
            $textArea.value = "";
        }, 2000);
    }, 3000);
    
}

d.addEventListener("submit", e=>{
    if(e.target === $form){
        e.preventDefault();
        simulateMessage();
    }
})