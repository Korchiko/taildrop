import React from "react";
import img1 from "../images/tanifour1.png";

function Tanifour() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Oftalmik Ultrasonografi (USG)</h1>
      <h2 className="text-xl font-bold mb-4">
        Göz ultrasonu, gözün ön bölümündeki kesiflikler nedeniyle retinanın
        muayene sırasında seçilemediği durumlarda, tanının belirlenmesi ve
        tedavi planlanması aşamasında, göziçi lensi, vitreus ve retinanın
        incelenmesini sağlayan, çok önemli bir görüntüleme yöntemidir.
        Ultrasonografide ses dalgalarının değerlendirilmesi ve bu ses
        dalgalarının intraoküler dokular tarafından yansıması prensibi
        kullanılır.
      </h2>
      <p className="text-lg mb-4">
        Göz ultrasonu asıl olarak iki ana durumda kullanılr. En önemli kullanım
        alanı matur kataraktı olup da arkası görülemeyen hastalar da katarakt
        cerrahisi düşünülüyorsa arkada ki retinanın değerlendirilmesi için
        kullanılır. Ayrıce göz içinde kanama var ise ve retina net seçilemiyorsa
        retina hakkında bilgi verir. Ağrısız bir yöntem olup herhengi bir ilaç
        yada boya verilmez.
      </p>

      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <img src={img1} alt="sy" />
          <p className="text-start mb-2">
            <strong>Resim 1:</strong> Normal göz ultrasonu görüntüsü. Beyaz ok
            göz sıvısını (vitreus) , siyah ok retina tabakasını göstermektedir.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tanifour;
