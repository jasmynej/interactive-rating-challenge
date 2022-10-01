

$(document).ready(function(){
    $(".thank-you").hide()

    let rating_button = $(".rating-button")
    let submit_button = $("#submit-btn")
    let clicked = null
    let rating = null
    rating_button.click(function(){
        if(clicked){
            clicked.removeClass("choosen")
        }
        
        clicked = $(this)
        rating = $(this).attr("id")
        console.log($(this).attr("id"))
        clicked.addClass("choosen")
    })

    submit_button.click(function(){
        $(".thank-you").show()
        $(".rating-state").hide()
        $("#rating").text(rating)
    })

})