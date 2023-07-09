import img1 from "../images/hastafour1.png";
import img2 from "../images/hastafour2.png";
import img3 from "../images/hastafour3.png";
import img4 from "../images/hastafour4.png";
import img5 from "../images/hastafour5.png";
import img6 from "../images/hastafour6.png";
import img7 from "../images/hastafour7.png";
import img8 from "../images/hastafour8.png";
import img9 from "../images/hastafour9.png";
import img10 from "../images/hastafour10.png";

function Room() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Diyabetik Retinopati</h1>

      <p className=" mb-4">
        Diabetes mellitus (şeker hastalığı), insülin yetersizliği ya da
        etkisizliği sonucu oluşan, yüksek kan şekeri düzeyi nedeniyle gelişen
        yaygın metabolik bir damarsal hastalıktır. İki ana tipi bulunmaktadır:
      </p>
      <p className=" mb-4">
        <strong>1. İnsülin-Bağımlı Diyabet:</strong> Tip I diyabet olarak da bilinir. Çoğunlukla
        5-20 yaşları arasında görülür. Genelde; ani başlangıçlı kilo kaybı, sık
        idrara çıkma ve çok su içme belirtileriyle ortaya çıkar.
      </p>
      <p className=" mb-4">
       <strong> 2. İnsülin-Bağımsız Diyabet:</strong> Tip II diyabet olarak da bilinir.
        Çoğunlukla 30-70 yaşları arasında görülür. Bazen hiçbir belirti vermeden
        göz de kanamaya ve körlüğe neden olabilir. Bu neden ile yıılda bir
        kontrol hiçbir şikayet olmasa da gereklidir.
      </p>
      <p className=" mb-4">
        Diyabet, sistemik bir damar hastalığı olduğundan vücutta göz, böbrek,
        damar,kalp ve sinir sistemi gibi birçok organda zararlara yol açabilir.
        Diyabete bağlı göz hastalıkları içinde en sık görülen diyabetik
        retinopati; gözün arkasındaki ışığı algılayan retina tabakasında yaptığı
        hasar sonucu oluşan tabloya denir. Diyabetik retinopati, insanlarda
        körlük yapan nedenlerin başında gelmektedir. Bu hastalık hastayı tamamen
        kör edip ışık hissi bile kalmayabilir. ( Mesela Sarı Nokta Hastalığı
        hastayı tamamen kör etmez. )
      </p>

      <p className=" mb-4">
        Diyabetik retinopatinin oluşma riski Tip I diyabette Tip II diyabete
        göre daha fazladır. Diyabetin süresi önemli bir etkendir, 30 yaşından
        önce diyabet tanısı alındığında diyabetik retinopati oluşma riski 10
        yılda %50, 30 yılda %90&#39;dır. Yoğun kan şekeri kontrolü, spor ve iyi
        bir diyet ile diyabetik retinopati oluşması geciktirilebilir. Ayrıca
        hamilelik de diyabetik retinopati gelişmesini tetikler. Hipertansiyon ve
        böbrek yetmezliği, iyi kontrol edilmediği taktirde diyabetik
        retinopatiyi kötüleştirir. Özellikle diyaliz şeker hastaların da göze
        iyi gelir. Ama en önemli tehlike hastanın şeker hastası olduğunu
        bilmemesidir.
      </p>
      <p className=" mb-4">
        Diyabetik retinopatinin başlangıç döneminde gözde meydana gelen
        problemlerin temelinde retina damarlarında biriken glukoza bağlı
        geçirgenliğin artması, yani damarların, kanın içindeki bazı maddeleri
        sızdırması yatar. Diyabetik bir hastanın göz dibi bulguları arasında
        mikroanevrizmalar (baloncuk),sert eksudalar(kolesterol parçaları),
        retina ödemi (sıvı toplaması), kanamalar görülebilir. Kanama aniden
        görme kaybına neden olurken ödem yavaş yavaş görmeyi azaltır.
      </p>

      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <img src={img1} alt="sy" />
          <p className="text-start mt-2 mb-2">
            <strong>Resim 1:</strong> Normal retina fotoğrafı. Mavi ok, keskin
            ve merkezi görmeyi sağlayan makulayı (sarı nokta), siyah ok optik
            diski (görme siniri) göstermektedir.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center mb-4">
        <div className="w-full">
          <img src={img2} alt="sy" />
          <p className="text-start mt-2 mb-4">
            <strong>Resim 2:</strong> Yukarıdaki resim başlangıç diabetik
            retinopatisi olan bir hastanın retinasını göstermektedir. Siyah ok,
            damar geçirgenliğinin artması sonucunda damar içindeki bazı yağ
            içeren maddeleri (sert eksudalar), beyaz ok, damardan dışarıya sızan
            kanı (mikrohemorajiler) göstermektedir. Diyabet, aynı zamanda damar
            duvarının yapısını da bozarak duvarlarda anormal genişlemelere,
            baloncuklanmalara (mikroanevrizmalar) neden olabilir.Bu duruma
            makula ödemi denir.
          </p>
        </div>
      </div>

      <p className="mb-4">
        Diyabetik retinopatide makulada ödem olmaz ise ve retina periferin de
        kanamalar başlar ise hasta son ana kadar hiçbir belirti vermeden
        görmesini muhafaza eder. Ama aşırı tansiyon ve şeker yükselmesi ile bu
        kanamalar bir anda göz içine boşalarak (intra oküler hemoraji) hastanın
        görmesini dakikalar içersinde sıfıra kadar düşürür. Bu nedenle
        hastaların hiçbir şikayeti olmasa da yılda bir düzenli kontrol olmaları
        önemlidir.
      </p>

      <p className="mb-4">
        Eğer kan şeker düzeyi yüksek seyreder ve gerekli tedaviler yapılıpmaz
        ise; diabetik retinopati ilerler. Damarsal değişiklikler ve
        tıkanıklıklar artar(retinal iskemi) ise; retina kendisini beslemek için
        normal damarlardan daha ince, kolay kanayabilen ve çok çabuk
        dallanabilen yeni damarlar oluşturmaya başlar. Diabetik retinopati
        tablosuna, beslenmenin az olmasından dolayı, sinirlerde iletinin
        durmasını gösteren, pamuk kümelerine benzeyen madde birikimleri (yumuşak
        eksudalar), yeni damar oluşumları(neovaskülarizasyon), birtakım
        maddelerin artması sonucu retina üzerinde zarların oluşumu( traksiyon ve
        epiretinal membran), retina önü ve vitreus içi kanamalar görülebilir.
      </p>

      <div className="flex flex-wrap items-center mb-4">
        <div className="w-full">
          <img src={img3} alt="sy" />
          <p className="text-start mt-2 mb-4">
            <strong>Resim 3:</strong> İleri aşama diyabetik retinopatiyeait
            retina görüntüsü. Düz, kalın ve düzenli dallanan normal retina
            damarlarının aksine ağaç dallarını andıran, daha ince ve daha
            kırılgan yeni damarlar siyah ok ile gösterilmektedir.
          </p>
          <p className="mb-4">
            Böyle durumdaki hastalarda yeni damar oluşumunu önlemek ve
            tekrarlayan vitreus içi kanamaları engellemek amacı ile laser
            fotokoagulasyon uygulanır.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-full">
          <img src={img4} alt="sy" />
          <p className="text-start mt-2 mb-4">
            <strong>Resim 4:</strong> Laser tedavisi yapılmış retina görüntüsü.
            Siyah ok, laserin, yapılan yerlerde daha açık renkte yuvarlak
            izlerini göstermektedir.
          </p>
        </div>
      </div>
      <p className="mb-4">
        Laser fotokoagulasyon, hastanın hastanede yatmasını gerektiren bir durum
        değildir. Hasta oturur pozisyondayken yapılır ve işlem sonrasında hasta
        evine gönderilir. Laserden sonra hafif ağrı ve görmede bir miktar azalma
        olması normaldir.
      </p>
      <p className="">
        Diyabet tiplerinin belirlenmesinde ve tedavinin planlanmasında fundus
        floresein anjiyografi ( FFA ) çok önemli yer tutar. Hastanın kolundan
        damar içine boya maddesi verilir. Sonra hasta oturur pozisyondayken
        belli aralıklarla gözdibinin fotoğrafları çekilir. Hasta hiçbir ağrı
        duymaz, sonrasında evine gidebilir. Çekimden sonra ciltte sararma,
        idrarın turuncu olması normaldir. Bu, birkaç gün sürebilir. Bu tetkik
        yöntemi ile diyabetik hastalarda, damarlarda kaçak, tıkanıklık ve
        beslenme bozukluğunu saptamak mümkün olmaktadır.
      </p>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-full">
          <img src={img5} alt="sy" />
          <p className="text-start mt-2 mb-4">
            <strong>Resim 5:</strong> Normal FFA görüntüsü. Damarlarda veya
            makulada herhangi bir sızıntıya ait parlak renkte beyazlık
            izlenmemektedir.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-full">
          <img src={img6} alt="sy" />
          <p className="text-start mt-2 mb-4">
            <strong>Resim 6:</strong> Diyabetik retinopatisi olan bir hastanın
            FFA görüntüsü. Siyah ok ile gösterilen parlak renkteki beyazlık,
            damarlardan sızıntı olduğunu göstermektedir.
          </p>
        </div>
      </div>

      <p className="mb-4">
        Çok ilerlemiş diyabetik retinopati olgularında tekrarlayan vitreus içi
        ya da retina önü kanamaları, ya da retina üzerini kaplayan zarların
        sürekli retinayı büzüştürmesi ve çekmesi sonucu oluşan traksiyonel
        retina dekolmanı (çekme sonucunda retinanın olması gereken yerden öne
        ayrılması ve öne doğru gelmesi) nedeni ile retina cerrahisi yapılması
        gerekebilir. Bu gibi durumlarda yapılan cerrahiye pars plana vitrektomi
        denir. Pars plana vitrektomi ile, gözün içindeki jel kıvamındaki sıvı
        (vitreus) uzaklaştırılır, retina zarlardan temizlenip tekrar eski yerine
        yatması sağlanır.
      </p>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-full">
          <img src={img7} alt="sy" />
          <p className="text-start mt-2 mb-4">
            <strong>Resim 7:</strong> Resimde traksiyonel retina dekolmanı olan
            bir hastanın retinası görülmektedir. Retinanın normal rengini
            kaybettiği, beyaz zarların retina yüzeyini kaplayıp retinayı öne
            doğru çektiği izlenmektedir (siyah ok).
          </p>
        </div>
      </div>
      <p className="mb-4">
        Bazı durumlarda retina, normal fundus muayenesi ile net seçilemeyebilir.
        Bu gibi durumlarda, göz ultrasonografisi çekilir.
      </p>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-full">
          <img src={img8} alt="sy" />
          <p className="text-start mt-2 mb-4">
            <strong>Resim 8:</strong> Normal göz ultrasonografi görüntüsü. Beyaz
            ok göz sıvısını (vitreus), siyah ok retina tabakasını
            göstermektedir.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-full">
          <img src={img9} alt="sy" />
          <p className="text-start mt-2 mb-4">
            <strong>Resim 9:</strong> Yandaki resimde traksiyonel retina
            dekolmanı olan bir hastanın göz ultrasonografisi görülmektedir.
            Retinanın normal yerinden öne, göz sıvısı içine doğru çekildiği
            izlenmektedir (siyah oklar).
          </p>
        </div>
      </div>
      <p className="">
        Diyabetik retinopatisi olan hastalarda kullanılabilecek diğer bir tanı
        yöntemi de optik koherens tomografidir (OKT). OKT diyabetik makula ödemi
        gibi patolojilerde hastalığın evresi, tedavi endikasyonu ve tedavi
        sonrası takiplerde yol gösterici olmaktadır.
      </p>

      <div className="flex flex-wrap mt-8 items-center mb-4">
        <div className="w-full">
          <img src={img10} alt="sy" />
          <p className="text-start mt-2 mb-4">
            <strong>Resim 10 (a,b):</strong> Üst soldaki resim (a),
            normal makulanın, sağdaki resim (b) kistoid makula ödemi olan
            makulanın OKT görüntüsünü göstermektedir. Normalde tüm retina
            tabakaları belli bir aralıklarla ve belli renklerde izlenmektedir.
            Ödemli bir makulanın ise kist şeklinde siyah boşluklarla dolu olduğu
            görülmektedir (kırmızı ok).
          </p>
        </div>
      </div>

      <p className=" mt-2 mb-4">
        Tip I veya Tip II diyabeti olan her hasta, diyabetik retinopati
        gelişmesi açısından risk altındadır. Diyabeti olan her hasta, en azından
        yılda bir kez detaylı göz dibi (fundus) muayenesi yaptırmalıdır.
        Hamilelik, diyabetik retinopati riskini artırır. Dolayısıyla diyabetik
        hamilelerin, mümkün olan en erken zamanda göz dibi muayenesi
        yaptırmaları önerilir.
      </p>
      <p className=" mt-2 mb-4">
        Diyabetli hastalar üzerinde yapılan çalışmalar, kan şekeri kontrolünün,
        retinopati gelişimini ve ilerlemesini yavaşlattığını göstermektedir. Kan
        şeker düzeyini normal sınırlar içerisinde tutmak, hem göz hem de diğer
        organ hastalıkları riskini azaltacaktır. Normal düzeylerdeki kan şekeri
        aynı zamanda laser tedavisi ihtiyacını da azaltacaktır.
      </p>
    </div>
  );
}

export default Room;
