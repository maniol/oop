function Phone(brand, price, color, offer, model) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.offer = offer;
	this.model = model;
};

Phone.prototype.printInfo = function() {
	if(this.offer) {
		console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is €' 
		+ this.price + '. It is currently on offer!');
	} else {
		console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is €' 
		+ this.price + '.');
	}
};

Phone.prototype.comparePrice = function(phoneX) {
	if (this.price > phoneX.price) {
		console.log(phoneX.brand + '' + phoneX.model + ' is cheaper. The difference is €' + (this.price - phoneX.price) + '.');
	} else {
		console.log(this.brand + '' + this.model + ' is cheaper. The difference is €' + (phoneX.price - this.price) + '.');
	}
}

var iPhone6S = new Phone('Apple', 2250, 'silver', true, '6S');
var samsungGalaxyS6 = new Phone('Samsung', 1100, 'silver', false, 'Galaxy S6');
var onePlusOne = new Phone('OnePlus', 70, 'black', true, 'One');

onePlusOne.printInfo();
samsungGalaxyS6.comparePrice(iPhone6S);

// zadanie 11.5

function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		var self = this;
		this.element = document.createElement('button');
		this.element.innerText = this.text;
		this.element.addEventListener('click', function() { alert(self.text);});
		document.body.appendChild(this.element);
	}
}

var btn1 = new Button('Hello!');
btn1.create();