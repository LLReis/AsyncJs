const shoes =[
    {make: 'nike', model: 'pegasus'},
    {make: 'olympikus', model: 'corre'}
];

function getShoes(){
    setTimeout(()=> {
        let output ='';
        shoes.forEach((shoe)=> {
            output += `<li>${shoe.make} ${shoe.model}</li>`
        });
        document.body.innerHTML = output;
    }, 2000)
}

function createShoe(shoe , callback) {
    setTimeout(()=> {
        shoes.push(shoe);
        callback();
    }, 4000);
}

getShoes();

createShoe({make: 'adidas', model: 'adizero'}, getShoes);
