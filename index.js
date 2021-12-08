var cvs = document.createElement("canvas");
cvs.width = 1000;
cvs.height = 1000;
cvs.style = "border:4px solid";
document.getElementById("container").appendChild(cvs);
var ctx = cvs.getContext("2d");

/* ここから描画処理 */ //入力文字列を蓄積

const svg = document.querySelector("svg");

const SIZE = 600;

const shirt = new Shirt({
  height: 75,
  width: 60,
});



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


height = 190;
p = height/170;
ctx.translate(110*1/3*(height-170)/10,-130*1/3*(height-170)/10);
ctx.scale(1.0+(p-1)*0.3,1.0+p-1);//身長の変更
person.draw(ctx);
q=0.085
r=0.15
ctx.translate(-34.5*q*10, -36*r*10);//服のサイズ変更の位置ずれ補正
ctx.scale(1.0+q,1.0+r);
shirt.draw(ctx);
