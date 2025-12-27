// content user details

;


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

            const time = orderItem.time;
            const timeConvert = parseInt(time.slice(0, 2))
            const timeminute = parseInt(time.slice(3, 5))
            const timesecond = parseInt(time.slice(6, 8))




            const hoursGen = timeConvert === 0 ? 12 : timeConvert > 12 ? timeConvert - 12 : timeConvert;

            const timeCat = timeConvert > 12 ? "PM" : "AM";
            const addZeroHours = hoursGen <= 9 ? `0${hoursGen}` : hoursGen;
            const addZeroMin = timeminute <= 9 ? `0${timeminute}` : timeminute;
            const addZeroSec = timesecond <= 9 ? `0${timesecond}` : timesecond;
            const orderTime = `${addZeroHours}:${addZeroMin}:${addZeroSec} ${timeCat}`;






            const orderItemFood = orderItem.food;












            const orderItems = document.createElement('div');
            orderItems.className = "order-items";
            orderItems.innerHTML = `  <div class="order-item">
        <div class="order-item-container" type="button" data-bs-toggle="offcanvas" data-bs-target="#order${uniqorderid}" >
            <div class="order-img">
                <div class="order-id">Order Id 
                ${uniqorderid}
                </div>
                <div class="order-time">
                    <div class="time">
                    Order Time: ${orderTime}
                    </div>
                    <div class="date">
                      Order Date: ${orderItem.date}
                    </div>
                </div>
            </div>
            <div class="order-details">
                <div class="total-item">
                Items ${orderItem.food.length}</div>
                <div class="total">Rs.${orderItem.total.ToPay}</div>
            </div>
            <div class="order-icon">
                <div class="delivery-status">deliverd <i class="fa-solid fa-circle-check"></i></i></div>
            </div> 

        </div>
           <div class="offcanvas offcanvas-start" data-bs-backdrop="false" data-bs-scroll="true" tabindex="-1"
        id="order${uniqorderid}">
         <div class="orderitem-header">
            <div class="orderiddata">
                <div class="orderuniqid">
                    ORDER #${uniqorderid}
                </div>
                <div class="item-count">
                Delivery | ${orderItem.food.length} Items, Rs.${orderItem.total.ToPay}
                </div>
            </div>
            <div class="close-icon">
                <i class="fas fa-close" type="button" data-bs-dismiss="offcanvas"></i>
            </div>
        </div>


      

           






        </div>
    </div>  `;




            const mainContainer = document.getElementsByClassName('data-main-container')[0];
            mainContainer.appendChild(orderItems);





            orderItemFood.forEach((items, index) => {

                const offcanvsContainers = document.createElement('div')
                offcanvsContainers.innerHTML = `
                 <div class="order-main">
            <div class="order-items-data">
                <div class="order-items-img">
                    <img src="${items.img}" alt="${items.name}" width="40px" >
                    </div>
                    <div class="order-items-detail">
                        <div class="productname">${items.name}</div>
                        <div class="product-price-container">
                            <div class="product-price">
                            Rs.${parseInt(items.price.slice(3))/items.quantity}
                            </div>
                            <div class="product-count-price">
                            ${items.price}
                            </div>
                        </div>
                       
                    </div>
                     <div class="product-qty-container">Qty:${items.quantity}</div>
                </div>
            </div>

                ` ;

                const mainContainer = document.getElementById(`order${uniqorderid}`);
                

                mainContainer.appendChild(offcanvsContainers);


            })

            const offcanvsContainers1 = document.createElement('div')
            offcanvsContainers1.innerHTML = `
                

 <div class="order-address-container">
                <div class="fromaddress">
                    <div class="formicon"><i class="fas fa-location-dot"></i></div>
                    <div class="officeaddress-container">
                        <div class="officename">Mahan Food</div>
                        <div class="officeaddress">Kn Pettai</div>
                    </div>
                </div>
                <div class="toaddress">
                    <div class="toicon"><i class="fas fa-home"></i></div>
                    <div class="homeaddress-container">
                        <div class="homename">Home</div>
                        <div class="homeaddress">${orderItem.address}</div>
                    </div>
                </div>
                <div class="travel-line"></div>
            </div>
            <div class="checkout-summary-container">
                <div class="checkout-summary-content">
                    <div class="checkout-summary-content-det">
                        Bill Summary
                    </div>
                </div>
                <div class="line">
                </div>
                <div class="checkout-summary-price-container">
                    <div class="checkout-summary-price">
                        <div class="checkout-summary-pay-amt">
                            <div class="payname">Item Price</div>
                            <div class="payamt" id="itemPrice">Rs.${orderItem.total.itemPrice}</div>
                        </div>
                        <div class="checkout-summary-pay-amt">
                            <div class="payname">Delivery Charge</div>
                            <div class="payamt" id="deliveryCharge">Rs.${orderItem.total.deliveryCharge}</div>
                        </div>

                    </div>

                </div>
                <div class="checkout-summary-price-container">
                    <div class="checkout-summary-price">
                        <div class="checkout-summary-pay-amt">
                            <div class="payname">Platform Fee</div>
                            <div class="payamt" id="platFormFee">Rs.${orderItem.total.platFormFee}</div>
                        </div>
                        <div class="checkout-summary-pay-amt">
                            <div class="payname">Gst & Other Charges</div>
                            <div class="payamt" id="gstCharges">Rs.${orderItem.total.gstCalculation}</div>
                        </div>

                    </div>

                </div>
                <div class="topay">
                    <div class="checkout-summary-topay-amt">
                        <div class="Topaycashname">Paid</div>
                        <div class="Topayamt" id="toPay">Rs.${orderItem.total.ToPay}</div>
                    </div>
                </div>

            </div>







                ` ;

            const mainContainer1 = document.getElementById(`order${uniqorderid}`);
            mainContainer1.style.width = "350px";
            mainContainer1.style.height = "100vh";
            mainContainer1.style.overflow = "scroll";

            mainContainer1.appendChild(offcanvsContainers1);








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



