
document.getElementById("button").onclick = function() {
  const formElements = document.forms.input;


  const person = new Person({
    sex: formElements.sex.value,
    height: formElements.height.value,
    weight: formElements.weight.value,
    shoulder: formElements.shoulder.value,
    bust: formElements.bust.value,
    waist: formElements.waist.value,
    hip: formElements.hip.value,
    rise:formElements.rise.value,
    inseam: formElements.inseam.value,
  });

  const fit = new showFittCircle()
  

  // ここに#buttonをクリックしたら発生させる処理を記述する
  var cvs = document.createElement("canvas");
  cvs.width = 1000;
  cvs.height = 1000;
  cvs.style = "border:4px solid";
  document.getElementById("container").appendChild(cvs);
  var ctx = cvs.getContext("2d");

  ctx.translate(cvs.width/2,cvs.height/2);

  /* ここから描画処理 */ //入力文字列を蓄積

  const svg = document.querySelector("svg");

  const SIZE = 600;

  const shirt = new Cloth({
    height: 75,
    width: 60,
    kind: formElements.cloth_type.value,
  });

  //身長の変更
  height = formElements.height.value;
  p = height/170;
  ctx.translate(110*1/3*(height-170)/10,-130*1/3*(height-170)/10);
  ctx.scale(1.0+(p-1)*0.3,1.0+p-1);
  person.draw(ctx);
  //shirt.draw(ctx);

  //服の位置ずれ補正&サイズ変更
  var size = formElements.cloth_size.value;
  if(size == 's'){
    var i=0.90;
    var x=0.90;
    var y=0.95;
  } else if(size=='m') {
    var i=1.0;
    var x=1.0;
    var y=1.0;
  } else {
    var i=1.1;
    var x=1.1;
    var y=1.1*0.95;
  }
  console.log(size);

  console.log(i);

  ctx.translate(-360*x, -660*y);
  ctx.scale(i,i);
  shirt.draw(ctx);


  /*q=0.085
  r=0.15
  ctx.translate(-34.5*q*10, -36*r*10);
  ctx.scale(1.0+q,1.0+r);
  shirt.draw(ctx);*/

  /*const jedge = new jedge({
    sex: formElements.sex.value,
    height: formElements.height.value,
    weight: formElements.weight.value,
    shoulder: formElements.shoulder.value,
    bust: formElements.bust.value,
    waist: formElements.waist.value,
    hip: formElements.hip.value,
    rise:formElements.rise.value,
    inseam: formElements.inseam.value,
  });
**/
  /*
  //chestLine
  ctx.beginPath();
  ctx.strokeStyle = person.judge(80,90,100);
  ctx.moveTo(0, 450);
  ctx.lineTo(650,450);
  ctx.stroke();

  //waistLine
  ctx.beginPath();
  ctx.strokeStyle = person.judge(80,90,80);
  ctx.moveTo(0, 550);
  ctx.lineTo(650,550);
  ctx.stroke();
  */
  ctx.strokeStyle = fit.drawFittCircle(ctx,280,360,300,420,person.judge(49*i-3,49*i+3,person.shoulder));//肩幅
  ctx.strokeStyle = fit.drawFittCircle(ctx,415,360,435,420,person.judge(49*i-3,49*i+3,person.shoulder));//肩幅2
  
};
