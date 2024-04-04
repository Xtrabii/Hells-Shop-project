var cardproduct = [{
    id: 1,
    img: 'images/Top1.png',
    name: 'White Hell Collection',
    price: 5000,
    description: 'White Hell Collection เสื้อ Collection ใหม่จากทาง Hells Shop มี 6 สีให้เลือกซื้อตามใจชอบ!!' ,
    tag: 'New',
    type: 'shirt',
    rating: '4.9⭐ | 15.1พัน Ratings | 59.1พัน ขายแล้ว',
}, {
    id: 2,
    img: 'images/Top2.png',
    name: 'Black Hell Collection',
    price: 5000,
    description: 'Black Hell Collection เสื้อ Collection ใหม่จากทาง Hells Shop มี 6 สีให้เลือกซื้อตามใจชอบ!!' ,
    tag: 'New',
    type: 'shirt',
    rating: '5.0⭐ | 18.8พัน Ratings | 68.8พัน ขายแล้ว',
}, {
    id: 3,
    img: 'images/Top3.png',
    name: 'Red Hell Collection',
    price: 5000,
    description: 'Red Hell Collection เสื้อ Collection ใหม่จากทาง Hells Shop มี 6 สีให้เลือกซื้อตามใจชอบ!!' ,
    tag: 'New',
    type: 'shirt',
    rating: '4.7⭐ | 12.1พัน Ratings | 55.8พัน ขายแล้ว',
}, {
    id: 4,
    img: 'images/Top4.png',
    name: 'Green Hell Collection',
    price: 5000,
    description: 'Green Hell Collection เสื้อ Collection ใหม่จากทาง Hells Shop มี 6 สีให้เลือกซื้อตามใจชอบ!!' ,
    tag: 'New',
    type: 'shirt',
    rating: '4.5⭐ | 10.2พัน Ratings | 47.5พัน ขายแล้ว',
}, {
    id: 5,
    img: 'images/Top5.png',
    name: 'Orange Hell Collection',
    price: 5000,
    description: 'Orange Hell Collection เสื้อ Collection ใหม่จากทาง Hells Shop มี 6 สีให้เลือกซื้อตามใจชอบ!!' ,
    tag: 'New',
    type: 'shirt',
    rating: '4.2⭐ | 9.1พัน Ratings | 41.8พัน ขายแล้ว',
}, {
    id: 6,
    img: 'images/Top6.png',
    name: 'Grey Hell Collection',
    price: 5000,
    description: 'Grey Hell Collection เสื้อ Collection ใหม่จากทาง Hells Shop มี 6 สีให้เลือกซื้อตามใจชอบ!!' ,
    tag: 'New',
    type: 'shirt',
    rating: '4.8⭐ | 13.1พัน Ratings | 57.8พัน ขายแล้ว',
}, {
    id: 7,
    img: 'images/bottom1.png',
    name: 'Cargo Pant',
    price: 3000,
    description: 'กางเกง Cargo Collection ใหม่จากทาง Hells Shop' ,
    tag: 'New',
    type: 'bottoms',
    rating: '4.9⭐ | 36.1พัน Ratings | 70.3พัน ขายแล้ว',
}, {
    id: 8,
    img: 'images/bottom2.png',
    name: 'Black Slacks Without Belt Holes',
    price: 4000,
    description: 'กางเกงสแล็กสีดำไม่มีรูเข็มขัด จากทาง Hells Shop' ,
    tag: 'New',
    type: 'bottoms',
    rating: '4.5⭐ | 10.7พัน Ratings | 30.5พัน ขายแล้ว',
}, {
    id: 9,
    img: 'images/bottom3.png',
    name: 'Black Slacks',
    price: 5000,
    description: 'กางเกงสแล็กสีดำ จากทาง Hells Shop' ,
    tag: 'New',
    type: 'bottoms',
    rating: '4.7⭐ | 21.1พัน Ratings | 60.7พัน ขายแล้ว',
}, {
    id: 10,
    img: 'images/bottom4.png',
    name: 'Black Sweat Pants',
    price: 3500,
    description: 'กางเกงวอร์มขายาวสีดำ จากร้าน Hells Shop' ,
    tag: 'New',
    type: 'bottoms',
    rating: '4.8⭐ | 29.9พัน Ratings | 67.4พัน ขายแล้ว',
}, {
    id: 11,
    img: 'images/bottom5.png',
    name: 'Camouflage Shorts',
    price: 2000,
    description: 'กางเกงวอร์มขาสั้นลายพลาง จากร้าน Hells Shop' ,
    tag: 'New',
    type: 'bottoms',
    rating: '4.4⭐ | 9.1พัน Ratings | 36.8พัน ขายแล้ว',
}, {
    id: 12,
    img: 'images/bottom6.png',
    name: 'Pink Sweat Shorts',
    price: 2500,
    description: 'กางเกงวอร์มขาสั้นสีชมพู จากร้าน Hells Shop' ,
    tag: 'New',
    type: 'bottoms',
    rating: '4.7⭐ | 19.7พัน Ratings | 61.8พัน ขายแล้ว',
}];

