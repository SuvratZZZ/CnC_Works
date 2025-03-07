const matCou = {};
function addToCart(name, price) {
  if (matCou[name] === undefined) matCou[name] = 0;
  render(name, price, ++matCou[name]);
}
function render(name, price, quant) {
  const par = document.getElementById('cart-items');
  const card = document.getElementById(name);
  if (par.getElementsByClassName('empty-cart').length != 0) {
    par.removeChild(par.getElementsByClassName('empty-cart')[0]);
  }
  if (card) {
    if (quant === 0) {
      par.removeChild(card);
      if (par.children.length === 0) {
        const nc = document.createElement('div');
        nc.classList.add('empty-cart');
        nc.append('Cart is empty');
        par.append(nc);
      }
      return;
    }
    card.getElementsByClassName('tot')[0].innerText = (
      Number(price) * Number(quant)
    ).toFixed(2);
    card
      .getElementsByClassName('gogo')[0]
      .getElementsByTagName('span')[0].innerText = quant;
  } else {
    const newCard = document.createElement('div');

    const quan = document.createElement('div');
    const inc = document.createElement('button');
    const dec = document.createElement('button');
    inc.innerText = '+';
    dec.innerText = '-';
    quan.classList.add('gogo');
    quan.append(inc);
    const nd = document.createElement('span');
    nd.append(quant);
    quan.append(nd);
    quan.append(dec);
    inc.onclick = () => {
      matCou[name]++;
      render(name, price, matCou[name]);
    };
    dec.onclick = () => {
      matCou[name]--;
      render(name, price, matCou[name]);
    };

    const pricebut = document.createElement('div');
    pricebut.classList.add('tot');
    pricebut.innerText = (Number(price) * Number(quant)).toFixed(2);

    const remb = document.createElement('button');
    remb.innerText = 'remove';
    remb.onclick = () => {
      matCou[name] = 0;
      render(name, price, 0);
    };

    newCard.append(name);
    newCard.append(quan);
    newCard.append(pricebut);
    newCard.append(remb);
    newCard.style.width = '100%';
    newCard.style.display = 'flex';
    newCard.style.justifyContent = 'space-between';
    newCard.id = name;
    par.append(newCard);
  }
}
