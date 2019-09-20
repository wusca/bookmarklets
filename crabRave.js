let embed = document.createElement('div');
embed.setAttribute('id', 'ytvid');
embed.innerHTML = `<iframe width="1" height="1" src="https://www.youtube.com/embed/LDU_Txk06tM?start=75&amp;showinfo=0&autoplay=1&controls=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
document.body.append(embed);

function changeImgs() {
  let img = 'https://media.tenor.com/images/27ca212af87a34c6df90f6a9edc9fead/tenor.gif';
  document.querySelectorAll('img').forEach(b => {
    if (b.src != img) {
      b.src = img
    }
  })
}
setInterval(changeImgs, 500);
