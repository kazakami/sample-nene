import * as nene from "nene-engine.ts";
import * as THREE from "three";

class InitialScene extends nene.Scene {
    public Init() {
        this.backgroundColor = new THREE.Color(0x6688cc);
    }
    public DrawText() {
        this.core.DrawText("Hello, World!", 0, 0);
    }
}

nene.Start("initial", new InitialScene());