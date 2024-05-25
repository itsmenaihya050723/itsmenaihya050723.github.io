const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElemntById("btnLike2")
const countLikes1 = document.getElemntById("countLikes1")
const countLikes2 = document.getElemntById("countLikes2")

function hitLikes1() {
  let totalLikes1 = parseInt(countLikes1.value) + 1
  countLikes1.textContent = totalLikes1.toString()
}
btnLike1.addEventListener("click",hitLikes1)
