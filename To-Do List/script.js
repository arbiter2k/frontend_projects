$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500 , function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("input").on("keypress",function(event){
    if(event.which === 13){
        var newList = $(this).val();
        $("ul").append("<li>"+newList+" <span><i class='far fa-times-circle'></i></span></li>");
        $(this).val("");
    }
});
$(".fa-pen").on("click",function(){
    $("input").fadeToggle();
});