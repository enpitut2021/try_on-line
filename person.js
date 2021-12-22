class PersonDrawer {
  drawLeftArm(ctx) {
    ctx.moveTo(433.13, 370);
    ctx.lineTo(430.13, 417.28);
    ctx.bezierCurveTo(430.13, 417.28, 439.28, 420.63, 463.32, 445.28);
    ctx.bezierCurveTo(463.32, 445.28, 502.03, 488.17999999999995, 512.68, 498.58);
    ctx.bezierCurveTo(512.68, 498.58, 581.49, 559.9499999999999, 596.68, 578.84);
    ctx.bezierCurveTo(596.68, 578.84, 628.41, 624.25, 635.0799999999999, 619.76);
    ctx.bezierCurveTo(641.7499999999999, 615.27, 618, 599.13, 622, 596.32);
    ctx.bezierCurveTo(634.06, 587.99, 651.66, 643.98, 663.25, 637.69);
    ctx.bezierCurveTo(674.84, 631.4000000000001, 654, 592.23, 643.62, 582.9);
    ctx.bezierCurveTo(633.24, 573.5699999999999, 609.9300000000001, 558.54, 609.9300000000001, 558.54);
    ctx.bezierCurveTo(609.9300000000001, 558.54, 553.59, 482.21999999999997, 545.2700000000001, 474.73999999999995);
    ctx.bezierCurveTo(536.9500000000002, 467.25999999999993, 507.7700000000001, 430.11999999999995, 494.7000000000001, 416.4);
    ctx.bezierCurveTo(481.6300000000001, 402.68, 455.49, 377.42, 433.13, 370);
  }

  drawHead(ctx) {
    ctx.moveTo(387.36, 338.29);
    ctx.lineTo(385.31, 325);
    ctx.bezierCurveTo(385.31, 325, 389.82, 321.8, 394.49, 313.76);
    ctx.translate(347.9687756713869, 286.87713209185347);
    ctx.arc(0, 0, 53.73, 0.5239828137750527, 0.21251863291250844, 1);
    ctx.translate(-347.9687756713869, -286.87713209185347);
    ctx.bezierCurveTo(400.49, 298.21, 410.31, 292.07, 410.57, 283.21);
    ctx.bezierCurveTo(410.57, 278.21, 405.05, 274, 405.05, 274);
    ctx.bezierCurveTo(405.05, 274, 408.79, 254.93, 398.15000000000003, 238.32999999999998);
    ctx.bezierCurveTo(387.51000000000005, 221.72999999999996, 360, 222.72, 360, 222.72);
    ctx.bezierCurveTo(360, 222.72, 332.44, 221.77, 321.81, 238.38);
    ctx.bezierCurveTo(311.18, 254.98999999999998, 314.91, 274.05, 314.91, 274.05);
    ctx.bezierCurveTo(314.91, 274.05, 309.13000000000005, 274.44, 309.39000000000004, 283.26);
    ctx.bezierCurveTo(309.65000000000003, 292.08, 319.47, 298.26, 319.47, 298.26);
    ctx.translate(371.99122432861316, 286.9271320918534);
    ctx.arc(0, 0, 53.73, 2.9290740206772856, 2.617609839814741, 1);
    ctx.translate(-371.99122432861316, -286.9271320918534);
    ctx.bezierCurveTo(330.14000000000004, 321.81, 334.65000000000003, 325.05, 334.65000000000003, 325.05);
    ctx.lineTo(332.6, 338.33);
  }

  drawRightArm(ctx) {
    ctx.moveTo(286.64, 370);
    ctx.lineTo(289.64, 417.28);
    ctx.bezierCurveTo(289.64, 417.28, 280.5, 420.63, 256.45, 445.28);
    ctx.bezierCurveTo(256.45, 445.28, 217.75, 488.17999999999995, 207.08999999999997, 498.58);
    ctx.bezierCurveTo(207.08999999999997, 498.58, 138.27999999999997, 559.9499999999999, 123.08999999999997, 578.84);
    ctx.bezierCurveTo(123.08999999999997, 578.84, 91.35999999999997, 624.25, 84.68999999999997, 619.76);
    ctx.bezierCurveTo(74.68999999999997, 619.76, 101.75999999999996, 599.08, 97.68999999999997, 596.27);
    ctx.bezierCurveTo(85.67, 588, 68.08, 644, 56.48, 637.69);
    ctx.bezierCurveTo(44.879999999999995, 631.3800000000001, 65.78, 592.23, 76.14, 582.9000000000001);
    ctx.bezierCurveTo(86.5, 573.5700000000002, 109.84, 558.5400000000001, 109.84, 558.5400000000001);
    ctx.bezierCurveTo(109.84, 558.5400000000001, 166.17000000000002, 482.2200000000001, 174.5, 474.74000000000007);
    ctx.bezierCurveTo(182.82999999999998, 467.26000000000005, 212, 430.12000000000006, 225.06, 416.4000000000001);
    ctx.bezierCurveTo(238.12, 402.6800000000001, 264.28, 377.42, 286.64, 370);
  }

  drawBody(ctx) {
    ctx.moveTo(297.09, 546.91);
    ctx.bezierCurveTo(297.09, 522.0899999999999, 291.79999999999995, 474.72999999999996, 291.79999999999995, 474.72999999999996);
    ctx.bezierCurveTo(291.79999999999995, 474.72999999999996, 290.61999999999995, 458.02, 290.61999999999995, 446.49999999999994);
    ctx.bezierCurveTo(
      290.61999999999995,
      434.9799999999999,
      289.61999999999995,
      417.78999999999996,
      289.61999999999995,
      417.78999999999996
    );
    ctx.lineTo(286, 370.2);
    ctx.bezierCurveTo(286, 370.2, 322.18, 358.93, 327.56, 352.83);
    ctx.bezierCurveTo(327.56, 352.83, 332.75, 338.28999999999996, 332.75, 338.28999999999996);
    ctx.lineTo(387.27, 338.28999999999996);
    ctx.bezierCurveTo(387.27, 338.28999999999996, 387.09, 346.72999999999996, 392.46, 352.83);
    ctx.bezierCurveTo(397.83, 358.93, 434, 370.2, 434, 370.2);
    ctx.lineTo(430.34, 417.78999999999996);
    ctx.bezierCurveTo(430.34, 417.78999999999996, 429.34, 434.97999999999996, 429.34, 446.49999999999994);
    ctx.bezierCurveTo(429.34, 446.49999999999994, 428.15999999999997, 474.72999999999996, 428.15999999999997, 474.72999999999996);
    ctx.bezierCurveTo(428.15999999999997, 474.72999999999996, 422.9, 522.0899999999999, 422.86999999999995, 546.91);
  }

  drawLeg(ctx) {
    ctx.moveTo(437.25, 733.36);
    ctx.bezierCurveTo(446.05, 690.63, 442.81, 660.36, 442.25, 631.8100000000001);
    ctx.bezierCurveTo(441.69, 603.2600000000001, 427.57, 573.8100000000001, 424.47, 564.86);
    ctx.translate(463.38623764001824, 552.3746746960429);
    ctx.arc(0, 0, 40.87, 2.831140976845075, 3.276937583346361, 0);
    ctx.translate(-463.38623764001824, -552.3746746960429);
    ctx.lineTo(297.11, 546.86);
    ctx.translate(256.6137623599819, 552.3746746960429);
    ctx.arc(0, 0, 40.87, -0.13534492975656817, 0.3104516767447181, 0);
    ctx.translate(-256.6137623599819, -552.3746746960429);
    ctx.bezierCurveTo(292.43, 573.86, 278.32000000000005, 603.29, 277.75, 631.8100000000001);
    ctx.bezierCurveTo(277.17999999999995, 660.3300000000002, 273.95, 690.6300000000001, 282.75, 733.36);
    ctx.bezierCurveTo(291.55, 776.0899999999999, 299.58, 771.83, 301.03, 809.47);
    ctx.bezierCurveTo(302.47999999999996, 847.11, 294.13, 851.9, 298.90999999999997, 889.5600000000001);
    ctx.bezierCurveTo(303.68999999999994, 927.2200000000001, 331.61999999999995, 988.8800000000001, 326.90999999999997, 1012.4100000000001);
    ctx.bezierCurveTo(322.2, 1035.94, 293.25, 1055.5600000000002, 304.17999999999995, 1056.13);
    ctx.bezierCurveTo(315.1099999999999, 1056.7, 356.12999999999994, 1060.64, 354.17999999999995, 1049.68);
    ctx.bezierCurveTo(352.22999999999996, 1038.72, 348.17999999999995, 1030.68, 347.65999999999997, 1010.49);
    ctx.bezierCurveTo(347.14, 990.3, 353.54999999999995, 914.49, 354.04999999999995, 885.3);
    ctx.bezierCurveTo(354.54999999999995, 856.1099999999999, 344.47999999999996, 825.91, 343.94999999999993, 807.3499999999999);
    ctx.bezierCurveTo(343.4199999999999, 788.7899999999998, 354.4699999999999, 762.8, 354.24999999999994, 732.5699999999999);
    ctx.bezierCurveTo(354.03, 702.3399999999999, 360, 661.19, 360, 661.19);
    ctx.bezierCurveTo(360, 661.19, 365.93, 702.34, 365.71, 732.57);
    ctx.bezierCurveTo(365.48999999999995, 762.8000000000001, 376.53999999999996, 788.7900000000001, 376.01, 807.35);
    ctx.bezierCurveTo(375.48, 825.91, 365.4, 856.15, 365.90999999999997, 885.3000000000001);
    ctx.bezierCurveTo(366.41999999999996, 914.4500000000002, 372.83, 990.3000000000001, 372.29999999999995, 1010.49);
    ctx.bezierCurveTo(371.7699999999999, 1030.6799999999998, 367.71, 1038.73, 365.78, 1049.68);
    ctx.bezierCurveTo(363.84999999999997, 1060.63, 404.87, 1056.68, 415.78, 1056.13);
    ctx.bezierCurveTo(426.68999999999994, 1055.5800000000002, 397.78, 1035.95, 393.04999999999995, 1012.4100000000001);
    ctx.bezierCurveTo(388.31999999999994, 988.8700000000001, 416.29999999999995, 927.22, 421.04999999999995, 889.5600000000001);
    ctx.bezierCurveTo(425.79999999999995, 851.9000000000001, 417.47999999999996, 847.11, 418.92999999999995, 809.47);
    ctx.bezierCurveTo(420.37999999999994, 771.83, 428.45, 776.09, 437.25, 733.36);
  }
}

