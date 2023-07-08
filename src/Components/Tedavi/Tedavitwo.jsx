import React from "react";
import img1 from "../images/enjekte1.png";


function Exam() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Göz İçi İğne Uygulaması( Intravitreal Enjeksiyon)
      </h1>
      <h2 className="text-xl font-bold mb-4">
        Neden Bu Tedaviye İhtiyaç Vardır?
      </h2>
      <p className=" mb-4">
        Retina tabakası zırhla kaplanmış bir kafes gibidir. Aldığımız hap yada
        damla tedavisi bu zırhı geçip reitinanın derin katlarına nufuz edemez.
        İşte bu nedenle retina hastalıklarında direkt ve en etkili tedavi için
        göz içi iğne enjeksiyonları ile tedavi edici ajanı direkt göz içine
        vermekteyiz.
      </p>
      <h2 className="text-xl font-bold mb-4">
        Hangi Hastalıklarda Kullanılır?
      </h2>
      <ul>
        <li>1.)Diabetik Retinopati( Şeker Hastalığı)</li>
        <li>2.)Yaş Tip Sarı Nokta Hastalığı(Makula Dejenerasyonu)</li>
        <li>3.)Retinal Ven Tıkanıklığı( Toplar Damar Hastalığı)</li>
        <li>4.)Üveit( Göz İltihabı)</li>
        <li>5.)Santral Seröz Retinopati</li>
        <li>6.)Fort (Yüksek) Miyopa bağlı KNV</li>
        <li>7.)Gece Körlüğüne Bağlı Makula Ödemi</li>
      </ul>
      <h2 className="text-xl font-bold mt-8 mb-4">
        Hangi İlaçlar Göz İçine Verilir?
      </h2>
      <p className="mb-4">
        Göz içi enjeksiyonlarda iki türlü ilaç kullanılır.
        <p>
          <strong>1.)Anti VGEF Tedavi:</strong>Yaklaşık olarak 15 yıldır
          uygulanan bu iğne tedavisinde 3 farklı ajan kullanılır;
          <p>
            <strong>a.) Altuzan yada Avasitn(bevacizumab):</strong> Bu ilacın
            kullanımı off label olup ilk kullanılan ilaçtır ve kısaca İVA denir.
          </p>
          <p>
            <strong>b.)Lucentis(ranibimuzab): </strong>Bu ilaç ikinci olarak
            kullanılmaya başlamış olup moleküler yapısı AVASTİNE benzer.
          </p>
          <p>
            <strong>c.)Eylea(aflibercept):s</strong>En son çıkan molekül olup
            yapısı çok farklıdır. Kendi tecrübeme göre özellikle sarı noktada en
            etkilisi olup diğerleri gibi ayda bir değil iki ayda bir kullanılır.
          </p>
          <p>
            <strong>2.)Kortizon Tedavisi:</strong> Kortizon tedavisi özellikle
            Diabetik ödemde çok etkili olup bu sebeple iki alan kullanılır:
          </p>
          <p>
            <strong>a)Ozurdex(dexametazon)İmplant:</strong> Bu implant göze bir
            enjeksiypola verilir ve gözde yaklaşık 4 ay kalır.
          </p>
          <p>
            <strong>b.)Triamsinolon Asetonoid:</strong> Off label kullanımı
            vardır ama hem ucuz olması hemde ödem tedavisinde çok etkili
            olmasından dolayı sık kullanılır.
          </p>
        </p>
      </p>
      <h2 className="text-xl font-bold mb-4 mt-8">
        Göz İçi İğne Enjeksiyonu Nasıl Yapılır ve Güvenli midir?
      </h2>

      <p className="mb-4 mt-8">
        Biz kendi kliniğimizde ve pratiğimizde bu enjeksiyonları ofis ortamında
        ve steril şartlarda yapmaktayız. En önemli kural hijyen ve
        strelizasyondur. Genellikle damla lokal anestezi ile yapılıp işlem 5
        saniye sürmektedir. İlacı yaparken baticon ile temizlik çok önemli olup
        hastanın ve ilacı uygulayan ekibin ağzını ve burnunu maske ile kapatması
        gerekir. Bu işlem ağrısız olup ilk 24 saate hefif yanma ve batma
        olabilir. Enjeksiyondan sonra bir hafta antibiotikli damla ve eğer
        kortizon yapmışşsak 3 ayda göz tansiyonu düşürüçü damla kullanırız.
        Hastanın ilk 24 saat gözüne su değdirmemesi çok önemlidir. 15 yıllık
        mesleki tecrübemde yaklaşık 10 bin iğne yaptım ve herhangi bir
        komplikasyona rastlamadım.
      </p>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <img src={img1} alt="sy" />
          <p className="text-start mt-3">
            <strong>Resim 1:</strong> Göz İçine İlaç Enjeksiyonunun Şematik
            Uygulaması
          </p>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4 mt-8">
        İğne Enjeksiyonun Yan Etkileri Nelerdir?
      </h2>
      <ul>
        <li>
          1.)Bu ilacın en önemli yan etkisi ENDOFTALMİ( gözün mikrop
          kapması)olup en korkulan yan etkidir ve tedavi edilmezse körlükle
          sonuçlanır. Steril şartlarda yapılırsa ve hasta ilk 24 saat
          temizliğine dikkat ederse genelde endoftalmi olmaz. Ben 15 yıllık
          mesleki hayatımda hiç endoftalmi ile karşılaşmadım.
        </li>
        <li>
          2.)Katarakt ve Glokom(göz tansiyonu): Bu yan etki daha çok kortizona
          bağlı olup ikisinde tedavisi vardır. Önemli olan hastayı yakın takipte
          tutmak ve bilgilendirmektir.
        </li>
        <li>
          3.)Retina Dekolmanı: Eğer uygun şartlarda yapılmazsa enjeksiyon
          dekolmana neden olabilir ve bu durumda acil ameliyat gerekir.
        </li>
      </ul>

      <h2 className="text-xl font-bold mb-4 mt-8">
        Göz İçi İğneler Kimlere Yapılmamalı?
      </h2>

      <p>a.)Hamile kadınlara yapılmamalı.</p>
      <p>b.)Emziren kadınlara yapılmamalı.</p>
      <p>c.) Son 3 ayda kalp krizi yada inme geçirenlere.</p>
      <p>d.)Kontrol edilemeyen HİPERTANSİYON VE GÖĞÜS AĞRISI olanlara.</p>

      <h2 className="text-xl font-bold mb-4 mt-8">
        Son Söz ve Kendi Tecrübemiz?
      </h2>

      <p className="mb-4">
        Eğer hastada ödem ağırlıkta bir tablo varsa anti-VGEF tedaviye mutlaka
        KORTİZON eklemeli ve hasta çok yakın tekipte tutulmalıdır. Uygun ortam
        ve şartlarda tecrübeli ellerde yapılırsa herhangi bir yan etki görülmez.
        En sık gördüğüm yan etki ilk 24 saate meydana gelen yanma ve batma olup
        24 saat sonra kendiliğinden geçer. Sarı nokta hastalığında en etkili ve
        güvenilir tedavi EYLEA tedavisidir.
      </p>

      
    </div>
  );
}

export default Exam;
