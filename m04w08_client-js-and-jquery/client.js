// $(() => {}) // equivalent of document ready

$(document).ready(() => {
	// With pure JavaScript

	console.log(`Hello ${username}`);

	// create a new li
	const myLi = document.createElement('li');

	// create a text node for the li
	const textNode = document.createTextNode('Four');

	// put the text node and the li together
	myLi.append(textNode); // <li>Four</li>

	// find something in the DOM that exists
	const mainList = document.getElementById('main-list');

	// add the newly created to the main-list
	mainList.append(myLi);

	// With jQuery

	// create a new li and text node put together
	const $myLi = $('<li>').text('Four with jQuery'); // <li>Four with jQuery</li>
	// const $myLi = $('<li>Four with jQuery</li>');

	// find something in the DOM that exists
	const $mainList = $('#main-list');

	// add the created li to the list
	$mainList.append($myLi);
	// $myLi.appendTo($mainList);

	const $button = $('#add-button');

	$button.on('click', () => {
		console.log('button got clicked!');

		// get input field
		const $input = $('#input-field');
		const inputVal = $input.val();

		const $newLi = $(`<li>${inputVal}</li>}`);
		$mainList.prepend($newLi);

		$input.val('').focus();
	});
	// $button.click(() => {})
});
