button.addEventListener("click",calcular);
function calcular(event){
    
    total = 0;
    var checks = document.querySelectorAll('.items');
    checks.forEach((e)=>{
        if(e.checked){
            total = total + parseFloat(e.value);
        }
    })
    document.getElementById("total").innerHTML = total
    event.preventDefault();
}