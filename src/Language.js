
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
		return 'Unavailable';
	}

	vi(tag)
	{
		switch (tag)
		{
			case 'title': return 'Tham quan Đại học Sài Gòn';
			case 'confirm_direct_sguhome': return 'Bạn có muốn chuyển hướng đến trang chủ trường Đại học Sài Gòn?';
			// Setting
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
			// Direct
			case 'localtitle': return 'CÁC KHU VỰC CỦA TRƯỜNG:';
			case 'localADV': return "Cổng An Dương Vương";
			case 'localNT': return "Cổng Nguyễn Trãi";
			case 'localA': return "Khu vực A";
			case 'localB': return "Khu vực B";
			case 'localC': return "Khu vực C";
			case 'localD': return "Khu vực D";
			case 'localE': return "Khu vực E";
			case 'localPL': return "Bãi gửi xe";
			// Location
			case 'CADV': return "Cổng An Dương Vương";
			case 'CADV2': return "Cổng Ra Xe An Dương Vương";
			case 'C02': case 'C01': case 'HB': return "Sân C";
			case 'D01': return "Sân D";
			case 'B01': case 'B02': case 'B03': return "Sân B";
			case 'B04': case 'B05': return "Lối đi sau KLF";
			case 'A01': case 'A02': case 'A03': case 'A04': case 'A05': return "Sân A";
			case 'KNT': return "Khu Nghệ Thuật";
			case 'GX1': case 'GX3': return "Bãi gửi xe";
			case 'GX2': return "Sân bóng rổ";
			case 'GX4': return "Lối ra xe";
			case 'E01': case 'E02': return "Dãy E";
			case 'E03': return "Sân E";
			case 'CNT': return "Cổng Nguyễn Trãi";
			// Infomation
			case 'PBV': return "Phòng bảo vệ";
			case 'GXGV': return "Nhà xe giảng viên, cán bộ nhà trường";
			case 'ATM': return "Trụ ATM ngân hàng AGRIBANK";
			case 'THP': return "Điểm thu học phí trực tiếp và nhận học bổng";
			case 'KTHB': case 'KTHC': return "Khu tự học";
			case 'KLF': return "KLF";
			case 'CT': return "Căn tin trường";
			case 'KNU': return "Khu vực nước uống";
			case 'PYT': return "Phòng y tế";
			case 'CSNT': return "Cổng Sau";
			case 'HGXE': case 'HGXD': return "Hầm gửi xe";
			case 'SBB': return "Sân Bóng Bàn";
			case 'SCL': return "Sân Cầu Lông";
			case 'SBR': return "Sân Bóng Rổ";
			case 'SBD': return "Sân Bóng Đá";
			case 'GXI': return "Điểm Vào Bãi Gửi Xe";
			case 'GXO': return "Điểm Ra Xe";
		}
		return 'Không Có Sẵn';
	}
}
