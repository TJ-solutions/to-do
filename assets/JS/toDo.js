// Check Off Specific Todos By Clickling
// Check off Todos by Clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//Deleting Todos
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Adding a Todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//reading and storing the input
		var todoT = $(this).val();
		$(this).val("");	
		//creating and adding to list
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoT + "</li>")
	}

});

// Hiding and showing the input form

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});