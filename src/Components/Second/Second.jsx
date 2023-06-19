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
        <div className=" mt-16 justify-center flex space-x-14 ">
      <Card className="mt-6 w-96">
      <button className="hover:opacity-100 opacity-75">
        
        <CardHeader color="blue-gray" className="relative h-56">
          <img src="https://images.unsplash.com/photo-1540429071038-04d88623bc9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIwfHxleWUlMjBmb3IlMjBleWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="img-blur-shadow" layout="fill" />
        </CardHeader>
        </button>
        <CardBody>
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
          <Button>Read More</Button>
        </CardFooter>
      </Card>
      <Card className="mt-6 w-96">
      <button className="hover:opacity-100 opacity-75">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src="https://images.unsplash.com/photo-1513758173941-bfbd2e4166f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHJldGluYSUyMGV5ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img-blur-shadow" layout="fill" />
        </CardHeader>
        </button>
        <CardBody>
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
          <Button>Read More</Button>
        </CardFooter>
      </Card>
      <Card className="mt-6 w-96">
      <button className="hover:opacity-100 opacity-75">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src="https://plus.unsplash.com/premium_photo-1661302956617-b40b5d2bf19d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk0fHxyZXRpbmElMjBleWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="img-blur-shadow" layout="fill" />
        </CardHeader>
        </button>
        <CardBody>
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
          <Button>Read More</Button>
        </CardFooter>
      </Card>
      </div>
    );
  }