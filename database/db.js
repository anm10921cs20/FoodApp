// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const db = firebase.database();


db.ref('Biryani/').get('value').then((responce) => {
    const biryani = responce.val();
    
    biryani.forEach((item, idx) => {
        console.log(item);
        
    })
    
})

