
class Location {
	constructor(link, info, position, rotation, sun) {
		this.position = position;
		this.rotation = rotation;
		this.link = link;
		this.info = info;
		this.sun = sun;
	}
}

module.exports = Location;
