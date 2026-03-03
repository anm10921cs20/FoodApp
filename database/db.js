// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const db = firebase.database();


db.ref('Biryani/').get('value').then((responce) => {
    const biryani = responce.val();
    
    biryani.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[0];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
})  


db.ref('South Indian/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[1];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
}) 



db.ref('Pizza/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[2];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
})  


db.ref('Chinese/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[3];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
})  


// cake



db.ref('Cake/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[4];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
})  

// burger



db.ref('Burger/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[5];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
})  

// north indian



db.ref('North Indian/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[6];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
})  

// rolls



db.ref('Rolls/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[7];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
}) 

// shwarma 



db.ref('Shawarma/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[8];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
})  


// noodles



db.ref('Noodles/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[9];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
}) 

// parrota



db.ref('Parotta/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[10];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
})  

// pasta



db.ref('Pasta/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[11];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
})  


// ice cream



db.ref('Ice Cream/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[12];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
})  

// salad



db.ref('Salad/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[13];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
})  

// partha



db.ref('Paratha/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[14];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
})  

// pureveg



db.ref('Pure Veg/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[15];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
})

// shake



db.ref('Shake/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[16];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
})  

// dosa



db.ref('Dosa/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[17];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
})  

// pancake



db.ref('Pancake/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[18];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
})  

// vada



db.ref('Vada/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[19];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
})  

// tea



db.ref('Tea/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[20];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
})  

// dessert



db.ref('Dessert/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[21];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
})  

// sandwich



db.ref('Sandwich/').get('value').then((responce) => {
    const southindian = responce.val();
    
    southindian.forEach((item, idx) => {
       const biryani = document.createElement('div');
       biryani.classList.add('product');
       biryani.innerHTML =  `
         <img class="img-food" src=" ${item.img}"
                        alt="${item.name}" >
                    <div class="content">
                        <p>${item.name}</p>
                        <p>Dish</p>
                    </div>
       `
         const products = document.getElementsByClassName('products')[22];
    products.appendChild(biryani);
    });

    
const imgFiles = document.querySelectorAll('.img-food');


imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('foodname', names.alt);



    window.location.href = './src/foodresponce/foodresponce.html';
}
   
    
}).catch((err) => {
    console.log(err);
    
})  




// height

