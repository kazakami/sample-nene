import * as nene from "nene-engine.ts";
import * as THREE from "three";

class InitialScene extends nene.Scene {
    public Init() {
        this.backgroundColor = new THREE.Color(0x6688cc);
        this.onLoadError = (e) => {console.log(e)};
        this.core.LoadGLTF("resources/ball.glb", "ball");
    }
    public Update() {
        if (this.core.IsAllResourcesAvailable()) {
            this.core.AddAndChangeScene("game", new GameScene());
        }
    }
    public DrawText() {
        this.core.DrawText("Now Loading!", 0, 0);
    }
}

class GameScene extends nene.Scene {
    public Init() {
        this.backgroundColor = new THREE.Color(0x6688cc);
        this.camera.position.set(0, 100, 100);
        this.camera.lookAt(0, 0, 0);
        const light = new THREE.DirectionalLight("white", 1);
        light.position.set(50, 100, 50);
        this.scene.add(light);
    }
    public Update() {
        if (this.frame % 60 === 0) {
            this.AddUnit(new Ball());
        }
    }
}

class Ball extends nene.Unit {
    private obj: THREE.Object3D;
    private pos: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
    private speed: THREE.Vector3;
    public Init() {
        this.speed = new THREE.Vector3(Math.random(), Math.random(), Math.random());
        this.obj = this.core.GetObject("ball");
        this.obj.scale.set(300, 300, 300);
        this.AddObject(this.obj);
    }
    public Update() {
        this.pos.add(this.speed);
        this.obj.position.set(this.pos.x, this.pos.y, this.pos.z);
        if (this.frame > 50) {
            this.isAlive = false;
        }
    }
}

nene.Start("initial", new InitialScene());