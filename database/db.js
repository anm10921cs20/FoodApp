// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const db = firebase.database();


db.ref('Biryani/').get('value').then((responce) => {
    const biryani = responce.val();
    console.log(biryani);
    
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
   
    
})

