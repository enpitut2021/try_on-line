class ShirtDrawer {
  draw(ctx) {
    ctx.moveTo(360,345.27);
    ctx.lineTo(321.98,340.8);
    ctx.lineTo(344.67,358.06);
    ctx.lineTo(373.16,358.06);
    ctx.lineTo(396.39,340.8);
    ctx.lineTo(360,345.27);
    ctx.lineTo(360,345.27);
    ctx.moveTo(359.19,369.81);
    ctx.lineTo(373.19,358.06);
    ctx.moveTo(344.67,358.06);
    ctx.lineTo(355.63,366.93);
    ctx.lineTo(359.19,369.81);
    ctx.moveTo(312.72,354.66);
    ctx.lineTo(339.05,382.45);
    ctx.lineTo(355.63,366.93);
    ctx.lineTo(321.98,340.8);
    ctx.lineTo(312.72,354.66);
    ctx.lineTo(312.72,354.66);
    ctx.moveTo(406.3,354.86);
    ctx.lineTo(379.54,382.45);
    ctx.lineTo(362.89,366.7);
    ctx.lineTo(396.39,340.8);
    ctx.lineTo(406.3,354.86);
    ctx.lineTo(406.3,354.86);
    ctx.moveTo(339.05,382.45);
    ctx.lineTo(355.63,366.93);
    ctx.lineTo(321.98,340.8);
    ctx.lineTo(312.72,354.66);
    ctx.lineTo(339.05,382.45);
    ctx.lineTo(339.05,382.45);
    ctx.moveTo(114,527.57);
    ctx.lineTo(143.65,554.8900000000001);
    ctx.lineTo(266.11,455);
    ctx.translate(45.8601050919722,407.09234097764016);
    ctx.arc(0,0,225.4,0.2141788078243478,0.0009656568597491144,1);
    ctx.translate(-45.8601050919722,-407.09234097764016);
    ctx.bezierCurveTo(271.26,380.89,262.84999999999997,369.81,262.84999999999997,369.81);
    ctx.lineTo(312.71999999999997,354.66);
    ctx.lineTo(339.04999999999995,382.45000000000005);
    ctx.lineTo(355.62999999999994,366.93000000000006);
    ctx.lineTo(354.3399999999999,676.72);
    ctx.lineTo(363.7399999999999,676.72);
    ctx.lineTo(362.8899999999999,366.72);
    ctx.moveTo(262.85,369.81);
    ctx.lineTo(94.68,547.81);
    ctx.moveTo(122.39,572.29);
    ctx.lineTo(143.66,554.89);
    ctx.lineTo(114.01,527.58);
    ctx.moveTo(94.68,547.21);
    ctx.lineTo(122.39,572.3);
    ctx.moveTo(266.11,455);
    ctx.bezierCurveTo(266.11,455,267.86,499.73,268.76,536.2);
    ctx.bezierCurveTo(268.76,536.2,263.13,661.6,263.13,661.6);
    ctx.bezierCurveTo(263.13,661.6,290.69,661.45,301.25,666.73);
    ctx.bezierCurveTo(301.25,666.73,354.34000000000003,676.73,354.34000000000003,676.73);
    ctx.moveTo(622.15,545.38);
    ctx.lineTo(593.62,572.3);
    ctx.moveTo(604.17,527.57);
    ctx.lineTo(622.15,545.38);
    ctx.moveTo(406.3,354.86);
    ctx.lineTo(455,369.81);
    ctx.lineTo(604.17,527.57);
    ctx.lineTo(574.26,556.32);
    ctx.lineTo(593.62,572.32);
    ctx.lineTo(451.51,455);
    ctx.bezierCurveTo(451.51,455,449.76,499.73,448.86,536.2);
    ctx.bezierCurveTo(448.86,536.2,454.49,661.6,454.49,661.6);
    ctx.bezierCurveTo(454.49,661.6,426.93,661.45,416.37,666.73);
    ctx.bezierCurveTo(416.37,666.73,363.28,676.73,363.28,676.73);
    ctx.moveTo(454.61,369.92);
    ctx.bezierCurveTo(454.61,369.92,449.55,383.31,448.81,404.15000000000003);
    ctx.bezierCurveTo(448.81,404.15000000000003,451.57,455.06000000000006,451.57,455.06000000000006);
    ctx.moveTo(359.19,403.81);
    ctx.arc(359.19,403.81,3.38,0,6.283185307179586,true);
    ctx.arc(359.19,435.01,3.38,0,6.283185307179586,true);
    ctx.arc(359.19,466.41,3.38,0,6.283185307179586,true);
    ctx.arc(359.19,499.38,3.38,0,6.283185307179586,true);
    ctx.arc(359.19,531.63,3.38,0,6.283185307179586,true);
    ctx.arc(359.19,563.89,3.38,0,6.283185307179586,true);
    ctx.arc(359.08,593.92,3.38,0,6.283185307179586,true);
    ctx.arc(359.19,627.89,3.38,0,6.283185307179586,true);
    ctx.moveTo(360,345.27);
  }
}

class Shirt {
    // クラスの定義
    constructor(params) {
      //必須入力
      this.height = params.height;
      this.width = params.width;
      //任意入力または必須入力からのオートフィル
      
  
      this.drawer =  new ShirtDrawer();
    }

    draw(ctx) {
        ctx.translate(0, 0);
        ctx.beginPath();
        this.drawer.draw(ctx);
        ctx.closePath();
        ctx.stroke();
      }
}



