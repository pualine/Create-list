//To make the new item to 'New Item1, New Item2 etc'
let newCounter = 1;
let myList = document.getElementById("list");
//creating new html list
let myNewItem = document.getElementById("add"); 

//Adding a new Item to the list. 
 let myItem = document.getElementById("item");

let listItems = document.getElementById("list").getElementsByTagName("li");
// console.log(listItems);


for (i = 0; i < listItems.length; i++) {
  // listItems[i].innerHTML = "Please Add Item";
  listItems[i].addEventListener("click", currentItem);
   // document.write(i);
}


//change headline
function currentItem() {
	myItem.innerHTML = this.innerHTML;
}


 myNewItem.addEventListener("click", addNewItemButton);

 function addNewItemButton() {
 	myList.innerHTML += `<li>New Item   ${newCounter} </li>`;
 	newCounter++;

 }

const chang = document.getElementById('item').innerHTML ="Click to add item";
 



// an input session.
 let input = document.getElementById('invalid'); 

input.onblur = function() {
	if (!input.value.includes('@')) { 
		// if email does not includes the @ symbol then it's not valid
		input.classList.add('invalid');
		return error.innerHTML = 'Please enter a valid email.';
	}
};

input.onfocus = function() {
	if (this.classList.contains('invalid')) {
		// remove the "error" indication, because the user wants to re- enter something
		this.classList.remove('invalid');
		error.innerHTML = "";
	}
};



// let input = document.getElementById('searchInput').innerHTML= 'Search here';

// input.addEventListener('focus', work);

//  function work() {
// 	if (input === 'Search here') {
// 		return input = "";
// 	}
// }

// input.addEventListener('blur', function() {
// 	if (input === 'Search hers') {
// 		return input = "";
// 	}
// }, false);

// let input = document.getElementById('searchInput');
// input.addEventListener("focus", () => alert("Click detected!"), false);
// input.addEventListener("blur", () => alert('Please add item'), false);
// input.addEventListener("change", () => alert("Changed"), false);
// input.value = 'Search here';

// function searchForm(s){
// 	s.style.background. = '#a4b6ee';
// }

 // const chang = document.getElementById('item').innerHTML ="Click to add item";
 // document.write(chang);
 
// const form = document.forms[0];
// currentItem();



//for loops

// for ( i = 0; i <= 30;) {
// 	document.write(i  + "<br>");
// 	i++;
// }

// //while loop

// var x = 3;
// while(x <= 20 ) {
// 	document.write(x + "<br>");
// 	x;
// }

// //Do While Loop
// var b = 4;
// do {
// 	document.write(b);
// 	b++;
// }
// while(b <7 );



// window.addEventListener('DOMContentLoaded', function() {
// 	let input = document.getElementById('searchInput')
// 	input.addEventListener('focus', function() {
// 		document.body.ClassList.add('fixed');
// 	},true);
// 	input.addEventListener('blur', function() {
// 		document.body.ClassList.remove('fixed');
// 	}, true);
// },false);





































