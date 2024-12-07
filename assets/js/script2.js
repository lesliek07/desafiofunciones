const key = document.getElementById('key');
let color = '';

document.addEventListener('keydown', function(event){
    if(event.key ==='a'){
        color = '#FFC0CB';
        key.style.backgroundColor = color;

    }if(event.key === 's'){
        color = '#ffa500';
        key.style.backgroundColor = color;

    }if(event.key === 'd'){
        color = '#00aae4';
        key.style.backgroundColor = color;

    }if(event.key ==='q'){
        let newDiv = document.createElement('div');
        document.body.appendChild(newDiv);
        color = '#572364'
        newDiv.style.backgroundColor = color;

    }if(event.key === 'w'){
        let newDiv = document.createElement('div');
        document.body.appendChild(newDiv);
        color = '#9B9B9B'
        newDiv.style.backgroundColor = color;
       
    }if(event.key === 'e'){
        let newDiv = document.createElement('div');
        document.body.appendChild(newDiv);
        color = '#804000'
        newDiv.style.backgroundColor = color;
    }
        
    //console.log(color)
   
});
