
import engine from './Engine.js'
import Location from './Location.js'

export default class DataSource
{
	// Static
	static getLocationInfo(name)
	{
		let loc = new Location(name);

		switch (name)
		{
		case 'SGU_A_01':
			loc.position = {x: 0.626, y: 0.584};
			loc.addLink('SGU_A_02', [-372,4,-333]);
			loc.addLink('SGU_B_01', [114,-9,486]);
			break;
		case 'SGU_A_02':
			loc.position = {x: 0.635, y: 0.629};
			loc.addLink('SGU_A_01', [-457,10,201]);
			loc.addLink('SGU_B_01', [-491,24,91]);
			break;
		case 'SGU_B_01':
			loc.position = {x: 0.593 , y: 0.533};
			loc.addLink('SGU_A_01', [498,-2,-31]);
			break;
		}

		loc.mapset();

		return loc;
	}

}
