
// import engine from './Engine.js'

export default class Language
{
	// Forwards
	constructor(_name)
	{
		// Default
		var url = new URL(window.location.href);
		this.language = url.searchParams.get("lang");
		if (this.language === null)
			this.language = 'en'

		// Change title
		document.title = this.get('title');
	}

	changeLanguage(lang)
	{
		var url = new URL(window.location.href);
		var paramLang = url.searchParams.get("lang");

		if (paramLang === null)
			window.location.href = window.location.href+"?lang="+lang
		else
			window.location.href = url.origin+"?lang="+lang
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
			case 'confirm_direct_sguhome': return 'Do you want to redirect to the Saigon University homepage?';
			case 'effect': return 'Effects';
			case 'lenflare': return 'Lens Flare';
			case 'particle': return 'Particle';
			case 'bloom': return 'Bloom';
			case 'mosionblur': return 'Mosion Blur';
			case 'antialias': return 'Anti Alias';
			case 'cameratype': return 'Camera type';
			case 'normal': return 'Normal';
			case 'ortho': return 'Orthographic';
			case 'fisheye': return 'Fisheye';
			case 'stereographic': return 'Stereographic';
			case 'tinyplanet': return 'Tiny Planet';
			case 'tubeview': return 'Tube View';
		}
		return '[en] unavailable';
	}

	vi(tag)
	{
		switch (tag)
		{
			case 'title': return 'Tham quan Đại học Sài Gòn';
			case 'confirm_direct_sguhome': return 'Bạn có muốn chuyển hướng đến trang chủ trường Đại học Sài Gòn?';
			case 'effect': return 'Hiệu Ứng';
			case 'lenflare': return 'Lóa Sáng Mặt Trời';
			case 'particle': return 'Đóm Sáng';
			case 'bloom': return 'Sáng Viền';
			case 'mosionblur': return 'Chuyển Động Mờ';
			case 'antialias': return 'Khử Răng Cưa';
			case 'cameratype': return 'Góc Nhìn';
			case 'normal': return 'Bình Thường';
			case 'ortho': return 'Kiến Trúc';
			case 'fisheye': return 'Mắt Cá';
			case 'stereographic': return 'Lập Thể';
			case 'tinyplanet': return 'Hành Tinh Tý Hon';
			case 'tubeview': return 'Dạng Ống';
		}
		return '[vn] không có sẵn';
	}
}
 // engine.language.get('')