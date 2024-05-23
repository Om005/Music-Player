document.querySelectorAll(".card").forEach(ele=>{
    ele.addEventListener("mouseenter", ()=>{
        ele.firstElementChild.classList.toggle("play-class")
    })
    ele.addEventListener("mouseleave", ()=>{
        ele.firstElementChild.classList.toggle("play-class")
    })
})