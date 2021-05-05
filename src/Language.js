
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

		// lorem ipsum
		this.lorem = "\n\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam justo sem, mollis a iaculis sit amet, gravida luctus mi. Cras in arcu iaculis, vestibulum orci quis, vestibulum leo. In vitae ornare velit. Sed a lacus malesuada, aliquet lectus vitae, tincidunt leo. Nunc facilisis neque eleifend, volutpat ligula et, volutpat eros. Suspendisse fermentum eget augue a vulputate. Nam libero diam, placerat ac metus non, convallis vestibulum enim. Suspendisse potenti. Sed congue quam eu nunc iaculis condimentum.\n\tVivamus tempus viverra urna. Praesent vitae nulla sed elit tincidunt tincidunt. Nam vel nisi eu nisl facilisis mollis. Mauris quis enim quis turpis elementum condimentum. Nunc sit amet nisi dolor. Nam non magna diam. Phasellus convallis tellus elementum mauris molestie ultricies. Nulla sodales magna sit amet euismod blandit. Nunc nec commodo dolor. Curabitur quis luctus turpis. Etiam vulputate diam nec nisi rutrum, in aliquam ipsum viverra. Sed sed diam euismod, porttitor ante ac, accumsan mi. Nulla facilisi. Nam at lobortis purus. Nullam ullamcorper egestas lectus sed viverra.";
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
			case 'CADV2': return "Parking lot exit gate";
			case 'C02': case 'C01': case 'HB': return "School field C";
			case 'D01': return "School field D";
			case 'B01': case 'B02': case 'B03': return "School field B";
			case 'B04': case 'B05': return "KLF back area";
			case 'A01': case 'A02': case 'A03': case 'A04': case 'A05': case 'A06': return "School field A";
			case 'KNT': return "Arts Faculty area";
			case 'GX1': case 'GX3': return "Parking lot";
			case 'GX2': return "Basketball field";
			case 'GX4': return "Parking lot exit";
			case 'E01': case 'E02': return "Block E";
			case 'E03': return "School field E";
			case 'CNT': return "Nguyen Trai Gate";
			// Infomation
			case 'PBV': return "Security room of Saigon University."+this.lorem;
			case 'GXGV': return "Lecturers, officials and employees parking lots."+this.lorem;
			case 'ATM': return "ATM of AGRIBANK, where students can withdraw cash directly without going to the bank."+this.lorem;
			case 'THP': return "Tuition fees collection and scholarship receipt information place."+this.lorem;
			case 'KTHB': case 'KTHC': return "Self-study area, an area for students to study on by themselves, eat or take a lunch break."+this.lorem;
			case 'KLF': return "KLF, where students can use internet service for a certain fee, find documents with a giant bookcase."+this.lorem;
			case 'TV': return "The library is a place where students can borrow and return books, find and read documents and textbooks of many different disciplines"+this.lorem;
			case 'CT': return "School Canteen."+this.lorem;
			case 'KNU': return "Students drinking water area, where students can get free drinking water."+this.lorem;
			case 'PYT': return "Medical Room."+this.lorem;
			case 'CSNT': return "Back Gate. Usually the gate used for starting field trips or school sporting events."+this.lorem;
			case 'HGXE': case 'HGXD': return "Parking Garage."+this.lorem;
			case 'SBB': return "Table tennis field."+this.lorem;
			case 'SCL': return "Badminton field."+this.lorem;
			case 'SBR': return "Basketball field."+this.lorem;
			case 'SBD': return "Soccer field."+this.lorem;
			case 'GXI': return "Parking Lot Entrance."+this.lorem;
			case 'GXO': return "Parking Lot Exit."+this.lorem;
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
			case 'CADV2': return "Cổng ra xe An Dương Vương";
			case 'C02': case 'C01': case 'HB': return "Sân C";
			case 'D01': return "Sân D";
			case 'B01': case 'B02': case 'B03': return "Sân B";
			case 'B04': case 'B05': return "Lối đi sau KLF";
			case 'A01': case 'A02': case 'A03': case 'A04': case 'A05': case 'A06': return "Sân A";
			case 'KNT': return "Khu Nghệ Thuật";
			case 'GX1': case 'GX3': return "Bãi gửi xe";
			case 'GX2': return "Sân bóng rổ";
			case 'GX4': return "Lối ra xe";
			case 'E01': case 'E02': return "Dãy E";
			case 'E03': return "Sân E";
			case 'CNT': return "Cổng Nguyễn Trãi";
			// Infomation
			case 'PBV': return "Phòng bảo vệ của trường Đại học Sài Gòn."+this.lorem;
			case 'GXGV': return "Nhà xe giảng viên, cán bộ nhà trường."+this.lorem;
			case 'ATM': return "Trụ ATM ngân hàng AGRIBANK, nơi sinh viên có thể rút tiền mặt trực tiếp mà không cần ra ngân hàng."+this.lorem;
			case 'THP': return "Điểm thu học phí trực tiếp và gửi thông tin nhận học bổng."+this.lorem;
			case 'KTHB': case 'KTHC': return "Khu tự học, một khu vực dành cho sinh viên có thể tự học, ăn uống hoặc nghỉ trưa."+this.lorem;
			case 'KLF': return "KLF, nơi sinh viên có thể sử dụng dịch vụ internet với phí nhất định, tìm tài liệu với một tủ sách khổng lồ."+this.lorem;
			case 'TV': return "Thư viện là nơi sinh viên có thể mượn trả sách, tìm đọc tài liệu, giáo trình của nhiều ngành khác nhau."+this.lorem;
			case 'CT': return "Căn tin trường."+this.lorem;
			case 'KNU': return "Khu vực nước uống sinh viên, nơi sinh viên có thể lấy nước uống miễn phí."+this.lorem;
			case 'PYT': return "Phòng y tế."+this.lorem;
			case 'CSNT': return "Cổng sau. Thường là cổng dùng để xuất phát của các chuyến xe đi thực tế hoặc các sự kiện hội thao của trường."+this.lorem;
			case 'HGXE': case 'HGXD': return "Hầm gửi xe."+this.lorem;
			case 'SBB': return "Sân bóng bàn."+this.lorem;
			case 'SCL': return "Sân cầu lông."+this.lorem;
			case 'SBR': return "Sân bóng rổ."+this.lorem;
			case 'SBD': return "Sân bóng đá."+this.lorem;
			case 'GXI': return "Điểm vào bãi gửi xe."+this.lorem;
			case 'GXO': return "Điểm ra xe."+this.lorem;
		}
		return 'Không Có Sẵn';
	}
}
