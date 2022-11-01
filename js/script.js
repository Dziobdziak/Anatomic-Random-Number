const arrayLength = document.querySelector('.arrayLength')
const lengthBtn = document.querySelector('.lengthBtn')
const numbersRange = document.querySelector('.numbersRange')
const yourNumber = document.querySelector('.yourNumber')
const drawNumberBtn = document.querySelector('.drawNumber')

const result = []

const drawRandomNumber = () => {

    if(arrayLength.value == '') return;
    const arrayLengthInt = Number(arrayLength.value)
    numbersRange.textContent = `1 - ${arrayLengthInt}`
    lengthBtn.textContent = `Generuj z zakresu 1 - ${arrayLengthInt}`
    
    if(result.length === arrayLengthInt){
        alert(`Wylosowane zostały już wszystkie liczby z zakresu 1 - ${arrayLengthInt}`)

        return
    } 

    const randomNumber = Math.floor(Math.random() * arrayLengthInt + 1)

    for(let i = 0; i < result.length; i++) {

        if(randomNumber === result[i]) {
          return drawRandomNumber()
        }
      }

      result.push(randomNumber); 

      console.log(result);
      console.log(randomNumber);

      yourNumber.textContent = `Twoja wylosowana liczba to ${randomNumber}`
}

lengthBtn.addEventListener('click', drawRandomNumber)

