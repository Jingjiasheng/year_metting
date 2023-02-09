var data = [
  //投奖数据
  "廖xx", "井xx", "鲍xx", "李XX", "牛XX", "毕X",
  "廖xx", "井xx", "鲍xx", "李XX", "牛XX", "毕X",
];

var oBtn = document.getElementById("start").children[0];
var oBox = document.getElementById("box");
var oC1 = document.getElementById("c1");
var ctx = oC1.getContext("2d");
var radius = oBox.offsetWidth / 2;

var angle = 0, //旋转的角度
  speed, // 旋转速度
  cut, //是否需要减速了
  timer1,
  timer2;
render(); //默认状态

oBtn.onclick = function () {
  clearInterval(timer1);
  clearInterval(timer2);
  speed = 10;
  cut = false;
  timer1 = setInterval(function () {
    var now = Date.now();
    if (cut && now - cut > 500) {
      //每500毫秒降一档速度
      speed--;
      cut = now;
    }
    angle += speed;
    oC1.style.transform = "rotate(" + (angle % 360) + "deg)";

    if (speed == 0) clearInterval(timer1);
  }, 60);
  timer2 = setTimeout(function () {
    //让子弹飞一会
    cut = Date.now();
  }, Math.random() * (6000 - 3000 + 1) + 3000); //随机时间
};

//画线和文字
function render() {
  ctx.clearRect(0, 0, 2 * radius, 2 * radius); //每次都清空画布 重新画

  //画红色底圆
  ctx.fillStyle = "rgb(109, 0, 148, 0.1)";
  ctx.beginPath(); //起始一条路径
  ctx.arc(radius, radius, radius, 0, Math.PI * 2, true); //创建弧
  ctx.closePath();
  ctx.fill(); //填充当前绘图（路径）

  ctx.translate(radius, radius); //重新映射画布上的 (0,0) 位置  映射到画布正中间
  ctx.lineWidth = 1; //线的宽度
  ctx.strokeStyle = "#fff"; //用于线条颜色
  ctx.fillStyle = "#d0d0d5"; //用于文字颜色
  ctx.font = "20px Georgia";
  ctx.textAlign = "center"; //根据Y轴居中
  var i = 0,
    l = data.length;
  ctx.rotate(Math.PI / l); //先旋转一次，可以让指针在文字中间
  for (i; i < l; i++) {
    //线条
    ctx.beginPath(); //起始一条路径
    ctx.moveTo(0, 0); //画直线的起点,从中心开始
    ctx.lineTo(0, -radius); //然后一直画到半径最边上
    ctx.stroke(); //绘制已定义的路径
    ctx.closePath(); //关闭路径
    ctx.rotate(Math.PI / l); //旋转当前画布  Math.PI=180度=30分钟=半圆   所以这里旋转一次是将半圆分成了六份  正好可以写文字，然后再旋转

    //文字
    ctx.fillText(data[i], 0, -radius + 60);
    ctx.rotate(Math.PI / l);
  }
}
