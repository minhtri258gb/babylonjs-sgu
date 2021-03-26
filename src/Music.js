
import engine from './Engine.js'

export default class Music
{
	constructor()
	{
		this.volume = 1.0;
	}

	turn(toogle)
	{
		if (toogle)
		{
			this.music.setVolume(this.volume);
		}
		else
		{
			this.music.setVolume(0);
		}
	}

	setVolume(volume)
	{
		if (volume > 0)
			this.volume = volume;

		if (this.music === undefined)
			this.changeMusic();

		this.music.setVolume(volume);
	}

	changeMusic()
	{
		let list = [
			"Alan Walker - Fade",
			"Disfigure - Blank",
			"Janji - Heroes Tonight"
		];
		this.music = new BABYLON.Sound("music1", "asset/music/"+list[Math.floor(Math.random() * list.length)]+".mp3", engine.scene,
			null, {loop: true, autoplay: true});
	}
}