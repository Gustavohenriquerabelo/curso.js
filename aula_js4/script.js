function calc()
{
    var tx = document.getElementById('res')
    var x = document.getElementById('n')
    var y = Number(x.value)
    var item = document.createElement('option')


     if (x.value == "")
       { 
            window.alert("[ERRO] digite um número valido!")
       }
       else
       {
        
            tx.innerHTML = ""

        for( var i = 0; i <= 10; i++)
        {
            tx.innerHTML += `${y} x ${i} = ${y * i} </br>`
        }
        }
    
    
}