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
      <div className="w-96">
        <Card className="mt-0 hover:scale-105 transition-all duration-300">
          <button className="hover:opacity-100 opacity-75">
            <CardHeader color="light-green" className="relative h-72">
              <img
                src="https://images.unsplash.com/photo-1540429071038-04d88623bc9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIwfHxleWUlMjBmb3IlMjBleWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                alt="img-blur-shadow"
                className="object-cover w-full h-full"
              />
            </CardHeader>
          </button>

          <CardBody className="pb-4">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Glokom (Göz Tansiyonu)
            </Typography>
            <Typography>
              <p className="line-clamp-3 hover:line-clamp-9">
                Karasu hastalığı olarak da bilinen göz tansiyonu, gözde üretilen
                sıvının dışarı atılamaması sonucu içerde birikmesiyle tansiyonun
                yükselmesi ve bu sebeple göz sinirinin kurumasıyla giden son derece
                tehlikeli bir hastalıktır. Teşhisinde altın standart Görme Alanı ve
                Oct olup erken teşhis son derece önemlidir. Çoğu hasta damla ile
                tedavi edilirken geç kalınırsa lazer ya da cerrahi gerekebilir.
              </p>
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="bg-light-green-800"><a href="/hastalik6">Devamını Oku</a></Button>
          </CardFooter>
        </Card>
      </div>

      <div className="w-96">
        <Card className="mt-0 hover:scale-105 transition-all duration-300">
          <button className="hover:opacity-100 opacity-75">
            <CardHeader color="light-green" className="relative h-72">
              <img
                src="https://images.unsplash.com/photo-1513758173941-bfbd2e4166f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHJldGluYSUyMGV5ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt="img-blur-shadow"
                className="object-cover w-full h-full"
              />
            </CardHeader>
          </button>

          <CardBody className="pb-4">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Miyop
            </Typography>
            <Typography>
              <p className="line-clamp-3 hover:line-clamp-8">
                Miyop, gözün ön arka uzunluğunun fazla olmasıyla kırıcılığının
                artması ve bu nedenle uzağı görememektir. Genelde çocukluk yaşlarında
                başlar ve 20'li yaşlarda durur. Yakın okumak ve cep telefonu çok
                tehlikeli olup numarayı ilerletir. Tedavisinde gözlük, kontak lens
                ya da excimer laser kullanılır. Laser tedavisi için en uygun yaş 22
                ile 35 arasıdır.
              </p>
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="bg-light-green-800 disabled:">Devamını Oku</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="w-96">
        <Card className="mt-0 hover:scale-105 transition-all duration-300">
          <button className="hover:opacity-100 opacity-75">
            <CardHeader color="light-green" className="relative h-72">
              <img
                src="https://plus.unsplash.com/premium_photo-1661302956617-b40b5d2bf19d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk0fHxyZXRpbmElMjBleWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                alt="img-blur-shadow"
                className="object-cover w-full h-full"
              />
            </CardHeader>
          </button>

          <CardBody className="pb-4">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Retinitis Pigmentosa
            </Typography>
            <Typography>
              <p className="line-clamp-3 hover:line-clamp-7">
                Gece ve karanlıkta görmeyi sağlayan hücrelerde doğuştan gelen bir
                rahatsızlık olup 15 yaş civarlarında görülmeye başlar. Hastalık
                ilerledikçe gündüz görmeyi sağlayan hücrelerde bozulur. Yeni çıkan
                kök hücre tedavisi bu hastalığın tedavisinde oldukça umut vericidir.
              </p>
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="bg-light-green-800"><a href="/hastalik2">Devamını Oku</a></Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
