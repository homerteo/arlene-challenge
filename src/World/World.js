import { loadWorld } from './components/actors/world.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    container.append(renderer.domElement);
    const { ambientLight, mainLight } = createLights();  
    scene.add(ambientLight, mainLight);
    const resizer = new Resizer(container, camera, renderer);
  }

  async init() {
    loop = new Loop(camera, scene, renderer);
    const controls = createControls(camera, renderer.domElement);
    loop.updatables.push(controls);
    const { earthModel, textModel } = await loadWorld();
    textModel.children[1].visible = false;

    loop.updatables.push(earthModel);
    loop.updatables.push(textModel);

    scene.add(textModel, earthModel)
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };