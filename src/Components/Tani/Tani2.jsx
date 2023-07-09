import React from "react";
import img1 from "../images/tanitwo1.png";

function Tanitwo() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
      İndosiyanin Anjiografisi (ICG)
      </h1>
      <h2 className="text-xl font-bold mb-4">
        ICG yani derin anjio retinanın derin katlarını gösteren bir teşhis
        yöntemi olup normal anjioda ki gibi damar açıcı bir tedavi özelliği
        yoktur.
      </h2>
      <p className="text-lg mb-4">
        İndosiyanin anjiyografisi çekilirken hastanın kolundaki antekübital
        venine 25mg indosiyanin boyası kısa bir süre içerisinde enjekte edilir.
        Ardından ilk saniyelerde sık, daha sonra da aralıklı olarak dijital
        fotoğraflar çekilir. Son olarak da 20. , 30. , ve 45. dakikalarda da
        fotoğraflar çekilerek test sonlandırılır.
      </p>
      <p className="text-lg mb-4">
        Kliniğimizde kullandığımız cihazlarda aynı anda hem FFA hem ICG hem de
        OCT atnı anda çekilerek multimodal ayrıntılı görüntüler elde
        edilmektedir. ICG yani derin anjio FFAya göre çekimi çok daha uzun
        sürer. İlaç karaciğer ile atıldığı için böbrek hastalarında ve
        hamilelerde güvenlekullanılır.
      </p>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-1/2">
          <img src={img1} alt="sy" />
          <p className="text-start mb-2">
            <strong>Resim 1:</strong> Kliniğimiz de dünyanın en iyi kombine ICG
            cihazı olan HEİDELBERG ANJİO cihazı kullanılmaktadır.
          </p>
        </div>
        
      </div>

      
    </div>
  );
}

export default Tanitwo;
