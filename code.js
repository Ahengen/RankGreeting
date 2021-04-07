$(document).ready(function() {
    $("form").submit(offerGreeting);
});

function offerGreeting(event){
    //prevent the form actually submitting and reloading the page
    event.preventDefault();

    //grab checked ranking radio selection
    let rankings = $("input[name=ranking]:checked")
    let abbrev = "";
    rankings.each(function () {
        abbrev = $(this).data("abbreviation");
    });
    let fname = $("#firstName").val();
    let lname = $("#lastName").val();

    $("#output").text(`Hello, ${abbrev}. ${fname} ${lname}`);
}






