import React from 'react';
import { Spinner } from "@material-tailwind/react";

const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner color='green' className="h-12 w-12 text-green-700" />
    </div>
  );
}

export default LoadingScreen;