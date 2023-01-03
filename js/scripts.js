'use strict';
let waga = 0
let wzrost = 0
let cButtonCount = 0
function clickedButton() {
    cButtonCount++
}
document.querySelector("button").addEventListener("click", (event) => {
    const input = document.getElementById("waga")
    const wazne = document.getElementById("wazne")
    if (parseFloat(input.value) === 0){
        alert(`${input.value} musi być większe od zera.`)
        --cButtonCount}
    if(cButtonCount==1){
        waga += input.value.replace(",", ".");
        waga = parseFloat(waga)
        wazne.innerHTML = `<input value="0" id="waga" autofocus>jaki jest twój wzrost? (m)`
    }else if(cButtonCount==2){
        wzrost += input.value.replace(",", ".")
        wzrost = parseFloat(wzrost)
        const bmi = parseFloat(waga)/(parseFloat(wzrost)*parseFloat(wzrost));
        wazne.innerHTML = ` Twoje BMI wynosi ${bmi.toFixed(2)}.`
        switch (bmi.toFixed(2) == bmi.toFixed(2) && bmi.toFixed(2) == bmi.toFixed(2)){
            case bmi < 17 && bmi > 16:
                wazne.innerHTML += `Twój zakres to wychudzenie.`
                break
            case bmi < 16:
                wazne.innerHTML += `Twój zakres to wygłodzenie.`
                break
            case bmi < 18.5 && bmi > 17:
                wazne.innerHTML += `<br>Twój zakres to niedowaga.`
                break
            case bmi < 25 && bmi > 18.5:
                wazne.innerHTML += `Twój zakres jest prawidłowy.`
                break
            case bmi < 30 && bmi > 25:
                wazne.innerHTML += `Twój zakres to nadwaga.`
                break
            case bmi < 35 && bmi > 30:
                wazne.innerHTML += `Twój zakres to I stopień otyłości.`
                break
            case bmi < 40 && bmi > 35:
                wazne.innerHTML += `Twój zakres to II stopień otyłości.`
                break
            case bmi > 40:
                wazne.innerHTML += `Twój zakres to otyłość skrajna (III).`
                break
            default:
                `wartość nie została wyświetlona (${bmi})`
        }
        event.target.remove()
    }
})