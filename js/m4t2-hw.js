// ! Задание 1

function greetings() {
	const name = prompt('Напишите ваше имя:');
	const age = prompt('Введите ваш возраст:');
	if (!age || !name || age < 0 || !Number(age)) {
		alert('Ошибка ввода, пожалуйста введите корректные данные');
		return greetings();
	}
	else if (age < 20) {
		alert(`Привет, ${name}!`);
	} else if (age >= 20 && age < 45) {
		alert(`Здравствуй, ${name}!`);
	} else {
		alert(`Здравствуйте, ${name}!`);
	}
}

// greetings();

// ! Задание  2
function stud() {
	let name, students = [], counter = 0;
	while (true) {
		name = prompt('Введите ваше имя (для завершения нажмите "Отмена"):');
		// console.log(`Имя: ${name}`);
		if (name === null) {
			console.log(students);
			break;
		}
		else if (name.trim() === "") {
			alert('Вы ввели пустую строку, повторите ввод.')
		}
		else {
			students[counter++] = name;
		};
	}
}

// stud();

function checkCart(quantity, price, discount) {
	if (quantity > 20) {
		price -= price * 0.1;
		console.log(`10% ${price}`)
	} else if (quantity > 10) {
		price -= price * 0.05;
		console.log(`5% ${price}`)
	}

	if (price > 10000) {
		price -= 1000;
		console.log(`-1000 ${price}`)
	}

	if (discount.toLowerCase() == 'methed') {
		price -= price * 0.15;
		console.log(`discond ${price}`)
	}
	console.log(`total ${price}`)

	return price;
}

// console.log(price);

// ! Доп. задание

function filter(list, blackList) {
	let result = [], counter = 0;

	for (let i = 0; i < list.length; i++) {
		let blackFlag = false;
		for (let j = 0; j < blackList.length && !blackFlag; j++) {
			if (list[i] == blackList[j]) {
				blackFlag = true;
			}
		}
		if (!blackFlag) {
			result[counter++] = list[i];
		}
	}
	return result;
}
// console.log(filter([1, 2, 3, 4, 5], [1, 4, 5]));



function homeWork() {
	let answer = prompt('Привет, Леонид! Какое задание запустить? (1-4)');

	if (answer == 1) {
		greetings();
		while (confirm('Запустить еще раз?')) {
			greetings();
		}
		if (confirm('Вернуться к выбору задания?')) {
			homeWork();
		}
	} else if (answer == 2) {
		stud();
		while (confirm('Запустить еще раз?')) {
			stud();
		}
		if (confirm('Вернуться к выбору задания?')) {
			homeWork();
		}
	} else if (answer == 3) {
		do {
			let stopFlag = false, quantity, price, discount;
			quantity = prompt('Введи кол-во товаров');
			while (quantity <= 0 || quantity.isInteger === false || quantity % 1 !== 0) {
				if (quantity == null) {
					stopFlag = true
					break;
				}
				quantity = prompt('Некорректный ввод. Попробуй еще раз')
			}
			if (!stopFlag) {
				price = prompt('Введи стоимость товаров');
				while (price <= 0 || isNaN(price) === true) {
					if (price == null) {
						stopFlag = true
						break;
					}
					price = prompt('Некорректный ввод. Попробуй еще раз')
				}
			}
			if (!stopFlag) {
				discount = prompt('Введи промокод');
			}
			if (!stopFlag)
				alert(checkCart(quantity, price, discount));
		}
		while (confirm('Запустить еще раз?'));
		if (confirm('Вернуться к выбору задания?')) {
			homeWork();
		}
	}
	else if (answer == 4) {
		do {
			let listString, stopFlag = false;
			do {
				listString = prompt('Заполним массив "list". Введи элементы массива через запятую:');
				if (listString == null) {
					stopFlag = true;
					break;
				}
				else if (!listString.length) {
					alert('Массив пустой');
				}
			}
			while (!listString.length)
			if (!stopFlag) {
				const list = Array.from(listString.split(","));
				// console.log(list);

				let blackListString = prompt('Заполним массив "blackList". Введи элементы массива через запятую:');
				if (blackListString != null) {
					const blackList = Array.from(blackListString.split(","));
					// console.log(blackList);

					alert('Результат в консоли');
					console.log(filter(list, blackList));
				}
			}
		}
		while (confirm('Запустить еще раз?'));
		if (confirm('Вернуться к выбору задания?')) {
			homeWork();
		}
	}
}

homeWork();