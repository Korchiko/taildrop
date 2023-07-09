import React from "react";
import picture from "../images/sari1.png";
import picture2 from "../images/sari2.png";
import picture3 from "../images/sari3.png";
import picture4 from "../images/sari4.png";
import picture5 from "../images/sari5.png";
import picture6 from "../images/sari6.png";
import picture7 from "../images/sari7.png";
import picture8 from "../images/sari8.png";
import picture9 from "../images/sari9.png";
import picture10 from "../images/sari10.png";
import picture11 from "../images/sari11.png";

function Fundus() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Sarı Nokta Hastalığı(Makula Dejerasyonu)
      </h1>
      <h2 className="text-xl font-bold mb-4">Sarı Nokta Hastalığı Nedir? </h2>
      <p className=" mb-4">
        Makula denilen sarı nokta merkezi ve görme keskinliğinden sorumlu olup
        retinanın merkezinde 5 mm ‘lik alanada yerleşmiştir. Araba kullanmak,
        renkli görmek, okumak ve iğneden iplik geçirmek gibi ince ve ayrıntılı
        görevleri vardır. İşte genelde yaşlanma ile birlikte bu bölgede yıpranma
        ve dejenerasyon meydana gelir. Yani bu hastalık yaşlanma sonucu retina
        tabakasında meydana gelen değişikliklerdir. 60 yaş üstü her beş kişide
        bir görülürken 85 yaşından sonra her iki kişide bir görülür. Bu hastalık
        yaşlılarda meydana geldiğinden tam adı yaşa bağlı makula
        dejenerasyonu’dur.
        <h2 className="text-xl font-bold mb-4 mt-8">
          Sarı Nokta Hastalığının Kaç Tipi Vardır?
        </h2>
        <p>
          Sarı nokta hastalığının iki ana tipi vardır.
          <p className="text-normal">
            <strong>a.Kuru Tip:</strong> Genellikle yaşlanma ile birlikte
            görülen bu tip hastaların %90’nında görülür. En tipik bulgusu
            DRUSEN’dir. Kuru tip çok yavaş ilerlediğinden ve bazen tek göz
            sağlam kaldığından uzun yıllar görmeyi etkilemez.
          </p>
        </p>
      </p>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <img src={picture} alt="sy" />
          <p className="text-start mt-2 ">
            <strong>Resim 1:</strong> Kuru Tipde görülen yoğun drusenler
            görüntüsü
          </p>
        </div>
        <div className="w-1/2">
        </div>
      </div>

      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <img src={picture2} alt="sy" />
          <p className="text-start mt-2">
            <strong>Resim 2:</strong> Drusenlerin ANJİO görüntüsü
          </p>
        </div>
        <div className="w-1/2">
        </div>
      </div>
      <p className="text-normal">
        <strong>b.Yaş Tip:</strong> Bu tip %10 oranında görülüp hızlı ve
        dramatik bir şekilde görme kaybına neden olur.Makula bölgesinde meydana
        gelen anormal damarlanmalar sonucu SIZINTI VE KANAMA meydana gelir.
        Hızlı tedavi edilmezse ciddi ve kalıcı görme kayıpları meydana gelir.
      </p>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <img src={picture3} alt="sy" />
          <p className="text-start mt-2">
            <strong>Resim 3:</strong> Yaş ve tipe bağlı KNV’nin ANJİO(FFA)
            görüntüsü
          </p>
        </div>
        <div className="w-1/2">
        </div>
      </div>
      <h2 className="text-xl font-bold mb-4">
        Sarı Nokta Hastalığının Belirtileri Nelerdir?
      </h2>
      <p className=" mb-4">
        Kuru tip genelde yavaş ilerlediğinden ve diğer göz sağlam
        kalabildiğinden pek belirti vermez. Belirtiler genelde yaş tip de
        meydana gelir. Belli başlı belirtiler şunlardır: Bakılan noktanın
        ortasında koyu karanlık bölgeler oluşur. Metamorfopsi( cisim ve
        çizgilerde yamulma). Yakın okumada problem. Renkler daha soluk görülür.
        Yüzleri tanımada güçlük. Loş ve karanlık ortamlara uyumda zorluk.
        Merkezi görmede ve görme keskinliğinde azalma. Sarı nokta hastalığı
        merkezi görmeyi etkiler ama kenar görme sağlam kaldığından tamamen
        körkükle sonuçlanmaz. Yani şeker hastalığı yada göz tansiyonu gibi
        hastayı tamamen kör etmez. Mesela bu hastalar karşıdaki saati görürler
        ama saatin kaç olduğunu söyleyemezler. Evde tek başına kendi işlerini
        yaparlar ama okumak ve araba kullanmak gibi işlemleri yapamaz.
      </p>
      <p className=" mb-4">
        Sarı nokta hastalığı merkezi görmeyi etkiler ama kenar görme sağlam
        kaldığından tamamen körkükle sonuçlanmaz. Yani şeker hastalığı yada göz
        tansiyonu gibi hastayı tamamen kör etmez. Mesela bu hastalar karşıdaki
        saati görürler ama saatin kaç olduğunu söyleyemezler. Evde tek başına
        kendi işlerini yaparlar ama okumak ve araba kullanmak gibi işlemleri
        yapamaz.
      </p>
      <h2 className="text-xl font-bold mb-4">
        Sarı Nokta Teşhisi Nasıl Yapılır?
      </h2>
      <p className=" mb-4">
        Teşhisde önce hastanın şikayetleri dinlenir ve sonra görme keskinliği
        bakılıp fundus muayenesi yapılır. Tüm bunlardan sonra MULTİMODAL
        GÖRÜNTÜLENME yapılır. Görünütülemede 6 ana yöntem vardır.
      </p>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <p className="text-start mb-2">
            <strong>OCT(Göz Tomografisi)</strong>
          </p>
          <img src={picture4} alt="sy" />
        </div>
        <div className="w-1/2">
        </div>
      </div>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <p className="text-start mb-2">
            <strong className="">FFA(İlaçlı Yüzeyel Göz Anjiosu)</strong>
          </p>
          <img src={picture5} alt="sy" />
        </div>
        <div className="w-1/2">
        </div>
      </div>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <p className="text-start mb-2">
            <strong className="">ICG(İlaçlı Derin Göz Anjiosu)</strong>
          </p>
          <img src={picture6} alt="sy" />
        </div>
        <div className="w-1/2">
        </div>
      </div>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <p className="text-start mb-2">
            <strong className="">OCTA(İlaçsız Göz Anjiosu)</strong>
          </p>
          <img src={picture7} alt="sy" />
        </div>
        <div className="w-1/2">
        </div>
      </div>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <p className="text-start mb-2">
            <strong className="">Renkli Fundus Fotoğrafı</strong>
          </p>
          <img src={picture8} alt="sy" />
        </div>
        <div className="w-1/2">
        </div>
      </div>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <p className="text-start mb-2">
            <strong className="">FAF(Fundu Oto Flöresans)</strong>
          </p>
          <img src={picture9} alt="sy" />
        </div>
        <div className="w-1/2">
        </div>
      </div>
      <p>
        Bu dört özel yöntem multimodal yani aynı anda yapılarak kesin teşhis
        yapılır. Bu yöntemler ayrıca hastalığın tedavisinin takibindede çok
        faydalıdır.
      </p>
      <h2 className="text-xl font-bold mb-4 mt-8">
        Sarı Nokta Hastalığının Tedavisi Nelerdir?{" "}
      </h2>
      <p className="text-normal">
        <strong>a.Kuru Tip:</strong> Kuru tipin tedavisinde risk faktörlerini
        ortadan kaldırıp gözü besleyici vitamin hapıları kullanmalıdır. Çok
        çesitli vitamin hapları vardır ama tecrübeme göre en son çıkan RESVEGA
        adlı vitamin hapı hem kuru tipde hemde yaş tipde çok etkilidir.
      </p>
      <p className="text-normal mt-3">
        <strong>b.Yaş Tip:</strong> Bu tip çok ağır seyrettiğinden çok hızlı ve
        gecikmeden tedavi edilmelidir. Yaş tipin tedavisinde iki ana yöntem
        vardır.
      </p>
      <p className="text-normal mt-4 mb-3">
        <strong>1.Göz İçi İğne Enjeksiyonu:</strong> Genellikle aylık uygulanan
        bu iğne tedavisinde 3 ana ilaç vardır.ALTUZAN,LUCENTİS VE EYLEA.
        Tecrübelerime göre bu üç ilaçdan en etkilisi EYLEA’dır.
      </p>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <img src={picture10} alt="sy" />
        </div>
        <div className="w-1/2">
          <p className="text-center">
            <strong className="">Görmesi %10 olan hastamız</strong>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <img src={picture11} alt="sy" />
        </div>
        <div className="w-1/2">
          <p className="text-center">
            <strong className="">
              Yukarıdaki hastamıza 3 doz EYLEA yaptık ve görme yetisi %70’e
              çıktı,hastamızın OCT görüntüsü.
            </strong>
          </p>
        </div>
      </div>
      <p className="text-normal">
        <strong>2.Fotodinamik Laser Tedavisi:</strong> Soğuk laser de denilen bu
        uygulama iğne tedavisi ile başarı elde edemediğimiz durumlarda
        kullanılan bir yöntem olup eskisi kadar popüler değildir ve genellikle 3
        ayda bir uygulanır.
      </p>
      <h2 className="text-xl font-bold mb-4 mt-8">
        Kimler Risk Altındadır ve Bu HASTALIK Önlenebilir mi?
      </h2>
      <p>
        Bu hastalığın en önemli risk faktörü yaşlılık olup bunu önlemenın yolu
        yoktur. Ama risk faktörlerini ortadan kaldırıp koruyucu hekimlikle
        hastalığın seyri yavaşlatılabilir. Önlenemeyen iki ana neden YAŞLILIK VE
        GENETİK olup bunlara müdahale etmemiz mümkün değildir.
      </p>
      <p>
        Ama risk faktörleri dediğimiz SİGARA, ALKOL, YÜKSEK
        KOLESTEROL,HİPERTANSİYON VE GÜNEŞ IŞIĞINA MARUZ KALMA gibi nedenlerden
        uzak durursak hastalıktan korunabiliriz. Ayrıca OMEGA VE ANTİOKSİDAN’dan
        zengin besin ve diyetle seyir yavaşlatılır. Özellikle balık çok
        faydalıdır.
      </p>
      <h2 className="mt-8 text-2xl font-bold mb-2">SON SÖZ VE TAVSİYEM ?</h2>
      <p>
        Sarı nokta hastalığı bundan 20 yıl öncesine kadar tedavisi olmayan ve
        ağır görme kayıpları ile sonuçlanan bir hastalıktı. Ama son 20 yılda
        ortaya çıkan VİTAMİN, İĞNE VE LASER tedavileri ile artık bu hastlıkla
        mucadele etmemiz kolay olur hale geldi. Şu unutulmamalı ki hiçbir tedavi
        hastalığı tamamen ortadan kaldırmaz. Önemli olan ilerlemeyi durdurup
        seyri yavaşlatmak ve görmeyi arttırmaktır. Bu hastalıkta en önemli şey
        erken teşhis ve tedavi olup düzenli ve ömür boyu takip gerekir.{" "}
      </p>
    </div>
  );
}

export default Fundus;
