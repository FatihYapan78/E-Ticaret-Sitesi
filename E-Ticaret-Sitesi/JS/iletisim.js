let buton = document.getElementById("buton");
      
      buton.onclick = function(){
      let isim = document.querySelector(".isim").value;
      let posta = document.querySelector(".mail").value;
      let mesaj = document.querySelector(".mesaj").value;
        if(isim==""){
          alert("Ad-Soyad kısmını doldurmak zorunludur!");
        }
        else if(posta==""){
          alert("Mail Adresi kısmını doldurmak zorunludur!");
        }
        else if(!posta.includes("@")){
          alert("Mail adresi @ içermelidir!");
        }
        else if(mesaj==""){
          alert("Mesaj kısmı boş bırakılamaz!");
        }
      }