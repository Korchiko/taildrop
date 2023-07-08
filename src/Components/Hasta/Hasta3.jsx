import img1 from "../images/hastathree1.png";
import img2 from "../images/hastathree2.png";

function Hasta() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Makula Nedir?</h1>

      <p className=" mb-4">
        Makula( sarı nokta) retinanın santralindeki 3-4 mm merkezi alan olup
        renkli ve keskin görmeyi sağlar. Okuma yazma ve araba kullanmak gibi
        fonksiyonlarımızı sarı nokta sayesinde yaparız. Makula bölgesindeki
        görme hücreleri ve bu hucreler arasındaki bağlanı cok sistemli ve
        muazzam olup akıllara hayranlık verecek kadar kusursuz çalışır.
      </p>
      <h2 className="text-xl font-bold mb-4">
        Makula Deliği Nedir ve Nasıl Oluşur?
      </h2>
      <p className=" mb-4">
        Makula deliği genelde yaşlanmanın bir sonucu olarak meydana gelir. Saçın
        beyazlaması yada derinin kırışması gibi vucudun yaşlanmaya verdiği
        tepkidir. Gözün içerisini dolduran vitreus denilen göz sıvısının
        yaşlanmayla birlikte büzüşüp sarı noktada traksiyon ve çekinti
        oluşturması ile sarı noktada delik meydana gelir. Ama bu delik aniden
        değil yavaşca ve aylar içerisinde meydana gelir.
      </p>
      <h2 className="text-xl font-bold mb-4">
        Makula Deliğinin Belirtileri Nelerdir?
      </h2>
      <p className=" mb-4">
        Makula deliği aylar içinde yavaş gelişen bir hastalık olduğu için ani
        görme kaybı yapmaz. Hastalığın ilk evresi çarpık ve bulanık görmeye
        neden olur. Deliğin aylar içinde ilerlemesiyle merkezi görmede ciddi
        kayıplar meydana gelir. Özellikle araba kullanma ve okuma fonksiyonları
        ileri derecede bozulur. Zamanla kırık görme( metamorfopsi) ve düz
        çizgilerde yamulmalar görülebilir. Zaman ilerledikçe hastalar görme
        merkezlerinin tam ortasında zayıflama hissederler. Hastalık dahada
        ilerlerse görme merkezinin ortasında siyah bir leke ( skotom)
        hissederler. Periferik retina sağlam olduğundan kenar görme sağlam
        kalır.
      </p>
      <h2 className="text-xl font-bold mb-4">
        Makula Deliğinin Nedenleri Nedir ve Kimlerde Görülür?
      </h2>
      <p className=" mb-4">
        Makula deliğinin en sık nedeni yaşlılık olup sadece bu süreç bile deliğe
        neden olur. En sık 50 yaşından sonra görülür ve kadınlarda daha sıktır.
        O nedenle bu hastalığa SENİL İDİOPATİK MAKULER HOLE denir. Bir başka
        nedeni ise fort miyop yani yüksek numaralı miyoptur. Fort miyoplarda
        meydana gelen deliğin teşhis ve tedavisi zor olup acil davaranmak laızm.
        Burada miyoptan kastımız genelde 8 yada 10 numaranın üstüdür. Bir başka
        sık neden ise travma olup burada hastalık daha erken yaşta gelişir ve
        daha hızlı meydana gelir. Ayrıca şeker hastalığı, sarı nokta hastalığı
        ve damarsal tıkanıklarda hastalığın seyri ve tedaviye bağlıda delik
        meydana gelir.
      </p>
      <h2 className="text-xl font-bold mb-4">
        Makula Deliğinin Teşhisi Nasıl Konulur?
      </h2>
      <p className=" mb-4">
        Makula deliği şikayetleri ile başvuran hastada ilk önce yapmamız gereken
        hastanın görme keskinliğine bakıp ayrıntılı reina muayenesi yapmaktir.
        Eğer delikten şüphelenirsek teşhiste altın standart ve %100 tanı
        koydurucu tek test OCT dir. OCT ağrısız ve boyasız noninvaziv bir yöntem
        olup hastalığın teşhisınde tek yöntemdir.
      </p>
      <div className="flex flex-wrap items-center mb-4">
  <div className="w-1/2">
    <img src={img1} alt="sy" />
    <p className="text-start mt-2 mb-2">
      <strong>Resim 1:</strong> Bu resimde kliniğimizdeki 70 yaşındaki bir bayan hastaya ait makula deliğinin OCT görüntüsü görülmektedir. Hastamızın görmesi %1 olup şikayetleri 3 aydan beri devam etmekteydi.
    </p>
  </div>
    <p className="mb-4">
  <h2 className="text-xl font-bold mt-4 mb-4">
      Makula Deliğinin Tedavisi Nedir?
    </h2>
      Makula deliğinin tek tedavisi CERRAHİDİR. Herhangi bir şekilde laser, iğne yada damla ile tedavisi mümkün değildir. Yapılan cerrahi işlemin adı VİTREKTOMİ VE GAZ ENJEKSİYONUDUR. Bu ameliyet genelde lokal anestezi ile yapılmakta olup 45 dakika sürmektedir. Vitrektomi ameliyatında deliğe neden olan göz jeli (vitreus) tamamen temizlenip deliğin üstündeki İLM denilen ince zar özel boyalarla boyanıp soyulmaktadır. Bu işlemleri takiben göze gaz verilerek cerrahi sonlandırılır.
    </p>
  <div className="w-1/2">
    
    <img src={img2} alt="sy" />
    <p className="text-start mt-2 mb-4">
      <strong>Resim 2:</strong> Bu OCT görüntüsünde yukarıda bahsettiğimiz hastamızın cerrahi sonrası filmi olup delik başarılı bir şekilde kapatılmıştır. Hastamızın görmesi %1'den %30'a çıkmıştır.
    </p>
  </div>
