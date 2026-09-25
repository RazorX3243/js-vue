const right_pin = 2026;
let pin = +prompt("What is your right pin?")
tries = 3;
while (pin !== right_pin && tries > 0) {
    tries -= 1;
    if (tries > 0) {
        pin = +prompt(`What is your right pin? ${tries} tries left.`);
    }
}
if (pin === right_pin) {
    alert("Доступ дозволено")
} else {
    alert("Доступ заблоковано")
}
