import React from "react";
import img1 from "../images/laser1.png";
import img2 from "../images/laser2.png";

function Helps() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        SMILE (Small Incision Lenticule Extraction) Laser Teknolojisi
      </h1>
      <h2 className="text-xl font-bold mb-4">SMILE Laser Nedir?</h2>
      <p className=" mb-4">
        SMILE laser teknolojosi laser tedavisinde son yenilik olup 3. Jenerasyon
        teknolojidir. SMILE laser yönteminde daha önceki yöntemlerde olduğu gibi
        kornea dokusunun traşlanması ve flep kaldırılması yoktur. Çok küçük bir
        kesiden femtosaniye laser ile tespit edilen lentikül dene parça
        çıkarılır. Bu yöntem bıçaksız olarak uygulanır. Ağrısız be bıçaksız
        laser olarak da bilinir. SMILE laser yöntemi şuan olarak tek FDA onaylı
        cihaz ile yapılmaktadır. (VISUMAX/ Carl ZeissMeditec)
      </p>
      <div className="flex flex-wrap items-center mb-4">
  <div className="w-1/2">
    <img src={img1} alt="sy" />
    <p className="text-start mt-3">
      <strong>Resim 1:</strong> Visumax Smile Lazer Cihazı
    </p>
  </div>
</div>


      <h2 className="text-xl font-bold mb-4 mt-8">
        SMILE Laser Kimlere Uygulanır?
      </h2>
      <ul>
        <li>1.)18 yaş üstü kişilere</li>
        <li>2.)Son 1 yıl içinde kırma kusurunda ilerleme olmayanlara</li>
        <li>3.)10 numaraya kadar miyoplara</li>
        <li>4.)5 numara kadar astigmatlara</li>
        <li>5.)Kuru göz hastalığı olanlarda</li>
        <li>6.)İnce kornealarda güvenle uygulanır.</li>
      </ul>

      <h2 className="text-xl font-bold mb-4 mt-8">
        SMILE Laser Kimlere Uygulanmaz?
      </h2>
      <ol>
        <p>1.)HİPERMETROPLARDA uygulanamaz.</p>
        <p>2.)18 yaş altı küçüklerde uygulanamaz.</p>
        <p>3.)Hamile ve emzirenlerde uygulanamaz.</p>
        <p>4.)Son 1 yılda numarasında ilerleme olanlarda uygulanamz.</p>
        <p>5.)Kuru göz hastalığı olanlarda</p>
        <p>
          6.)Bağ dokusu hastalığı olanlarda uygulanamaz.(Romatizmal Hastalık
          Gibi)
        </p>
      </ol>

      <h2 className="text-xl font-bold mb-4 mt-8">SMILE Laser Nasıl Uygulanır?</h2>

      <p className="mb-4">
        Ameliyat öncesi detaylı bir göz muayenesi ve tetkikleri sonucu öncelikli
        olarak kişinin göz yapısının SMILE cerrahisine uygun olup olmadığı
        değerlendirilir. Kişinin gözlerini oynatmasını engelleyen bir vakum
        halkası yerleştirilmesi sonrası ortalama 22 saniye süren lazer uygulanır
        ve kornea içinde oluşturulan lentikülün 2-4mm olan bir kesiden dışarı
        çıkarılması ile birlikte işlem sonlandırılır.{" "}
      </p>

      <div className="flex flex-wrap items-center mb-4">
  <div className="w-1/2">
    <img src={img2} alt="sy" />
    <p className="text-start mt-3">
      <strong>Resim 2:</strong> SMILE Laser’de lenticul çıkarılması
    </p>
  </div>
</div>

      <h2 className="text-xl font-bold mb-4 mt-8">SMILE Laser Nasıl Uygulanır?</h2>
      <ol className="">
        <p>
          1.)Korneal flep oluşturmak için büyük bir kesi oluşturulmadığı için kapak
          (flep) dokusuna ait komplikasyonlar beklenmez
        </p>
        <p>
          2.)Kapakçık açılmadığı için, kapakçığın kayma veya yer değiştirme riski
          bulunmaz
        </p>
        <p>3.)Kornea özelliğinde üstün koruma sağlar</p>
        <p>
          4.)Daha az bir kornea kesisi oluşturulduğundan, kesilen sinir sayısı daha
          az olur ve his kaybına bağlı ortaya çıkan göz kuruluğu minimal
          seviyelere iner.
        </p>
        <p>
          5.)Flep dokusunun kaybının engellenmesiyle daha yüksek göz derecelerine
          sahip olan hastalara da artık SMILE uygulanabilmektedir.
        </p>
        <p>
          6.)Bıçaksız olduğundan ağrı yoktur ve cerrahi sonrası konforu çok
          yüksektir.
        </p>
      </ol>
    </div>
  );
}

export default Helps;
