import { Card, Typography, CardHeader } from "@material-tailwind/react";

export default function Example() {
  return (
    <Card className="flex flex-col md:flex-row justify-center items-center w-full h-full max-w-full my-12">
      <CardHeader shadow={false} floated={false} className="w-full md:w-1/3 my-8">
        <div className="flex justify-center md:justify-end">
          <img
            src="https://s3-eu-west-1.amazonaws.com/doktortakvimi.com/doctor/efeb7f/efeb7f60698905dfd681b086a5be0da6_large.jpg"
            alt="image"
            className="w-full h-auto sm:w-auto sm:h-auto object-contain border border-gray-300 rounded-lg"
          />
        </div>
      </CardHeader>
      <div className="flex flex-col justify-center mt-8 md:mt-0 md:ml-8">
        <Typography variant="h5" className="uppercase mt-4 tracking-wider text-gray-500">
          BİYOGRAFİ
        </Typography>
        <Typography variant="h3" className="mt-2 text-gray-800">
          Op.Dr. Sadun Yalçın
        </Typography>
        <Typography color="gray" className="mt-4 text-sm md:w-80 tracking-wide">
          <p className="leading-6 mb-4">
            Op.Dr Sadun Yalçın 1993 yılında Samsun Terme Lisesinden mezun olmuştur. 2004 yılında 19 Mayıs Üniversitesi Tıp Fakültesini bitirdi.
          </p>
          <p className="leading-6 mb-4">
            2004-2009 yılları arasında Türkiye Hastahanesi retina bölümünde Prof.Dr Demir Başar, Prof. Dr Tunç Ovalı, Prof.Dr Mehmet Çakır ile birlikte retina üzerine çalışmalar yaptı.
          </p>
          <p className="leading-6">
            2010 yılında İlgi Hastahanesinde Retina Bölümünü kurdu. Op.Dr. Sadun Yalçın 2022 yılından bu yana, kendi bünyesinde serbest hekim olarak hizmet vermeye devam ediyor.
          </p>
        </Typography>
      </div>
    </Card>
  );
}
