const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")

function clickLike1(){
     let totalLikes = parselnt(countLike1.value) + 1
     countLike1.textContent = totalLikes.toString()
}
btnLike1.addEventListener("click",clickLike1)
