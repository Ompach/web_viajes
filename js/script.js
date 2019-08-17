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
    .addIndicators({
        name: "TITULO 01",
    })
    .addTo(controller);


   ///Creando Scena1
    var ourScene = new ScrollMagic.Scene({

        triggerElement:"#carDstag01",
        triggerHook: 0.6,
        reverse: false,
    })
        

    

    .setClassToggle('#carDstag01', 'fade-in')
    .addIndicators({
        name: "CARTA 01"
    })
    .addTo(controller);



 ///Creando Scena2
 var ourScene2 = new ScrollMagic.Scene({

    triggerElement:"#carDstag02",
    triggerHook: 0.5,
    reverse: false,
})
    

.setClassToggle('#carDstag02', 'fade-in')
.addIndicators({
    name: "CARTA 02"
})
.addTo(controller);


///Creando Scena3
var ourScene3 = new ScrollMagic.Scene({

    triggerElement:"#carDstag03",
    triggerHook: 0.45,
    reverse: false,
})
    

.setClassToggle('#carDstag03', 'fade-in')
.addIndicators({
    name: "CARTA 03"
})
.addTo(controller);

///Creando Scena4
var ourScene4 = new ScrollMagic.Scene({

    triggerElement:"#carTxtag02",
    triggerHook: 0.49,
    reverse: true,
})
    

.setClassToggle('#carTxtag02', 'fade-in')
.addIndicators({
    name: "CARTA 04"
})
.addTo(controller);


///Creando Scena5
var ourScene5 = new ScrollMagic.Scene({

    triggerElement:"#carTxtag03",
    triggerHook: 0.5,
    reverse: true,
})
    

.setClassToggle('#carTxtag03', 'fade-in')
.addIndicators({
    name: "CONTENIDO"
})
.addTo(controller);












