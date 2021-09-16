var switch_color_inactive;
function show_inactive(){
  //inactiveボタンを作成
   const element = document.getElementById("mytext_inactive");
   const input_value=element.value;
   const container=document.querySelector('.inactive_container');
   const button = `<button class="addition_inactive" onclick="on_inactive(this)" ondblclick="get_info(this)" id=box${count_active}>${input_value}</button>`;
   container.insertAdjacentHTML('afterbegin',button);
   const inactive_sakusei = document.querySelector(`#box${count_active}`);
   const randomhue_inactive = Math.trunc(Math.random()*360);　//360までの整数
   const randomcolor_inactive = `hsl(${randomhue_inactive},100%,50%)`;　//色の設定
   switch_color = `hsl(${randomhue_inactive},100%,50%)`;　//色の設定
   const express_inactive = document.querySelector('.addition_inactive'); //cssの場所指定
   express_inactive.style.setProperty('--color_inactive',randomcolor_inactive); //代入する
   element.value='';
   count_active += 1;
}
// <!-- inactiveのボタンを押したら上に表示され、時計が動き出す。
function on_inactive(ele){
 var id_inactive = ele.id;
 let date = new Date();
 let old_time = Date.now();
 const start_time =  document.querySelector('.time')//開始時間の場所
 const start_name = document.querySelector('.time_show')//inactive名の場所
 const element = document.querySelector(`#${id_inactive}`);//クリックしたボタンの名前のid
 const localetime = date.toLocaleTimeString();
 let input_value = element.innerHTML; //指定したidの文を取得
 start_time.innerHTML = localetime;//inactive開始時間を表示
 start_name.innerHTML = input_value;//inactive名を表示
}
// 時間を停止させる
