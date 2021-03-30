
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

		loc['SGU_A_01'] = {};
		loc['SGU_A_01'].link = [];
		loc['SGU_A_01'].link[0] = {name: 'SGU_A_02', pos: [221,6,448]};
		loc['SGU_A_01'].link[1] = {name: 'SGU_B_01', pos: [76,-12,-493]};
		loc['SGU_A_01'].position = {x: 0.6082251082251082, y: 0.5681757037689241};
		loc['SGU_A_01'].rotation = BABYLON.Tools.ToRadians(158);
		loc['SGU_A_01'].sun = {x: 453, y: 181, z: -105};

		loc['SGU_A_02'] = {};
		loc['SGU_A_02'].link = [];
		loc['SGU_A_02'].link[0] = {name: 'SGU_A_01', pos: [-142,9,-479]};
		loc['SGU_A_02'].position = {x: 0.6167852862768117, y: 0.613422359185071};
		loc['SGU_A_02'].rotation = BABYLON.Tools.ToRadians(265);

		loc['SGU_B_01'] = {};
		loc['SGU_B_01'].link = [];
		loc['SGU_B_01'].link[0] = {name: 'SGU_A_01', pos: [6,-3,500]};
		loc['SGU_B_01'].position = {x: 0.5715386308606647, y: 0.5253748135104067};
		loc['SGU_B_01'].rotation = BABYLON.Tools.ToRadians(265);

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
