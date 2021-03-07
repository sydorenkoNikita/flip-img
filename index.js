

let image1 = document.getElementById("flipImage1")
let image2 = document.getElementById("flipImage2")
let image3 = document.getElementById("flipImage3")
let image4 = document.getElementById("flipImage4")

image1.addEventListener('click', (event) => {
    console.log(event)

    document.addEventListener('keydown',  (event) =>  {
        event.preventDefault()
        if (event.keyCode === 40) {
            image1.style.transform =  "rotateX(180deg)"
            image1.style.transition = "all 2s"
            image1.style.transform = "transform-style: preserve-3d;"
        }else if (event.keyCode === 38) {
            image1.style.transform = "rotateX( 0deg)"
            image1.style.transition = "all 2s"
            image1.style.transform = "transform-style: preserve-3d;"
        }else if (event.keyCode === 37) {
            image1.style.transform = "rotateY( 0deg)"
            image1.style.transition = "all 2s"
            image1.style.transform = "transform-style: preserve-3d;"
        }else if (event.keyCode === 39) {
            image1.style.transform = "rotateY( 180deg)"
            image1.style.transition = "all 2s"
            image1.style.transform = "transform-style: preserve-3d;"
        }
    });
})

image2.addEventListener('click', (event) => {
    document.addEventListener('keydown',  (event) =>  {
        event.preventDefault()
        if (event.keyCode === 40) {
            image2.style.transform =  "rotateX(180deg)"
            image2.style.transition = "all 2s"
            image2.style.transform = "transform-style: preserve-3d;"
        }else if (event.keyCode === 38) {
            image2.style.transform = "rotateX( 0deg)"
            image2.style.transition = "all 2s"
            image2.style.transform = "transform-style: preserve-3d;"
        }else if (event.keyCode === 37) {
            image2.style.transform = "rotateY( 0deg)"
            image2.style.transition = "all 2s"
            image2.style.transform = "transform-style: preserve-3d;"
        }else if (event.keyCode === 39) {
            image2.style.transform = "rotateY( 180deg)"
            image2.style.transition = "all 2s"
            image2.style.transform = "transform-style: preserve-3d;"
        }
    });
})

