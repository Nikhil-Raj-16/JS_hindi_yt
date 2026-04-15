const form = document.querySelector('form')
// const weight = document.querySelector('#weight');   WRONG    usecase will give empty value

form.addEventListener('submit', function(e){
    e.preventDefault() // url not send to web

    const height = parseInt(document.querySelector('#height').value)// written inside as we want to get the values 
    // at click not before
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    
    if(height === ' ' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid Height, ${height}`
    }
    else if(weight === ' ' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid Weight, ${weight}`
    }
    else{
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);

        // results.innerHTML = `<span> ${bmi} </span>`
        if(bmi < 18.6){
            results.innerHTML = `${bmi} <br> UnderWeight`
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            results.innerHTML = `${bmi} <br> Normal range`
        }
        else{
            results.innerHTML = `${bmi} <br> OverWeight`
        }
    }

    // results.innerHTML = `${height}`


})






