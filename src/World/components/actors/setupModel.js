function setupModel(data) {
  const earthModel = data.scene.children[1];
  const textModel = data.scene.children[0];
  console.log('textModel', textModel)
  console.log('earthModel', earthModel)


  return {earthModel, textModel}
}

export { setupModel };