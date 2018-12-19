import * as nene from "nene-engine.ts";
import * as THREE from "three";

class LoadScene extends nene.Scene {
    public Init() {
        this.backgroundColor = new THREE.Color(0x6688cc);
    }
}

nene.Start("init", new LoadScene());