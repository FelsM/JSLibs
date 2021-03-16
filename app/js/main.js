
// Vanila JS - works directly with DOM
// Jquery - works with COPY



//________________________________________ call Jquery
//1
jQuery('h1').css('text-transform','uppercase').css('color', 'red');

//2
$('h1').css('text-shadow', '2px 2px 5px black');


//_______________________________selectors
//querySelector()
//querySelectoAll()


// tag 
$('h1').css('margin','0 auto');
//class
$('.heading').css('color', 'blue');
//id
$('#heading').css('color', 'yellow');



//____________________________DOM navigation

$('#list > li').css('text-transform', 'uppercase');

// works with dom structure and elements
$('#list > li:nth-child(odd)').css('text-transform', 'lowercase');

//get child elements in array
console.log($('#list').children())
//works with children array
//odd index of element
$('#list').children().odd().css({
	color: 'red',
	'font-weight': 'bold',
	['background-color']: 'lightblue',	
	textDecoration:'line-through' 
});

$('#list').children().even().css('color', 'green');

$('#list').children().eq(1).css('color', 'blue');

$('#list').children().first().css('font-style', 'italic');

$('#list').children().last().css('font-weight', 'bold');


$('.listItem').parent().css('list-style-type', 'none');

$('.listItem').parent().parent().css('background-color', 'lightgrey');

$('#list li:eq(2)').css('color', 'violet');



// DOM manipulation

$('#list2').append('<li>newlistItem2</li>');
$('#list2').prepend('<li>newlistItem1</li>');

$('#list2').children().eq(0).after('<li>newlistItem3</li>');
$('#list2').children().eq($('#list2').children().length-1).before('<li>newlistItem4</li>');
$('#list2').children().eq(3).remove();





//attributes
$('#list').children().eq(3).attr('id', 'special');
$('#list').children().eq(3).attr({
	attr1: 'hello1',
	attr2: 'hello2'
});


console.log($('#list').children().eq(3).attr('id'))
$('#list').children().eq(3).removeAttr('attr1');


//classes
$('#list').children().eq(3).addClass('newClass');
$('#list').children().eq(3).addClass(['class1', 'class2']);
$('#list').children().eq(3).removeClass('newClass');
$('#list').children().eq(3).removeClass(['class1']);
console.log($('#list').children().eq(3).hasClass('class2'))




console.log($('#list').children().eq(3).attr('id'))
$('#list').children().eq(3).removeAttr('attr1');




// styling

$('#list').children().odd().css({
	color: 'red',
	'font-weight': 'bold',
	['background-color']: 'lightblue',	
	textDecoration:'line-through' 
});

$('#list').children().even().css('color', 'green');


//events

$('#test').click(function(){
	alert('hello')
	console.log(this)
	//the same in vanila js
}).mouseenter((event)=>{
	console.log(this)
}).mouseleave(function(){
	// alert('leave')
})


$('#test2').hover(function(){
	$(this).css('color', 'red')
}, function(){
	$(this).css('color', 'black')
})



//show/
$('#click').click(function(){
	$('.hide').hide(1000, function(){
		$('.hide').show(1000);
	});

	$('.toggle').toggle(2000, function(){
		$(this).css('background-color','yellow')
	})

})


$('#click2').on('click', function(){
	$('.slideUp').slideUp(1000, function(){
		// $(this).slideDown(2000);
	})

	$('.slideToggle').slideToggle(1000);
})


$('.inner').click(function(){
	$(this).animate({
		top: "+=100",
		left: "+=100",
	}, 3000, function(){
		$(this).animate({width: '+=100', height: "+=100"}, 1000, function(){
			$(this).animate({opacity: 0 }, 2000, function(){
				$(this).animate({top: "+=100", left:"+=300"}, 1000, function(){
					$(this).animate({opacity: 1}, 2000);
				})
			});
		});
	})
})

$('#myForm').submit(function(e){
	e.preventDefault();
	console.log($(this).serialize());
	console.log($(this).serializeArray());
	alert($('#one').val());
})


//width, height

console.log($('#backToTop').width())
console.log($('#backToTop').height())


//menu example

$('#menu').click(function(){
	$('.menuWrap').slideToggle(500);
})

$('#scrollOne').click(function(){
	$('html,body').animate({scrollTop: "+=1000"}, 500, function(){
		$('.menuWrap').slideUp(500)
	})
})

$('#backToTop').click(function(){
	$('html,body').animate({scrollTop: 0}, 500);
})








