export interface MenuItem {
	name: string;
	price: string;
	unavailable?: boolean;
}

export interface MenuCategory {
	id: string;
	title: string;
	icon: string;
	items: MenuItem[];
}

export const menu: MenuCategory[] = [
	{
		id: 'frieten',
		title: 'Frieten',
		icon: '🍟',
		items: [
			{ name: 'Baby Friet', price: '2,50' },
			{ name: 'Kleine Friet', price: '3,00' },
			{ name: 'Medium Friet', price: '3,50' },
			{ name: 'Grote Friet', price: '4,50' },
			{ name: 'Baby Friet Speciaal', price: '3,70' },
			{ name: 'Kleine Friet Speciaal', price: '4,20' },
			{ name: 'Medium Friet Speciaal', price: '4,70' },
			{ name: 'Grote Friet Speciaal', price: '5,70' },
			{ name: 'Baby Friet Stoofvleessaus', price: '5,00' },
			{ name: 'Kleine Friet Stoofvleessaus', price: '5,50' },
			{ name: 'Medium Friet Stoofvleessaus', price: '6,00' },
			{ name: 'Grote Friet Stoofvleessaus', price: '7,00' },
			{ name: 'Baby Friet Stoofvlees', price: '11,50' },
			{ name: 'Kleine Friet Stoofvlees', price: '12,00' },
			{ name: 'Medium Friet Stoofvlees', price: '12,50' },
			{ name: 'Grote Friet Stoofvlees', price: '13,50' },
		],
	},
	{
		id: 'snacks',
		title: 'Snacks',
		icon: '🌭',
		items: [
			{ name: 'Frikandel', price: '2,50' },
			{ name: 'Frikandel Speciaal', price: '3,70' },
			{ name: 'Boulet', price: '2,50' },
			{ name: 'Boulet Speciaal', price: '3,70' },
			{ name: 'Cervela', price: '3,10' },
			{ name: 'Cervela Speciaal', price: '4,30' },
			{ name: 'Viandel', price: '2,90' },
			{ name: 'Viandel Speciaal', price: '4,10' },
			{ name: 'Chili Cheese Nuggets', price: '3,60' },
			{ name: 'Mozzarella Sticks', price: '4,00' },
			{ name: 'Gackie', price: '3,30' },
			{ name: 'Kipnuggets', price: '3,50' },
			{ name: 'Sitostick', price: '4,00' },
			{ name: 'Sate', price: '6,00', unavailable: true },
			{ name: 'Sate Kip', price: '6,50' },
			{ name: 'Loempia Kip', price: '4,60' },
			{ name: 'Bitterballen', price: '3,00' },
			{ name: 'Bitterballen Veggie', price: '4,50' },
			{ name: 'Kipcorn', price: '3,10' },
			{ name: 'Kipcorn Veggie', price: '3,60' },
			{ name: 'Vleeskroket', price: '2,60' },
			{ name: 'Kaaskroket', price: '2,90' },
			{ name: 'Kaassoufflé', price: '3,10' },
			{ name: 'Goulashkroket', price: '3,60' },
			{ name: 'Mexicano', price: '3,80' },
			{ name: 'Mexicano Speciaal', price: '5,00' },
			{ name: 'Propellor', price: '7,00', unavailable: true },
			{ name: 'Bami Schijf', price: '2,80' },
			{ name: 'Mini Loempia Veggie', price: '3,00' },
			{ name: 'Veggie Hapjes', price: '3,20' },
			{ name: 'Kids Hapjes', price: '3,50' },
			{ name: 'Lucifer', price: '3,60' },
			{ name: 'Loempidel', price: '3,20' },
			{ name: 'Berepoot', price: '3,60' },
			{ name: 'Twijfelaar', price: '4,20' },
			{ name: 'Chicken Fingers', price: '4,10' },
			{ name: 'Taco', price: '4,50' },
			{ name: 'Platte Hamburger', price: '2,50' },
			{ name: 'Crumpy Burger', price: '3,00' },
			{ name: 'Veggieschijf', price: '3,00' },
			{ name: 'Crispy Chicken Burger', price: '3,50' },
			{ name: 'Ragouzi', price: '3,20' },
			{ name: 'Zigeunerstick', price: '4,10' },
			{ name: 'Crizly', price: '4,80' },
		],
	},
	{
		id: 'bicky',
		title: 'Bicky Burgers',
		icon: '🍔',
		items: [
			{ name: 'Bicky Burger', price: '4,50' },
			{ name: 'Bicky Burger + Kaas', price: '5,00' },
			{ name: 'Crispy Bicky', price: '5,00' },
			{ name: 'Crispy Bicky + Kaas', price: '5,50' },
			{ name: 'Crispy Chicken', price: '5,50' },
			{ name: 'Crispy Chicken + Kaas', price: '6,00' },
			{ name: 'Bicky Veggie', price: '5,00' },
			{ name: 'Bicky Veggie + Kaas', price: '5,50' },
		],
	},
	{
		id: 'keuken',
		title: 'Keuken',
		icon: '🍲',
		items: [
			{ name: 'Bakje Stoofvlees', price: '9,00' },
			{ name: 'Bakje Stoofvleessaus Klein', price: '2,50' },
			{ name: 'Bakje Stoofvleessaus Groot', price: '4,00' },
		],
	},
	{
		id: 'sauzen',
		title: 'Potjes Sauzen',
		icon: '🥫',
		items: [
			{ name: 'Mayonaise (Romig)', price: '1,20' },
			{ name: 'Mayonaise (Fris & Romig)', price: '1,20' },
			{ name: 'Tartaar', price: '1,20' },
			{ name: 'Verse Tartaar', price: '2,00' },
			{ name: 'Zoete Mayonaise', price: '1,20' },
			{ name: 'Mammoet', price: '1,20' },
			{ name: 'Mammoet Hot', price: '1,20' },
			{ name: 'Curry Ketchup', price: '1,20' },
			{ name: 'Tomaten Ketchup', price: '1,20' },
			{ name: 'Amerikaanse Saus', price: '1,20' },
			{ name: 'Samoerai', price: '1,20' },
			{ name: 'Hannibal', price: '1,20' },
			{ name: 'Loempiasaus', price: '1,20' },
			{ name: 'Cocktail', price: '1,20' },
			{ name: 'Pickles', price: '1,20' },
			{ name: 'Andalouse', price: '1,20' },
			{ name: 'Riche Saus', price: '1,20' },
			{ name: 'Joppie Saus', price: '1,20' },
			{ name: 'Koude Currysaus', price: '1,20' },
			{ name: 'Tomataise', price: '1,20' },
			{ name: 'Speciaal Saus Curry', price: '1,20' },
			{ name: 'Speciaal Saus Tomaat', price: '1,20' },
		],
	},
	{
		id: 'drank',
		title: 'Drank',
		icon: '🥤',
		items: [
			{ name: 'Coca Cola Blik', price: '2,30' },
			{ name: 'Cola Zero Blik', price: '2,30' },
			{ name: 'Fanta Blik', price: '2,30' },
			{ name: 'Sprite Blik', price: '2,30' },
			{ name: 'Full Gaz Blik', price: '2,30' },
			{ name: 'Ice Tea Blik', price: '2,50' },
			{ name: 'Jupiler Blik 33cl.', price: '2,50' },
			{ name: 'Plat Water Fles', price: '2,30' },
			{ name: 'Bruis Water Fles', price: '2,30' },
		],
	},
];

export interface OpeningHour {
	day: string;
	hours: string[];
	closed?: boolean;
}

export const openingHours: OpeningHour[] = [
	{ day: 'Maandag', hours: ['16:30 - 21:00'] },
	{ day: 'Dinsdag', hours: [], closed: true },
	{ day: 'Woensdag', hours: ['11:30 - 13:30', '16:30 - 21:00'] },
	{ day: 'Donderdag', hours: ['16:30 - 21:00'] },
	{ day: 'Vrijdag', hours: ['16:30 - 21:00'] },
	{ day: 'Zaterdag', hours: ['16:30 - 21:00'] },
	{ day: 'Zondag', hours: ['11:30 - 13:30', '16:30 - 21:00'] },
];
