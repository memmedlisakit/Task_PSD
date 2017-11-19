$(document).ready(function(){
    // part 3 animations
    $("#part-3 .item").mouseover(function(){
      $(this).children("div").css({
        transform:"translateY(0px)",
        opacity:"1"
      });
    });
    $("#part-3 .item").mouseleave(function(){
        $(this).children("div").css({
            transform:"translateY(-350px)",
            opacity:"0"
        })
    });

    // part 4 animations
    $("#part-4 .item").mouseover(function(){
        $(this).children("div").css({
            transform:"translateY(0px)",
            opacity:"1"
        });
    })
    $("#part-4 .item").mouseleave(function(){
        $(this).children("div").css({
            transform:"translateX(-350px)",
            opacity:"0"
        });
    });
    // map piece
    $('#vmap').vectorMap({
        map: 'world_en',
        backgroundColor: 'white',
        color: '#ffffff',
        hoverOpacity: 0.7,
        selectedColor: '#666666',
        enableZoom: true,
        showTooltip: false,
        values: sample_data,
        scaleColors: ['#277df4', '#006491'],
        normalizeFunction: 'polynomial',
        onRegionOver: function(element, code, region){
            var message = region;
            $("#vmap .region-pointer").text(message);
        },
        onRegionOut:function(){
            $("#vmap .region-pointer").text("");
        }

    });
    // phones slider piece
    $('.owl-carousel').owlCarousel({
        stagePadding: 50,
        loop:true,
        margin:20,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })


    // team slider piece
    var active = document.querySelector("#part-6 .active-slide");
    $("#part-6 .prev-slide").click(function(){
        active.classList.remove("active-slide");
        if (active.previousElementSibling == null) {
           var index = active.parentNode.childElementCount-1;
            active.parentNode.children[index].classList.add("active-slide");
            active = active.parentNode.children[index];
        } else {
            active.previousElementSibling.classList.add("active-slide");
            active = active.previousElementSibling;
        }
    })
    
    $("#part-6 .next-slide").click(function(){
        active.classList.remove("active-slide");
        if (active.nextElementSibling == null) {
            active.parentNode.children[0].classList.add("active-slide");
            active = active.parentNode.children[0];
        } else {
            active.nextElementSibling.classList.add("active-slide");
            active = active.nextElementSibling;
        }
    })

    //part 7 
    var count =0;
    $(".buttons a").click(function(){
       if(count!=0){
        $(this).css({
            transform:"translateX(0px)"
        });  
        count=0;
       }else{
        $(this).css({
            transform:"translateX(147px)"
        });
        count=1;
       }
       
    })
    
    
})