class PersonDrawer {
  drawRightArm(ctx, person) {
    ctx.moveTo(73.13, -280);
    ctx.lineTo(70.13, -232.72);
    ctx.bezierCurveTo(70.13, -232.72, 79.28, -229.37, 103.32, -204.72);
    ctx.bezierCurveTo(103.32, -204.72, 142.03, -161.82, 152.68, -151.42);
    ctx.bezierCurveTo(152.68, -151.42, 221.49, -90.05, 236.68, -71.16);
    ctx.bezierCurveTo(236.68, -71.16, 268.41, -25.75, 275.08, -30.24);
    ctx.bezierCurveTo(281.75, -34.73, 258, -50.87, 262, -53.68);
    ctx.bezierCurveTo(274.06, -62.01, 291.66, -6.02, 303.25, -12.31);
    ctx.bezierCurveTo(314.84, -18.60, 294, -57.77, 283.62, -67.1);
    ctx.bezierCurveTo(273.24, -76.43, 249.93, -91.46, 249.93, -91.46);
    ctx.bezierCurveTo(249.93, -91.46, 193.59, -167.78, 185.27, -175.26);
    ctx.bezierCurveTo(176.95, -182.74, 147.77, -219.88, 134.70, -233.6);
    ctx.bezierCurveTo(121.63, -247.32, 95.49, -272.58, 73.13, -280);
  }

  drawHead(ctx,person) {
    ctx.moveTo(27.36, -311.71)
    ctx.lineTo(25.31, -325)
    ctx.bezierCurveTo(25.31, -325, 29.82, -328.2, 34.49, -336.24);
    ctx.arc(-12.031, -363.12, 53.73, 0.5239828137750527, 0.21251863291250844, 1);
    ctx.bezierCurveTo(40.49, -351.79, 50.31, -357.93, 50.57, -366.79);
    ctx.bezierCurveTo(50.57, -371.79, 45.05, -376, 45.05, -376);
    ctx.bezierCurveTo(45.05, -376, 48.79, -395.07, 38.15, -411.67);
    ctx.bezierCurveTo(27.51, -428.27, 0, -427.28, 0, -427.28);
    ctx.bezierCurveTo(0, -427.28, -27.56, -428.23, -38.19, -411.62);
    ctx.bezierCurveTo(-48.82, -395.01, -45.09, -375.95, -45.09, -375.95);
    ctx.bezierCurveTo(-45.09, -375.95, -50.87, -375.56, -50.61, -366.74);
    ctx.bezierCurveTo(-50.35, -357.92, -40.53, -351.74, -40.53, -351.74);//
    ctx.arc(11.991, -363.07, 53.73, 2.9290740206772856, 2.617609839814741, 1);
    ctx.bezierCurveTo(-29.86, -328.19, -25.35, -324.95, -25.35, -324.95);
    ctx.lineTo(-27.4, -311.67);
  }

  drawLeftArm(ctx, person) {
    ctx.moveTo(-73.36, -280);
    ctx.lineTo(-70.36, -232.72);
    ctx.bezierCurveTo(-70.36, -232.72, -79.5, -229.37, -103.55, -204.72);
    ctx.bezierCurveTo(-103.55, -204.72, -142.25, -161.82, -152.91, -151.42);
    ctx.bezierCurveTo(-152.91, -151.42, -221.71, -90.05, -236.91, -71.16);
    ctx.bezierCurveTo(-236.91, -71.16, -268.64, -25.75, -275.31, -30.24);
    ctx.bezierCurveTo(-285.31, -30.24, -258.24, -50.92, -262.31, -53.73);
    ctx.bezierCurveTo(-274.33, -62, -291.92, -9, -303.52, -12.31);
    ctx.bezierCurveTo(-315.12, -18.62, -294.22, -57.77, -283.86, -67.1);
    ctx.bezierCurveTo(-273.5, -76.43, -250.16, -91.46, -250.16, -91.46);
    ctx.bezierCurveTo(-250.16, -91.46, -193.83, -167.78, -185.5, -175.26);
    ctx.bezierCurveTo(-177.17, -182.74, -148, -219.88, -134.94, -233.6);
    ctx.bezierCurveTo(-121.88, -247.32, -95.72, -272.58, -73.36, -280);
  }

