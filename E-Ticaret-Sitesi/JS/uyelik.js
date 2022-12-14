// Üye Ol
let ol = document.querySelector(".buton2");

ol.onclick = function(){
  let mail2 = document.getElementById("mail2").value;
  let sifre2 = document.getElementById("sifre2").value;
  let sifre3 = document.getElementById("sifre3").value;

  if(mail2==""){
    alert("E-Posta kısmını doldumak zorunludur!")
  }
  else if(!mail2.includes("@")){
    alert("Mail @ içermelidir!")
  }
  else if(sifre2==""){
    alert("Şifre kısmı boş bırakılamaz!")
  }
  else if(sifre2.lenght > 3){
    alert("Şifre 3 karakterden kısa olamaz!")
  }
  else if(sifre2!=sifre3){
    alert("Şifreler uyumsuz! Tekrar Deneyin!")
  }
  else if(sifre2==sifre3){
    alert("Üyelik oluşturuldu!")
  }
}
// Üye Girişi
let giris = document.querySelector(".buton");


giris.onclick =function(){
  let mail = document.getElementById("mail").value;
  let sifre = document.getElementById("sifre").value;
  let yenisifre = sifre2;

  if(mail==""){
    alert("E-Posta kısmını doldumak zorunludur!")
  }
  else if(!mail.includes("@")){
    alert("Mail @ içermelidir!")
  }
  else if(sifre==""){
    alert("Şifre kısmı boş bırakılamaz!")
  }
  else if(yenisifre!= sifre){
    alert("Hatalı şifre girdiniz!")
  }
}
