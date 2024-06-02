const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")
const countLikes1 = document.getElementById("countLikes1")
const countLikes2 = document.getElementById("countLikes2")
const btnLove1 = document.getElementById("btnLove1")
const btnLove2 = document.getElementById("btnLove2")
const countLoves1 = document.getElementById("countLoves1")
const countLoves2 = document.getElementById("countLoves2")
const btnFollow1 = document.getElementById("btnFollow1")
const btnFollow2 = document.getElementById("btnFollow2")
const countFollows1 = document.getElementById("countFollows1")
const countFollows2 = document.getElementById("countFollows2")

function hitLikes1() {
  let totalLikes1 = parseInt(countLikes1.value) + 1
  countLikes1.textContent = totalLikes1.toString()
}
btnLike1.addEventListener("click",hitLikes1)

function hitLikes2() {
  let totalLikes2 = parseInt(countLikes2.value) + 1
  countLikes2.textContent = totalLikes2.toString()
}
btnLike2.addEventListener("click",hitLikes2)

function hitLoves1() {
  let totalLoves1 = parseInt(countLoves1.value) + 1
  countLoves1.textContent = totalLoves1.toString()
}
btnLove1.addEventListener("click",hitLoves1)

function hitLoves2() {
  let totalLoves2 = parseInt(countLoves2.value) + 1
  countLoves2.textContent = totalLoves2.toString()
}
btnLove2.addEventListener("click",hitLoves2)

function hitFollows1() {
  let totalFollows1 = parseInt(countFollows1.value) + 1
  countFollows1.textContent = totalFollows1.toString()
}
btnFollow1.addEventListener("click",hitFollows1)

function hitFollows2() {
  let totalFollows2 = parseInt(countFollows2.value) + 1
  countFollows2.textContent = totalFollows2.toString()
}
btnFollow2.addEventListener("click",hitFollows2)
