// Update the preview when a thumbnail is hovered over or focused.
function upDate(previewPic) {
  console.log('upDate triggered:', previewPic.alt, previewPic.src);
  const image = document.getElementById('image');
  image.textContent = previewPic.alt;
  image.style.backgroundImage = 'url("' + previewPic.src + '")';
}

// Restore the preview when the pointer or keyboard focus leaves.
function undo() {
  const image = document.getElementById('image');
  image.style.backgroundImage = 'url("")';
  image.textContent = 'Hover over an image below to display here.';
}
