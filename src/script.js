function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas`;
  if (hora >= 0 && hora <= 12) {
    //Bom Dia
    img.src = "fotomanha.jpg";
    document.body.style.background = "#FFA500";
  } else if (hora >= 12 && hora <= 18) {
    //Boa Tarde
    img.src = "fototarde.jpg";
    document.body.style.background = "#EEB4B4";
  } else {
    //Boa Noite
    img.src = "fotonoite.jpg";
    document.body.style.background = "#363636";
  }
}
