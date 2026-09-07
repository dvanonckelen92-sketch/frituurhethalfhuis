// TODO: update SITE_URL once the site has its real domain (also update astro.config.mjs's
// `site` option to match), then rebuild — canonical URLs, the sitemap, and the Open Graph
// tags in Layout.astro all depend on this being correct.
export const SITE_URL = 'https://www.frituurhethalfhuis.be';

export const SITE_NAME = 'Frituur Het Halfhuis';
export const ORDER_URL = 'https://frituurhethalfhuis.pickandgo.be/';
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61583588097751';
export const EMAIL = 'frituurhethalfhuis@gmail.com';

export const ADDRESS = {
	street: 'Borlostraat 15',
	postalCode: '3891',
	locality: 'Mielen-Boven-Aalst',
	municipality: 'Gingelom',
	region: 'Limburg',
	country: 'BE',
};

export const FULL_ADDRESS = `${ADDRESS.street}, ${ADDRESS.postalCode} ${ADDRESS.locality}`;
