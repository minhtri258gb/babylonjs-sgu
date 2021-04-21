
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
		loc['CADV'].link[1] = {name: 'CADV2', pos: [494,30,62]};
		loc['CADV'].info = [];
		loc['CADV'].position = {x: 0.47276688453159044, y: 0.3340213278293774};
		loc['CADV'].rotation = BABYLON.Tools.ToRadians(92);
		loc['CADV'].sun = {x: 383, y: 296, z: -122};

		loc['CADV2'] = {};
		loc['CADV2'].link = [];
		loc['CADV2'].link[0] = {name: 'CADV', pos: [-497,46,-27]};
		loc['CADV2'].link[1] = {name: 'GX4', pos: [28,6,499]};
		loc['CADV2'].info = [];
		loc['CADV2'].position = {x: 0.3747384649267702, y: 0.36703006276841754};
		loc['CADV2'].rotation = BABYLON.Tools.ToRadians(92);

		loc['C02'] = {};
		loc['C02'].link = [];
		loc['C02'].link[0] = {name: 'HB', pos: [-492,37,74]};
		loc['C02'].link[1] = {name: 'D01', pos: [498,16,-20]};
		loc['C02'].link[2] = {name: 'C01', pos: [8,22,499]};
		loc['C02'].link[3] = {name: 'CADV', pos: [-3,25,-499]};
		loc['C02'].info = [];
		loc['C02'].info[0] = {name: 'PBV', pos: [203,37,-455]};
		loc['C02'].position = {x:0.4917763157894737, y: 0.38365009746588696};
		loc['C02'].rotation = BABYLON.Tools.ToRadians(90);

		loc['C01'] = {};
		loc['C01'].link = [];
		loc['C01'].link[0] = {name: 'C02', pos: [0,31,-498]};
		loc['C01'].link[1] = {name: 'HB', pos: [-396,23,-303]};
		loc['C01'].link[2] = {name: 'D01', pos: [314,37,-386]};
		loc['C01'].link[3] = {name: 'B02', pos: [20,15,499]};
		loc['C01'].info = [];
		loc['C01'].info[0] = {name: 'GXGV', pos: [-496,13,55]};
		loc['C01'].position = {x: 0.5143153021442495, y: 0.4134990253411306};
		loc['C01'].rotation = BABYLON.Tools.ToRadians(75);

		loc['HB'] = {};
		loc['HB'].link = [];
		loc['HB'].link[0] = {name: 'C01', pos: [369,27,335]};
		loc['HB'].link[1] = {name: 'C02', pos: [498,23,2]};
		loc['HB'].info = [];
		loc['HB'].info[0] = {name: 'ATM', pos: [243,19,-436]};
		loc['HB'].info[1] = {name: 'GXGV', pos: [-164,17,471]};
		loc['HB'].info[2] = {name: 'THP', pos: [-497,32,38]};
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
		loc['B01'].link[2] = {name: 'B03', pos: [440,7,-236]};
		loc['B01'].info = [];
		loc['B01'].info[0] = {name: 'KTHB', pos: [-499,9,-4]};
		loc['B01'].info[1] = {name: 'KTHC', pos: [-358,19,-347]};
		loc['B01'].info[2] = {name: 'KLF', pos: [-440,15,-236]};
		loc['B01'].position = {x: 0.5715386308606647, y: 0.5253748135104067};
		loc['B01'].rotation = BABYLON.Tools.ToRadians(265);
		loc['B01'].sun = {x: 424, y: 184, z: -188};
		
		loc['B02'] = {};
		loc['B02'].link = [];
		loc['B02'].link[0] = {name: 'C01', pos: [-8,-4,-499]};
		loc['B02'].link[1] = {name: 'B01', pos: [-4,12,499]};
		loc['B02'].link[2] = {name: 'B03', pos: [412,11,282]};
		loc['B02'].link[3] = {name: 'B04', pos: [-496,9,55]};
		loc['B02'].info = [];
		loc['B02'].info[0] = {name: 'KTHB', pos: [-358,17,347]};
		loc['B02'].info[1] = {name: 'KTHC', pos: [-499,9,9]};
		loc['B02'].info[2] = {name: 'KLF', pos: [-432,-0,251]};
		loc['B02'].position = {x: 0.5415663341359935, y: 0.4670335970645568};
		loc['B02'].rotation = BABYLON.Tools.ToRadians(178);
		loc['B02'].sun = {x: 422, y: 229, z: -138};
		
		loc['B03'] = {};
		loc['B03'].link = [];
		loc['B03'].link[0] = {name: 'B01', pos: [-298,-13,400]};
		loc['B03'].link[1] = {name: 'B02', pos: [-318,-1,-385]};
		loc['B03'].link[2] = {name: 'KLF', pos: [-499,-6,5]};
		loc['B03'].link[3] = {name: 'GX2', pos: [499,-12,-10]};
		loc['B03'].info = [];
		loc['B03'].info[0] = {name: 'CT', pos: [444,-3,229]};
		loc['B03'].position = {x: 0.515193211787639, y: 0.515193211787639};
		loc['B03'].rotation = BABYLON.Tools.ToRadians(272);
		loc['B03'].sun = {x: 457, y: 117, z: -163};
		
		loc['B04'] = {};
		loc['B04'].link = [];
		loc['B04'].link[0] = {name: 'B02', pos: [498,20,-32]};
		loc['B04'].info = [];
		loc['B04'].info[0] = {name: 'KTHC', pos: [417,18,-274]};
		loc['B04'].info[1] = {name: 'KNU', pos: [-236,10,440]};
		loc['B04'].position = {x: 0.6410574310987626, y: 0.41553078501345647};
		loc['B04'].rotation = BABYLON.Tools.ToRadians(120);
		
		loc['B05'] = {};
		loc['B05'].link = [];
		loc['B05'].link[0] = {name: 'B01', pos: [285,21,409]};
		loc['B05'].link[1] = {name: 'B04', pos: [0,-10,-500]};
		loc['B05'].info = [];
		loc['B05'].info[0] = {name: 'KTHB', pos: [228,-3,445]};
		loc['B05'].position = {x: 0.6668854071260298, y: 0.4671916010498688};
		loc['B05'].rotation = BABYLON.Tools.ToRadians(175);
		
		loc['A01'] = {};
		loc['A01'].link = [];
		loc['A01'].link[0] = {name: 'A02', pos: [-142,9,-479]};
		loc['A01'].link[1] = {name: 'A03', pos: [493,23,-76]};
		loc['A01'].link[2] = {name: 'A05', pos: [-498,12,-40]};
		loc['A01'].link[3] = {name: 'A04', pos: [426,32,-259]};
		loc['A01'].info = [];
		loc['A01'].info[0] = {name: 'PYT', pos: [391,15,310]};
		loc['A01'].info[1] = {name: 'CSNT', pos: [-29,21,498]};
		loc['A01'].position = {x: 0.6206857011810573, y: 0.60921912624699};
		loc['A01'].rotation = BABYLON.Tools.ToRadians(265);
		
		loc['A02'] = {};
		loc['A02'].link = [];
		loc['A02'].link[0] = {name: 'A01', pos: [221,6,448]};
		loc['A02'].link[1] = {name: 'B01', pos: [76,-12,-493]};
		loc['A02'].link[2] = {name: 'A03', pos: [466,9,179]};
		loc['A02'].link[3] = {name: 'A04', pos: [493,7,-78]};
		loc['A02'].link[4] = {name: 'A05', pos: [-461,8,190]};
		loc['A02'].info = [];
		loc['A02'].position = {x: 0.6023391812865497, y: 0.572526086457975};
		loc['A02'].rotation = BABYLON.Tools.ToRadians(158);

		loc['A03'] = {};
		loc['A03'].link = [];
		loc['A03'].link[0] = {name: 'A01', pos: [-498,30,13]};
		loc['A03'].link[1] = {name: 'A02', pos: [-424,36,-262]};
		loc['A03'].link[2] = {name: 'A04', pos: [112,46,-485]};
		loc['A03'].info = [];
		loc['A03'].info[0] = {name: 'PYT', pos: [-222,24,447]};
		loc['A03'].position = {x: 0.5597121889691549, y: 0.621832358674464};
		loc['A03'].rotation = BABYLON.Tools.ToRadians(0);
		loc['A03'].sun = {x: 371, y: 277, z: -187};
 
		loc['A04'] = {};
		loc['A04'].link = [];
		loc['A04'].link[0] = {name: 'A03', pos: [-43,-3,498]};
		loc['A04'].link[1] = {name: 'A02', pos: [-499,8,11]};
		loc['A04'].link[2] = {name: 'GX1', pos: [495,-1,69]};
		loc['A04'].info = [];
		loc['A04'].position = {x: 0.5381300528205646, y: 0.597285846915401};
		loc['A04'].rotation = BABYLON.Tools.ToRadians(0);
 
		loc['A05'] = {};
		loc['A05'].link = [];
		loc['A05'].link[0] = {name: 'A01', pos: [496,22,56]};
		loc['A05'].link[1] = {name: 'A02', pos: [405,18,-292]};
		loc['A05'].link[2] = {name: 'KNT', pos: [-499,17,-15]};
		loc['A05'].info = [];
		loc['A05'].position = {x: 0.6738845144356955, y: 0.5634295713035871};
		loc['A05'].rotation = BABYLON.Tools.ToRadians(90);
 
		loc['KNT'] = {};
		loc['KNT'].link = [];
		loc['KNT'].link[0] = {name: 'A05', pos: [499,10,-5]};
		// link to HTA A02 
		loc['KNT'].info = [];
		loc['KNT'].position = {x: 0.7260213632859818, y: 0.5421209117938552};
		loc['KNT'].rotation = BABYLON.Tools.ToRadians(180);
		

		loc['GX1'] = {};
		loc['GX1'].link = [];
		loc['GX1'].link[0] = {name: 'A04', pos: [-481,-2,137]};
		loc['GX1'].link[1] = {name: 'E03', pos: [-220,24,448]};
		loc['GX1'].link[2] = {name: 'E02', pos: [180,38,465]};
		loc['GX1'].link[3] = {name: 'GX2', pos: [0,-1,-500]};
		loc['GX1'].info = [];
		loc['GX1'].info[0] = {name: 'HGXE', pos: [234,-5,441]};
		loc['GX1'].info[1] = {name: 'SBB', pos: [437,-0,-243]};
		loc['GX1'].info[2] = {name: 'SCL', pos: [345,5,-361]};
		loc['GX1'].position = {x: 0.4589802885144808, y: 0.6170025327607092};
		loc['GX1'].rotation = BABYLON.Tools.ToRadians(270);
		loc['GX1'].sun = {x: 433, y: 118, z: -219};;
		
		loc['GX2'] = {};
		loc['GX2'].link = [];
		loc['GX2'].link[0] = {name: 'GX1', pos: [-10,24,498]};
		loc['GX2'].link[1] = {name: 'GX3', pos: [40,2,-498]};
		loc['GX2'].link[2] = {name: 'CT', pos: [-499,-13,-19]};
		loc['GX2'].info = [];
		loc['GX2'].info[0] = {name: 'SBR', pos: [492,2,-84]};
		loc['GX2'].info[1] = {name: 'SBD', pos: [365,6,-341]};
		loc['GX2'].info[2] = {name: 'SBB', pos: [469,16,171]};
		loc['GX2'].info[3] = {name: 'SCL', pos: [487,12,109]};
		loc['GX2'].position = {x: 0.447869854753315, y: 0.5510597433173102};
		loc['GX2'].rotation = BABYLON.Tools.ToRadians(270);

		loc['GX3'] = {};
		loc['GX3'].link = [];
		loc['GX3'].link[0] = {name: 'GX2', pos: [-46,15,497]};
		loc['GX3'].link[1] = {name: 'GX4', pos: [-84,9,-492]};
		loc['GX3'].info = [];
		loc['GX3'].info[0] = {name: 'SBD', pos: [295,28,401]};
		loc['GX3'].position = {x: 0.4137140236211444, y: 0.48767343194587776};
		loc['GX3'].rotation = BABYLON.Tools.ToRadians(272);

		loc['GX4'] = {};
		loc['GX4'].link = [];
		loc['GX4'].link[0] = {name: 'GX3', pos: [386,-32,314]};
		loc['GX4'].link[1] = {name: 'CADV2', pos: [-51,8,-497]};
		loc['GX4'].info = [];
		loc['GX4'].info[0] = {name: 'HGXD', pos: [-495,-56,29]};
		loc['GX4'].info[1] = {name: 'GXO', pos: [-184,9,-464]};
		loc['GX4'].position = {x: 0.3994627090602323, y: 0.41830065359477125};
		loc['GX4'].rotation = BABYLON.Tools.ToRadians(0);
		
		loc['E01'] = {};
		loc['E01'].link = [];
		loc['E01'].link[0] = {name: 'E02', pos: [-245,-5,-435]};
		loc['E01'].link[1] = {name: 'CNT', pos: [48,-52,494]};
		loc['E01'].info = [];
		loc['E01'].position = {x: 0.4793524942186984, y: 0.6819733509525383};
		loc['E01'].rotation = BABYLON.Tools.ToRadians(356);

		loc['E02'] = {};
		loc['E02'].link = [];
		loc['E02'].link[0] = {name: 'E01', pos: [484,7,123]};
		loc['E02'].link[1] = {name: 'E03', pos: [-499,-11,-23]};
		loc['E02'].link[2] = {name: 'GX1', pos: [94,0,-491]};
		loc['E02'].info = [];
		loc['E02'].position = {x: 0.48651029622288294, y: 0.665455346327497};
		loc['E02'].rotation = BABYLON.Tools.ToRadians(173);

		loc['E03'] = {};
		loc['E03'].link = [];
		loc['E03'].link[0] = {name: 'CNT', pos: [21,7,499]};
		loc['E03'].link[1] = {name: 'E01', pos: [498,34,12]};
		loc['E03'].link[2] = {name: 'GX1', pos: [21,-3,-499]};
		loc['E03'].info = [];
		loc['E03'].position = {x: 0.5249398004815962, y: 0.6550854259832588};
		loc['E03'].rotation = BABYLON.Tools.ToRadians(268);

		loc['CNT'] = {};
		loc['CNT'].link = [];
		loc['CNT'].link[0] = {name: 'E01', pos: [-39,43,-496]};
		loc['CNT'].link[1] = {name: 'E03', pos: [-458,18,-198]};
		loc['CNT'].info = [];
		loc['CNT'].info[0] = {name: 'GXI', pos: [429,-16,-255]};
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
