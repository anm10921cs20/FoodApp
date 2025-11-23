
const dataFilter = []




db.ref('popularcuisines/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);



}).catch(err => {
    console.log(err.message);

})

db.ref('Biryani/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})
db.ref('South Indian/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})

db.ref('Pizza/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})

db.ref('Chinese/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})

db.ref('Cake/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})

db.ref('Burger/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})

db.ref('North Indian/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})

db.ref('Rolls/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})

db.ref('Shawarma/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})

db.ref('Noodles/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})
db.ref('Ice Cream/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})

db.ref('Parotta/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})

db.ref('Pasta/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})

db.ref('Salad/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})

db.ref('Paratha/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})

db.ref('Pure Veg/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})


db.ref('Shake/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})


db.ref('Dosa/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})


db.ref('Pancake/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})


db.ref('Vada/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})


db.ref('Dessert/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})


db.ref('Tea/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);




}).catch(err => {
    console.log(err.message);

})







const input = document.getElementById('search-input');



input.addEventListener('input', function (e) {
    const term = e.target.value.toLowerCase();
    const matches = [];

    if (!term) {
        const resultsEl = document.getElementsByClassName('results')[0];
        if (resultsEl) resultsEl.innerHTML = '';
        return;
    }

    for (let i = 0; i < dataFilter.length; i++) {
        const list = dataFilter[i];
        if (!Array.isArray(list)) continue;
        for (let j = 0; j < list.length; j++) {
            const item = list[j];
            if (!item || !item.name) continue;
            if (item.name.toLowerCase().includes(term)) matches.push(item);
        }
    }


    // optional: render results if an element with id="results" exists
    const resultsEl = document.getElementsByClassName('results')[0];


    matches.map(item=>{
        const li = document.createElement('li');
        li.className = 'list-content';
        li.innerHTML+=    `<a class="list-anchor"><div class="img-content"><img src="${item.img}" class="img-ctrl" alt="${item.name}"></div> <div class="name-content"><p class="pr-name">${item.name}</p><p class="pr-rel">${item.rel}</p></div> </a>`
        resultsEl.appendChild(li)

        const value = document.querySelectorAll('.list-content');
        value.forEach((items) => {
            items.addEventListener('click', click)
        })
    })

});



function click()
{

   var doc = document.querySelectorAll('.img-ctrl');
   doc.forEach((val) => {
   val.addEventListener('click',alt)
    
   })
   var docs = document.querySelectorAll('.pr-name')
   docs.forEach(doc=>{
    doc.addEventListener('click', value)
    
   })
   
   
   

    

    
    
}

function alt(event)
{
var value = event.target;
var foodvalue = value.alt;

localStorage.setItem('foodname',foodvalue)
    window.location.href = '../foodresponce/foodresponce.html';
    
    
}

function value(event)
{
var values = event.target;
var foodvalue = values.innerText;

localStorage.setItem('foodname',foodvalue)
    window.location.href = '../foodresponce/foodresponce.html';

    
}