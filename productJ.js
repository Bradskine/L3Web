

    //    var imgSize = '5px';//
    var ay = document.getElementById('box1');
    var h1 = ay.getElementsByClassName('h1');
    var img = ay.getElementsByClassName('img');
    var h2 = document.getElementById('hTwo');
    var h2Right = document.getElementById('hToo');
    var h2Three = document.getElementById('hTo');
    var hZ = document.getElementById('hZ');
    var ttlCost = document.getElementById('ttlCost');
    var botCart = document.getElementById('botCart');

    //    remove = new array[];
    var box1Active = false;
    var cartItems = [
        [], // item type eg kayak bike or bottle
        [], //item number
        [], //item count
        [] //cost
    ];
    var itemType = '';
    var itemNumber = '';
    var kCount = '0';
    var bCount = '0';
    var dCount = '0';
    var pass = true;
    var pass2 = true;
    var nu = '';
    var cartCount = "1 ";
    var cCount2 = '';
    var cost = '30';
    var kayakCost = '$33k';
    var bikeCost = '$1k';
    var bottleCost = '$0.5';
    var cartEmpty = true;

   window.onload = function() {

      kaks();
      item();
       h2.innerHTML = '<bold>'+'Empty'+'</bold>';
      emptyCart();
  }

    function addItem(x) {

        pass = true;


        nu = x[1];

        ty = itemType;

        for (var i = cartItems[0].length; i > 0;) {

            if (ty != cartItems[0][i - 1] || nu != cartItems[1][i - 1]) {
                i = i - 1;
                pass = true;
            } else {

                pass = false;

                var idid = parseFloat(cartItems[2][i - 1]) + 1;
                cartItems[2][i - 1] = idid;
                h2Three.innerHTML = cartItems[2].join('');


                //1st the substing removes the 1st symbal which is $
                //then the parseFloat remves letter at end which in this case is k
            var a = parseFloat(cartItems[3][i-1].substring(1));

              var b = parseFloat(cost.substring(1)); //this removes $ and k from cost

              d = a+b;   //adds the amount of 1 of item to total cost of that item
                var c = '$' + d + 'k';    //adds the $ and k back to number
                    cartItems[3][i-1] = c;
                hZ.innerHTML = cartItems[3].join('');

                i = 0;
            }


        }

        if (pass == true) {

            cartItems[0].push(itemType);
            cartItems[1].push(nu);
            cartItems[2].push(cartCount);

            //just nneed to create varaibales for pricee ladi da


            if(itemType == ' bottle') {
                cost = bottleCost;
            }   else if (itemType == ' kayak') {
                cost = kayakCost;
            }   else if (itemType == ' bike') {
                cost = bikeCost;
            }

          cartItems[3].push(cost);


            cartItems[0].push('<br>');
            cartItems[1].push('<br>');
            cartItems[2].push('<br>');
            cartItems[3].push('<br>');

//            cartItems.sort();  //this broke eveything

            cartItems.join('');

            h2.innerHTML = cartItems[0].join('');
            h2Right.innerHTML = cartItems[1].join('');
            h2Three.innerHTML = cartItems[2].join('');
            hZ.innerHTML = cartItems[3].join('');


            var a = cartItems[0].length / 2;
            a = cartItems[0].length / 2;

            var remMargin = (a * 3.095) - 3.095 + 'vh';


            if (a == 1) {
                rem.style.height = '2vh';
            } else if (a == 2) {
                rem2.style.height = '2vh';
                rem2.style.marginTop = remMargin;
            } else if (a == 3) {
                rem3.style.height = '2vh';
                rem3.style.marginTop = remMargin;
            } else if (a == 4) {
                rem4.style.height = '2vh';
                rem4.style.marginTop = remMargin;
            } else if (a == 5) {
                rem5.style.height = '2vh';
                rem5.style.marginTop = remMargin;
            } else if (a == 6) {
                rem6.style.height = '2vh';
                rem6.style.marginTop = remMargin;
            } else if (a == 7) {
                rem7.style.height = '2vh';
                rem7.style.marginTop = remMargin;
            } else if (a == 8) {
                rem8.style.height = '2vh';
                rem8.style.marginTop = remMargin;
            } else if (a == 9) {
                rem9.style.height = '2vh';
                rem9.style.marginTop = remMargin;
            } else if (a == 10) {
                rem10.style.height = '2vh';
                rem10.style.marginTop = remMargin;
            } else if (a == 11) {
                rem11.style.height = '2vh';
                rem11.style.marginTop = remMargin;
            } else if (a == 12) {
                rem12.style.height = '2vh';
                rem12.style.marginTop = remMargin;
            }
            cartFull();

    }
         updateTotal();
    }  //end of additem()

    function re(x) {
        var cnt = parseFloat(x) *2 -2;  ///0 2 4 6 8
        var remCnt = parseFloat(x);    //12345


        if(cartItems[2][cnt] > 1) {
            var newCartItem = (cartItems[2][cnt]) - 1;
            var newCartCost = Number(parseFloat(cartItems[3][cnt].substring(1)));
             var itmCost = Number(parseFloat(cost.substring(1)));
            newCartCost -= itmCost;
             var updatedCost = '$' + newCartCost + 'k';
            cartItems[3][cnt] = updatedCost;

            hZ.innerHTML = cartItems[3].join('');



            cartItems[2][cnt] = newCartItem;

            h2Three.innerHTML = cartItems[2].join('');

        }    else {

            cartItems[2][cnt] = '';
            cartItems[2][cnt+1] = '';




             h2Three.innerHTML = cartItems[2].join('');

            cartItems[0][cnt] = '';
            cartItems[0][cnt+1] = '';
            h2.innerHTML = cartItems[0].join('');

            cartItems[1][cnt] = '';
            cartItems[1][cnt+1] = '';
            h2Right.innerHTML = cartItems[1].join('');



             cartItems[3][cnt] = '';
            cartItems[3][cnt+1] = '';
            hZ.innerHTML = cartItems[3].join('');


            cartItems[0] = cartItems[0].filter(word => word != '');
            cartItems[1] = cartItems[1].filter(word => word != '');
            cartItems[2] = cartItems[2].filter(word => word != '');
            cartItems[3] = cartItems[3].filter(word => word != '');


            for (i=1; i<=12; i++) {
              if (i==1) {
              var b = eval('rem');
              }  else {
               b = eval('rem' + i);
          }
          console.log(b);
              b.style.height = '0';
              b.style.marginTop = '0';
      }




         var a = cartItems[0].length / 2;
            a = cartItems[0].length / 2;

            var remMargin = '';

console.log(a);
            for (i=a; i>0; i--) {
                if (i==1) {
                    var c = eval('rem');
                    }  else {
                     c = eval('rem' + i);
                }

                 remMargin = (i * 3.095) - 3.095 + 'vh';
                c.style.height = '2vh';
                c.style.marginTop = remMargin;


            }

        }   //end or remove fucntion re(x)

        updateTotal();
        if(cartItems[1].length == 0) {
            emptyCart();
        }




    }

    function emptyCart() {
        cartEmpty = true;
             botCart.style.display = 'none';
                    h2.innerHTML = '<bold>'+'Empty'+'</bold>';

    }
    function cartFull() {
        cartEmpty = false;
        botCart.style.display = 'grid';
    }




    function updateTotal() {





        var b =0;
            for (var i=cartItems[1].length/2;i>0;i--) {


             var a = Number(parseFloat(cartItems[3][i*2-2].substring(1)));

           b += a;
//



            }
        var c = '$' + b + 'k';


        ttlCost.innerHTML = c;

        }



    function clearCart() {

           for(var i=1;i<5;i++) {


                  cartItems[i-1] =  cartItems.splice() ;

           }
            cartItems[0] = cartItems[0].filter(word => word != '');
            cartItems[1] = cartItems[1].filter(word => word != '');
            cartItems[2] = cartItems[2].filter(word => word != '');
            cartItems[3] = cartItems[3].filter(word => word != '');
                h2.innerHTML = cartItems[0];
            h2Right.innerHTML = cartItems[1];
            h2Three.innerHTML = cartItems[2];
            hZ.innerHTML =cartItems[3];
           ttlCost.innerHTML='';

                  for (i=1; i<=12; i++) {
                    if (i==1) {
                    var b = eval('rem');
                    }  else {
                     b = eval('rem' + i);
                }
                    b.style.height = 0;
                    b.style.marginTop = 0;
            }
        emptyCart();
    }




    var kText = [
        'Kayak1',
        'Kayak2',
        'Kayak3',
        'Kayak4'
    ]
    var kImg = [
        'Img/kayak.png',
        'Img/kayak2.png',
        'Img/kayak3.png',
        'Img/kayak4.png',
    ]
    var bText = [
        'Bike1',
        'Bike2',
        'Bike3',
        'Bike4'
    ]
    var bImg = [
        'Img/bike4.png',
        'Img/bike.png',
        'Img/bike2.png',
        'Img/bike3.png',
    ]
    var dText = [
        'Bottle1',
        'Bottle2',
        'Bottle3',
        'Bottle4'
    ]
    var dImg = [
        'Img/bottle.png',
        'Img/bottle2.png',
        'Img/bottle3.png',
        'Img/bottle4.png',
    ]

    function kaks() {
        for (var i = 0; i < h1.length; i++) {
            h1[i].innerHTML = kText[i];
            img[i].src = kImg[i];
            itemType = ' kayak';
            kCount += 1;
        }
    }

    function bikes() {
        for (var i = 0; i < h1.length; i++) {
            h1[i].innerHTML = bText[i];
            img[i].src = bImg[i];
            itemType = ' bike';
        }
    }

    function bots() {
        for (var i = 0; i < h1.length; i++) {
            h1[i].innerHTML = dText[i];
            img[i].src = dImg[i];
            itemType = ' bottle';
        }
    }

    function item() {
        if (box1Active == false) {
            for (var i = 0; i < h1.length; i++) {
                h1[i].style.fontSize = '6vw';
                img[i].style.height = '7vh';
                img[i].style.width = '7vh';
                img[i + 4].style.height = '8vw';
                img[i + 4].style.width = '8vw';
            }
        }


    }

    function reset() {
        for (var i = 0; i < h1.length; i++) {
            h1[i].style.fontSize = '0';
            img[i].style.width = '0';
            img[i].style.height = '0';
            img[i + 4].style.height = '0';
            img[i + 4].style.width = '0';
            kActive = false;
            bactive = false;
            dactive = false;
        }
    }