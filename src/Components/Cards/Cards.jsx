import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


export default function Example() {
  return (
    <div className="flex flex-wrap justify-center gap-16 mt-16">
      <div className="w-full sm:w-96 lg:w-120">
        <Card className="mt-0 hover:scale-105 transition-all duration-300">
          <button className="hover:opacity-100 opacity-75">
            <CardHeader color="light-green" className="relative h-72">
              <img
                src="https://images.unsplash.com/photo-1530695440407-21fef47230b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmV0aW5hJTIwZXllfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt="img-blur-shadow"
                className="object-cover w-full h-full"
              />
            </CardHeader>
          </button>

          <CardBody className="pb-4">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Sarı Nokta Hastalığı
            </Typography>
            <Typography>
              <p className="line-clamp-3 hover:line-clamp-8">
                Genelde 50 yaşından sonra görülür ve gözün yaşlanmasını ifade
                eder. Kuru ve yaş tip olmak üzere ikiye ayrılır. Teşhisinde altın
                standart göz anjiosu (FFA) ve göz tomografisi(OCT) dir. Kuru tip
                iyi seyirli olup tedavide vitamin hapı kullanılır. Yaş tip daha
                ağır olup en iyi tedavisi göz içi enjeksiyonları olup bu iğnelerin
                en iyisi EYLEA tedavisidir.
              </p>
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            
            <Button  className="bg-light-green-800"> <a href="/hastalik1">Devamını Oku</a></Button>
          </CardFooter>
        </Card>
      </div>

      <div className="w-full sm:w-96 lg:w-120">
        <Card className="mt-0 hover:scale-105 transition-all duration-300">
          <button className="hover:opacity-100 opacity-75">
            <CardHeader color="light-green" className="relative h-72">
              <img
                src="https://plus.unsplash.com/premium_photo-1661607420592-c2c013e1d89e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                alt="img-blur-shadow"
                className="object-cover w-full h-full"
              />
            </CardHeader>
          </button>

          <CardBody className="pb-4">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Katarakt (Akıllı Mercek)
            </Typography>
            <Typography>
              <p className="line-clamp-3 hover:line-clamp-9">
                Katarakt, insanın normal şeffaf merceğinin yaşla birlikte
                kesifleşmesidir. Bir nevi gözün yaşlanması olup tek tedavisi laser
                ile cerrahi yöntemdir. Bozulmuş mercek lazer ile alınarak yerine
                suni mercek konur. Eskiden tek odaklı monofokal mercekler
                kullanılırdı ve hasta sadece yakın gözlük kullanırdı. Gelişen
                teknoloji ile Akıllı mercekler piyasaya sürülence hastalar hem
                yakın hem de uzak gözlükten kurtuluyor.
              </p>
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="bg-light-green-800"><a href="/hastalik7">Devamını Oku</a></Button>
          </CardFooter>
        </Card>
      </div>

      <div className="w-full sm:w-96 lg:w-120">
        <Card className="mt-0 hover:scale-105 transition-all duration-300">
          <button className="hover:opacity-100 opacity-75">
            <CardHeader color="light-green" className="relative h-72">
              <img
                src="https://images.unsplash.com/photo-1521336993297-77c615af0169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxyZXRpbmElMjBleWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                alt="img-blur-shadow"
                className="object-cover w-full h-full"
              />
            </CardHeader>
          </button>

          <CardBody className="pb-2">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Diabetik Retinopati
            </Typography>
            <Typography>
              <p className="line-clamp-3 hover:line-clamp-6">
                Diabete bağlı retina damarlarında meydana gelen hasara denir.
                Teşhisinde ve tedavinin takibinde altın standart göz anjiosu ve
                göz tomografisi kullanılır. Tedavide ise argon lazer, göz içi
                iğneleri ve cerrahi işlemler uygulanır.
              </p>
            </Typography>
          </CardBody>
          <CardFooter className="pt-2">
            <Button className="bg-light-green-800"><a href="/hastalik4">Devamını Oku</a></Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
