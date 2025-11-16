// api call
const Apiurl = "https://users1-16jy.onrender.com/";
const fetchApi = async () => {
    const loaderContent = document.querySelector('.dots-container');
    if (loaderContent) loaderContent.classList.remove('loader-hidden');
    try {
        const response = await fetch(`${Apiurl}popularinstamart`);
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);
        const data = await response.json();
        const mainData = document.querySelectorAll('.img-data')[0];
        if (!mainData) return;
        const div = document.createElement('div');
        div.classList.add('img-data-div');
        data.forEach((item) => {
            div.innerHTML += `
            <div class="img-data-item">
              <a href="#">
                <div class="img-container">
                  <img src="${item.img}" alt="instamartimg" class="img-data-src" width="100" height="100" />
                </div>
              </a>
            </div>
            `;
        });
        mainData.appendChild(div);

        const datas1 = div.querySelectorAll('.img-data-item');

        for (let i = 0; i < datas1.length; i++) {
            const button = datas1[i];
            button.addEventListener('click', itemsClicked);
        }
    } catch (error) {
        console.error(error);
    } finally {
        if (loaderContent) loaderContent.classList.add('loader-hidden');
    }
}
fetchApi();


// second call

const fetchApi1 = async () => {
    try {
        const response = await fetch(`${Apiurl}popularcuisines`);
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);
        const data = await response.json();
        const mainData = document.querySelectorAll('.img-data')[1];
        if (!mainData) return;
        const div = document.createElement('div');
        div.classList.add('img-data-div');
        data.forEach((item) => {
            div.innerHTML += `
            <div class="img-data-item">
              <a href="#">
                <div class="img-container">
                  <img src="${item.img}" alt="instamartimg" class="img-data-src" width="110" height="110" />
                </div>
              </a>
            </div>
            `;
        });

        mainData.appendChild(div);

        const datas1 = div.querySelectorAll('.img-data-item');

        for (let i = 0; i < datas1.length; i++) {
            const button = datas1[i];
            button.addEventListener('click', itemsClicked);
        }

    } catch (error) {
        console.error(error);
    }
};
fetchApi1();


// functions place

function itemsClicked(event) {
    // prefer event.currentTarget because listener was attached on .img-data-item
    const item = event.currentTarget || event.target.closest('.img-data-item');
    if (!item) return;
    const img = item.querySelector('img');
    console.log('Clicked item:', item, 'image src:', img ? img.src : null);
    // implement desired click behavior here
}