if(innerWidth >= 1024)
{
    const arrow = document.createElement('div');
    arrow.classList.add('arrow-data');
    arrow.innerHTML = `
    <div class="arrow-left-data"><i class="fa-solid fa-chevron-left"></i></div>
    <div class="arrow-right-data"><i class="fa-solid fa-chevron-right"></i></div>
    `;
    const articleDataElement = document.querySelector('.article-data-fooditems');
    articleDataElement.appendChild(arrow);

    document.addEventListener('DOMContentLoaded', () => {
        const arrowLeft = document.getElementsByClassName('arrow-left-data')[0];
        const arrowRight = document.getElementsByClassName('arrow-right-data')[0];
        const boxContainer = document.getElementsByClassName('box-container')[0];

        arrowLeft.addEventListener('click', () => {
            boxContainer.scrollLeft -= 300; 
        })
        arrowRight.addEventListener('click', () => {
            boxContainer.scrollLeft += 300;
        })
    })





    
// box content btn

const biryaniBtn = document.getElementsByClassName('box')[0];
const southIndiaBtn = document.getElementsByClassName('box')[1];
const pizzaBtn = document.getElementsByClassName('box')[2];
const chineseBtn = document.getElementsByClassName('box')[3];
const cakeBtn = document.getElementsByClassName('box')[4];
const burgerBtn = document.getElementsByClassName('box')[5];
const northIndiaBtn = document.getElementsByClassName('box')[6];
const roolsBtn = document.getElementsByClassName('box')[7];
const shawarmaBtn = document.getElementsByClassName('box')[8];
const noodlesBtn = document.getElementsByClassName('box')[9];
const parotaBtn = document.getElementsByClassName('box')[10];
const pastaBtn = document.getElementsByClassName('box')[11];
const iceCreamBtn = document.getElementsByClassName('box')[12];
const saladBtn = document.getElementsByClassName('box')[13];
const parthaBtn = document.getElementsByClassName('box')[14];
const pureVegBtn = document.getElementsByClassName('box')[15];
const shakeBtn = document.getElementsByClassName('box')[16];
const dosaBtn = document.getElementsByClassName('box')[17];
const panCakeBtn = document.getElementsByClassName('box')[18];
const vadaBtn = document.getElementsByClassName('box')[19];
const teaBtn = document.getElementsByClassName('box')[20];
const dessertBtn = document.getElementsByClassName('box')[21];
const sandWichBtn = document.getElementsByClassName('box')[22];

// animations 

const animation = document.getElementsByClassName('animate')[0];

// foods items container

const biryani = document.getElementsByClassName('biriyani-container')[0];
const southIndian = document.getElementsByClassName('southindian')[0];
const pizza = document.getElementsByClassName('pizza')[0];
const chinese = document.getElementsByClassName('chinese')[0];
const cake = document.getElementsByClassName('cake')[0];
const burger = document.getElementsByClassName('burger')[0];
const northIndia = document.getElementsByClassName('northindia')[0];
const rools = document.getElementsByClassName('rools')[0];
const shawarma = document.getElementsByClassName('shawarma')[0];
const noodles = document.getElementsByClassName('noodles')[0];
const parota = document.getElementsByClassName('parota')[0];
const pasta = document.getElementsByClassName('pasta')[0];
const iceCream = document.getElementsByClassName('icecream')[0];
const salad = document.getElementsByClassName('salad')[0];
const partha = document.getElementsByClassName('partha')[0];
const pureVeg = document.getElementsByClassName('pureveg')[0];
const shake = document.getElementsByClassName('shake')[0];
const dosa = document.getElementsByClassName('dosa')[0];
const panCake = document.getElementsByClassName('pancake')[0];
const vada = document.getElementsByClassName('vada')[0];
const tea = document.getElementsByClassName('tea')[0];
const dessert = document.getElementsByClassName('dessert')[0];
const sandWich = document.getElementsByClassName('sandwich')[0];


// biryani

biryaniBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "20px";

    // display container

    biryani.style.display = "block";
    southIndian.style.display = "none";
    pizza.style.display = "none";
    chinese.style.display = "none";
    cake.style.display = "none";
    burger.style.display = "none";
    northIndia.style.display = "none";
    rools.style.display = "none";
    shawarma.style.display = "none";
    noodles.style.display = "none";
    parota.style.display = "none";
    pasta.style.display = "none";
    iceCream.style.display = "none";
    salad.style.display = "none";
    partha.style.display = "none";
    pureVeg.style.display = "none";
    shake.style.display = "none";
    dosa.style.display = "none";
    panCake.style.display = "none";
    vada.style.display = "none";
    tea.style.display = "none";
    dessert.style.display = "none";
    sandWich.style.display = "none";


})

// south indian btn

southIndiaBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "140px";

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "block";
    pizza.style.display = "none";
    chinese.style.display = "none";
    cake.style.display = "none";
    burger.style.display = "none";
    northIndia.style.display = "none";
    rools.style.display = "none";
    shawarma.style.display = "none";
    noodles.style.display = "none";
    parota.style.display = "none";
    pasta.style.display = "none";
    iceCream.style.display = "none";
    salad.style.display = "none";
    partha.style.display = "none";
    pureVeg.style.display = "none";
    shake.style.display = "none";
    dosa.style.display = "none";
    panCake.style.display = "none";
    vada.style.display = "none";
    tea.style.display = "none";
    dessert.style.display = "none";
    sandWich.style.display = "none";
})

// pizza

pizzaBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "260px";

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "none";
    pizza.style.display = "block";
    chinese.style.display = "none";
    cake.style.display = "none";
    burger.style.display = "none";
    northIndia.style.display = "none";
    rools.style.display = "none";
    shawarma.style.display = "none";
    noodles.style.display = "none";
    parota.style.display = "none";
    pasta.style.display = "none";
    iceCream.style.display = "none";
    salad.style.display = "none";
    partha.style.display = "none";
    pureVeg.style.display = "none";
    shake.style.display = "none";
    dosa.style.display = "none";
    panCake.style.display = "none";
    vada.style.display = "none";
    tea.style.display = "none";
    dessert.style.display = "none";
    sandWich.style.display = "none";
})

// chinese

chineseBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "380px"

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "none";
    pizza.style.display = "none";
    chinese.style.display = "block";
    cake.style.display = "none";
    burger.style.display = "none";
    northIndia.style.display = "none";
    rools.style.display = "none";
    shawarma.style.display = "none";
    noodles.style.display = "none";
    parota.style.display = "none";
    pasta.style.display = "none";
    iceCream.style.display = "none";
    salad.style.display = "none";
    partha.style.display = "none";
    pureVeg.style.display = "none";
    shake.style.display = "none";
    dosa.style.display = "none";
    panCake.style.display = "none";
    vada.style.display = "none";
    tea.style.display = "none";
    dessert.style.display = "none";
    sandWich.style.display = "none";
})

// cake

cakeBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "500px";

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "none";
    pizza.style.display = "none";
    chinese.style.display = "none";
    cake.style.display = "block";
    burger.style.display = "none";
    northIndia.style.display = "none";
    rools.style.display = "none";
    shawarma.style.display = "none";
    noodles.style.display = "none";
    parota.style.display = "none";
    pasta.style.display = "none";
    iceCream.style.display = "none";
    salad.style.display = "none";
    partha.style.display = "none";
    pureVeg.style.display = "none";
    shake.style.display = "none";
    dosa.style.display = "none";
    panCake.style.display = "none";
    vada.style.display = "none";
    tea.style.display = "none";
    dessert.style.display = "none";
    sandWich.style.display = "none";
})

// burger

burgerBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "620px";

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "none";
    pizza.style.display = "none";
    chinese.style.display = "none";
    cake.style.display = "none";
    burger.style.display = "block";
    northIndia.style.display = "none";
    rools.style.display = "none";
    shawarma.style.display = "none";
    noodles.style.display = "none";
    parota.style.display = "none";
    pasta.style.display = "none";
    iceCream.style.display = "none";
    salad.style.display = "none";
    partha.style.display = "none";
    pureVeg.style.display = "none";
    shake.style.display = "none";
    dosa.style.display = "none";
    panCake.style.display = "none";
    vada.style.display = "none";
    tea.style.display = "none";
    dessert.style.display = "none";
    sandWich.style.display = "none";
})

// north india

northIndiaBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "741px";

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "none";
    pizza.style.display = "none";
    chinese.style.display = "none";
    cake.style.display = "none";
    burger.style.display = "none";
    northIndia.style.display = "block";
    rools.style.display = "none";
    shawarma.style.display = "none";
    noodles.style.display = "none";
    parota.style.display = "none";
    pasta.style.display = "none";
    iceCream.style.display = "none";
    salad.style.display = "none";
    partha.style.display = "none";
    pureVeg.style.display = "none";
    shake.style.display = "none";
    dosa.style.display = "none";
    panCake.style.display = "none";
    vada.style.display = "none";
    tea.style.display = "none";
    dessert.style.display = "none";
    sandWich.style.display = "none";
})

// rools

roolsBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "862px";

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "none";
    pizza.style.display = "none";
    chinese.style.display = "none";
    cake.style.display = "none";
    burger.style.display = "none";
    northIndia.style.display = "none";
    rools.style.display = "block";
    shawarma.style.display = "none";
    noodles.style.display = "none";
    parota.style.display = "none";
    pasta.style.display = "none";
    iceCream.style.display = "none";
    salad.style.display = "none";
    partha.style.display = "none";
    pureVeg.style.display = "none";
    shake.style.display = "none";
    dosa.style.display = "none";
    panCake.style.display = "none";
    vada.style.display = "none";
    tea.style.display = "none";
    dessert.style.display = "none";
    sandWich.style.display = "none";
})

// shawarma

shawarmaBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "981px";

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "none";
    pizza.style.display = "none";
    chinese.style.display = "none";
    cake.style.display = "none";
    burger.style.display = "none";
    northIndia.style.display = "none";
    rools.style.display = "none";
    shawarma.style.display = "block";
    noodles.style.display = "none";
    parota.style.display = "none";
    pasta.style.display = "none";
    iceCream.style.display = "none";
    salad.style.display = "none";
    partha.style.display = "none";
    pureVeg.style.display = "none";
    shake.style.display = "none";
    dosa.style.display = "none";
    panCake.style.display = "none";
    vada.style.display = "none";
    tea.style.display = "none";
    dessert.style.display = "none";
    sandWich.style.display = "none";
})

// noodles

noodlesBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "1101px";

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "none";
    pizza.style.display = "none";
    chinese.style.display = "none";
    cake.style.display = "none";
    burger.style.display = "none";
    northIndia.style.display = "none";
    rools.style.display = "none";
    shawarma.style.display = "none";
    noodles.style.display = "block";
    parota.style.display = "none";
    pasta.style.display = "none";
    iceCream.style.display = "none";
    salad.style.display = "none";
    partha.style.display = "none";
    pureVeg.style.display = "none";
    shake.style.display = "none";
    dosa.style.display = "none";
    panCake.style.display = "none";
    vada.style.display = "none";
    tea.style.display = "none";
    dessert.style.display = "none";
    sandWich.style.display = "none";
})

// parota

parotaBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "1220px";

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "none";
    pizza.style.display = "none";
    chinese.style.display = "none";
    cake.style.display = "none";
    burger.style.display = "none";
    northIndia.style.display = "none";
    rools.style.display = "none";
    shawarma.style.display = "none";
    noodles.style.display = "none";
    parota.style.display = "block";
    pasta.style.display = "none";
    iceCream.style.display = "none";
    salad.style.display = "none";
    partha.style.display = "none";
    pureVeg.style.display = "none";
    shake.style.display = "none";
    dosa.style.display = "none";
    panCake.style.display = "none";
    vada.style.display = "none";
    tea.style.display = "none";
    dessert.style.display = "none";
    sandWich.style.display = "none";
})

// pasta

pastaBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "1340px";

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "none";
    pizza.style.display = "none";
    chinese.style.display = "none";
    cake.style.display = "none";
    burger.style.display = "none";
    northIndia.style.display = "none";
    rools.style.display = "none";
    shawarma.style.display = "none";
    noodles.style.display = "none";
    parota.style.display = "none";
    pasta.style.display = "block";
    iceCream.style.display = "none";
    salad.style.display = "none";
    partha.style.display = "none";
    pureVeg.style.display = "none";
    shake.style.display = "none";
    dosa.style.display = "none";
    panCake.style.display = "none";
    vada.style.display = "none";
    tea.style.display = "none";
    dessert.style.display = "none";
    sandWich.style.display = "none";
})

// icecream

iceCreamBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "1460px";

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "none";
    pizza.style.display = "none";
    chinese.style.display = "none";
    cake.style.display = "none";
    burger.style.display = "none";
    northIndia.style.display = "none";
    rools.style.display = "none";
    shawarma.style.display = "none";
    noodles.style.display = "none";
    parota.style.display = "none";
    pasta.style.display = "none";
    iceCream.style.display = "block";
    salad.style.display = "none";
    partha.style.display = "none";
    pureVeg.style.display = "none";
    shake.style.display = "none";
    dosa.style.display = "none";
    panCake.style.display = "none";
    vada.style.display = "none";
    tea.style.display = "none";
    dessert.style.display = "none";
    sandWich.style.display = "none";
})

