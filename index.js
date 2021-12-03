var cvs = document.createElement("canvas");
cvs.width = 1000;
cvs.height = 1000;
cvs.style = "border:4px solid";
document.getElementById("container").appendChild(cvs);
var ctx = cvs.getContext("2d");

/* ここから描画処理 */ //入力文字列を蓄積

const svg = document.querySelector("svg");

const SIZE = 600;

const person = new Person({
  sex: "male",
  height: 170,
  weight: 60,
  shoulder: 44,
  armlength: 56,
  bust: 85,
  waist: 72,
  hip: 91,
  rise: 30,
  inseam: 69,
});

height = 180;
p= height/170;
ctx.scale(1.0+(p-1)*0.3,1.0+p-1);//身長の変更
person.draw(ctx);