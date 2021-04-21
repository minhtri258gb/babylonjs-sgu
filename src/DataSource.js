
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

		loc['CADV'] = {};
		loc['CADV'].link = [];
		loc['CADV'].link[0] = {name: 'C02', pos: [-17,31,498]};
		loc['CADV'].info = [];
		loc['CADV'].position = {x: 0.47276688453159044, y: 0.3340213278293774};
		loc['CADV'].rotation = BABYLON.Tools.ToRadians(92);
		loc['CADV'].sun = {x: 383, y: 296, z: -122};

		//PLACEHOLDER
		loc['CADV2'] = {};
		loc['CADV2'].link = [];
		loc['CADV2'].info = [];
		loc['CADV2'].position = {x: 0.3815564039422436, y: 0.37467014835749035};
		loc['CADV2'].rotation = BABYLON.Tools.ToRadians(0);

		loc['C02'] = {};
		loc['C02'].link = [];
		loc['C02'].link[0] = {name: 'HB', pos: [-492,37,74]};
		loc['C02'].link[1] = {name: 'D01', pos: [498,16,-20]};
		loc['C02'].link[2] = {name: 'C01', pos: [8,22,499]};
		loc['C02'].link[3] = {name: 'CADV', pos: [-3,25,-499]};
		loc['C02'].info = [];
		loc['C02'].position = {x:0.4917763157894737, y: 0.38365009746588696};
		loc['C02'].rotation = BABYLON.Tools.ToRadians(90);

		loc['C01'] = {};
		loc['C01'].link = [];
		loc['C01'].link[0] = {name: 'C02', pos: [0,31,-498]};
		loc['C01'].link[1] = {name: 'HB', pos: [-396,23,-303]};
		loc['C01'].link[2] = {name: 'D01', pos: [314,37,-386]};
		loc['C01'].link[3] = {name: 'B02', pos: [20,15,499]};
		loc['C01'].info = [];
		loc['C01'].position = {x: 0.5143153021442495, y: 0.4134990253411306};
		loc['C01'].rotation = BABYLON.Tools.ToRadians(75);

		loc['HB'] = {};
		loc['HB'].link = [];
		loc['HB'].link[0] = {name: 'C01', pos: [369,27,335]};
		loc['HB'].link[1] = {name: 'C02', pos: [498,23,2]};
		loc['HB'].info = [];
		loc['HB'].position = {x: 0.5447733918128655, y: 0.3605019493177388};
		loc['HB'].rotation = BABYLON.Tools.ToRadians(135);

		loc['D01'] = {};
		loc['D01'].link = [];
		loc['D01'].link[0] = {name: 'C01', pos: [-300,36,398]};
		loc['D01'].link[1] = {name: 'C02', pos: [-493,20,73]};
		loc['D01'].info = [];
		loc['D01'].position = {x: 0.4607090643274854, y: 0.3946150097465887};
		loc['D01'].rotation = BABYLON.Tools.ToRadians(180);

		loc['B01'] = {};
		loc['B01'].link = [];
		loc['B01'].link[0] = {name: 'A02', pos: [6,-3,500]};
		loc['B01'].link[1] = {name: 'B02', pos: [-3,18,-499]};
		loc['B01'].link[2] = {name: 'CT', pos: [440,7,-236]};
		loc['B01'].link[3] = {name: 'KLF', pos: [-440,15,-236]};
		loc['B01'].info = [];
		loc['B01'].position = {x: 0.5715386308606647, y: 0.5253748135104067};
		loc['B01'].rotation = BABYLON.Tools.ToRadians(265);
		loc['B01'].sun = {x: 424, y: 184, z: -188};
		
		loc['B02'] = {};
		loc['B02'].link = [];
		loc['B02'].link[0] = {name: 'C01', pos: [-8,-4,-499]};
		loc['B02'].link[1] = {name: 'B01', pos: [-4,12,499]};
		loc['B02'].link[2] = {name: 'CT', pos: [412,11,282]};
		loc['B02'].link[3] = {name: 'KLF', pos: [-432,-0,251]};
		loc['B02'].info = [];
		loc['B02'].info[0] = {name: 'C01', pos: [-499,9,9]};
		loc['B02'].position = {x: 0.5415663341359935, y: 0.4670335970645568};
		loc['B02'].rotation = BABYLON.Tools.ToRadians(178);
		loc['B02'].sun = {x: 422, y: 229, z: -138};
		
		loc['CT'] = {};
		loc['CT'].link = [];
		loc['CT'].link[0] = {name: 'B01', pos: [-298,-13,400]};
		loc['CT'].link[1] = {name: 'B02', pos: [-318,-1,-385]};
		loc['CT'].link[2] = {name: 'KLF', pos: [-499,-6,5]};
		loc['CT'].link[3] = {name: 'STT', pos: [499,-12,-10]};
		loc['CT'].info = [];
		loc['CT'].position = {x: 0.515193211787639, y: 0.515193211787639};
		loc['CT'].rotation = BABYLON.Tools.ToRadians(272);
		loc['CT'].sun = {x: 457, y: 117, z: -163};
		
		//PLACEHOLDER
		loc['KLF'] = {};
		loc['KLF'].link = [];
		loc['KLF'].info = [];
		loc['KLF'].position = {x: 0.5931659213392959, y: 0.4773535145052173};
		loc['KLF'].rotation = BABYLON.Tools.ToRadians(0);
		
		loc['A01'] = {};
		loc['A01'].link = [];
		loc['A01'].link[0] = {name: 'A02', pos: [-142,9,-479]};
		loc['A01'].link[1] = {name: 'A03', pos: [493,23,-76]};
		loc['A01'].link[2] = {name: 'HTA', pos: [-498,12,-40]};
		loc['A01'].link[3] = {name: 'GX1', pos: [426,32,-259]};
		loc['A01'].info = [];
		loc['A01'].position = {x: 0.6206857011810573, y: 0.60921912624699};
		loc['A01'].rotation = BABYLON.Tools.ToRadians(265);
		
		loc['A02'] = {};
		loc['A02'].link = [];
		loc['A02'].link[0] = {name: 'A01', pos: [221,6,448]};
		loc['A02'].link[1] = {name: 'B01', pos: [76,-12,-493]};
		loc['A02'].link[2] = {name: 'A03', pos: [466,9,179]};
		loc['A02'].link[3] = {name: 'GX1', pos: [493,7,-78]};
		loc['A02'].link[4] = {name: 'HTA', pos: [-495,9,-61]};
		loc['A02'].info = [];
		loc['A02'].position = {x: 0.6023391812865497, y: 0.572526086457975};
		loc['A02'].rotation = BABYLON.Tools.ToRadians(158);

		//PLACEHOLDER
		loc['A03'] = {};
		loc['A03'].link = [];
		loc['A03'].info = [];
		loc['A03'].position = {x: 0.5597121889691549, y: 0.621832358674464};
		loc['A03'].rotation = BABYLON.Tools.ToRadians(0);

		//PLACEHOLDER
		loc['A04'] = {};
		loc['A04'].link = [];
		loc['A04'].info = [];
		loc['A04'].position = {x: 0.6642586859305125, y: 0.5633528265107213};
		loc['A04'].rotation = BABYLON.Tools.ToRadians(0);

		//PLACEHOLDER
		loc['HTA'] = {};
		loc['HTA'].link = [];
		loc['HTA'].info = [];
		loc['HTA'].position = {x: 0.7201582387340901, y: 0.5427129916294003};
		loc['HTA'].rotation = BABYLON.Tools.ToRadians(0);

		//PLACEHOLDER
		loc['KNT'] = {};
		loc['KNT'].link = [];
		loc['KNT'].info = [];
		loc['KNT'].position = {x: 0.8193441119137713, y: 0.507166609333792};
		loc['KNT'].rotation = BABYLON.Tools.ToRadians(0);

		loc['GX1'] = {};
		loc['GX1'].link = [];
		loc['GX1'].link[0] = {name: 'A02', pos: [-481,-2,137]};
		loc['GX1'].link[1] = {name: 'E02', pos: [-220,24,448]};
		loc['GX1'].link[2] = {name: 'E01', pos: [180,38,465]};
		loc['GX1'].link[3] = {name: 'STT', pos: [-141,1,-479]};
		loc['GX1'].info = [];
		loc['GX1'].position = {x: 0.4580966918834789, y: 0.6186013274369393};
		loc['GX1'].rotation = BABYLON.Tools.ToRadians(270);
		loc['GX1'].sun = {x: 433, y: 118, z: -219};;
		
		loc['STT'] = {};
		loc['STT'].link = [];
		loc['STT'].link[0] = {name: 'GX1', pos: [72,28,493]};
		loc['STT'].link[1] = {name: 'GX2', pos: [40,2,-498]};
		loc['STT'].link[2] = {name: 'CT', pos: [-499,-13,-19]};
		loc['STT'].info = [];
		loc['STT'].position = {x: 0.45012039903680773, y: 0.5576195390436877};
		loc['STT'].rotation = BABYLON.Tools.ToRadians(270);

		//PLACEHOLDER
		loc['SBB'] = {};
		loc['SBB'].link = [];
		loc['SBB'].info = [];
		loc['SBB'].position = {x: 0.41626313208940013, y: 0.6027429333245189};
		loc['SBB'].rotation = BABYLON.Tools.ToRadians(0);

		//PLACEHOLDER
		loc['SBD'] = {};
		loc['SBD'].link = [];
		loc['SBD'].info = [];
		loc['SBD'].position = {x: 0.4019607843137255, y: 0.5329664029354432};
		loc['SBD'].rotation = BABYLON.Tools.ToRadians(0);

		loc['GX2'] = {};
		loc['GX2'].link = [];
		loc['GX2'].link[0] = {name: 'STT', pos: [-46,15,497]};
		loc['GX2'].link[1] = {name: 'GX3', pos: [-84,9,-492]};
		loc['GX2'].info = [];
		loc['GX2'].position = {x: 0.4137140236211444, y: 0.48767343194587776};
		loc['GX2'].rotation = BABYLON.Tools.ToRadians(272);

		loc['GX3'] = {};
		loc['GX3'].link = [];
		loc['GX3'].link[0] = {name: 'GX2', pos: [386,-32,314]};
		loc['GX3'].info = [];
		loc['GX3'].position = {x: 0.3994627090602323, y: 0.41830065359477125};
		loc['GX3'].rotation = BABYLON.Tools.ToRadians(0);
		
		loc['E01'] = {};
		loc['E01'].link = [];
		loc['E01'].link[0] = {name: 'GX1', pos: [-262,-34,-424]};
		loc['E01'].link[1] = {name: 'E02', pos: [-264,-3,-424]};
		loc['E01'].link[2] = {name: 'CNT', pos: [48,-52,494]};
		loc['E01'].info = [];
		loc['E01'].position = {x: 0.47936016511867907, y: 0.6906318082788672};
		loc['E01'].rotation = BABYLON.Tools.ToRadians(356);

		loc['E02'] = {};
		loc['E02'].link = [];
		loc['E02'].link[0] = {name: 'CNT', pos: [21,7,499]};
		loc['E02'].link[1] = {name: 'E01', pos: [498,34,12]};
		loc['E02'].link[2] = {name: 'GX1', pos: [21,-3,-499]};
		loc['E02'].info = [];
		loc['E02'].position = {x: 0.5249398004815962, y: 0.6550854259832588};
		loc['E02'].rotation = BABYLON.Tools.ToRadians(268);

		//PLACEHOLDER
		loc['E03'] = {};
		loc['E03'].link = [];
		loc['E03'].info = [];
		loc['E03'].position = {x: 0.48681343882582273, y: 0.6711386308909528};
		loc['E03'].rotation = BABYLON.Tools.ToRadians(0);
		
		loc['CNT'] = {};
		loc['CNT'].link = [];
		loc['CNT'].link[0] = {name: 'E01', pos: [-39,43,-496]};
		loc['CNT'].link[1] = {name: 'E02', pos: [-458,18,-198]};
		loc['CNT'].info = [];
		loc['CNT'].position = {x: 0.4968466918931315, y: 0.7342047930283224};
		loc['CNT'].rotation = BABYLON.Tools.ToRadians(0);
		loc['CNT'].sun = {x: 404, y: 243, z: -165};

		

		this.loc = loc;
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
