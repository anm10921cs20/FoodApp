import cors from "cors";
import express from "express";

const app = express();
app.use(cors());

app.use(cors({
    origin: ["https://food-app-one-dun.vercel.app/"]
}));



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


async function getPopularCuisines() {
  try {
    const res = await fetch("https://usersapi-66kn.onrender.com/popularcuisines");
    
    // Check if response status is OK (200–299)
    if (!res.ok) {
      throw new Error("HTTP error! Status: " + res.status);
    }

    const data = await res.json();
    console.log("API Data:", data);
    
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

getPopularCuisines();