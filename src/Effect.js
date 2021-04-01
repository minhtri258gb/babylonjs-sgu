
import engine from './Engine.js'

export default class Effect
{
	constructor()
	{
		// ===================================================
		// // LEN FLARE

		// // Light
		// this.sunLight = new BABYLON.PointLight("sunLight", new BABYLON.Vector3(453,181,-105), engine.scene);
		
		// // System
		// this.lensFlareSystem = new BABYLON.LensFlareSystem("lensFlareSystem", this.sunLight, engine.scene);
		// // this.lensFlareSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD; // BLENDMODE_ONEONE, BLENDMODE_STANDARD, or BLENDMODE_ADD

		// // Texture
		// this.lenFlares = [];
		// this.lenFlares[0] = new BABYLON.LensFlare(0.2, 0, new BABYLON.Color3(1, 1, 1), "asset/lenFlare/lens5.png", this.lensFlareSystem);
		// this.lenFlares[1] = new BABYLON.LensFlare(0.5, 0.2, new BABYLON.Color3(0.5, 0.5, 1), "asset/lenFlare/lens4.png", this.lensFlareSystem);
		// this.lenFlares[2] = new BABYLON.LensFlare(0.2, 1.0, new BABYLON.Color3(1, 1, 1), "asset/lenFlare/lens4.png", this.lensFlareSystem);
		// this.lenFlares[3] = new BABYLON.LensFlare(0.4, 0.4, new BABYLON.Color3(1, 0.5, 1), "asset/lenFlare/Flare.png", this.lensFlareSystem);
		// this.lenFlares[4] = new BABYLON.LensFlare(0.1, 0.6, new BABYLON.Color3(1, 1, 1), "asset/lenFlare/lens5.png", this.lensFlareSystem);
		// this.lenFlares[5] = new BABYLON.LensFlare(0.3, 0.8, new BABYLON.Color3(1, 1, 1), "asset/lenFlare/lens4.png", this.lensFlareSystem);
		
		// // this.lenFlares[0] = new BABYLON.LensFlare(0.2, 1.0, new BABYLON.Color3(1, 1, 1), "asset/lenFlare/len1.png", this.lensFlareSystem);
		// // this.lenFlares[1] = new BABYLON.LensFlare(0.5, 0.8, new BABYLON.Color3(0.5, 0.5, 1), "asset/lenFlare/len2.png", this.lensFlareSystem);
		// // this.lenFlares[2] = new BABYLON.LensFlare(0.2, 0.6, new BABYLON.Color3(1, 1, 1), "asset/lenFlare/len3.png", this.lensFlareSystem);
		// // this.lenFlares[3] = new BABYLON.LensFlare(0.4, 0.4, new BABYLON.Color3(1, 0.5, 1), "asset/lenFlare/len4.png", this.lensFlareSystem);
		// // this.lenFlares[4] = new BABYLON.LensFlare(0.1, 0.2, new BABYLON.Color3(1, 1, 1), "asset/lenFlare/len5.png", this.lensFlareSystem);
		// // this.lenFlares[5] = new BABYLON.LensFlare(0.3, 0.0, new BABYLON.Color3(1, 1, 1), "asset/lenFlare/len6.png", this.lensFlareSystem);
		// // this.lenFlares[5] = new BABYLON.LensFlare(0.2, -0.2, new BABYLON.Color3(1, 1, 1), "asset/lenFlare/len7.png", this.lensFlareSystem);
		// // this.lenFlares[5] = new BABYLON.LensFlare(0.8, -0.5, new BABYLON.Color3(1, 1, 1), "asset/lenFlare/len8.png", this.lensFlareSystem);

		
		// ===================================================
		// PARTICLE SYSTEM
		// Create a particle system
		const particleSystem = new BABYLON.ParticleSystem("particles", 2000);

		//Texture of each particle
		particleSystem.particleTexture = new BABYLON.Texture("asset/lenFlare/Flare.png");
		particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
	
		// Position where the particles are emiited from
		particleSystem.emitter = new BABYLON.Vector3(0, 0.5, 0);
		particleSystem.minEmitBox = new BABYLON.Vector3(-100, -40, -100);
		particleSystem.maxEmitBox = new BABYLON.Vector3(100, 40, 100);
		particleSystem.minSize = 0.2;
		particleSystem.maxSize = 1.0;
		particleSystem.minLifeTime = 0.5;
		particleSystem.maxLifeTime = 2.0;
		particleSystem.emitRate = 200; // Emission rate
		particleSystem.direction1 = new BABYLON.Vector3(-1, -1, -1);
		particleSystem.direction2 = new BABYLON.Vector3(1, 1, 1);
		// particleSystem.gravity = new BABYLON.Vector3(0, -10, 0);
		// particleSystem.minAngularSpeed = 0;
		// particleSystem.maxAngularSpeed = Math.PI;
		// particleSystem.minEmitPower = 0;
		// particleSystem.maxEmitPower = 0;
		particleSystem.updateSpeed = 0.005;

		// Noise
		var noiseTexture = new BABYLON.NoiseProceduralTexture("perlin", 256, engine.scene);
		noiseTexture.animationSpeedFactor = 5;
		noiseTexture.persistence = 2;
		noiseTexture.brightness = 0.5;
		noiseTexture.octaves = 2;
	
		particleSystem.noiseTexture = noiseTexture;
		particleSystem.noiseStrength = new BABYLON.Vector3(100, 100, 100);
	
		// particleSystem.start();
		particleSystem.start(1000); // delay time

		// ===================================================
		// MOTION BLUR
		//  var mb = new BABYLON.MotionBlurPostProcess('mb', engine.scene, 1.0, engine.camera);
		//  mb.motionStrength = 0.2;
		
		// ===================================================
		// POST PROCESS
		// var defaultPipeline = new BABYLON.DefaultRenderingPipeline("default", true, engine.scene, [engine.camera]);
		// defaultPipeline.bloomEnabled = true;
		// defaultPipeline.fxaaEnabled = true;
		// defaultPipeline.bloomWeight = 0.5;
	}

}