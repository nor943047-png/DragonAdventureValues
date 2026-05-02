let dragons = [];
let filters = {give:"", get:""};

async function init(){
  dragons = await loadDragons();
  addItem("give");
  addItem("get");
}

function search(val, side){
  filters[side] = val.toLowerCase();
  render(side);
}

function addItem(side){
  const div = document.createElement("div");
  div.className="item";

  const list = dragons.filter(d => d.name.toLowerCase().includes(filters[side]));

  const select = document.createElement("select");
  list.forEach(d=>{
    let o=document.createElement("option");
    o.value=d.value;
    o.textContent=d.name;
    select.appendChild(o);
  });

  const img = document.createElement("img");
  img.src = list[0]?.img;

  select.onchange = ()=>{
    const d = dragons.find(x=>x.value==select.value);
    img.src = d.img;
    update();
  }

  const input = document.createElement("input");
  input.type="number";
  input.value=1;
  input.oninput=update;

  div.appendChild(img);
  div.appendChild(select);
  div.appendChild(input);

  document.getElementById(side).appendChild(div);
}

function calc(side){
  let total=0;
  document.querySelectorAll("#"+side+" .item").forEach(i=>{
    total+=i.children[1].value * i.children[2].value;
  });
  document.getElementById(side+"Total").innerText=total;
  return total;
}

function update(){
  const diff = calc("get") - calc("give");
  document.getElementById("result").innerText = "Difference: "+diff;
}

function render(side){
  document.getElementById(side).innerHTML="";
  addItem(side);
}

init();
