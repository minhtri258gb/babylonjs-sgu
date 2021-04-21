
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
			case 'localADV': return 'An Duong Vuong Gate';
			case 'localNT': return 'Nguyen Trai Gate';
			case 'localA': return 'School Area A';
			case 'localB': return 'School Area B';
			case 'localC': return 'School Area C';
			case 'localD': return 'School Area D';
			case 'localE': return 'School Area E';
			case 'localPL': return 'Parking Lot';
			case 'instruction': return 'Use mouse to control the panorama';
			case 'start': return 'START SIGHTSEEING';
			case 'credit': return 'Instructor: M.S. Pham Thi Vuong\n©2021 | Copyright belongs to Nguyen Minh Tri and Ha Thien Tuan';
			case 'CADV': return 'An Duong Vuong Gate';
			case 'D01': return 'School Area D';
			case 'C02': case 'C01': case 'HB': return 'School Area C';
			case 'B02': case 'B01': case 'CT': case 'KLF': return 'School Area B';
			case 'A02': case 'A01': case 'A03': case 'HTA': return 'School Area A';
			case 'E01': case 'E02': return 'School Area E';
			case 'STT': return 'Sports Field';
			case 'GX1': case 'GX2': case 'GX3':  return 'Parking Lot';			
			case 'CNT': return 'Nguyen Trai Gate';
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
			case 'localtitle': return 'CÁC KHU VỰC CỦA TRƯỜNG:';
			case 'localADV': return 'Cổng An Dương Vương';
			case 'localNT': return 'Cổng Nguyễn Trãi';
			case 'localA': return 'Khu vực A';
			case 'localB': return 'Khu vực B';
			case 'localC': return 'Khu vực C';
			case 'localD': return 'Khu vực D';
			case 'localE': return 'Khu vực E';
			case 'localPL': return 'Bãi gửi xe';
			case 'instruction': return 'Sử dụng chuột để điều khiển ảnh toàn cảnh';
			case 'start': return 'BẮT ĐẦU THAM QUAN';
			case 'credit': return 'Giảng viên hướng dẫn: ThS. Phạm Thi Vương\n©2021 | Bản quyền thuộc về Nguyễn Minh Trí và Hà Thiện Tuấn';
			case 'CADV': return 'Cổng An Dương Vương';
			case 'D01': return 'Khu vực D';
			case 'C02': case 'C01': case 'HB': return 'Khu vực C';
			case 'B02': case 'B01': case 'CT': case 'KLF': return 'Khu vực B';
			case 'A02': case 'A01': case 'A03': case 'HTA': return 'Khu vực A';
			case 'E01': case 'E02': return 'School Area E';
			case 'STT': return 'Sân thể thao';
			case 'GX1': case 'GX2': case 'GX3':  return 'Bãi gửi xe';			
			case 'CNT': return 'Cổng Nguyễn Trãi';
		}
		return '[vn] không có sẵn';
	}
}
 // engine.language.get('')