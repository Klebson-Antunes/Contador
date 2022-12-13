
const contador = (btn) => {
  const resp = document.querySelector(".resp");

  if (btn.classList.contains("incrementa")) {
    contaClick++;
    resp.innerHTML = contaClick;
  } else if (btn.classList.contains("decrementa")) {
    contaClick--;
    contaClick < 0 ? contaClick = 0 : resp.innerHTML = contaClick;
  } else {
    contaClick = 0
    resp.innerHTML = contaClick;
  }

}

const btns = document.querySelectorAll("button");
let contaClick = 0;

for (let i = 0; i < btns.length; i++) {
  const btn = btns[i];

  btn.onclick = function () {
    contador(btn);
  }

}
