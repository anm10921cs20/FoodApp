
const dataFilter = []

db.ref('popularinstamart/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);

}).catch(err => {
    console.log(err.message);

})


db.ref('popularcuisines/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);
    console.log(dataFilter.length);



}).catch(err => {
    console.log(err.message);

})


console.log(dataFilter.length);





const input = document.getElementById('search-input');



input.addEventListener('input', function (e) {
    const term = e.target.value.toLowerCase();
    const matches = [];

    if (!term) {
        console.log([]);
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

    console.log(matches);

    // optional: render results if an element with id="results" exists
    const resultsEl = document.getElementsByClassName('results')[0];
    if (resultsEl) {
        resultsEl.innerHTML = matches.map(it => `<li class="list-content"><a href=""><div class="img-content"><img src="${it.img}" width="80px" height="90px"></div> <div class="name-content"><p class="pr-name">${it.name}</p><p class="pr-rel">${it.rel}</p></div> </a> </li>`).join('');

    }
});

