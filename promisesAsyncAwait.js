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

function createShoe(shoe) {
return new Promise((resolve, reject)=> {
    setTimeout(()=> {
        shoes.push(shoe);

        const error = false;
        
        if (!error){
            resolve();
            } else {
            reject ('Error: Tem alguma coisa errada')
            }
        }, 4000);
    })
}

async function init() {
    await createShoe({make: 'adidas', model: 'adizero'})

    getShoes();
}

init();