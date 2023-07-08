import React from "react";
import pic1 from "../images/hastatwo.png";
import pic2 from "../images/hastatwo1.png";
import pic3 from "../images/hastatwo2.png";
import pic4 from "../images/hastatwo3.png";
import pic5 from "../images/hastatwo4.png";

function Hasta() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Retina Dekolmanı</h1>
      <h2 className="text-xl font-bold mb-4">
        Dekolman nedir ve nasıl oluşur?
      </h2>
      <p className=" mb-4">
        Retina gözün arka kısmını örten ve görme olayının meydana geldiği sinir
        tabakasıdır. Gözun arka kısmını bir balonın su ile doldurulması gibi
        VİTREUS denilen göz jeli doldurur. Bu jel yani vitreus tüm retinaya
        yapışıktır. Yaşlandıkça bu jel sıvılaşıp büzüşerek retinadan ayrılır.
      </p>
      <p className=" mb-4">
        Retinanın bazı yerlerinde vitreus ratinaya sıkı bir şekilde yapışıktır.
        Bu sıkı yapışıklık yüzünden vitreus retinadan ayrılırken retinada
        çekinti ve traksiyonla RETİNAL YIRTIĞA neden olur. İşte bu retinal
        yırtık içinden retina altına sıvı sızarak retinayı yapıştığı dokudan
        ayırır ki buna RETİNA DEKOLMANI denir. Bu dekolman hızlı bir şekilde
        tedavi edilmezse retinanın beslenmesi ve anatomik yapısı bozulur ve
        görme hızlı bir şekilde bozulur.
      </p>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <img src={pic1} alt="sy" />
          <p className="text-start mt-2 mb-2">
            <strong>Resim 1:</strong> Normal Retina
          </p>
        </div>
        <div className="w-1/2">
          <img src={pic2} alt="sy" />
          <p className="text-start mt-2 mb-4">
            <strong>Resim 2:</strong> Yırtıklı Retina Dekolmanı
          </p>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-4">Retina Dekolmanı Neden Oluşur?</h2>
      <p>
        Retina dekolmanı bazı hastalıklara bağlı gelişebileceği gibi travmaya
        sekonder yada kendiliğinden yaşlanmanın bir sonucu olarak meydana gelir.
        Retina dekolmanı yanı retinanın ayrışması oluş şekline göre 3 ana kısma
        ayrılır:
      </p>
      <p className=" mt-2 mb-4">
        <strong>1.)Regmatojen(yırtıklı) Retina dekolmanı:</strong> En sık
        görülen tip olup genelde yaşlanmanın bir sonucu olarak meydana
        gelir.Yaşlandıkça gözün içini dolduran vitreus jeli büzüşerek retina
        tabakasında yırtığa neden olur. Eğer bu yırtık erken aşamada leser ile
        tedavi edilmezse yırtıktan içeri sıvı girerek dekolmana neden olur. Bu
        çekinti ve yırtık genelde sıkı yapışık olan ve retinanın ince ve zayıf
        olduğu yerlerde olur. Sıklıkla fort miyoplarda olan ve LATTİCE
        DEJENERASYONU denilen zayıf retina bölgelerinin dekolman oluşturma
        potansiyelleri yüksektir. Bu dejenere LATTİCE alanları görüldüğünde
        mutlaka laser ile tedavi edilmelidir.
      </p>
      <div className="flex flex-wrap items-center mt-8 mb-4">
        <div className="w-1/2">
          <img src={pic3} alt="sy" />
          <p className="text-start mt-2 mb-2">
            <strong>Resim 3:</strong> Lattice Dejenerasyonu
          </p>
        </div>
        <div className="w-1/2">
          <img src={pic4} alt="sy" />
          <p className="text-start mt-2 mb-4">
            <strong>Resim 4:</strong> Lattice Dejenerasyonu
          </p>
        </div>
      </div>
      <p className="mb-4">
        <strong>2.)Traksiyonel ( çekintiye bağlı) Retina Dekolmanı:</strong> En
        sık diabetik retinopatide meydana gelir. Bu hastalıkta oluşan zarlar;
        çekinti ve traksiyon yaparak retina tabakasında ayrışmaya neden olur. Bu
        tip retina dekolmanı genelede yavaş gelişir. Ayrıca travmada traksiyonel
        retina dekolmanına neden olur.
      </p>
      <p className="mb-4">
        <strong>3.)Seröz Retina Dekolmanı:</strong> Genellikle strese bağlı be
        göz içi iltihaplara bağlı meydana gelir.Bu tür hastalıklarda retina
        altındaki damarlardan aşırı sıvı geçisi olur ve sıvı retina tabakalrında
        ayrışmaya neden olur. Bu tip dekolmanda yırtık yada delik yoktur.
        Tedavisi cerrahi değil medikaldir. Erkeklerde strese bağlı olarak
        meydana gelen bu dekolmana SANTRAL SERÖZ RETİNOPATİ denir ve tedavisi
        cerrahi değildir.
      </p>
      <h2 className="text-xl font-bold mt-8 mb-4">
        Retina Dekolmanın Belirtileri nelerdir?
      </h2>
      <p className="mb-4">
        Yeni başlayan sinek uçuşmaları ve siyah lekeler dekolmanın ilk belirtisi
        olabilir. Hasta gözünün önünde örümcek ağı gibi siyah gölgelenmeler
        olabilir. Özellikle bu belirtilere IŞIK ÇAKMASIDA eklenirse dekolman
        için çok önemli alarm sayılır. Hastalık ilerledikçe hastalar görma
        alanılarının bir perde tarafından kapatıldığını hissderler. Son dönemde
        ise görme tamamen kaybolur. RETİNA DEKOLMANINDA KESİNLİKLE AĞRI YOKTUR.
        Ağrısız görme kaybına neden olur ve teadvisi acil olarak yapılmalıdır.{" "}
      </p>
      <h2 className="text-xl font-bold mb-4">
        Retina dekolmanın teşhisi nasıl olur?{" "}
      </h2>
      <p className="mb-4">
        Dekolmandan şüphe edersek hastamızın gözünü damla ile dilate edip
        biomikroskopi aletine oturtarak özel merceklerle retinayı tarayarak
        teşhisi koymamız mümkün. Eğer ratinada yoğun kanama var ve bu yüzden
        retinayı göremzsek ULTRASON ile teşhis koymak mümkün.
      </p>

      <h2 className="text-xl font-bold mb-4">
        Retina Dekolmanı İçin Kimler Risk Altındadır?
      </h2>
      <ol>
        <li><strong>1.)</strong>Yaş ilerledikçe dekolman riski artar. </li>
        <li><strong>2.)</strong>Fort miyoplar büyük risk altındadır. </li>
        <li>
        <strong>3.)</strong>Travma her dönem ve yaşta dekolmana neden olur ve bu hızlı ve ağrılı
          olabilir.{" "}
        </li>
        <li><strong>4.)</strong>Geçirilmiş katarakt ameliyatı( özellikle akıllı mercakler) </li>
        <li><strong>5.)</strong>Diğer gözden geçirilmiş dekolman cerrahisi öyküsü varsa </li>
        <li><strong>6.)</strong>Eximer Laser Operasyonları( göz çizme op) </li>
        <li><strong>7.)</strong>Diabetik retinopati ve ÜVEİT gibi kronik retina hastalıkları </li>
        <li><strong>8.)</strong>LATTİCE DEJENERASYONU </li>
      </ol>
      <h2 className="text-xl font-bold mt-8 mb-4">
        Retina dekolmanı ve yırtığın tedavisi nasıl olur?
      </h2>
      <p className="mb-4">
        Retinal yırtık yada delik dekolmanın öncüsü olup hastalık bu aşamda
        tedavi edilirse DEKOLMAN hastalığı önlenmiş olur. Yırtık yada deliğin
        tek tedaisi ARGON LASERDİR. Bu tedavi lokla anestezi altında poliklinik
        şartlarında yapılıp toplam 5 dakika sürmektedir. Eğer laser tedavisi
        zamanında ve başarılı bir şekilde yapılırsa tüm yırtıklar dekolman
        oluşmadan tedavi edilir.
      </p>
      <div className="flex flex-wrap items-center mt-8 mb-4">
        <div className="w-1/2">
          <img src={pic5} alt="sy" />
          <p className="text-start mt-2 mb-2">
            <strong>Resim 5:</strong> Yandaki resimde sarı okla gösterilen
            atrofik delik olup yeşil okla gösterilende tedavide kullanılan ARGON
            LASERİN izleridir.
          </p>
        </div>
        <p className="mb-4">
          {" "}
          Eğer retinal yırtık zamanında tedavi edilmez ve DEKOLMAN gelişirse tek
          tedavi seçeneği CERRAHİDİR. Cerrahide iki seçenek vardir: Skleral
          Çökertme ve VİTREKTOMİ.{" "}
        </p>
        <p className="mb-4">
          Skleral çökertme daha çok gençlerde kullanılan ve gözün içine girmeden
          göz dışarıdan slikon bantla sıkıştırılıp retinanın yatıştırılmasına
          çalışılan bir yöntemdir. Bu yöntemde retina altındaki seıvı dışardan
          drene edilip yırtık KRİO yöntemi ile kapatılır. Ama bu yöntemden sonra
          gözde bir miktar miyop meydana gelir ameliyat sonrası hastamıızn
          gözlük kullanması gerekir.
        </p>
        <p className="mb-4">
          Günümüzde retina dekolmanın tedavisinde en sık kullanılan yöntem
          VİTREKTOMİDİR. Bu ameliyatda göze 3 tane küçük delik açılıp göz içine
          girilerek dekolmana neden olan vitreus jeli ve sıvı temizlenip membran
          ve çekintiler ortadan kaldırılır. Sonra yırtığa ENDOLASER yapılarak
          yırtık kapatılır. Ameliyat sonunda göze GAZ yada SLİKON verilerek
          cerrahi sonlandırılır. Gaz verilirse hastamız 2 ay uçak yolculuğu
          yapamaz ve gaz 2 ayda kendiliğinden emilir. Eğer slikon veirrsek uçak
          yolculuğu serbest ama yaklaşık 6 ay sonra tekrar cerrahi müdahale ile
          slikon tekrar alınır.
        </p>
      </div>
      <h2 className="text-xl font-bold mb-4">
        Tedavinin Başarısı Neye Bağlıdır?
      </h2>
      <p className="mb-4">
        Hastalık eğer yırtık yada delik aşamasında yakalanır ve laserle tedavi
        edilirse başarı oranı %100 D dür. Eğer hastalık ilerlerse ve dekolman
        gelişirse cerrahi yöntemle başarı şansı %90 dır. Dekolman cerrahisi
        zorlu bir süreç olup bazen ikinci yada üçüncü cearrahiler gerekbilir ve
        sabır gerekir.
      </p>
      <p className="mb-4">
        {" "}
        Görme artışı ameliyattan 2 yıl sonraya kadar devem edebilir bu yuzden
        aceleci olmamak lazım. Ama bazen çok iyi bir carrahi yapıp anatomik
        başarı sağlanıp retina yatıştırılsa bile görme hiç artamayabilir. Bunun
        tek nedeni tedavinin gecikmesidir. Yani hastada eğer dekolman varsa en
        geç 1 haftada mutlaka cerrahi operasyon geçirimelidr. Bu yüzden ERKEN
        TANI ÇOK ÖNEMLİDİR.{" "}
      </p>
    </div>
  );
}

export default Hasta;
