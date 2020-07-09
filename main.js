document.querySelector('#data').addEventListener('keyup',()=>{
    
    let data = document.querySelector("#data").value;
    let decimal = parseInt(data,2);
    let display = document.querySelector(".display");
    display.innerHTML = `The decimal value of ${data} is ${decimal}`;
    display.style.display = 'block';

    if(data == ''){
        display.style.display = 'none';
    }

});