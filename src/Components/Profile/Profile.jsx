import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from "@material-tailwind/react";

export default function Example() {
  return (
    <Card className="flex-row justify-center align-middle grid-cols-2 w-full h-full max-w-full my-12">
  <CardHeader shadow={false} floated={false} className="w-1/5 my-8">
    <img
      src="https://s3-eu-west-1.amazonaws.com/doktortakvimi.com/doctor/efeb7f/efeb7f60698905dfd681b086a5be0da6_large.jpg"
      alt="image"
      className="w-full h-full object-cover"
    />
  </CardHeader>
  <CardBody>
    <Typography variant="h5" className="uppercase mt-4 tracking-wider text-gray-500">
      BİYOGRAFİ
    </Typography>
    <Typography variant="h3" className="mb-8 text-gray-800">
      Op.Dr. Sadun Yalçın
    </Typography>
    <Typography color="gray" className="text-xs md:w-80 tracking-wide">
  <p className="leading-6 mb-4 text-left">
    Op.Dr Sadun Yalçın 1993 yılında Samsun Terme Lisesinden mezun olmuştur. 2004 yılında 19 Mayıs Üniversitesi Tıp Fakültesini bitirdi.
  </p>
  <p className="leading-6 mb-4 text-left">
    2004-2009 yılları arasında Türkiye Hastahanesi retina bölümünde Prof.Dr Demir Başar, Prof. Dr Tunç Ovalı, Prof.Dr Mehmet Çakır ile birlikte retina üzerine çalışmalar yaptı.
  </p>
  <p className="leading-6 text-left">
    2010 yılında İlgi Hastahanesinde Retina Bölümünü kurdu. Op.Dr. Sadun Yalçın 2022 yılından bu yana, kendi bünyesinde serbest hekim olarak hizmet vermeye devam ediyor.
  </p>
</Typography>



  </CardBody>
</Card>

  );
}
