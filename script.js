// make a list to store all images
const images = [
    "pic1.png",
    "pic2.jpeg",
    "pic3.jpg",
    "pic4.jpeg",
    "pic5.jpeg",
    "pic6.jpeg",
    "pic7.png",
    "pic8.png",
    "pic9.png",
    "pic10.jpeg",
    "pic11.jpeg",
]

const photoFrame = document.getElementById("photo-frame")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const dropdown = document.getElementById("dropdown")
const gobtn = document.getElementById("gobtn")



let imageNum = 0

// define button click events
nextBtn.addEventListener("click",() => {
    imageNum = imageNum + 1

   
    // lenght - returns the total amount of items in a list 
    if(imageNum >= images.length)
    {
        imageNum = 0
    }

    photoFrame.src = images[imageNum]
})

prevBtn.addEventListener("click",() => {
    imageNum = imageNum - 1
    
   
    // lenght - returns the total amount of items in a list 
    if(imageNum < 0)
    {
        imageNum = images.length - 1
    }

    photoFrame.src = images[imageNum]
})

gobtn.addEventListener("click", function () {
    const link = dropdown.value

    if(link == "")
    {
        alert("please select a scratch game from the dropdown first.")
        return
    }

    window.location.href = link
})




