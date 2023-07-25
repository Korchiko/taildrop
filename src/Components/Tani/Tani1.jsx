import React from "react";
import fundus1 from "../images/fundus1.jpg";
import fundus2 from "../images/fundus2.jpg";

function Fundus() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Fundus Floresein Anjiografisi (FFA)</h1>
      <p className="text-lg mb-4">
        Fundus floresein anjiyografi (FFA),retina kan akımının incelenmesi için
        geliştirilen,retina hastalıklarının tanısında ve takibinde vazgeçilmez
        bir tanı yöntemidir.Sarı ve turuncu renkte,mavi ışık altında floresans
        veren floresein boyası verilerek gözdibinin damarsal yapılarının,
        siyah-beyaz,dijital fotoğrafları çekilir.
      </p>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <img src={fundus1} alt="sy" />
          <p className="text-start mb-2">
            <strong>Resim 1:</strong> Normal FFA görüntüsü.Damarlarda veya
            makulada herhangi bir sızıntıya ait parlak renkte beyazlık
            izlenmemektedir.
          </p>
        </div>
        <div className="w-1/2">
        </div>
      </div>

      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <img src={fundus2} alt="sy" />
          <p className="text-start mb-2">
            <strong>Resim 2:</strong> Şeker hastasına ait FFA tetkiki görüntüsü,
            damarların beyaz boyanması floresein boyası ile dolduğunu
            göstermektedir. Damar yapısı bozulduğunda floresein dışarı sızmakta
            ve resimde görüldüğü gibi hiperfloresans (siyah ok) izlenmektedir.
           
          </p>
        <div className="w-1/2">
        </div>
        </div>
      </div>
      <p className="text-lg mb-4">
            Floresein anjiyografide hastanın kolundan veya elinden damar yolu
            ile 10ml %5 lik floresein kısa bir süre içerisinde enjekte edilir.
            Daha sonra dolaşıma karışan floresein,bütün dokuları bir dakikadan
            az bir süre içerisinde boyar. Boya damardan verildikten sonra,bir
            göze öncelik verilerek ilk saniyelerde daha sık olmak üzere 15.
            dakikaya kadar dijital fotoğraf çekimleri yapılır.Bazı
            hastalıklarda bir saate kadar çekim yapmak gerekebilir.
            </p>
      <p className="text-lg mb-4">
        Fundus floresein anjiyografi çekimi sonrasında, hastanın cildinde ve
        idrarında renk değişikliği olabilir.Boya maddesi idrardan atıldığından,
        bol su içilmesi maddenin atılımını hızlandırır.Bu nedenle böbrek
        rahatsızlığı olan yada dialize girenler çok dikkatli olmalıdır.Fundus
        floresein anjiyografi,diyabetik retinopati, retinal vasküler
        tıkanıklıklar,yaşa bağlı makula dejeneresansı,inflamatuar retina
        hastalıkları gibi retina damar hastalıklarının yanı sıra pek çok retina
        hastalığının tanı ve ayırıcı tanısında kullanılır.
      </p>
    </div>
  );
}

export default Fundus;
