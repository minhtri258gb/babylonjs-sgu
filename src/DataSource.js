
import engine from './Engine.js'

export default class DataSource
{
	constructor()
	{
		this.initLocation();
		this.initMusic();
	}

	initLocation()
	{
		let loc = {};

		loc['A01'] = {};
		loc['A01'].link = [];
		loc['A01'].link[0] = {name: 'A02', pos: [221,6,448]};
		loc['A01'].link[1] = {name: 'B01', pos: [76,-12,-493]};
		loc['A01'].position = {x: 0.6082251082251082, y: 0.5681757037689241};
		loc['A01'].rotation = BABYLON.Tools.ToRadians(158);
		loc['A01'].sun = {x: 453, y: 181, z: -105};

		loc['A02'] = {};
		loc['A02'].link = [];
		loc['A02'].link[0] = {name: 'A01', pos: [-142,9,-479]};
		loc['A02'].position = {x: 0.6167852862768117, y: 0.613422359185071};
		loc['A02'].rotation = BABYLON.Tools.ToRadians(265);

		loc['B01'] = {};
		loc['B01'].link = [];
		loc['B01'].link[0] = {name: 'A01', pos: [6,-3,500]};
		loc['B01'].link[1] = {name: 'C02', pos: [-3,18,-499]};
		
		loc['B01'].position = {x: 0.5715386308606647, y: 0.5253748135104067};
		loc['B01'].rotation = BABYLON.Tools.ToRadians(265);

		loc['C01'] = {};
		loc['C01'].link = [];
		loc['C01'].link[0] = {name: 'HB', pos: [-492,37,74]};
		loc['C01'].link[1] = {name: 'D01', pos: [498,16,-20]};
		loc['C01'].link[2] = {name: 'C02', pos: [8,22,499]};
		loc['C01'].position = {x:0.4917763157894737, y: 0.38365009746588696};
		loc['C01'].rotation = BABYLON.Tools.ToRadians(90);

		loc['C02'] = {};
		loc['C02'].link = [];
		loc['C02'].link[0] = {name: 'C01', pos: [0,31,-498]};
		loc['C02'].link[1] = {name: 'HB', pos: [-396,23,-303]};
		loc['C02'].link[2] = {name: 'D01', pos: [314,37,-386]};
		loc['C02'].link[3] = {name: 'B01', pos: [22,9,499]};	
		loc['C02'].position = {x: 0.5143153021442495, y: 0.4134990253411306};;
		loc['C02'].rotation = BABYLON.Tools.ToRadians(75);

		loc['D01'] = {};
		loc['D01'].link = [];
		loc['D01'].link[0] = {name: 'C01', pos: [-493,20,73]};
		loc['D01'].link[1] = {name: 'C02', pos: [-300,36,398]};
		loc['D01'].position = {x: 0.4607090643274854, y: 0.3946150097465887};
		loc['D01'].rotation = BABYLON.Tools.ToRadians(180);

		loc['HB'] = {};
		loc['HB'].link = [];
		loc['HB'].link[0] = {name: 'C01', pos: [498,23,2]};
		loc['HB'].link[1] = {name: 'C02', pos: [369,27,335]};
		loc['HB'].position = {x: 0.5447733918128655, y: 0.3605019493177388};
		loc['HB'].rotation = BABYLON.Tools.ToRadians(135);

		DataSource.loc = loc;
	}

	initMusic()
	{
		this.music = [
			"Alan Walker - Fade",
			"Disfigure - Blank",
			"Janji - Heroes Tonight"
		];
	}

	// get random name in list music
	getMusic()
	{
		return this.music[Math.floor(Math.random() * this.music.length)];
	}

}
