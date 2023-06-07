import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
 
export default function Example() {
  return (
    <Card className="w-96 m-auto  ">
      <CardHeader floated={false} className="h-80 ">
        <img src="https://st2.depositphotos.com/47577860/47003/v/450/depositphotos_470031302-stock-illustration-man-occupation-trainee-icon-solid.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-4">
          Sadun Yalçın
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
          Operatör Doktor
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-end gap-7 pt-4">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}