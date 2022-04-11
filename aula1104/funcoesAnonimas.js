//função anonima
var x = function (n1,n2) {
    return n1 + n2
}

//invocar a função

let z = x("olá",20)

console.log(z);

//função autoinvocada

(
    function(n1,n2){
        console.log(n1 + n2);        
    }
)(20,30);


