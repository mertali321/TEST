var ayran =
{
    isim: "Ayran",
    tur: "Yörsel İçeçek",
    fiyat: 25 + "TL"
}
var turkkahvesi =
{
    isim: "Türk Kahvesi",
    tur: "Yörsel İçeçek",
    fiyat: 40 + "TL"
}
var gazliicecekler =
{
    isim: "Gazlı içeçekler",
    tur: "Yörsel İçeçek",
    fiyat: 35 + "TL"
}
var su =
{
    isim: "Su",
    tur: "Yörsel İçeçek",
    fiyat: 10 + "TL"
}
var cay =
{
    isim: "Çay",
    tur: "Yörsel İçeçek",
    fiyat: 10 + "TL"
}
var srp =
{
    isim: "Serpme Köy Kahvaltısı",
    tur: "Yörsel İçeçek",
    fiyat: 350+"TL"
}
var klasik_k =
{
    isim: "Klasik Kahvaltı",
    tur: "Yörsel İçeçek",
    fiyat: 150+"TL"
}
const srp_fi = document.querySelector("#skk-fiyat")
const kk_fi = document.querySelector("#k-kahvalti")
const turk_k = document.querySelector("#turkishcoffe")
const gazli = document.querySelector("#gazli")
const suuu = document.querySelector("#su")
const cay_tur = document.querySelector("#cay")
const trayran = document.querySelector("#ayran")
const write = ()=>{
srp_fi.textContent = srp.fiyat;
kk_fi.textContent = klasik_k.fiyat;
turk_k.textContent = turkkahvesi.fiyat;
gazli.textContent = gazliicecekler.fiyat;
suuu.textContent = su.fiyat;
cay_tur.textContent = cay.fiyat;
trayran.textContent = ayran.fiyat
}
write();
/*var icecekler1 = [ayran, turkkahvesi, gazliicecekler, su, cay]
const ayran1 = document.querySelector("#ayran")
const turkKah = document.querySelector("#turkishcoffe")
const gaz = document.querySelector("#gazliIcecekler")
const hayat = document.querySelector("#hayat")
const turk = document.querySelector("#cay")
const cikti = document.querySelector("#test")
const admingiris = document.querySelector("#admin")
let secim = "";
let sonuc = "";
let sunucu = null;
Bulma function ı ile secim le icecek eşleştirilip fiyatı ve ismini ekrana aktarıyor
const bulma = ()=> {
    for (let i = 0; icecekler1.length > i; i++) {
        console.log(icecekler1[i].isim)
        console.log(secim)

        if (icecekler1[i].isim == secim) {
            var isim = icecekler1[i].isim;
            var fiyat = icecekler1[i].fiyat;
            cikti.textContent = icecekler1[i].isim + ":" + icecekler1[i].fiyat;
            localStorage.setItem(secim,isim+":"+fiyat)
            break;
        }
    }
}
ayran1.addEventListener("click", ayranIcecek)
turkKah.addEventListener("click", kahfeIcecek)
gaz.addEventListener("click", gazliIcecek)
hayat.addEventListener("click", sufunction)
turk.addEventListener("click", cayfunction)
function ayranIcecek(e) {
    secim = "Ayran"
    bulma();
}
function kahfeIcecek(e) {
    secim = "Türk Kahvesi"
    bulma();
}
function gazliIcecek(e) {
    secim = "Gazlı içeçekler"
    bulma();
}
function sufunction(e) {
    secim = "Su"
    bulma();
}
function cayfunction(e) {
    secim = "Çay"
    bulma();
}
*/


