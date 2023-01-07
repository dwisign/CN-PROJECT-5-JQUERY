$(document).ready(function(){
    //one click Using ID
    $('#one-click').click(function(){
        $(this).hide();
    });

    //double click using class
    $('.double-click').dblclick(function(){
        $(this).hide(); 
    })

    //change
    $('.input-name').change(function(){
        $('.alert-name').show();
    })

    //blur
    $('.input-address').blur(function(){
        $('.alert-address').show();
    })

    //event result
    $('button').click(function(){
        return "Hello World"
    })
    $('button').click(function(event){
        $('h5').html(event.result)
    })

    //event data
    // $('li').each(function(i){
    //     $(this).on('click', {x:i}, function(event){
    //         alert("List " + $(this).index() + ". adalah date ke: " + event.data.x)
    //     })
    // })

    //event pageX pageY
    $(document).mousemove(function(event){
        $('.pointer-count').text('X: ' + event.pageX + ", Y: " + event.pageY)
    })

    //event preventDefault
    $('.link-disabled').click(function(event){
        event.preventDefault()
    })

    //event type
    // $('h4').on('click dblclick mouseover mouseout', function(event){
    //     $('div').html('Event: ' + event.type)
    // })

    //show hide
    // $('#show').click(function(){
    //     $('.text').show()
    // })

    // $('#hide').click(function(){
    //     $('.text').hide()
    // })

    $('#toggle').click(function(){
        $('.text').toggle(500)
    })

    $('.clickToSmall').click(function(){
        $('.box').animate({
            width: "100px",
            height: "100px",
            marginLeft: "500px"
        }, 500)
    })

    $('.clickToBig').click(function(){
        $('.box').animate({
            width: "300px",
            height: "300px",
            marginLeft: "0px"
        }, 500)
    })

    $('.fadeOut').click(function(){
        $('.boxFadeTo').fadeOut(500)
    })

    $('.fadeIn').click(function(){
        $('.boxFadeTo').fadeIn(500)
    })

    //Product Tabs
    $('.product-showcase-item').hide()
    $('.product-showcase-item:first').show()

    $('#options li a:not(:first)').addClass('inactive')
    $('#options li a').click(function(){
        const n = $(this).attr('id')
        if($(this).hasClass('inactive')){
            $('#options li a').addClass('inactive')
            $(this).removeClass('inactive')

            $('.product-showcase-item').hide()
            $('#' + n + 'content').fadeIn(500)
        }
    })
});