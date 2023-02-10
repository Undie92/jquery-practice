$(document).ready(function(){
    $(".box").on("click", function(){
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        var className = classNames[1];
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            // If this object is already red, turn it black
            $("." + className).css("background-color", "#000");
        } else {
            // Else turn all elements with a box class black
            // and then change the color of all elements
            // with the same class name as the clicked element
            // to red.
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    });
});

// $(document).ready(function() {
// //     $("#stream1_btn").onclick(function() {  // different functions, different speeds of the function.
// //         $(".stream1").toggle();
// //         $(".stream1").show("slow");
// //         $(".stream1").slideDown("medium");
// //         $(".stream1").hide("fast");
// //         $(".stream1").toggle(1000);
// //         $(".stream1").slideUp(1000);
// //         $(".stream1").slideToggle(1000);
// //         $(".stream1").fadeIn(1000);
// //         $(".stream1").fadeOut(1000);
// //         $(".stream1").fadeTo(1000, 0.5); // speed, opacity
// //    });
// //    $("#stream2_btn").on("click", function() {
// //         $(".stream1").removeClass('highlight_stream');
// //         $(".stream2").removeClass('highlight_stream');
// //         $(".stream3").removeClass('highlight_stream');
// //         $(".stream2").addClass('highlight_stream');
// //    });
// //    $("#stream3_btn").on("click", function() {
// //         $(".stream1").removeClass('highlight_stream');
// //         $(".stream2").removeClass('highlight_stream');
// //         $(".stream3").removeClass('highlight_stream');
// //         $(".stream3").addClass('highlight_stream');
// //    });

// //    $("#myButton").removeClass("blueBox").addClass("border"); // chaining effects, first removing, then adding.
// //    $("p").css("color", "blue").slideUp(2000).slideDown(2000); // chaining effects, first setting color of <p> to blue, then slide up and then down with a speed of 2000ms
// //    $("a").attr("href", "http://www.example.com"); // Updating a link attribute of the <a> tag to "example.com"
// }); 