  drawBody(ctx, person) {
    //(シルエット上)*canvas上でのウエスト長
    var waist = (person.waist*0.4)*4.2;

    ctx.moveTo(-waist/2, -103.09);
    ctx.bezierCurveTo(-62.91, -127.91, -68.2, -175.27, -68.2, -175.27);
    ctx.bezierCurveTo(-68.2, -175.27, -69.38, -191.98, -69.38, -203.5);
    ctx.bezierCurveTo(-69.38, -215.02, -70.38, -232.21, -70.38, -232.21);
    ctx.lineTo(-74, -279.8);
    ctx.bezierCurveTo(-74, -279.8, -37.82, -291.07, -32.44, -297.17);
    ctx.bezierCurveTo(-32.44, -297.17, -27.25, -311.71, -27.25, -311.711);
    ctx.lineTo(27.27, -311.71);
    ctx.bezierCurveTo(27.27, -311.71, 27.09, -303.27, 32.46, -297.17);
    ctx.bezierCurveTo(37.83, -291.07, 74, -279.8, 74, -279.8);
    ctx.lineTo(70.34, -232.21);
    ctx.bezierCurveTo(70.34, -232.21, 69.34, -215.02, 69.34, -203.5);
    ctx.bezierCurveTo(69.34, -203.5, 68.16, -175.27, 68.16, -175.27);
    ctx.bezierCurveTo(68.16, -175.27, 62.9, -127.91, waist/2, -103.09);
  }

  drawLeg(ctx,person) {
    //(シルエット上)*canvas上でのウエスト長
    var waist = (person.waist*0.4)*4.2;
    var hip = (person.hip*0.4)*4.2;
        
    ctx.moveTo(hip*1.01/2, 83.36);
    ctx.bezierCurveTo(hip*1.1/2, 40.63, hip*1.08/2, 10.36, hip/2, -20.19);//left_hip
    ctx.bezierCurveTo(hip/2, -46.74, hip*0.9/2, -76.14, waist*5/14 + hip*2/14, -85.14);
    // ctx.arc(103.386, -97.625, 40.87, 2.831, 3.277, 0);
    ctx.bezierCurveTo(waist*3/10+hip/5, -90, waist*3/8 + hip/8, -96, waist/2, -103.14);//足とおなかの付け根の部分
    ctx.lineTo(-waist/2, -103.14);//右のウエストから左のウエストの部分へ
    ctx.bezierCurveTo(-waist*3/8 - hip/8, -96, -waist*3/10-hip/5, -90, -waist*5/14 - hip*2/14, -85.14);
    // ctx.arc(-103.386, -97.625, 40.87, -0.135, 0.310, 0);
    ctx.bezierCurveTo(-hip*0.9/2, -76.14, -hip/2, -46.71, -hip/2, -20.19);//right_hip
    ctx.bezierCurveTo(-hip*1.08/2, 10.33, -hip*1.1/2, 40.63, -hip*1.01/2, 83.36);
    ctx.bezierCurveTo(-hip*0.91/2, 126.09, -hip*0.8/2, 121.83, -hip*0.81/2, 159.47);//膝
    ctx.bezierCurveTo(-hip*0.74/2, 197.11, -hip*0.83/2, 201.9, -hip*0.775/2, 239.56);
    ctx.bezierCurveTo(-hip*0.7/2, 277.22, -28.38, 338.88, -33.09, 362.41);
    ctx.bezierCurveTo(-37.8, 385.94, -66.75, 405.56, -55.82, 406.13);
    ctx.bezierCurveTo(-44.89, 406.7, -3.87, 410.64, -5.82, 399.68);
    ctx.bezierCurveTo(-7.77, 388.72, -11.82, 380.68, -12.34, 360.49);
    ctx.bezierCurveTo(-12.86, 340.3, -6.45, 264.49, -5.95, 235.3);
    ctx.bezierCurveTo(-5.45, 206.11, -15.52, 175.91, -16.05, 157.35);
    ctx.bezierCurveTo(-16.58, 138.79, -5.53, 112.8, -5.75, 82.57);
    ctx.bezierCurveTo(-5.97, 52.34, 0, 11.19, 0, 11.19);
    ctx.bezierCurveTo(0, 11.19, 5.93, 52.34, 5.71, 82.57);
    ctx.bezierCurveTo(5.49, 112.8, 16.54, 138.79, 16.01, 157.35);
    ctx.bezierCurveTo(15.48, 175.91, 5.4, 206.15, 5.91, 235.3);
    ctx.bezierCurveTo(6.42, 264.45, 12.83, 340.3, 12.3, 360.49);
    ctx.bezierCurveTo(11.77,380.68, 7.71, 388.73, 5.78, 399.68);
    ctx.bezierCurveTo(3.85, 410.63, 44.87, 406.68, 55.78, 406.13);
    ctx.bezierCurveTo(66.69, 405.58, 37.78, 385.95, 33.05, 362.41);
    ctx.bezierCurveTo(28.32, 338.87, hip*0.7/2, 277.22, hip*0.775/2, 239.56);
    ctx.bezierCurveTo(hip*0.83/2, 201, hip*0.74/2, 197.11, hip*0.81/2, 159.47);//膝
    ctx.bezierCurveTo(hip*0.8/2, 121.83, hip*0.91/2, 126.09, hip*1.01/2, 83.36);

    //次のスプリントでやること
    //bmiの大きさに対する足の太さの増加量が著しすぎる。⇒もっと緩やかな影響を与えられるように改良

  }
}

