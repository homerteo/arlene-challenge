function setupModel(data) {
  const earthModel = data.scene.children[1];
  const textModel = data.scene.children[0];

  return {earthModel, textModel}
}

export { setupModel };