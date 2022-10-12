//4.KISIM
//Biz icona tıkladığımız zaman arkaplanın değişmesini istiyoruz. Bu yüzden body ve textimizi JS'ye tanıtmamız gerekir. Bunuda aşağıdaki gibi uygularız.
const body = document.querySelector('body');
const text = document.querySelector('.text');

const icons = document.querySelector('.fa');
const buttons = document.querySelector('.buttons');


buttons.addEventListener('click' ,()=>{  //click diyeceğim, bu işlemleri yap.

    icons.classList.toggle('dark'); //Buradaki toggle isimli fonksiyon, içinde dark varsa eklemiyor, dark yoksa ekliyor. Sürekli 1 ve 0 sonuçlarını döndürüyor.
     if(icons.classList.contains('dark')) { //contains burada yazdığımız class'ın olup/olmadığını ifade ettiriyor.
        body.style = "background-color:black ; color:white";
        icons.classList.remove('fa-sun-o'); //geceye döndüğü için iconu değiştiririz
        icons.classList.add('fa-moon-o');
     }
     else {
        body.style = "background-color:white ; color:black";
        icons.classList.remove('fa-moon-o'); //geceye döndüğü için iconu değiştiririz
        icons.classList.add('fa-sun-o');
     }
   // body.style = "background-color:black; color:white";
});

