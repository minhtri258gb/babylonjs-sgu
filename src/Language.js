
// import engine from './Engine.js'

export default class Language
{
	// Forwards
	constructor(_name)
	{
		// Default
		this.language = 'en';

		// Change title
		document.title = this.get('title');
	}

	changeLanguage(lang)
	{
		this.language = lang;
	}

	get(tag)
	{
		switch (this.language)
		{
			case 'en': return this.en(tag);
			case 'vi': return this.vi(tag);
		}
	}

	en(tag)
	{
		switch (tag)
		{
			case 'title': return 'Saigon University Sightseeing';
		}
		return '[en] unavailable';
	}

	vi(tag)
	{
		switch (tag)
		{
			case 'title': return 'Tham quan Đại học Sài Gòn';
		}
		return '[vn] không có sẵn';
	}
}
