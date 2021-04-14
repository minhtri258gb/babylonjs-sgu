
import engine from './Engine.js'

export default class Effect
{
	turnLensFlare(toogle)
	{
		this.onLensFlare = toogle;

		let sunPos = engine.data.loc[engine.loc.name].sun;
		if (sunPos === undefined)
			return;

		if (toogle)
		{
			let sunPos = engine.data.loc[engine.loc.name].sun;
			if (sunPos === undefined)
				return;

			if (this.sunLight === undefined)
				this.sunLight = new BABYLON.PointLight("sunLight", new BABYLON.Vector3(sunPos.x,sunPos.y,sunPos.z), engine.scene);
			else
				this.sunLight.position = new BABYLON.Vector3(sunPos.x,sunPos.y,sunPos.z);
			this.lensFlareSystem = new BABYLON.LensFlareSystem("lensFlareSystem", this.sunLight, engine.scene);
			// this.lensFlareSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD; // BLENDMODE_ONEONE, BLENDMODE_STANDARD, or BLENDMODE_ADD

			this.lenFlares = [];
			this.lenFlares[0] = new BABYLON.LensFlare(0.2, 0, new BABYLON.Color3(1, 1, 1), "asset/lenFlare/lens5.png", this.lensFlareSystem);
			this.lenFlares[1] = new BABYLON.LensFlare(0.5, 0.2, new BABYLON.Color3(0.5, 0.5, 1), "asset/lenFlare/lens4.png", this.lensFlareSystem);
			this.lenFlares[2] = new BABYLON.LensFlare(0.2, 1.0, new BABYLON.Color3(1, 1, 1), "asset/lenFlare/lens4.png", this.lensFlareSystem);
			this.lenFlares[3] = new BABYLON.LensFlare(0.4, 0.4, new BABYLON.Color3(1, 0.5, 1), "asset/lenFlare/Flare.png", this.lensFlareSystem);
			this.lenFlares[4] = new BABYLON.LensFlare(0.1, 0.6, new BABYLON.Color3(1, 1, 1), "asset/lenFlare/lens5.png", this.lensFlareSystem);
			this.lenFlares[5] = new BABYLON.LensFlare(0.3, 0.8, new BABYLON.Color3(1, 1, 1), "asset/lenFlare/lens4.png", this.lensFlareSystem);
		}
		else
		{
			this.lensFlareSystem.dispose();
			this.lensFlareSystem = undefined;
		}
	}

	lensFlare_update()
	{
		if (!this.onLensFlare)
			return;
		
		let sunPos = engine.data.loc[engine.loc.name].sun;
		if (sunPos === undefined)
		{
			if (this.lensFlareSystem !== undefined)
			{
				this.lensFlareSystem.dispose();
				this.lensFlareSystem = undefined;
			}
		}
		else
		{
			if (this.lensFlareSystem !== undefined)
				this.sunLight.position = new BABYLON.Vector3(sunPos.x,sunPos.y,sunPos.z);
			else
				this.turnLensFlare(true);
		}
	}

	turnParticle(toogle)
	{
		if (toogle)
		{
			if (this.particleSystem === undefined)
			{
				this.particleSystem = new BABYLON.ParticleSystem("particles", 2000);
				this.particleSystem.particleTexture = new BABYLON.Texture("asset/lenFlare/Flare.png");
				this.particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
				
				this.particleSystem.emitter = new BABYLON.Vector3(0, 0.5, 0);
				this.particleSystem.minEmitBox = new BABYLON.Vector3(-100, -40, -100);
				this.particleSystem.maxEmitBox = new BABYLON.Vector3(100, 40, 100);
				this.particleSystem.minSize = 0.2;
				this.particleSystem.maxSize = 1.0;
				this.particleSystem.minLifeTime = 0.5;
				this.particleSystem.maxLifeTime = 2.0;
				this.particleSystem.emitRate = 200; // Emission rate
				this.particleSystem.direction1 = new BABYLON.Vector3(-1, -1, -1);
				this.particleSystem.direction2 = new BABYLON.Vector3(1, 1, 1);
				// this.particleSystem.gravity = new BABYLON.Vector3(0, -10, 0);
				// this.particleSystem.minAngularSpeed = 0;
				// this.particleSystem.maxAngularSpeed = Math.PI;
				// this.particleSystem.minEmitPower = 0;
				// this.particleSystem.maxEmitPower = 0;
				this.particleSystem.updateSpeed = 0.005;

				// Noise
				this.noiseTexture = new BABYLON.NoiseProceduralTexture("perlin", 256, engine.scene);
				this.noiseTexture.animationSpeedFactor = 5;
				this.noiseTexture.persistence = 2;
				this.noiseTexture.brightness = 0.5;
				this.noiseTexture.octaves = 2;
			
				this.particleSystem.noiseTexture = this.noiseTexture;
				this.particleSystem.noiseStrength = new BABYLON.Vector3(100, 100, 100);
			}
			this.particleSystem.start();
		}
		else
		{
			this.particleSystem.stop();
		}
	}

	turnMosionBlur(toogle)
	{
		if (toogle)
		{
			this.mosionBlur = new BABYLON.MotionBlurPostProcess('mosionBlur', engine.scene, 1.0, engine.camera);
			this.mosionBlur.motionStrength = 0.1;
		}
		else
		{
			this.mosionBlur.dispose();
		}
	}

	turnBloom(toogle)
	{
		if (this.defaultPipeline === undefined)
			this.defaultPipeline = new BABYLON.DefaultRenderingPipeline("default", true, engine.scene, [engine.camera]);

		this.defaultPipeline.bloomEnabled = toogle;
		this.defaultPipeline.bloomWeight = 0.5;
	}

	turnAntiAlias(toogle)
	{
		if (this.defaultPipeline === undefined)
			this.defaultPipeline = new BABYLON.DefaultRenderingPipeline("default", true, engine.scene, [engine.camera]);

		this.defaultPipeline.fxaaEnabled = toogle;
	}

}