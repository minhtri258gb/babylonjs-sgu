
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
			this.language = 'vi'

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
			// Setting
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
			// Menu
			case 'instruction': return 'Use mouse to control the panorama';
			case 'start': return 'START SIGHTSEEING';
			case 'credit': return 'Instructor: M.S. Pham Thi Vuong\n©2021 | Copyright belongs to Nguyen Minh Tri and Ha Thien Tuan';
			// Direct
			case 'localtitle': return 'List of areas in school:';
			case 'localADV': return 'An Duong Vuong Gate';
			case 'localNT': return 'Nguyen Trai Gate';
			case 'localA': return 'School Area A';
			case 'localB': return 'School Area B';
			case 'localC': return 'School Area C';
			case 'localD': return 'School Area D';
			case 'localE': return 'School Area E';
			case 'localPL': return 'Parking Lot';
			// Location
			case 'CADV': return "An Duong Vuong Gate";
			case 'CADV2': return "Parking Lot Exit Gate";
			case 'C02': case 'C01': case 'HB': return "School Field C";
			case 'D01': return "School Field D";
			case 'B01': case 'B02': case 'B03': return "School Field B";
			case 'B04': case 'B05': return "KLF Back Area";
			case 'A01': case 'A02': case 'A03': case 'A04': case 'A05': return "School Field A";
			case 'KNT': return "Arts Faculty Area";
			case 'GX1': case 'GX3': return "Parking Lot Exit";
			case 'GX2': return "Basketball Field";
			case 'GX4': return "Parking Lot Exit";
			case 'E01': case 'E02': return "Block E";
			case 'E03': return "School Field E";
			case 'CNT': return "Nguyen Trai Gate";
			// Infomation
			case 'PBV': return "Security room of Saigon University";
			case 'GXGV': return "Lecturers, officials and employees parking lots";
			case 'ATM': return "ATM of AGRIBANK, where students can withdraw cash directly without going to the bank";
			case 'THP': return "Tuition fees collection and scholarship receipt information place";
			case 'KTHB': case 'KTHC': return "Self-study area, an area for students to study on by themselves, eat or take a lunch break";
			case 'KLF': return "KLF, where students can use internet service for a certain fee";
			case 'CT': return "School Canteen";
			case 'KNU': return "Students drinking water area, where students can get free drinking water";
			case 'PYT': return "Medical Room";
			case 'CSNT': return "Back Gate";
			case 'HGXE': case 'HGXD': return "Parking Garage";
			case 'SBB': return "Table tennis field";
			case 'SCL': return "Badminton field";
			case 'SBR': return "Basketball field";
			case 'SBD': return "Soccer field";
			case 'GXI': return "Parking Lot Entrance";
			case 'GXO': return "Parking Lot Exit";
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
			case 'tinyplanet': return 'Trái Đất Thu Nhỏ';
			case 'tubeview': return 'Dạng Ống';
			case 'themes': return 'Chủ Đề';
			case 'darkmode': return 'Nền Tối';
			case 'lightmode': return 'Nền Sáng';
      		// Menu
			case 'instruction': return 'Sử dụng chuột để điều khiển ảnh toàn cảnh';
			case 'start': return 'BẮT ĐẦU THAM QUAN';
			case 'credit': return 'Giảng viên hướng dẫn: ThS. Phạm Thi Vương\n©2021 | Bản quyền thuộc về Nguyễn Minh Trí và Hà Thiện Tuấn';
			// Direct
			case 'localtitle': return 'Các khu vực của trường:';
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
			case 'PBV': return "Phòng bảo vệ của trường Đại học Sài Gòn";
			case 'GXGV': return "Nhà xe giảng viên, cán bộ nhà trường";
			case 'ATM': return "Trụ ATM ngân hàng AGRIBANK, nơi sinh viên có thể rút tiền mặt trực tiếp mà không cần ra ngân hàng";
			case 'THP': return "Điểm thu học phí trực tiếp và gửi thông tin nhận học bổng";
			case 'KTHB': case 'KTHC': return "Khu tự học, một khu vực dành cho sinh viên có thể tự học, ăn uống hoặc nghỉ trưa";
			case 'KLF': return "KLF, nơi sinh viên có thể sử dụng dịch vụ internet với phí nhất định";
			case 'CT': return "Căn tin trường";
			case 'KNU': return "Khu vực nước uống sinh viên, nơi sinh viên có thể lấy nước uống miễn phí";
			case 'PYT': return "Phòng y tế";
			case 'CSNT': return "Cổng sau";
			case 'HGXE': case 'HGXD': return "Hầm gửi xe";
			case 'SBB': return "Sân bóng bàn";
			case 'SCL': return "Sân cầu lông";
			case 'SBR': return "Sân bóng rổ";
			case 'SBD': return "Sân bóng đá";
			case 'GXI': return "Điểm vào bãi gửi xe";
			case 'GXO': return "Điểm ra xe";
		}
		return 'Không Có Sẵn';
	}
}
