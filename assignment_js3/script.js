const addTaskBtn = document.getElementById('add-task-btn');
const todoBoard = document.getElementById('todo-board');
// const allBoards = document.getElementsByClassName('board')
const board = document.getElementsByClassName('board')[0];


const get_quote = async () => {
    let qob = await fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random',{
        method: "GET"
    });

    let dat='';
    const stream = qob.body.pipeThrough(new TextDecoderStream());
    for await (const value of stream) {
      dat+=value;
    //   console.log(value);
    }

    dat = await JSON.parse(dat);
    console.log(typeof(dat));

    const comp = document.createElement('div');
    comp.classList.add("remove");

    const tex = document.createElement('div');
    tex.innerText=dat.data.content;
    tex.classList.add("tex");
    
    const tex2 = document.createElement('div');
    tex2.classList.add("texr");
    tex2.innerText="- "+dat.data.author;


    comp.appendChild(tex);
    comp.appendChild(tex2);
    board.appendChild(comp);
    // comp.append(qob);
}

const ran_img = {
    "images": [
      "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1642&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80",
      "https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1177&q=80",
      "https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1559&q=80",
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      "https://images.unsplash.com/photo-1462400362591-9ca55235346a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80",
      "https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1508163223045-1880bc36e222?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1431631927486-6603c868ce5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ]
  };


const get_img = async () => {
    // let qob = await fetch('https://random-image-pepebigotes.vercel.app/api/random-image',{
    //     method: "GET"
    // });

    // console.log(qob);
    // let dat='';
    // const stream = qob.body.pipeThrough(new TextDecoderStream());
    // for await (const value of stream) {
    //   dat+=value;
    // //   console.log(value);
    // }

    const random = ran_img.images[Math.floor((Math.random()*(ran_img.images.length)))];
    
    board.style.backgroundImage = `url(${random})`;

    // dat = await JSON.parse(dat);
    // console.log(typeof(dat));

    // const comp = document.createElement('div');
    // comp.classList.add("remove");

    // const tex = document.createElement('div');
    // tex.innerText=dat.data.content;
    // tex.classList.add("tex");
    
    // const tex2 = document.createElement('div');
    // tex2.classList.add("texr");
    // tex2.innerText="- "+dat.data.author;


    // comp.appendChild(tex);
    // comp.appendChild(tex2);
    // board.appendChild(comp);
    // comp.append(qob);
}

get_quote();

document.getElementById('add-task-btn').addEventListener('click',()=>{
    const rem = document.getElementsByClassName("remove")[0];
    rem.parentNode.removeChild(rem);
    get_quote();
});

document.getElementById('add-pic-btn').addEventListener('click',()=>{
    get_img();
});

document.getElementById('copy-btn').addEventListener('click',()=>{
    navigator.clipboard.writeText(document.getElementsByClassName('tex')[0].innerText);
});

document.getElementById('share-btn').addEventListener('click',()=>{
    let text = document.getElementsByClassName('tex')[0].innerText;
    text += document.getElementsByClassName('texr')[0].innerText;
    // console.log(text);
    window.open('https://twitter.com/intent/tweet?text='+text);
});
