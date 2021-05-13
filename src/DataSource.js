
export default class DataSource
{
	constructor()
	{
		this.initLocation();
		this.initMusic();
	}

	initLocation()
	{
		this.loc = [];

		this.loc['CADV'] = {
			link: [
				{name: 'C02', pos: [-17,31,498]},
				{name: 'CADV2', pos: [494,30,62]}
			],
			info: [],
			position: {x: 0.47276688453159044, y: 0.3340213278293774},
			rotation: BABYLON.Tools.ToRadians(92),
			sun: {x: 383, y: 296, z: -122}
		};

		this.loc['CADV2'] = {
			link: [
				{name: 'CADV', pos: [-497,46,-27]},
				{name: 'GX4', pos: [28,6,499]}
			],
			info: [],
			position: {x: 0.37908138401559455, y: 0.3739035087719298},
			rotation: BABYLON.Tools.ToRadians(92)
		};

		this.loc['C02'] = {
			link: [
				{name: 'HB', pos: [-492,37,74]},
				{name: 'D01', pos: [498,16,-20]},
				{name: 'C01', pos: [8,22,499]},
				{name: 'CADV', pos: [-3,25,-499]}
			],
			info: [
				{name: 'PBV', pos: [203,37,-455]}
			],
			position: {x:0.4917763157894737, y: 0.38365009746588696},
			rotation: BABYLON.Tools.ToRadians(90)
		};

		this.loc['C01'] = {
			link: [
				{name: 'C02', pos: [0,31,-498]},
				{name: 'HB', pos: [-396,23,-303]},
				{name: 'D01', pos: [314,37,-386]},
				{name: 'B02', pos: [20,15,499]}
			],
			info: [
				{name: 'GXGV', pos: [-496,13,55]}
			],
			position: {x: 0.5143153021442495, y: 0.4134990253411306},
			rotation: BABYLON.Tools.ToRadians(75)
		};

		this.loc['HB'] = {
			link: [
				{name: 'C01', pos: [369,27,335]},
				{name: 'C02', pos: [498,23,2]}
			],
			info: [
				{name: 'ATM', pos: [243,19,-436]},
				{name: 'GXGV', pos: [-164,17,471]},
				{name: 'THP', pos: [-497,32,38]}
			],
			position: {x: 0.5447733918128655, y: 0.3605019493177388},
			rotation: BABYLON.Tools.ToRadians(135)
		};

		this.loc['D01'] = {
			link: [
				{name: 'C01', pos: [-300,36,398]},
				{name: 'C02', pos: [-493,20,73]}
			],
			info: [
			],
			position: {x: 0.4607090643274854, y: 0.3946150097465887},
			rotation: BABYLON.Tools.ToRadians(180)
		};

		this.loc['B01'] = {
			link: [
				{name: 'A02', pos: [6,-3,500]},
				{name: 'B02', pos: [-3,18,-499]},
				{name: 'B03', pos: [438,19,-238]},
				{name: 'B05', pos: [-498,10,36]}
			],
			info: [
				{name: 'KTHB', pos: [-499,9,-4]},
				{name: 'KTHC', pos: [-358,19,-347]},
				{name: 'KLF', pos: [-440,15,-236]}
			],
			position: {x: 0.5715386308606647, y: 0.5253748135104067},
			rotation: BABYLON.Tools.ToRadians(265),
			sun: {x: 424, y: 184, z: -188}
		};

		this.loc['B02'] = {
			link: [
				{name: 'C01', pos: [-8,-4,-499]},
				{name: 'B01', pos: [-4,12,499]},
				{name: 'B03', pos: [434,14,-245]},
				{name: 'B04', pos: [-496,9,55]}
			],
			info: [
				{name: 'KTHB', pos: [-358,17,347]},
				{name: 'KTHC', pos: [-499,9,9]},
				{name: 'KLF', pos: [-432,-0,251]}
			],
			position: {x: 0.5415663341359935, y: 0.4670335970645568},
			rotation: BABYLON.Tools.ToRadians(178),
			sun:{x: 422, y: 229, z: -138}
		};

		this.loc['B03'] = {
			link: [
				{name: 'B01', pos: [-298,-13,400]},
				{name: 'B02', pos: [-318,-1,-385]},
				{name: 'GX2', pos: [499,-12,-10]}
			],
			info: [
				{name: 'CT', pos: [444,-3,229]},
				{name: 'KLF', pos: [-499,-6,5]}
			],
			position: {x: 0.515193211787639, y: 0.515193211787639},
			rotation: BABYLON.Tools.ToRadians(272),
			sun: {x: 457, y: 117, z: -163}
		};

		this.loc['B04'] = {
			link: [
				{name: 'B02', pos: [498,20,-32]},
				{name: 'B05', pos: [27,9,499]}
			],
			info: [
				{name: 'KTHC', pos: [417,18,-274]},
				{name: 'KNU', pos: [-236,10,440]}
			],
			position: {x: 0.6410574310987626, y: 0.41553078501345647},
			rotation: BABYLON.Tools.ToRadians(120)
		};

		this.loc['B05'] = {
			link: [
				{name: 'B01', pos: [495,29,58]},
				{name: 'B04', pos: [2,14,-499]},
				{name: 'A06', pos: [-457,-24,199]}
			],
			info: [
				{name: 'KTHB', pos: [474,34,-154]}
			],
			position: {x: 0.6668854071260298, y: 0.4671916010498688},
			rotation: BABYLON.Tools.ToRadians(355)
		};

		this.loc['A01'] = {
			link: [
				{name: 'A02', pos: [-62,28,-494]},
				{name: 'A03', pos: [493,23,-76]},
				{name: 'A05', pos: [-498,12,-40]},
				{name: 'A04', pos: [399,27,-298]}
			],
			info: [
				{name: 'CSNT', pos: [-29,21,498]}
			],
			position: {x: 0.6206857011810573, y: 0.60921912624699},
			rotation: BABYLON.Tools.ToRadians(265)
		};

		this.loc['A02'] = {
			link: [
				{name: 'A01', pos: [221,6,448]},
				{name: 'B01', pos: [76,-12,-493]},
				{name: 'A03', pos: [466,9,179]},
				{name: 'A04', pos: [493,7,-78]},
				{name: 'A05', pos: [-461,8,190]}
			],
			info: [
			],
			position: {x: 0.6023391812865497, y: 0.572526086457975},
			rotation: BABYLON.Tools.ToRadians(158)
		};

		this.loc['A03'] = {
			link: [
				{name: 'A01', pos: [-499,-6,14]},
				{name: 'A02', pos: [-424,1,-262]},
				{name: 'A04', pos: [90,6,-485]}
			],
			info: [
			],
			position: {x: 0.5567947129285419, y: 0.636376178315499},
			rotation: BABYLON.Tools.ToRadians(0),
			sun: {x: 371, y: 277, z: -187}
		};

		this.loc['A04'] = {
			link: [
				{name: 'A03', pos: [4,17,499]},
				{name: 'A02', pos: [-498,18,30]},
				{name: 'GX1', pos: [497,11,48]}
			],
			info: [
			],
			position: {x: 0.5386204300021298, y: 0.6038827099091715},
			rotation: BABYLON.Tools.ToRadians(90)
		};

		this.loc['A05'] = {
			link: [
				{name: 'A01', pos: [496,22,56]},
				{name: 'A02', pos: [405,18,-292]},
				{name: 'A06', pos: [-499,17,-15]}
			],
			info: [
			],
			position: {x: 0.6738845144356955, y: 0.5634295713035871},
			rotation: BABYLON.Tools.ToRadians(90)
		};

		this.loc['A06'] = {
			link: [
				{name: 'A05', pos: [431,17,-251]},
				{name: 'KNT', pos: [-498,25,18]},
				{name: 'B05', pos: [-52,45,-495]}
			],
			info: [
				{name: 'TV', pos: [-276,75,409]}
			],
			position: {x: 0.7333447999082674, y: 0.5369797041623667},
			rotation: BABYLON.Tools.ToRadians(270),
			sun: {x: 404, y: 243, z: -165}
		};

		this.loc['KNT'] = {
			link: [
				{name: 'A05', pos: [499,10,-5]}
			],
			info: [
			],
			position: {x: 0.8409748374143777, y: 0.48988022739263865},
			rotation: BABYLON.Tools.ToRadians(180)
		};

		this.loc['GX1'] = {
			link: [
				{name: 'A04', pos: [-481,-2,137]},
				{name: 'E03', pos: [-220,24,448]},
				{name: 'E02', pos: [180,38,465]},
				{name: 'GX2', pos: [-240,6,-438]}
			],
			info: [
				{name: 'HGXE', pos: [234,-5,441]},
				{name: 'SBB', pos: [437,-0,-243]},
				{name: 'SCL', pos: [345,5,-361]}
			],
			position: {x: 0.4589802885144808, y: 0.6170025327607092},
			rotation: BABYLON.Tools.ToRadians(270),
			sun: {x: 433, y: 118, z: -219}
		};

		this.loc['GX2'] = {
			link: [
				{name: 'GX1', pos: [89,34,490]},
				{name: 'B03', pos: [-499,0,-5]},
				{name: 'GX3', pos: [18,7,-499]}
			],
			info: [
				{name: 'SBR', pos: [492,2,-84]},
				{name: 'SBD', pos: [365,6,-341]},
				{name: 'SBB', pos: [469,16,171]},
				{name: 'SCL', pos: [487,12,109]}
			],
			position: {x: 0.447869854753315, y: 0.5510597433173102},
			rotation: BABYLON.Tools.ToRadians(272)
		};

		this.loc['GX3'] = {
			link: [
				{name: 'GX2', pos: [-42,22,497]},
				{name: 'GX4', pos: [-84,16,-492]}
			],
			info: [
				{name: 'SBD', pos: [295,28,401]}
			],
			position: {x: 0.4137140236211444, y: 0.48767343194587776},
			rotation: BABYLON.Tools.ToRadians(272)
		};

		this.loc['GX4'] = {
			link: [
				{name: 'GX3', pos: [386,-32,314]},
				{name: 'CADV2', pos: [-51,8,-497]}
			],
			info: [
				{name: 'HGXD', pos: [-495,-56,29]},
				{name: 'GXO', pos: [-184,9,-464]}
			],
			position: {x: 0.3994627090602323, y: 0.41830065359477125},
			rotation: BABYLON.Tools.ToRadians(0)
		};

		this.loc['E01'] = {
			link: [
				{name: 'E02', pos: [-245,-5,-435]},
				{name: 'CNT', pos: [48,-52,494]}
			],
			info: [
			],
			position: {x: 0.4793524942186984, y: 0.6819733509525383},
			rotation: BABYLON.Tools.ToRadians(356)
		};

		this.loc['E02'] = {
			link: [
				{name: 'E01', pos: [484,7,123]},
				{name: 'E03', pos: [-499,-11,-23]},
				{name: 'GX1', pos: [94,0,-491]}
			],
			info: [
			],
			position: {x: 0.48651029622288294, y: 0.665455346327497},
			rotation: BABYLON.Tools.ToRadians(173)
		};

		this.loc['E03'] = {
			link: [
				{name: 'CNT', pos: [21,7,499]},
				{name: 'E01', pos: [498,34,12]},
				{name: 'GX1', pos: [21,-3,-499]}
			],
			info: [
			],
			position: {x: 0.5249398004815962, y: 0.6550854259832588},
			rotation: BABYLON.Tools.ToRadians(268)
		};

		this.loc['CNT'] = {
			link: [
				{name: 'E01', pos: [-123,35,-482]},
				{name: 'E03', pos: [-473,9,-159]}
			],
			info: [
				{name: 'GXI', pos: [365,-13,-341]}
			],
			position: {x: 0.4968466918931315, y: 0.7342047930283224},
			rotation: BABYLON.Tools.ToRadians(90),
			sun: {x: 404, y: 243, z: -165}
		};

		

	
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
