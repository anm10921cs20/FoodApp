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








































































