'use strict'
var name = 'Телепорт бытовой VZHIH-101', 
price = 10000,
countOfGoods = 5,
discount = price * 10 / 100,
priceAllGoodsWithDiscount = (price * countOfGoods) - (discount * countOfGoods);

var priceForAdditionalQuest = 6500,
budget = 52334224,
balanceAfterBuy =  budget % priceForAdditionalQuest,
canToBuy = Math.floor(52334224 / 6500);

console.log(`В наличии имеется: ${name}`);
console.log(`Стоимость товара ${price} Q`);

if (countOfGoods >= 2) 
	{
		console.log(`Цена покупки х${countOfGoods} ${name} составит: ${priceAllGoodsWithDiscount}`);
	}else
		{
			console.log(`Цена покупки х${countOfGoods} ${name} составит: ${price} Q`);
		}

console.log(`Мы можем закупить ${canToBuy} единиц товара, после закупки на счету останется ${balanceAfterBuy} Q`);