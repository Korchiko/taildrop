import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

export default function Example() {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      <div className="w-full sm:w-96">
        <Card className="mt-0">
          <button className="hover:opacity-100 opacity-75">
            <CardHeader
              color="light-green"
              className="relative h-56"
            >
              <img
                src="https://images.unsplash.com/photo-1530695440407-21fef47230b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmV0aW5hJTIwZXllfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="img-blur-shadow"
                className="object-cover w-full h-full"
              />
            </CardHeader>
          </button>

          <CardBody className="pb-4">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by walk
              and near to &quot;Naviglio&quot; where you can enjoy the main night life
              in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="bg-light-green-800">Devamını Oku</Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="w-full sm:w-96">
        <Card className="mt-0">
          <button className="hover:opacity-100 opacity-75">
            <CardHeader
              color="light-green"
              className="relative h-56"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1661607420592-c2c013e1d89e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                alt="img-blur-shadow"
                className="object-cover w-full h-full"
              />
            </CardHeader>
          </button>

          <CardBody className="pb-4">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by walk
              and near to &quot;Naviglio&quot; where you can enjoy the main night life
              in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="bg-light-green-800">Devamını Oku</Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="w-full sm:w-96">
        <Card className="mt-0">
          <button className="hover:opacity-100 opacity-75">
            <CardHeader
              color="light-green"
              className="relative h-56"
            >
              <img
                src="https://images.unsplash.com/photo-1521336993297-77c615af0169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxyZXRpbmElMjBleWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="img-blur-shadow"
                className="object-cover w-full h-full"
              />
            </CardHeader>
          </button>

          <CardBody className="pb-4">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by walk
              and near to &quot;Naviglio&quot; where you can enjoy the main night life
              in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="bg-light-green-800">Devamını Oku</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
