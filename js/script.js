/* -------------------------------------------------------------------------- */
/*                                   SCROLLMAGIC                                  */
/* -------------------------------------------------------------------------- */

   
   ///inicio ScrollMagic
   var controller = new ScrollMagic.Controller();


    ///Creando Scena1
    var ourScenetx01 = new ScrollMagic.Scene({

        triggerElement:"#carTxtag01",
        triggerHook: 0.7,
        reverse: false,
    })
        



    .setClassToggle('#carTxtag01', 'fade-in')
  /*  .addIndicators({
        name: "TITULO 01",
    })*/
    .addTo(controller);


   ///Creando Scena1
    var ourScene = new ScrollMagic.Scene({

        triggerElement:"#carDstag01",
        triggerHook: 0.6,
        reverse: false,
    })
        

    

    .setClassToggle('#carDstag01', 'fade-in')
   /* .addIndicators({
        name: "CARTA 01"
    })*/
    .addTo(controller);



 ///Creando Scena2
 var ourScene2 = new ScrollMagic.Scene({

    triggerElement:"#carDstag02",
    triggerHook: 0.5,
    reverse: false,
})
    

.setClassToggle('#carDstag02', 'fade-in')
/*.addIndicators({
    name: "CARTA 02"
})*/
.addTo(controller);


///Creando Scena3
var ourScene3 = new ScrollMagic.Scene({

    triggerElement:"#carDstag03",
    triggerHook: 0.45,
    reverse: false,
})
    

.setClassToggle('#carDstag03', 'fade-in')
/*.addIndicators({
    name: "CARTA 03"
})*/
.addTo(controller);

///Creando Scena4
var ourScene4 = new ScrollMagic.Scene({

    triggerElement:"#carTxtag02",
    triggerHook: 0.49,
    reverse: true,
})
    

.setClassToggle('#carTxtag02', 'fade-in')
/*.addIndicators({
    name: "CARTA 04"
})*/
.addTo(controller);


///Creando Scena5
var ourScene5 = new ScrollMagic.Scene({

    triggerElement:"#carTxtag03",
    triggerHook: 0.5,
    reverse: true,
})
    

.setClassToggle('#carTxtag03', 'fade-in')
/*.addIndicators({
    name: "CONTENIDO"
})*/
.addTo(controller);




/* -------------------------------------------------------------------------- */
/*                                  [RELOAD]                                  */
/* -------------------------------------------------------------------------- */

var cagarImg = $("img");
var cargarScript =$("script");
var cargarCss = $("link");
var cargarVideos = $("video");
var cargarAudios = $("audio");

var totalObjetos = [];
var numItem =0;
var valorporsentaje = 0;
var incremento = 0;
var numerocarga =0;

totalObjetos.push(cagarImg,cargarScript,cargarCss,cargarVideos,cargarAudios);

totalObjetos.forEach(funcionForEach);
console.log(totalObjetos);

function funcionForEach(item,_index){
    for(var i=0; i<item.length; i++){
       numItem ++; 
        valorporsentaje = 100/numItem;
    }

    for (var i = 0; i< item.length; i++){

        $(item[i]).ready(function(){

            numerocarga++; 
            incremento = Math.ceil(numerocarga * valorporsentaje);
            
            
            if(incremento >= 100){
                $("#preload").delay(150).fadeOut("slow");
                $("body").delay(350).css({"overflow-y":"scroll"});
    
            }
            
            
        })
         
        
        
    }

}


/* -------------------------------------------------------------------------- */
/*                                  SCROLLUP                                  */
/* -------------------------------------------------------------------------- */
$(window).scroll(function(){
    if($(this).scrollTop() > 60){
      $('#topBtn').fadeIn();
    } else{
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });