const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

btnTarefa.addEventListener("click", function (e) {
  // pega o input que foi escrito
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener("keypress");

function criaLi() {
  // apenas cria o li
  const li = document.createElement("li");
  return li;
}

function criaTarefa(textoInput) {
  //coloca a li em texto
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li); //coloca essa li dentro da ul para aparecer na pagina
}