</div>

      <h2 className="text-xl font-bold mb-4">
        Ameliyat Sonrası Nelere Dikkat Edilmelidir?
      </h2>
      <p className="mb-4">
        Bu ameliyatlarda ameliyat sonrası bakım en az ameliyat kadar önemlidir.
        Ameliyatta göze gaz verildiğinden bu gazın deliği kapatması için
        hastanın en az 1 hafta mutlaka yüzüstü yatması gerekmektedir. Sırüstü
        yatmak kesinlikle yasaktır. Bu gaz en az 1 ay gözde kaldığından ve
        genişleyen bir gaz olduğundan bir ay boyunca uçak yolculuğu yasaktır. Bu
        bir aylık sürede yani gaz kaybolana kadar hastanın görmesi az olup buzlu
        bir camın arkasından bakar gibi bir göruntü olmaktadır. Hastamız mecburi
        olarak ameliyat sonrası uçak yolculuğu yapacaksa gaz yerine slikon
        verilmelidir. Bu ameliyatlardan sonra genellikle katarakt meydana
        gelidiğinden biz kliniğimizde delik ameliyatlarını katarakt cerrahisi
        ile kombine yapmakayız. Delik ameliyatlarında görme artışı 6 ay hatta
        bir yıla kadar devam etmekte olup sabırlı olmak lazımdır.
      </p>

      <h2 className="text-xl font-bold mb-4">
        Her Delik Ameliyat Edilmeli mi?
      </h2>
      <p className=" mt-2 mb-4">
      Makuler hole hastalarında mesele sadece deliğin kapatılması değil aynı zamanda görmenin de
arttırılmasıdır. Yani anatomik ve fonksiyonel başarının aynı anda olması lazımdır. Bu nedenle delik
varsa hasta ilk 6 ayda mutlaka ameliyat edilmelidir. 6 ayda sonra yapılacak ameliyatlarda delik
kapansa bile görma artışı olmayabilir. Bu hastalık yavaş seyrettiğnden 50 yaşından sonra mutlaka
yılda bir retina muayenesi olmalı ve bu tür hastalıklar erken yakalanıp tedavi edilmelidir.
      </p>
      
    </div>
  );
}

export default Hasta;