// salad

saladBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "1582px";

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "none";
    pizza.style.display = "none";
    chinese.style.display = "none";
    cake.style.display = "none";
    burger.style.display = "none";
    northIndia.style.display = "none";
    rools.style.display = "none";
    shawarma.style.display = "none";
    noodles.style.display = "none";
    parota.style.display = "none";
    pasta.style.display = "none";
    iceCream.style.display = "none";
    salad.style.display = "block";
    partha.style.display = "none";
    pureVeg.style.display = "none";
    shake.style.display = "none";
    dosa.style.display = "none";
    panCake.style.display = "none";
    vada.style.display = "none";
    tea.style.display = "none";
    dessert.style.display = "none";
    sandWich.style.display = "none";
})

// paratha

parthaBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "1700px";

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "none";
    pizza.style.display = "none";
    chinese.style.display = "none";
    cake.style.display = "none";
    burger.style.display = "none";
    northIndia.style.display = "none";
    rools.style.display = "none";
    shawarma.style.display = "none";
    noodles.style.display = "none";
    parota.style.display = "none";
    pasta.style.display = "none";
    iceCream.style.display = "none";
    salad.style.display = "none";
    partha.style.display = "block";
    pureVeg.style.display = "none";
    shake.style.display = "none";
    dosa.style.display = "none";
    panCake.style.display = "none";
    vada.style.display = "none";
    tea.style.display = "none";
    dessert.style.display = "none";
    sandWich.style.display = "none";
})

// pureveg

pureVegBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "1821px";

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "none";
    pizza.style.display = "none";
    chinese.style.display = "none";
    cake.style.display = "none";
    burger.style.display = "none";
    northIndia.style.display = "none";
    rools.style.display = "none";
    shawarma.style.display = "none";
    noodles.style.display = "none";
    parota.style.display = "none";
    pasta.style.display = "none";
    iceCream.style.display = "none";
    salad.style.display = "none";
    partha.style.display = "none";
    pureVeg.style.display = "block";
    shake.style.display = "none";
    dosa.style.display = "none";
    panCake.style.display = "none";
    vada.style.display = "none";
    tea.style.display = "none";
    dessert.style.display = "none";
    sandWich.style.display = "none";
})

// shake 

shakeBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "1940px";

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "none";
    pizza.style.display = "none";
    chinese.style.display = "none";
    cake.style.display = "none";
    burger.style.display = "none";
    northIndia.style.display = "none";
    rools.style.display = "none";
    shawarma.style.display = "none";
    noodles.style.display = "none";
    parota.style.display = "none";
    pasta.style.display = "none";
    iceCream.style.display = "none";
    salad.style.display = "none";
    partha.style.display = "none";
    pureVeg.style.display = "none";
    shake.style.display = "block";
    dosa.style.display = "none";
    panCake.style.display = "none";
    vada.style.display = "none";
    tea.style.display = "none";
    dessert.style.display = "none";
    sandWich.style.display = "none";
})

// dosa

dosaBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "2062px";

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "none";
    pizza.style.display = "none";
    chinese.style.display = "none";
    cake.style.display = "none";
    burger.style.display = "none";
    northIndia.style.display = "none";
    rools.style.display = "none";
    shawarma.style.display = "none";
    noodles.style.display = "none";
    parota.style.display = "none";
    pasta.style.display = "none";
    iceCream.style.display = "none";
    salad.style.display = "none";
    partha.style.display = "none";
    pureVeg.style.display = "none";
    shake.style.display = "none";
    dosa.style.display = "block";
    panCake.style.display = "none";
    vada.style.display = "none";
    tea.style.display = "none";
    dessert.style.display = "none";
    sandWich.style.display = "none";
})

