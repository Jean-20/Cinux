import React, { useState } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { HomeIcon, CogIcon, UserIcon } from "@heroicons/react/24/outline";
import { Outlet } from "react-router-dom";

export const ComprarP = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
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
          <Step onClick={() => setActiveStep(2)} className="cursor-pointer">
            <CogIcon className={`h-6 w-6 ${activeStep === 3 ? 'text-blue-500' : 'text-gray-400'}`} />
          </Step>
          <Step onClick={() => setActiveStep(2)} className="cursor-pointer">
            <CogIcon className={`h-6 w-6 ${activeStep === 4 ? 'text-blue-500' : 'text-gray-400'}`} />
          </Step>
        </Stepper>
        <div className="mb-8">
          <Outlet />
        </div>
        <div className="flex justify-between">
          <Button onClick={handlePrev} disabled={isFirstStep} className="bg-gray-300 text-gray-700 hover:bg-gray-400">
            Anterior
          </Button>
          <Button onClick={handleNext} disabled={isLastStep} className="bg-blue-500 text-white hover:bg-blue-600">
            Siguiente
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ComprarP;