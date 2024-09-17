const input = document.getElementById("input")

function reverse(str) {
    return str.split("").reverse().join("")
}
function check() {
    const value = input.value
    const rev = reverse(value)
    if (value == rev) {
        alert("P A L I N D R O M E")
    }
    else {
        alert("N O T  P A L I N D R O M E")
    }
    input.value = ""
}

