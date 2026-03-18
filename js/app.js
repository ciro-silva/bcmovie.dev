function navigate(page){
    window.location.href = page
}

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("videoModal")
    const modalVideo = document.getElementById("modalVideo")
    const modalDesc = document.getElementById("videoDesc")
    const closeBtn = document.querySelector(".close")

    if(!modal || !modalVideo || !modalDesc || !closeBtn) return

    document.querySelectorAll(".video-card").forEach(card => {

        card.addEventListener("click", () => {

            modal.style.display = "flex"
            modalVideo.src = card.dataset.video
            modalDesc.innerText = card.dataset.desc

        })

    })

    closeBtn.onclick = () => {
        modal.style.display = "none"
        modalVideo.pause()
    }

    window.onclick = (e) => {
        if(e.target === modal){
            modal.style.display = "none"
            modalVideo.pause()
        }
    }

})