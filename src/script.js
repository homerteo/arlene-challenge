import './style.css'
import { World } from './World/World.js';

function showScene() {
    document.getElementById("loader").style.display = "none";
}

async function main() {
    const container = document.querySelector('#scene-container');

    const world = new World(container);

    await world.init();

    world.render();
    showScene();

    await world.start();
}

main()
.catch((err) => {
    console.error(err);
});