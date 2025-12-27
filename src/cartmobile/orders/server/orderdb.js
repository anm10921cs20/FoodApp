// content user details


const name = localStorage.getItem('name');
const uid = localStorage.getItem('uid');




db.ref('userorder/' + name + uid).get('value').then((snapshot) => {
    const ordersData = snapshot.val();
    const ordersItem = Object.entries(ordersData)
    ordersItem.forEach((orders) => {
        // database data get
        const orderId = orders[0].slice(6).length;
        const orderItem = orders[1];

        // uniq order id
        const number = "1234567890";
        var uniqorderid = "";
        for (var i = 0; i < orderId; i++) {
            var uniqnum = Math.floor(Math.random() * number.length);
            uniqorderid += number[uniqnum];
        }

        if (ordersData) {
            console.log(orderItem);

            const time = orderItem.time;
            const timeConvert = parseInt(time.slice(0,2))
            const timeminute = parseInt(time.slice(3,5))
            const timesecond = parseInt(time.slice(6,8))
           
            

    
            const hoursGen = timeConvert === 0 ? 12 : timeConvert > 12 ? timeConvert - 12 : timeConvert;
            console.log(hoursGen);
            
            const timeCat = timeConvert > 12 ? "PM" : "AM";
            const addZeroHours = hoursGen <= 9 ? `0${hoursGen}` : hoursGen;
            const addZeroMin = timeminute <= 9 ? `0${timeminute}` : timeminute;
            const addZeroSec = timesecond <= 9 ? `0${timesecond}` : timesecond;
            const orderTime = `${addZeroHours}:${addZeroMin}:${addZeroSec} ${timeCat}`;
            
            
            


            

            
           
             

            
            
            

            const orderItems = document.createElement('div');
            orderItems.className = "order-items";
            orderItems.innerHTML = `  <div class="order-item">
        <div class="order-item-container">
            <div class="order-img">
                <div class="order-id">Order Id 
                ${uniqorderid}
                </div>
                <div class="order-time">
                    <div class="time">
                    ${orderTime}
                    </div>
                    <div class="date">
                      ${orderItem.date}
                    </div>
                </div>
            </div>
            <div class="order-details">
                <div class="total-item">Items ${orderItem.food.length}</div>
                <div class="total">Rs.${orderItem.total.ToPay}</div>
            </div>
            <div class="order-icon">
                <div class="delivery-status">deliverd <i class="fa-solid fa-circle-check"></i></i></div>
            </div> 
        </div>
    </div>  `;
            const mainContainer = document.getElementsByClassName('data-main-container')[0];
            mainContainer.appendChild(orderItems);















        }
        else {
            // no vlaue element
            const div = document.createElement('div');
            div.classList = "novalue-div";
            div.innerHTML = `
          <div class="no-value-text">
          <h3>No Orders Available</h3>
          </div>
          <div class="btn-redirect">
          <button class="replace-redirect">Orders Some Food</button>
          </div>
          `;
            const mainContainer = document.getElementsByClassName('data-main-container')[0];
            mainContainer.appendChild(div)


            const noValueBtn = document.getElementsByClassName('replace-redirect')[0];

            noValueBtn.addEventListener('click', () => {
                window.location.href = "../../../src/search/search.html";

            })

        }










    })

}).catch((err) => {
    console.log(err);

})


