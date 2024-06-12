function createList() {
	const app = document.querySelector('.app');

	let cardArray = [
		{
			url: "img/img_1.jpg",
			title: `Человек на пляже в закате`
		},
		{
			url: "img/img_2.jpg",
			title: `Дерево`
		},
		{
			url: "img/img_3.jpg",
			title: `Попугай с синей головой`
		},
		{
			url: "img/img_4.jpg",
			title: `Пляж с прозрачной голубой водой`
		},
		{
			url: "img/img_5.jpg",
			title: `Банка на плеж в закате`
		},
		{
			url: "img/img_6.jpg",
			title: `Женщина с развевающимся платком на фоне солнца`
		},
		{
			url: "img/img_7.jpg",
			title: `Мужчина с раскинутыми руками в горах`
		},
		{
			url: "img/img_8.jpg",
			title: `Горы и река`
		}
	];

	const ul = document.createElement('ul');
	app.append(ul);

	for (let i = 0; i < cardArray.length; i++) {
		const liHTML = `
		<img src="${cardArray[i].url}" alt="${cardArray[i].title}">
		<span>${cardArray[i].title}</span>
	`
		const li = document.createElement('li');
		li.innerHTML = liHTML;
		li.classList.add('item');
		ul.append(li);
	}
}


createList();