class Person {
  // クラスの定義
  constructor(params) {
    //必須入力
    this.sex = params.sex;
    this.height = params.height;
    this.weight = params.weight;
    //任意入力または必須入力からのオートフィル
    this.shoulder = params.shoulder || params.height * 0.25; //肩幅
    //初期値は男女の理想体型（股上はテキトー）
    if (this.sex == "male") {
      this.bust = params.bust || params.height * 0.52;
      this.waist = params.waist || params.height * 0.43;
      this.hip = params.hip || params.height * 0.51;
      this.rise = params.rise || params.height * 0.1; //股上
      this.inseam = params.inseam || params.height * 0.456; //股下
    } else {
      this.bust = params.bust || params.height * 0.52;//トップバスト
      this.waist = params.waist || params.height * 0.38;
      this.hip = params.hip || params.height * 0.53;
      this.rise = params.rise || params.height * 0.1;
      this.inseam = params.inseam || params.height * 0.47;
    }

    this.drawer = new PersonDrawer();
  }

  draw(ctx) {
    ctx.fillStyle = "#808080";
    ctx.translate(0, -100);
    ctx.beginPath();
    this.drawer.drawHead(ctx);
    this.drawer.drawLeftArm(ctx);
    this.drawer.drawRightArm(ctx);
    this.drawer.drawBody(ctx);
    this.drawer.drawLeg(ctx);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  //var me = this; // インスタンス自身への参照を定義

  //   var sex ;
  //   var height = 169;
  //   var weight = 60;
  //   var shoulder = 44;
  //   var armlength = 56;
  //   var bust = 85;
  //   var waist = 72;
  //   var hip = 91;
  //   var rise = 30;
  //   var inseam = 69;


  //服のサイズを示す引数が一つしかない場合には引値を二つ持たすようにする
  judge(size_min,size_max,bodysize){//ウエストの判定,服のウエストを引数(size_minmax)//引数2つ
    var j = -1;// j = {0,キツイ},{1,タイトな感じ～},｛2,ちょうどいい},{3,ルーズフィット！},{4,ぶかぶか}
    bodysize += 4;//基準サイズ
    var size_avg = (size_min+size_max)/2;
    console.log(-1);
    //判定部
    if(bodysize<size_min) j = 0;
    else if(size_min<=bodysize&&bodysize< size_avg-1) j = 1;
    else if(bodysize>= size_avg-1&&bodysize<= size_avg+1) j = 2;
    else if(bodysize> size_avg+1&&bodysize<= size_max) j = 3;
    else if(bodysize> size_max) j = 4;
    console.log(j);
    var Message = '';
    var judgeColor = '';
    if(j==0) judgeColor ='blue';
    else if(j==1) judgeColor = 'aqua';
    else if(j==2) judgeColor = 'green';
    else if(j==3) judgeColor = 'yellow';
    else if(j==4) judgeColor = 'red';
    /*
    switch(j){
        case 4:
            Message = 'キツイ';
            judgeColor = 'red';
        case 3:
            Message = 'タイトな感じ!';
            judgeColor = 'yellow';
        case 2:
            Message = 'ちょうどいい';
            judgeColor = 'green';
        case 1:
            Message = 'ルーズフィット';
            judgeColor = 'aqua';
        case 0:
            Message = 'ぶかぶか';
            judgeColor ='blue';
    }*/
    console.log(judgeColor);
    return judgeColor;
  }
}


class showFittCircle{
  constructor(x1,y1,x2,y2,color){
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.color = color;
  }

  drawFittCircle(ctx){
    var center_x = (x1+x2)/2;
    var center_y = (y1+y2)/2;
    var w = Math.abs(x2-x1);
    var h = w*0.3;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(center_x,center_y,w,h,0,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
    }
}