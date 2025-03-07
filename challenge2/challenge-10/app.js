/**
 * Write your challenge solution here
 */

const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

let filpped = [];
let used = [];
let map = {};
function rCard() {
  const butt = document.createElement('div');
  butt.classList.add('card', 'card-front', 'card-back');
  const at = Math.floor(Math.random() * (used.length - 1));
  const choosen = used[at];
  butt.style.backgroundImage = `url('${choosen.url}')`;
  if (map.hasOwnProperty(choosen.caption.toString())) {
    map[choosen.caption.toString()] = 0;
  } else {
    map[choosen.caption.toString()]++;
  }
  butt.id =
    choosen.caption.toString() + toString(map[choosen.caption.toString()]);
  if (map[choosen.caption.toString()] == 1) {
    used.splice(at, 1);
  }
  butt.onclick = () => {
    butt.classList.toggle('flipped');
    filpped.push(butt.id);
    if (filpped.length == 2) {
      if (filpped[0].split('_')[0] == butt.id.split('_')[0]) filpped.length = 0;
      else {
        filpped.forEach((v) => {
          document.getElementById(v).classList.toggle('flipped');
        });
        filpped.length = 0;
      }
    }
  };
  return butt;
}

function restartGame() {
  const mai = document.getElementById('gameContainer');
  filpped.length = 0;
  used = images;
  map = {};
  for (let i = 0; i < images.length * 2; i++) {
    const butto = document.createElement('div');
    butto.style.height = '100px';
    // butto.classList.add('card');
    butto.style.backgroundImage =
      "url('https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    butto.innerText = 'oye';
    mai.append(butto);
  }
}
