function Azalt() {
    var a = document.getElementById("a");
    a.value = Number(a.value) - 1
}

function arttir() {
    var a = document.getElementById("a");
    a.value = Number(a.value) + 1

}

function sifirla() {
    var a = document.getElementById("a");
    a.value = 0

}

let a = document.querySelector("#arttir")
let b = document.querySelector("#azalt")
let c = document.querySelector("#sifirla")
a.addEventListener("mousemove", domClick)
a.addEventListener("mouseout", domClick1)
b.addEventListener("mousemove", domClick2)
b.addEventListener("mouseout", domClick1)
c.addEventListener("mousemove", domClick3)
c.addEventListener("mouseout", domClick1)

function domClick() {

    this.style.background = "green"

}

function domClick1() {

    this.style.background = ""

}

function domClick2() {

    this.style.background = "red"

}

function domClick3() {

    this.style.background = "gray"

}