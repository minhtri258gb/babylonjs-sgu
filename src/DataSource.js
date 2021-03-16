
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
			loc.addLink('SGU_A_02', [-372,4,-333]);
			loc.addLink('SGU_B_01', [114,-9,486]);
			break;
		case 'SGU_A_02':
			loc.addLink('SGU_A_01', [-457,10,201]);
			loc.addLink('SGU_B_01', [-491,24,91]);
			break;
		case 'SGU_B_01':
			loc.addLink('SGU_A_01', [498,-2,-31]);
			break;
		}

		return loc;
	}

}