class Person {
  // クラスの定義
  constructor(params) {
    //必須入力
    this.sex = params.sex;
    this.height = params.height;
    this.weight = params.weight;
    var bmi = this.weight/(this.height/100)**2;
    console.log(bmi)
    //任意入力または必須入力からのオートフィル
    if (this.sex == "male") {
      this.shoulder = params.shoulder || bmi*2.12; //肩幅
      this.bust = params.bust || bmi*4.1;
      this.waist = params.waist || -0.47*this.height+0.80*this.weight+105.82;
      this.hip = params.hip || 63.2+0.45*person.weigth;//ヒップに身長の影響はほぼなし（16センチ差でも±1cm程度)
      this.rise = params.rise || this.height*0.18; //股上
      this.inseam = params.inseam || this.height*0.4; //股下
    } else {
      this.shoulder = params.shoulder || bmi*2.12; //肩幅
      this.bust = params.bust || bmi*4.6;
      this.waist = params.waist || -0.35*this.height+0.79*this.weight+84.4;
      this.hip = params.hip || 59.1+0.61*this.weight;
      this.rise = params.rise || this.height*0.18;
      this.inseam = params.inseam || this.height*0.4;
    }

    this.drawer = new PersonDrawer();
  }

  draw(ctx) {
    console.log(this)
    ctx.fillStyle = "#808080";
    ctx.beginPath();
    this.drawer.drawHead(ctx,this);
    this.drawer.drawLeftArm(ctx,this);
    this.drawer.drawRightArm(ctx,this);
    this.drawer.drawBody(ctx,this);
    this.drawer.drawLeg(ctx,this);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  //var me = this; // インスタンス自身への参照を定義

  //   var sex ;
  //   var height = 169;
  //   var weight = 60;
  //   var shoulder = 44;
  //   var bust = 85;
  //   var waist = 72;
  //   var hip = 91;
  //   var rise = 30;
  //   var inseam = 69;
}
