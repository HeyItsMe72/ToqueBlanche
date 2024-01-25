const d = document;


function showModal(dialogName) {
    let
        $modal = d.getElementById(`${dialogName}`),
        $html = d.getElementsByTagName("html")[0]
    ;
    $modal.style.display = "block";
    $html.style.overflow = "hidden";

    $modal.addEventListener("click", e =>{
        if(e.target.classList.contains("close")){
            $modal.style.display = "none";
            $html.style.overflowY = "scroll";
        }
    })
}


d.addEventListener("click", e => {
    console.log(e.target);
    if (e.target.classList.contains("open-modal")) {
        let $dataName = e.target.getAttribute("data-name");
        console.log($dataName);
        showModal($dataName);

    }
})
