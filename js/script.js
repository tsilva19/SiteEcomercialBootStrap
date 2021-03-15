var banners = ["img/BANNER.png", "img/banner.jpg", "img/banner1.jpg", "img/banner2.jpg", "img/banner3.jpg"];
var bannerAtual = 0;

//função troca banner
function trocarBanner(){
    bannerAtual = (bannerAtual +1)%5;
  // acesso ao componente <img> da classe . destaque
    document.querySelector('.destaque img').src = banners[bannerAtual];


}

var timer = setInterval(trocarBanner, 1000);

var controle = document.querySelector('.pause');

controle.onclick = function(){
  if(controle.className == 'pause'){
    clearInterval(timer);

    controle.className = 'play';
  }else{

    timer = setInterval(trocarBanner, 1000);

    controle.className = 'pause';
  }

  return false;
}