$(document).ready(() => {
    var html = '';
    for (let i = 0; i < cardproduct.length; i++) {
        html += `<div data-bs-toggle="modal" data-bs-target="#productModal" onclick="openProductDetail(${i})" class="product-item col-12 col-xl-4 ${cardproduct[i].type}">
                    <div class="card h-100 pop">
                        <img src="${cardproduct[i].img}" class="card-img-top" alt="...">
                        <div class="card-body">
                         <h5><span class="badge text-bg-danger">${cardproduct[i].tag}</span> ${cardproduct[i].name}</h5>
                        <p class="card-text">${cardproduct[i].description} <br><br><br> <h3>฿${numberWithCommas(cardproduct[i].price)}</h3> </p>
                        <h6>${cardproduct[i].rating}</h6>
                        </div>
                    </div>
                </div>`;
    }
    $("#card_toplist").html(html);
})

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function searchitem(elem) {
    var value = $('#'+elem.id).val()
    console.log(value)

    var html = '';
    for (let i = 0; i < cardproduct.length; i++) {
        if(cardproduct[i].name.includes(value)) {
            html += `<div data-bs-toggle="modal" data-bs-target="#productModal" onclick="openProductDetail(${i})" class="product-item col-12 col-xl-4 ${cardproduct[i].type}">
                            <div class="card h-100 pop">
                                <img src="${cardproduct[i].img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5><span class="badge text-bg-danger">${cardproduct[i].tag}</span> ${cardproduct[i].name}</h5>
                                <p class="card-text">${cardproduct[i].description} <br><br><br> <h3>฿${numberWithCommas(cardproduct[i].price)}</h3> </p>
                                <h6>${cardproduct[i].rating}</h6>
                                </div>
                            </div>
                        </div>`;
        }
    }
    if(html == "") {
        $("#card_toplist").html(`<h2>Not Found</h2>`);
    } else {
        $("#card_toplist").html(html);
    }
}

function searchproduct(param) {
    console.log(param)
    $(".product-item").css('display', 'none')
    if(param == 'all') {
        $(".product-item").css('display', 'block')
    }
    else {
        $("."+param).css('display', 'block')
    }
}

var productindex = 0;
function openProductDetail(index) {
    productindex = index;
    console.log(productindex)
    $("#productModal").css('display' , 'flex');
    $("#mdd-img").attr('src', cardproduct[index].img);
    $("#mdd-name").text(cardproduct[index].name);
    $("#mdd-desc").text(cardproduct[index].description);
    $("#mdd-price").text('฿' + numberWithCommas(cardproduct[index].price));
    $("#mdd-rate").text(cardproduct[index].rating);
}

var cart = [];
function addtocart() {
    var pass = true;

    for (let i = 0; i < cart.length; i++) {
        if( productindex == cart[i].index ) {
            console.log('found same product')
            cart[i].count++;
            pass = false;
        }
    }

    if(pass) {
        var obj = {
            index: productindex,
            id: cardproduct[productindex].id,
            name: cardproduct[productindex].name,
            price: cardproduct[productindex].price,
            img: cardproduct[productindex].img,
            count: 1
        };
        cart.push(obj)
    }
    console.log(cart)
      
    Swal.fire({
        icon: 'success',
        title: 'Add ' + cardproduct[productindex].name + ' to cart!!!'
    })
    $("#countcart").css('display','flex').text(cart.length)
}

function openCart() {
    $('#modalCart').css('display','flex')
    rendercart();
}

function rendercart() {
    if(cart.length > 0) {
        var html = '';
        for (let i = 0; i < cart.length; i++) {
            html += `<div class="modalcart-list">
                        <div class="modalcart-content">
                        <div class="modalcart-left">
                            <img class="me-3" src="${cart[i].img}">
                            <div class="modalcart-detail">
                            <p>${cart[i].name}</p>
                            <p>฿${numberWithCommas(cart[i].price * cart[i].count)}</p>
                            </div>
                        </div>
                        <div class="modalcart-right">
                            <p onclick="deinitems('-' , ${i})" class="addout">-</p>
                            <p id="countitems${i}" style="margin: 0 70px;">${cart[i].count}</p>
                            <p onclick="deinitems('+' , ${i})"  class="addout">+</p>
                        </div>
                        </div>
                    </div>`;
        }
        $("#mycart").html(html)
    }
    else {
        $("#mycart").html(`<p>Not found product list</p>`)
    }
}

function deinitems(action, index) {
    if(action == '-') {
        if(cart[index].count > 0) {
            cart[index].count--;
            $("#countitems"+index).text(cart[index].count)

            if(cart[index].count <= 0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Are you sure to delete?',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    cancelButtonText: 'Cancel'
                }).then((res) => {
                    if(res.isConfirmed) {
                        cart.splice(index, 1)
                        console.log(cart)
                        rendercart();
                        $("#countcart").css('display','flex').text(cart.length)

                        if(cart.length <= 0) {
                            $("#countcart").css('display','none')
                         }
                    }
                    else {
                        cart[index].count++;
                        $("#countitems"+index).text(cart[index].count)
                        rendercart();
                      }
                })
            }
            rendercart();
        }
    }
    else if(action == '+') {
        cart[index].count++;
        $("#countitems"+index).text(cart[index].count)
        rendercart();
    }
}