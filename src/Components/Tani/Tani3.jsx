import React from "react";
import img1 from "../images/tanitwo1.png";
import img2 from "../images/tanithree1.png";

function Tanithree() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Optik Kohorens Tomografisi (OCT)
      </h1>
      <h2 className="text-xl font-bold mb-4">
        OCT yani göz tomografisi anjionun aksine daha çok retinanın sinir
        tabakasını gösterir. Hem retina hastalıklarında hem de glokom
        hastalıklarının teşhisinde yeni bir çığır açmıştır.
      </h2>
      <p className="text-lg mb-4">
        Optik Koherens Tomografi (OKT), 840 nm’lik bir diod laser ışığı ile
        dokuların geri yansıtma özelliklerini kullanarak mikron düzeyinde,
        yüksek çözünürlükte retina yapısının incelenmesini sağlayan bir
        görüntüleme yöntemidir.
      </p>
      <p className="text-lg mb-4">
        OKT dijital bir teknik olduğu için kantitatif ölçümler kolaylıkla
        kesitlerinden elde edilebilir. Kantitatif bilgilerin ulaşılabilirliği
        sayesinde de hastalığın seyrini izlemek OKT ile çok kolay
        olabilmektedir. Göz içindeki çok küçük boyutlardaki farklı yapılardan
        yansıyan ışınlar bu yapıların birbirinden farklı aksiyel boyutları
        hakkında bilgi verir. Retinal mimarideki veya hücre morfolojisindeki
        değişimler OKT üzerinde gözlenen optik özelliklerde değişimlere neden
        olur. OKT ile ölçülen retinal kalınlık, hastanın vizyonu ile korelasyon
        gösterir. OCT o kadar ince kesitler almakta olup neredeyse retinal
        biopsi gibi bilgiler vermektedir.
      </p>
      <p className="text-lg mb-4">
        OCT çekerken hastaya herhengi bir ilaç verilmediği için ağrısız ve non
        invaziv olup defalarca çekilebilir. Bu yüzden retina ve glokom
        hastalıklarının teşhis ve tadavinii takibinde son derece faydalı
        bilgiler veirir.
      </p>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <img src={img1} alt="sy" />
          <p className="text-start mb-2">
            <strong>Resim 1:</strong> Kliniğimiz de dünyanın en iyi ve hızlı OCT
            cihazı olan HEİDELBERG OCT cihazı kullanılmkatadır.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-full">
          <img src={img2} alt="sy" />
          <p className="text-start mb-2">
            <strong>Resim 2:</strong> Yuyakarıda ki OCT görüntüsü normal makula
            yani sarı nokta görüntüsüdür.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tanithree;
