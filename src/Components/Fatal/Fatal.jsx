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
      <div>
        <h1 className="pt-16 justify-center flex font-semibold text-2xl tracking-widest text-light-green-800">MAKALELER</h1>
        <h1 className="py-3 justify-center flex font-bold text-4xl tracking-wide text-light-green-900">Doktorumuzdan</h1>

      <Card className="flex-row grid-cols-2 w-4/5 max-w-full mx-auto py-6   ">
        
        <CardHeader shadow={false} floated={false} className=" w-1/4 shrink-0 m-5 rounded-r-none">
          
          <img 
            src="https://www.ucarecdn.com/d431e83e-f7a8-42ea-8aeb-268793470ad5/-/resize/700x/" 
            alt="image" 
            className="w-full h-full object-cover "
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6"  className="uppercase mb-4 text-green-600">Epiretinal Membran (ERM/Sarı Noktada Zar)</Typography>
          <Typography variant="h4" className="mb-2 text-light-green-900 ">
          ERM Kimlerde ve nasıl oluşur?
          </Typography>
          <Typography color="gray" className="font-normal mb-8">
            Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story
          </Typography>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2 text-green-900 font-extrabold">
              Devamını Oku 
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
          </a>
        </CardBody>
        
        <CardHeader shadow={false} floated={false} className=" w-1/4 shrink-0 m-5 rounded-r-none">
          <img 
            src="https://www.ucarecdn.com/de33cf1e-0cdc-408f-93b6-53c57d441540/-/resize/700x/" 
            alt="image" 
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6"  className="uppercase mb-4 text-green-600">Retina Dekolmanı</Typography>
          <Typography variant="h4"  className="mb-2 text-light-green-900">
          Dekolman nedir ve nasıl oluşur?
          </Typography>
          <Typography color="gray" className="font-normal mb-8">
            Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story
          </Typography>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2 text-green-900 font-extrabold">
              Devamını Oku
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
          </a>
        </CardBody>
      </Card>
      </div>
    );
  }
  
  