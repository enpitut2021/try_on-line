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
    var shoulder = (person.shoulder)*3.364;
    //左肩上接合部(-shoulder/2, -279.8)
    //

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
    var bust = (person.bust*0.4)*4.2;
    var shoulder = (person.shoulder)*3.364;

    ctx.moveTo(-waist/2, -103.09);
    ctx.bezierCurveTo(-(waist/2)*1.1, -127.91, -(waist/2)*1.15, -175.27, -(waist/2)*1.15, -175.27);
    ctx.bezierCurveTo(-(waist/2)*1.15, -175.27, -bust/2, -191.98, -bust/2, -203.5);
    ctx.bezierCurveTo(-bust/2, -215.02, -(shoulder/2)*0.95, -232.21, -(shoulder/2)*0.95, -232.21);
    ctx.lineTo(-shoulder/2, -279.8);
    ctx.bezierCurveTo(-shoulder/2, -279.8, -37.82, -291.07, -32.44, -297.17);
    ctx.bezierCurveTo(-32.44, -297.17, -27.25, -311.71, -27.25, -311.711);
    ctx.lineTo(27.27, -311.71);
    ctx.bezierCurveTo(27.27, -311.71, 27.09, -303.27, 32.46, -297.17);
    ctx.bezierCurveTo(37.83, -291.07, shoulder/2, -279.8, shoulder/2, -279.8);
    ctx.lineTo((shoulder/2)*0.95, -232.21);
    ctx.bezierCurveTo((shoulder/2)*0.95, -232.21, bust/2, -215.02, bust/2, -203.5);
    ctx.bezierCurveTo(bust/2, -195.5, (waist/2)*1.15, -175.27, (waist/2)*1.15, -175.27);
    ctx.bezierCurveTo((waist/2)*1.15, -175.27, (waist/2)*1.1, -127.91, waist/2, -103.09);
  }

  drawLeg(ctx,person) {
    //(シルエット上)*canvas上でのウエスト長
    var waist = (person.waist*0.4)*4.2;
    
    ctx.moveTo(77.25, 83.36);
    ctx.bezierCurveTo(86.05, 40.63, 82.81, 10.36, 82.25, -18.19);
    ctx.bezierCurveTo(81.69, -46.74, 67.57, -76.14, 64.47, -85.14);
    // ctx.arc(103.386, -97.625, 40.87, 2.831, 3.277, 0);
    ctx.bezierCurveTo(63, -90, 63.57, -96, waist/2, -103.14);
    ctx.lineTo(-waist/2, -103.14);
    ctx.bezierCurveTo(-63.57, -96, -63, -90, -64.47, -85.14);
    // ctx.arc(-103.386, -97.625, 40.87, -0.135, 0.310, 0);
    ctx.bezierCurveTo(-67.57, -76.14, -81.68, -46.71, -82.25, -18.19);
    ctx.bezierCurveTo(-82.82, 10.33, -86.05, 40.63, -77.25, 83.36);
    ctx.bezierCurveTo(-68.45, 126.09, -60.42, 121.83, -58.97, 159.47);
    ctx.bezierCurveTo(-57.52, 197.11, -65.87, 201.9, -61.09, 239.56);
    ctx.bezierCurveTo(-56.31, 277.22, -28.38, 338.88, -33.09, 362.41);
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
    ctx.bezierCurveTo(28.32, 338.87, 56.3, 277.22, 61.05, 239.56);
    ctx.bezierCurveTo(65.8, 201, 57.48, 197.11, 58.93, 159.47);
    ctx.bezierCurveTo(60.38, 121.83, 68.45, 126.09, 77.25, 83.36);
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
      this.waist = params.waist || bmi*3.47;
      this.hip = params.hip || bmi*4.38;
      this.rise = params.rise || this.height*0.18; //股上
      this.inseam = params.inseam || this.height*0.4; //股下
    } else {
      this.shoulder = params.shoulder || bmi*2.12; //肩幅
      this.bust = params.bust || bmi*4.6;
      this.waist = params.waist || bmi*3.47;
      this.hip = params.hip || bmi*4.38;
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
