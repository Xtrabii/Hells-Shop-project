var cardtop = [{
    id: 1,
    img: 'images/Top1.png',
    name: 'White Hell Collection',
    price: 5000,
    description: 'White Hell Collection เสื้อ Collection Limited จากทาง Hells Shop ที่จะเปิดขายตั้งแต่ มกราคม-เมษายน เท่านั้น!!!' ,
    tag: 'New',
    type: 'Tops',
    rating: '4.9⭐ | 15.1พัน Ratings | 59.1พัน ขายแล้ว',
}, {
    id: 2,
    img: 'images/Top2.png',
    name: 'Black Hell Collection',
    price: 5000,
    description: 'Black Hell Collection เสื้อ Collection Limited จากทาง Hells Shop ที่จะเปิดขายตั้งแต่ มกราคม-เมษายน เท่านั้น!!!' ,
    tag: 'New',
    type: 'Tops',
    rating: '5.0⭐ | 18.8พัน Ratings | 68.8พัน ขายแล้ว',
}, {
    id: 3,
    img: 'images/Top3.png',
    name: 'Red Hell Collection',
    price: 5000,
    description: 'Red Hell Collection เสื้อ Collection ใหม่จากทาง Hells Shop มี 6 สีให้เลือกซื้อตามใจชอบ!!' ,
    tag: 'New',
    type: 'Tops',
    rating: '4.7⭐ | 12.1พัน Ratings | 55.8พัน ขายแล้ว',
}, {
    id: 4,
    img: 'images/Top4.png',
    name: 'Green Hell Collection',
    price: 5000,
    description: 'Green Hell Collection เสื้อ Collection ใหม่จากทาง Hells Shop มี 6 สีให้เลือกซื้อตามใจชอบ!!' ,
    tag: 'New',
    type: 'Tops',
    rating: '4.5⭐ | 10.2พัน Ratings | 47.5พัน ขายแล้ว',
}, {
    id: 5,
    img: 'images/Top5.png',
    name: 'Orange Hell Collection',
    price: 5000,
    description: 'Orange Hell Collection เสื้อ Collection ใหม่จากทาง Hells Shop มี 6 สีให้เลือกซื้อตามใจชอบ!!' ,
    tag: 'New',
    type: 'Tops',
    rating: '4.2⭐ | 9.1พัน Ratings | 41.8พัน ขายแล้ว',
}, {
    id: 6,
    img: 'images/Top6.png',
    name: 'Grey Hell Collection',
    price: 5000,
    description: 'Grey Hell Collection เสื้อ Collection ใหม่จากทาง Hells Shop มี 6 สีให้เลือกซื้อตามใจชอบ!!' ,
    tag: 'New',
    type: 'Tops',
    rating: '4.8⭐ | 13.1พัน Ratings | 57.8พัน ขายแล้ว',
}];

$(document).ready(() => {
    var html = '';
    for (let i = 0; i < cardtop.length; i++) {
        html += `<div class="col-6">
                    <div class="card h-100 pop">
                        <a href="Top1.html"><img src="${cardtop[i].img}" class="card-img-top" alt="..."></a>
                        <div class="card-body">
                         <h5><span class="badge text-bg-danger">${cardtop[i].tag}</span> ${cardtop[i].name}</h5>
                        <p class="card-text">${cardtop[i].description} <br><br><br> <h3>฿${numberWithCommas(cardtop[i].price)}</h3> </p>
                        <h6>${cardtop[i].rating}</h6>
                        </div>
                    </div>
                </div>`;
    }
    $("#cardlist").html(html);
})

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

