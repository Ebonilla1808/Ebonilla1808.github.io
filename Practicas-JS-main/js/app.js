function comparar01(){
    let num1 = document.getElementById("tNum1").value;
    let num2 = document.getElementById("tNum2").value;
    let may = 0;

    const reSpan = document.querySelector(".resultado");


    if (num1 == num2) {
        reSpan.innerHTML = "<span>Ambos numeros son iguales</span>";
    }
    else{
        reSpan.innerHTML = (num1 > num2) ? ("<span>El numero mayor es: "+num1+"</span>"): ("<span>El numero mayor es: "+num2+"</span>");
    }
       
    
   

}

document.getElementById("bComparar").onclick = function (){
    comparar01();
}