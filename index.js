var data = [
    {
        "type": "Ermitanos",
        "images":[
            "./images/ermitanos1.jpg",
            "./images/ermitanos2.jpg",
            "./images/ermitanos3.jpg",
            "./images/ermitanos4.jpg",
            "./images/ermitanos5.jpg",
            "./images/ermitanos6.jpg",
            "./images/ermitanos7.jpg",
            "./images/ermitanos8.jpg",
            "./images/ermitanos9.jpg",
            "./images/ermitanos10.jpg",
            "./images/ermitanos11.jpg",
            "./images/ermitanos12.jpg",
            "./images/ermitanos13.jpg",
            "./images/ermitanos14.jpg",
            "./images/ermitanos15.jpg",
            "./images/ermitanos16.jpg",
            "./images/ermitanos17.jpg"
        ],
        "videos": [
            "./images/ermitanos1.mp4"
        ]
    },
    {
        "type": "Ensueno",
        "images": [
            "./images/ensueno1.jpg",
            "./images/ensueno2.jpg",
            "./images/ensueno3.jpg",
            "./images/ensueno4.jpg",
            "./images/ensueno5.jpg"
        ],
        "videos": [
            "./images/ensueno1.mp4"
        ]
    }
];

$(document).ready(function(){
    $("#detailRoute").append('<div class="slider-images-zones"></div>');
    let images = data[0].images;
    for(let index2 = 0; index2 < images.length; index2++){
        $(".slider-images-zones").append('<img class="image-route cursor-pointer lazyload" style="background-image: url('+images[index2]+')" data-image-url="'+images[index2]+'" data-src="'+images[index2]+'"/>');
    }


    $("#closeMenuMobile").click(function(){
        $(".menu-mobile").attr("style", "display: none;");
    })

    $("#openMenuMobile").click(function(){
        $(".menu-mobile").attr("style", "display: flex;");
    })

    $(".menu-mobile ul li").click(function(){
        if($(window).width() <= 768){
            $(".menu-mobile").attr("style", "display: none;");
        }
    })

    $(document).on("click", ".image-route", function(){
        let urlImage = $(this).attr("data-image-url");
        $("#modalImagesRoutes .content-modal-galery").html('<img class="image-modal-100 lazyload" style="background-image: url('+urlImage+')" data-src="'+urlImage+'" />');
        $("#modalImagesRoutes").attr("style","display: flex");
    });

    $("#closeModalGalery").click(function(){
        $("#modalImagesRoutes").attr("style", "display: none;");
    });

    $(".content-team-trekking div").click(function(){
        console.log("click aqui")
    });

    $(".routes li a").click(function(){
        $("#detailRoute").empty();
        for (let index = 0; index < data.length; index++) {
            if($(this).attr("data-type").toLocaleUpperCase() == data[index].type.toLocaleUpperCase()){
                $("#detailRoute").append('<div class="slider-images-zones"></div>');
                let images = data[index].images;
                for(let index2 = 0; index2 < images.length; index2++){
                    $(".slider-images-zones").append('<img class="image-route cursor-pointer lazyload" style="background-image: url('+images[index2]+')" data-image-url="'+images[index2]+'" data-src="'+images[index2]+'"></div>');
                }

                /*$('.slider-images-zones').slick({
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true,
                    autoplay: true,
                    autoplaySpeed: 1000,
                    pauseOnHover: true,
                    responsive: [
                        {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true,
                            arrows: true,
                            autoplay: true
                        }
                        },
                        {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                            arrows: false,
                            autoplay: true,
                        }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                    ]
                });*/
            }
        }
    })
    
});

addEventListener("load", (event) => {
    

    $('.slider-main').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: true,
                autoplay: true
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                autoplay: true,
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
})