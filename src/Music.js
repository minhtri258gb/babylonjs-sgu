
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
		let musicName = engine.data.other.music[Math.floor(Math.random() * engine.data.other.music.length)];
		let pathMusic = "file/music/"+musicName+".mp3";
		this.music = new BABYLON.Sound("music1", pathMusic, engine.scene, null, {loop: true, autoplay: true});
	}
}
