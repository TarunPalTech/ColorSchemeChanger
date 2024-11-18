const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button)=>{
    button.addEventListener('click', (event)=>{
        if(event.target.id === 'orange')
            document.body.style.backgroundColor = event.target.id;
        if(event.target.id === 'blue')
            document.body.style.backgroundColor = event.target.id;
        if(event.target.id === 'yellow')
            document.body.style.backgroundColor = event.target.id;
        if(event.target.id === 'red')
            document.body.style.backgroundColor = event.target.id;
    })
})