/**
 * 
 */
// script.js
var button = document.getElementById('button');
var input = document.getElementById('input');
var list = document.getElementById('list');
var cnt = 1;
//클릭을 하면 clickButton함수가 실행.
button.addEventListener('click', clickButton);

//실행이 되면 목록에 추가가 된다.(createElement를 사용한다.)
function clickButton(){
 var temp = document.createElement('li');
  temp.setAttribute("class", "list-group-item");
  temp.setAttribute("id", "li"+cnt);
  temp.innerHTML = input.value;
  temp.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='remove("+cnt+")'>삭제</button>";
  list.appendChild(temp);
  cnt++;
}
function remove(cnt) {
  var li = document.getElementById('li'+cnt);
  list.removeChild(li);
}