// pancake

panCakeBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "2180px";

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "none";
    pizza.style.display = "none";
    chinese.style.display = "none";
    cake.style.display = "none";
    burger.style.display = "none";
    northIndia.style.display = "none";
    rools.style.display = "none";
    shawarma.style.display = "none";
    noodles.style.display = "none";
    parota.style.display = "none";
    pasta.style.display = "none";
    iceCream.style.display = "none";
    salad.style.display = "none";
    partha.style.display = "none";
    pureVeg.style.display = "none";
    shake.style.display = "none";
    dosa.style.display = "none";
    panCake.style.display = "block";
    vada.style.display = "none";
    tea.style.display = "none";
    dessert.style.display = "none";
    sandWich.style.display = "none";
})

// vada

vadaBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "2302px";

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "none";
    pizza.style.display = "none";
    chinese.style.display = "none";
    cake.style.display = "none";
    burger.style.display = "none";
    northIndia.style.display = "none";
    rools.style.display = "none";
    shawarma.style.display = "none";
    noodles.style.display = "none";
    parota.style.display = "none";
    pasta.style.display = "none";
    iceCream.style.display = "none";
    salad.style.display = "none";
    partha.style.display = "none";
    pureVeg.style.display = "none";
    shake.style.display = "none";
    dosa.style.display = "none";
    panCake.style.display = "none";
    vada.style.display = "block";
    tea.style.display = "none";
    dessert.style.display = "none";
    sandWich.style.display = "none";
})

// tea

teaBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "2422px";

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "none";
    pizza.style.display = "none";
    chinese.style.display = "none";
    cake.style.display = "none";
    burger.style.display = "none";
    northIndia.style.display = "none";
    rools.style.display = "none";
    shawarma.style.display = "none";
    noodles.style.display = "none";
    parota.style.display = "none";
    pasta.style.display = "none";
    iceCream.style.display = "none";
    salad.style.display = "none";
    partha.style.display = "none";
    pureVeg.style.display = "none";
    shake.style.display = "none";
    dosa.style.display = "none";
    panCake.style.display = "none";
    vada.style.display = "none";
    tea.style.display = "block";
    dessert.style.display = "none";
    sandWich.style.display = "none";
})

// dessert

dessertBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "2540px";

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "none";
    pizza.style.display = "none";
    chinese.style.display = "none";
    cake.style.display = "none";
    burger.style.display = "none";
    northIndia.style.display = "none";
    rools.style.display = "none";
    shawarma.style.display = "none";
    noodles.style.display = "none";
    parota.style.display = "none";
    pasta.style.display = "none";
    iceCream.style.display = "none";
    salad.style.display = "none";
    partha.style.display = "none";
    pureVeg.style.display = "none";
    shake.style.display = "none";
    dosa.style.display = "none";
    panCake.style.display = "none";
    vada.style.display = "none";
    tea.style.display = "none";
    dessert.style.display = "block";
    sandWich.style.display = "none";
})

// sandwich

sandWichBtn.addEventListener('click', () => {
    // animate
    animation.style.left = "2660px";

     // display container

    biryani.style.display = "none";
    southIndian.style.display = "none";
    pizza.style.display = "none";
    chinese.style.display = "none";
    cake.style.display = "none";
    burger.style.display = "none";
    northIndia.style.display = "none";
    rools.style.display = "none";
    shawarma.style.display = "none";
    noodles.style.display = "none";
    parota.style.display = "none";
    pasta.style.display = "none";
    iceCream.style.display = "none";
    salad.style.display = "none";
    partha.style.display = "none";
    pureVeg.style.display = "none";
    shake.style.display = "none";
    dosa.style.display = "none";
    panCake.style.display = "none";
    vada.style.display = "none";
    tea.style.display = "none";
    dessert.style.display = "none";
    sandWich.style.display = "block";
})



}




















































































