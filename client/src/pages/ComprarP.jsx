import React, { useState } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { HomeIcon, CogIcon, UserIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';



export const ComprarP = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const navigate = useNavigate();


  
  const pasosCompra = (activeStep)=>{
    switch (activeStep) {
      case 0:
        return "/home/comprar/sede";
      case 1:
        return "/home/comprar/entradas";
      case 2:
        return "/home/comprar/asiento";
      case 3:
        return "/home/comprar/dulceria";
      case 4:
        return "/home/comprar/pago";
  }
}

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    console.log(activeStep);
    navigate(pasosCompra(activeStep + 1 ));
  
  };
  const handlePrev = () => {
    if(activeStep === 4)
      setActiveStep(3);{
    }

    setActiveStep(activeStep - 1);
    console.log(activeStep);
    navigate(pasosCompra(activeStep));
  };


  
 
  return (
    <>
  
    <div className="bg-white pt-20 px-10 max-w-md w-full">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
        className="mb-8"
      >
        <Step onClick={() => setActiveStep(0)} className="cursor-pointer">
          <HomeIcon className={`h-6 w-6 ${activeStep === 0 ? 'text-blue-500' : 'text-gray-400'}`} />
        </Step>
        <Step onClick={() => setActiveStep(1)} className="cursor-pointer">
          <UserIcon className={`h-6 w-6 ${activeStep === 1 ? 'text-blue-500' : 'text-gray-400'}`} />
        </Step>
        <Step onClick={() => setActiveStep(2)} className="cursor-pointer">
          <CogIcon className={`h-6 w-6 ${activeStep === 2 ? 'text-blue-500' : 'text-gray-400'}`} />
        </Step>
        <Step onClick={() => setActiveStep(3)} className="cursor-pointer">
          <CogIcon className={`h-6 w-6 ${activeStep === 3 ? 'text-blue-500' : 'text-gray-400'}`} />
        </Step>
        <Step onClick={() => setActiveStep(4)} className="cursor-pointer">
          <CogIcon className={`h-6 w-6 ${activeStep === 4 ? 'text-blue-500' : 'text-gray-400'}`} />
        </Step>
      </Stepper>
      <div className="flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep} className="bg-gray-300 text-gray-700 hover:bg-gray-400">
          Anterior
        </Button>
        <Button onClick={handleNext} disabled={isLastStep} className="bg-blue-500 text-white hover:bg-blue-600">
          Siguiente
        </Button>
      </div>
    </div>
  </>
    
  );
}

export default ComprarP;