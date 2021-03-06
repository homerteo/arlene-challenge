import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './setupModel.js';

async function loadWorld() {
  const loader = new GLTFLoader();

  const worldData = await loader.loadAsync('/world.gltf');
  const { earthModel, textModel } = setupModel(worldData);

  earthModel.tick = () => {
    earthModel.rotation.z -= 0.005; 
  }

  textModel.tick = () => {
    textModel.rotation.z += 0.005;
  }

  return { earthModel, textModel }
}

export { loadWorld };