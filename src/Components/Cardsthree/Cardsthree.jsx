import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function Example() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="pt-16 text-center font-semibold text-2xl tracking-widest text-light-green-800">
        MAKALELER
      </h1>
      <h1 className="py-3 text-center font-bold text-4xl tracking-wide text-light-green-900">
        Doktorumuzdan
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl mt-8">
        <Card className="flex flex-col">
          <CardHeader shadow={false} floated={false} className="rounded-t-md">
            <img
              src="https://www.ucarecdn.com/d431e83e-f7a8-42ea-8aeb-268793470ad5/-/resize/700x/"
              alt="image"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody className="flex flex-col justify-between">
            <Typography variant="h6" className="uppercase mb-4 text-green-600">
              Epiretinal Membran (ERM/Sarı Noktada Zar)
            </Typography>
            <Typography variant="h4" className="mb-2 text-light-green-900">
              ERM Kimlerde ve nasıl oluşur?
            </Typography>
            <Typography color="gray" className="font-normal mb-8 ">
              <p className="line-clamp-4  hover:line-clamp-15 " >
              Makula denilen sarı nokta retina tabakasının tam orta noktasında
              olup görme işlevinin meydana geldiği en önemli noktadır.Araba
              kullanmak ve okumak gibi görsel işlevler makula bölgesi sayesinde
              olur.ERM dediğimiz zarın en önemli oluşma nedeni yaşlılıktır.
              Yani yaşlandıkça retina yüzeyinde ve vitreus denilen göz jölesinde
              meydana gelen değişikler sonucunda makula bölgesinde ince bir zar
              meydana gelmektedir.40 yaşından sonra her sağlıklı bireyde
              görülebilen ERM 50 yaşında %2 oranında görülürken 70 yaşında %20
              oranında görülür.Genellikle tek taraflı olup %10 oranında ise
              çift taraflıdır.
              </p>
            </Typography>
            <a href="#" className="inline-block">
              <Button
                variant="text"
                className="flex items-center gap-2 text-green-900 font-extrabold"
              ><a href="/hastalik5">
                Devamını Oku</a>
                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
              </Button>
            </a>
          </CardBody>
        </Card>

        <Card className="flex flex-col">
          <CardHeader shadow={false} floated={false} className="rounded-t-md">
            <img
              src="https://www.ucarecdn.com/de33cf1e-0cdc-408f-93b6-53c57d441540/-/resize/700x/"
              alt="image"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody className="flex flex-col justify-between">
            <Typography variant="h6" className="uppercase mb-4 text-green-600">
              Retina Dekolmanı
            </Typography>
            <Typography variant="h4" className="mb-2 text-light-green-900">
              Dekolman nedir ve nasıl oluşur?
            </Typography>
            <Typography color="gray" className="font-normal mb-8">
              <p className="line-clamp-4 hover:line-clamp-15">
                Retina gözün arka kısmını örten ve görme olayının meydana
                geldiği sinir tabakasıdır.Gözun arka kısmını bir balonın su ile
                doldurulması gibi VİTREUS denilen göz jeli doldurur.Bu jel yani
                vitreus tüm retinaya yapışıktır.Yaşlandıkça bu jel sıvılaşıp
                büzüşerek retinadan ayrılır.Retinanın bazı yerlerinde vitreus
                ratinaya sıkı bir şekilde yapışıktır.Bu sıkı yapışıklık yüzünden
                vitreus retinadan ayrılırken retinada çekinti ve traksiyonla
                RETİNAL YIRTIĞA neden olur.İşte bu retinal yırtık içinden retina
                altına sıvı sızarak retinayı yapıştığı dokudan ayırır ki buna
                RETİNA DEKOLMANI denir.Bu dekolman hızlı bir şekilde tedavi
                edilmezse retinanın beslenmesi ve anatomik yapısı bozulur ve
                görme hızlı bir şekilde bozulur.
              </p>
            </Typography>
            <a href="#" className="inline-block">
              <Button
                variant="text"
                className="flex items-center gap-2 text-green-900 font-extrabold"
              > <a href="/hastalik2">
                Devamını Oku</a>
                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
              </Button>
            </a>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
