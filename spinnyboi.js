window.onload=function(){
  document.querySelector('.button').addEventListener('click', function() {
    var randomRevolution = 1080 + Math.floor(Math.random() * 1800)
    console.log(randomRevolution);
    document.querySelector(".wheel").style.transition = "transform 5s"
    document.querySelector(".wheel").style.transform = "rotate(" + randomRevolution + "deg)"
  });
}
