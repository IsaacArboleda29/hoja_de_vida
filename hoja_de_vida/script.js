const boton= document.getElementById('b1');
boton.addEventListener('click' ,function(){
            const color = '#' + Math.floor(Math.random()*16777215).toString(16);
            boton.style.backgroundColor = color;
        });
