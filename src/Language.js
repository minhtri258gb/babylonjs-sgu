
// import engine from './Engine.js'

export default class Language
{
	// Forwards
	constructor(_name)
	{
		// Default
		let url = new URL(window.location.href);
		this.language = url.searchParams.get("lang");
		if (this.language === null)
			this.language = 'en'

		// Change title
		document.title = this.get('title');
	}

	changeLanguage(lang)
	{
		let url = new URL(window.location.href);

		let param = url.searchParams;
		param.set("lang", lang);
		url.search = param.toString();
		window.location.href = url.toString();
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
			case 'motionblur': return 'Motion Blur';
			case 'antialias': return 'Anti-alias';
			case 'cameratype': return 'Camera type';
			case 'normal': return 'Normal';
			case 'ortho': return 'Orthographic';
			case 'fisheye': return 'Fisheye';
			case 'stereographic': return 'Stereographic';
			case 'tinyplanet': return 'Tiny Planet';
			case 'tubeview': return 'Tube View';
			case 'themes': return 'Themes';
			case 'darkmode': return 'Dark Mode';
			case 'lightmode': return 'Light Mode';
			case 'localtitle': return 'List of areas in school:';
			case 'localADV': return "An Duong Vuong Gate"
			case 'localNT': return "Nguyen Trai Gate"
			case 'localA': return "School Area A"
			case 'localB': return "School Area B"
			case 'localC': return "School Area C"
			case 'localD': return "School Area D"
			case 'localE': return "School Area E"
			case 'localPL': return "Parking Lot"
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
			case 'motionblur': return 'Chuyển Động Mờ';
			case 'antialias': return 'Khử Răng Cưa';
			case 'cameratype': return 'Góc Nhìn';
			case 'normal': return 'Bình Thường';
			case 'ortho': return 'Kiến Trúc';
			case 'fisheye': return 'Mắt Cá';
			case 'stereographic': return 'Lập Thể';
			case 'tinyplanet': return 'Hành Tinh Tý Hon';
			case 'tubeview': return 'Dạng Ống';
			case 'themes': return 'Chủ Đề';
			case 'darkmode': return 'Nền Tối';
			case 'lightmode': return 'Nền Sáng';
			case 'localtitle': return 'CÁC KHU VỰC CỦA TRƯỜNG:'
			case 'localADV': return "Cổng An Dương Vương"
			case 'localNT': return "Cổng Nguyễn Trãi"
			case 'localA': return "Khu vực A"
			case 'localB': return "Khu vực B"
			case 'localC': return "Khu vực C"
			case 'localD': return "Khu vực D"
			case 'localE': return "Khu vực E"
			case 'localPL': return "Bãi gửi xe"	
		}
		return '[vn] không có sẵn';
	}
}
 // engine.language.get('')