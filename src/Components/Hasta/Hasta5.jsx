import img1 from "../images/hastafive1.png";
import img2 from "../images/hastafive2.png";
import img3 from "../images/hastafive3.png";
import img4 from "../images/hastafive4.png";

function Nine() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Epiretinal Membran(Erm=Sarı Noktada Zar){" "}
      </h1>
      <h2 className="text-xl font-bold mb-4">ERM Kimlerde ve nasıl olışur?</h2>

      <p className=" mb-4">
        Makula denilen sarı nokta retina tabakasının tam orta noktasında olup
        görme işlevinin meydana geldiği en önemli noktadır. Araba kullanmak ve
        okumak gibi görsel işlevler makula bölgesi sayesinde olur. ERM dediğimiz
        zarın en önemli oluşma nedeni yaşlılıktır. Yani yaşlandıkça retina
        yüzeyinde ve vitreus denilen göz jölesinde meydana gelen değişikler
        sonucunda makula bölgesinde ince bir zar meydana gelmektedir. 40
        yaşından sonra her sağlıklı bireyde görülebilen ERM 50 yaşında %2
        oranında görülürken 70 yaşında %20 oranında görülür. Genellikle tek
        taraflı olup %10 oranında ise çift taraflıdır.
      </p>
      <h2 className="text-xl font-bold mb-4">
        ERM meydana getiren diğer hastalıklar nelerdir?
      </h2>
      <p className=" mb-4">
        Yukarıda da bahsettiğimiz gibi en sık ERM nedeni yaşlılıktır.
        Yaşlılıktan sonra ERM en sık şeker hastalığına bağlı DİABETİK
        RETİNOPATİDE meydana gelir. Diabetik retinopatinin hem kendisi hem de
        tedavide kullanılan ARGON LASER tedavisi ERM ye neden olur. Ayrıca SARI
        NOKTA hastalığı ve ÜVEİT hastalıklarındada ERM meydana gelebilir.
        Retinal yırtık ve tedavisinde kullanılan laserde ERM ye neden olabilir.
      </p>
      <h2 className="text-xl font-bold mb-4">
        ERM nasıl şikayetlere neden olur?
      </h2>
      <p className=" mb-4">
        ERM genelde tek gözde ve yavaş ilerlediğinden ve diğer göz sağlam
        olduğundan son ana kadar belirti vermez ve sadece rutin göz muayenesi
        sırasında rastgele fark edilir. Hastalık ilerledikçe yakın okuma
        fonksiyonları bozulur. Zamanla metamorfopsi( cisimleri yamuk görme),
        makropsi ( cisimleri olduğundan büyük görme) ve mikropsi( cisimleri
        olduğundan küçük görme) meydana gelir. Bu hastalık yavaş ilerlediğinden
        ve diğer göz sağlam olduğundan 50 yaşından sonra herkesin ayda bir bir
        gözunu kapatıp diğer gözu ile televizyonun alt yazılarını tek gözle
        okumlarında erken teşhis için fayda vardır.
      </p>
      <h2 className="text-xl font-bold mb-4">ERM teşhisi nasıl yapılır?</h2>
      <p className=" mb-4">
        ERM şüphesiyle gelen her hastada önce görme keskinliğine bakıp dilate
        retina muayenesi yapılmalıdır. Gerçekten ERM şüphesi varsa teşhisde tek
        yönetem ALTIN STANDART OLAN OCT(göz tomografisi)'dir.OCT ile ERM nin
        teşhisini %100 koyarız. Bu yöntem nonivazif(ağrısız) olup herhangi bir
        boya ya da radyasyon vermeden sarı noktanın kesitsel üç boyutlu
        analizini yapar. Toplam çekim süresi iki göz için 1 dakika olıp sonucu
        hemen çıkmaktadır.
      </p>

      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <img src={img1} alt="sy" />
          <p className="text-start mt-2 mb-2">
            <strong>Resim 1:</strong> Sağ gözde diabetik retinopatiye bağlı
            gelişen ERM ve VİTREOMAKÜLER TRAKSİYON u olan hastamızın OCT çıktısı
            olup hastamızın vizyonu %20 dir.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <img src={img2} alt="sy" />
          <p className="text-start mt-2 mb-2">
            <strong>Resim 2:</strong> Sol gözde retinal yırtıktan bir yıl sonra
            gelişen ERM hastamızın OCT çıktısı olup hastamızın vizyonu %20 dir.
          </p>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-4">
        ERM hastalığının tedavisi nasıldır?{" "}
      </h2>
      <p className=" mb-4">
        ERM nin tek tedavisi CERRAHİDİR. Bu cerrahi yönteme VİTREORETİNAL
        CERRAHİ yani VİTREKTOMİ denilmektedir. ERM nin medikal tedavisi yani
        damla,laser, hap yada iğne tedavisi yoktur. Vitrektomi denilen operasyon
        lokal anestezi ile yapılmakta olup bu şeffaf zar özel boyalarla boyanıp
        görünür hale getirildikten sonra özel forsepsler yardımı ile soyulmakta
        olup bu cerrahi işlem yaklaşık 30 dakika sürmektedir.
      </p>

      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <img src={img3} alt="sy" />
          <p className="text-start mt-2 mb-2">
            <strong>Resim 3:</strong> Üstteki Resim 1 deki hastamızın ameliyat
            sonrası OCT çıktısı olup hastamızın görmesi %20 den % 70 çıkmıştır.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <img src={img4} alt="sy" />
          <p className="text-start mt-2 mb-2">
            <strong>Resim 4:</strong> Üstteki Resim 2 deki hastamızın cerrahi
            sonrası OCT çıktısı olup görmesi %20 den % 80 e çıkmışıtr.
          </p>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">
        Her ERM hastası ameliyat edilmeli midir?
      </h2>
      <p className=" mb-4">
        Eğer hastanın hiçbir şikayeti yok ise ve hastanın görmesi % 80 nin
        üstunde ise takip etmek yeterli olabilir. Çünkü ERM çok hızlı
        ilerlemeyen bir hastalık olup bazen yıllarca hiç ilerlemeden sabit
        kalabilir. Ama hastada şikayetler başlayıp görmede %70 in altına
        düştüyse çok gecikmeden cerrahi kararı verilip hasta ameliyat
        edilmelidir. Ameliyattan sonra görme seviyesi tam olarak 1 yıl sonra
        gerçek değerine kavuşur. Bu nedenle sabırlı olmak lazımdır.
      </p>

      
    </div>
  );
}

export default Nine;
