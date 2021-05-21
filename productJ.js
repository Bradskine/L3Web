  //    var imgSize = '5px';//
        var ay = document.getElementById('box1'); //main product box with products
        var h1 = ay.getElementsByClassName('h1');   //h1 text // names of products
        var img = ay.getElementsByClassName('img');  //image3s
        var h2 = document.getElementById('hTwo');  //left side in cart cost of items
        var h2Right = document.getElementById('hToo');  //name of item
        var h2Three = document.getElementById('hTo'); // count of item
        var hZ = document.getElementById('hZ');  //minus botton
        var ttlCost = document.getElementById('ttlCost');//ttl cost text at bottom of cart
        var botCart = document.getElementById('botCart');//grid of bottom of grid

        //    remove = new array[];
        var box1Active = false; //checks if products box is active
        var cartItems = [ //stores cartitems before they are moved to html
            [], // item type eg kayak bike or bottle
            [], //item number
            [], //item count
            [] //cost
        ];
        var itemType = ''; //stores what item type productio page is on
        var itemNumber = '';//stores what number item is that is clicekd
        var pass = true;//is used to check when adding item if it can push new item to cart or change count of existing one
        var nu = ''; //stores itme number to be put in cart
        var cartCount = "1 ";//count of itmes in cart
        var cost = '30'; //stores item cost for cart
        var kayakCost = '$33k';//stores kayak cost so I can change if want
        var bikeCost = '$1k';//stores bikeCost so I cnza change if want
        var bottleCost = '$0.5';//stores bottleCost so i can change when want
        var cartEmpty = true;//to see if cart is empty
        var remMarginVar = '3.9';//used to calcutlate gap beweent buttons;
        var remHeight = '3vh';
        var kText = [//kayak names
            'Kayak1',
            'Kayak2',
            'Kayak3',
            'Kayak4'
        ]
        var kImg = [  //kayks images
            'Img/kayak.png',
            'Img/kayak2.png',
            'Img/kayak3.png',
            'Img/kayak4.png',
        ]
        var bText = [ //bikes names
            'Bike1',
            'Bike2',
            'Bike3',
            'Bike4'
        ]
        var bImg = [ //bike images
            'Img/bike4.png',
            'Img/bike.png',
            'Img/bike2.png',
            'Img/bike3.png',
        ]
        var dText = [  //bottle names
            'Bottle1',
            'Bottle2',
            'Bottle3',
            'Bottle4'
        ]
        var dImg = [  // bottle images
            'Img/bottle.png',
            'Img/bottle2.png',
            'Img/bottle3.png',
            'Img/bottle4.png',
        ]
       window.onload = function() {
          kaks(); //makes the page start with the kayak page up
          item(); //drawyts producst box of items
           h2.innerHTML = '<bold>'+'Empty'+'</bold>';//adds text in cart to say it is empty
          emptyCart();  //makes total cost and clear cart botton not show when page loads
      }

        function addItem(x) { ///this function adds items by x being the number of the item and using the
          //item type to push valuse into the cart adding new tiem or changing count if already one

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
                hZ.innerHTML = cartItems[3].join('');  //all of this places cartitems stuff into html jint by ''no,


                var a = cartItems[0].length / 2;
                a = cartItems[0].length / 2;

                var remMargin = (a * remMarginVar) -remMarginVar + 'vh';


                if (a == 1) { //changes hight of minus bottons
                    rem.style.height = remHeight;
                } else if (a == 2) {
                    rem2.style.height = remHeight;
                    rem2.style.marginTop = remMargin;
                } else if (a == 3) {
                    rem3.style.height = remHeight;
                    rem3.style.marginTop = remMargin;
                } else if (a == 4) {
                    rem4.style.height = remHeight;
                    rem4.style.marginTop = remMargin;
                } else if (a == 5) {
                    rem5.style.height = remHeight;
                    rem5.style.marginTop = remMargin;
                } else if (a == 6) {
                    rem6.style.height = remHeight;
                    rem6.style.marginTop = remMargin;
                } else if (a == 7) {
                    rem7.style.height = remHeight;
                    rem7.style.marginTop = remMargin;
                } else if (a == 8) {
                    rem8.style.height = remHeight;
                    rem8.style.marginTop = remMargin;
                } else if (a == 9) {
                    rem9.style.height = remHeight;
                    rem9.style.marginTop = remMargin;
                } else if (a == 10) {
                    rem10.style.height = remHeight;
                    rem10.style.marginTop = remMargin;
                } else if (a == 11) {
                    rem11.style.height = remHeight;
                    rem11.style.marginTop = remMargin;
                } else if (a == 12) {
                    rem12.style.height = remHeight;
                    rem12.style.marginTop = remMargin;
                }
                cartFull();

        }
             updateTotal();
        }  //end of additem()

        function re(x) {  //removes items from cart using item number and item type
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
                cartItems[3][cnt+1] = '';   ////emptys these to '' which is then deleted berlow
                hZ.innerHTML = cartItems[3].join('');


                cartItems[0] = cartItems[0].filter(word => word != ''); //this filters out empty quate marks from above
                cartItems[1] = cartItems[1].filter(word => word != '');
                cartItems[2] = cartItems[2].filter(word => word != '');
                cartItems[3] = cartItems[3].filter(word => word != '');


                for (i=1; i<=12; i++) {  //removes minus buttons
                  if (i==1) {
                  var b = eval('rem');
                  }  else {
                   b = eval('rem' + i);
              }
                  b.style.height = '0';
                  b.style.marginTop = '0';
          }

             var a = cartItems[0].length / 2;
                a = cartItems[0].length / 2;

                var remMargin = '';

                for (i=a; i>0; i--) {  //redraws right aomunt of minus items
                    if (i==1) {
                        var c = eval('rem');
                        }  else {
                         c = eval('rem' + i);
                    }

                     remMargin = (i * remMarginVar) - remMarginVar + 'vh'; //makes them spaced evelny with other cart stuff
                    c.style.height = remHeight;
                    c.style.marginTop = remMargin;


                }

            }   //end or remove fucntion re(x)

            updateTotal(); //updates the totla cost of cart
            if(cartItems[1].length == 0) {
                emptyCart();
            }




        }

        function emptyCart() {  //fininigh touches after emptying cart
            cartEmpty = true;
                 botCart.style.display = 'none';
                        h2.innerHTML = '<bold>'+'Empty'+'</bold>';

        }
        function cartFull() {  //changes the display of the bottom of the cart when items in it
            cartEmpty = false;
            botCart.style.display = 'grid';
        }




        function updateTotal() { //updates total cost of cart //using item cost variables

            var b =0;
                for (var i=cartItems[1].length/2;i>0;i--) {


                 var a = Number(parseFloat(cartItems[3][i*2-2].substring(1)));

               b += a;
    //



                }
            var c = '$' + b + 'k';


            ttlCost.innerHTML = c;

            }



        function clearCart() {  //clears the cart of all cart stuff

               for(var i=1;i<5;i++) {


                      cartItems[i-1] =  cartItems.splice() ;

               }
                cartItems[0] = cartItems[0].filter(word => word != '');  //filtesr out empty quate marks for entre cart
                cartItems[1] = cartItems[1].filter(word => word != '');
                cartItems[2] = cartItems[2].filter(word => word != '');
                cartItems[3] = cartItems[3].filter(word => word != '');
                    h2.innerHTML = cartItems[0];
                h2Right.innerHTML = cartItems[1];  //convetts html to cart
                h2Three.innerHTML = cartItems[2];
                hZ.innerHTML =cartItems[3];
               ttlCost.innerHTML='';

                      for (i=1; i<=12; i++) {  //resest all add buttoons to 0 hyiegh and margin to be reset later
                        if (i==1) {
                        var b = eval('rem');
                        }  else {
                         b = eval('rem' + i);
                    }
                        b.style.height = 0;
                        b.style.marginTop = 0;
                }
            emptyCart();
        }  //end of clear cart



        function kaks() {  //changes acitve product menu to kayaks
            for (var i = 0; i < h1.length; i++) {
                h1[i].innerHTML = kText[i];
                img[i].src = kImg[i];
                itemType = ' kayak';
            }
        }

        function bikes() { //changes acitve product menu to bikes
            for (var i = 0; i < h1.length; i++) {
                h1[i].innerHTML = bText[i];
                img[i].src = bImg[i];
                itemType = ' bike';
            }
        }

        function bots() {    //changes acitve product menu to bottles
            for (var i = 0; i < h1.length; i++) {
                h1[i].innerHTML = dText[i];
                img[i].src = dImg[i];
                itemType = ' bottle';
            }
        }


        function item() {  //changes sizes of products nad add buttons
            if (box1Active == false) {
                for (var i = 0; i < h1.length; i++) {
                    h1[i].style.fontSize = '3vh';

                    img[i].style.height = '9vh';
                    img[i].style.width = '9vh';
                    img[i + 4].style.height = '6.8vw';
                    img[i + 4].style.width = '6.8vw';
                }
            }


        }

        function reset() {  //resetsitem menu
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
