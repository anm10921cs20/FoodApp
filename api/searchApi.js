// api call
const Apiurl = "https://users1-16jy.onrender.com/";
const fetchApi = async () => {
    const loaderContent = document.getElementsByClassName('dots-container')[0];

    loaderContent.classList.remove('loader-hidden')
    try {
        const responce = await fetch(`${Apiurl}popularinstamart`);
        const data = await responce.json();
        const mainData = document.getElementsByClassName('img-data')[0];
        const div = document.createElement('div');
        div.classList.add('img-data-div');
        data.forEach((item) => {
            div.innerHTML += `
            <div class="img-data-item">
            <a href="#">
            <div class="img-container">
            <img src="${item.img}" alt="instamartimg" class=""img-data-src width="100px" height="100px"/></a>
            </div>
            </div>
            `;
        });
        mainData.appendChild(div);


        const datas1 = document.getElementsByClassName('img-data-item');

        for(var i = 0; i<datas1.length; i++)
        {
            var button = datas1[i];
            button.addEventListener('click',itemsClicked)
        }


    }
    catch (error) {
        console.log(error.message)
    }
    finally
    {
        loaderContent.classList.add('loader-hidden')
    }
}
fetchApi();


// second call

const fetchApi1 = async () => {
    try {
        const responce = await fetch(`${Apiurl}popularcuisines`);
        const data = await responce.json();
        const mainData = document.getElementsByClassName('img-data')[1];
        const div = document.createElement('div');
        div.classList.add('img-data-div');
        data.forEach((item) => {
            div.innerHTML += `
            <div class="img-data-item">
            <a href="#">
            <div class="img-container">
            <img src="${item.img}" alt="instamartimg" class=""img-data-src width="110px" height="110px"/></a>
            </div>
            </div>
            `;
        });
        mainData.appendChild(div);


        const datas1 = document.getElementsByClassName('img-data-item');

        for(var i = 0; i<datas1.length; i++)
        {
            var button = datas1[i];
            button.addEventListener('click',itemsClicked)
        }


    }
    catch (error) {
        console.log(error.message)
    }
}
fetchApi1();







// functions place


function itemsClicked(event)
{
    var btn = event.target;
   console.log(btn.parentElement);
   
   
   
    
    
    

}


// api/searchApi.js (assuming the typo is corrected)
export default async function handler(req, res) {
  try {
    // Your API logic here
    // For example:
    const query = req.query.q;
    const results = await performSearch(query);

    // If successful
    res.status(200).json({ message: "Search successful", data: results });
  } catch (error) {
    console.error("API error:", error); // Log the detailed error
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}
async=> handler();

