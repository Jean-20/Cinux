import React, { useState } from "react";
import { HomeIcon, UserIcon, CogIcon, CheckCircleIcon, DocumentIcon } from "@heroicons/react/24/outline";
import { Outlet } from "react-router-dom";

export const ComprarP = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { icon: <HomeIcon className="w-5 h-5" />, label: "Inicio" },
    { icon: <UserIcon className="w-5 h-5" />, label: "Usuario" },
    { icon: <DocumentIcon className="w-5 h-5" />, label: "Documentos" },
    { icon: <CogIcon className="w-5 h-5" />, label: "Configuración" },
    { icon: <CheckCircleIcon className="w-5 h-5" />, label: "Finalizar" },
  ];

  const isLastStep = activeStep === steps.length - 1;
  const isFirstStep = activeStep === 0;

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="relative flex items-center justify-between w-full mb-8">
          <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-300"></div>
          <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-900 transition-all duration-500"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative z-10 grid w-10 h-10 font-bold text-white transition-all duration-300 ${activeStep === index ? 'bg-gray-900' : 'bg-gray-300'} rounded-full place-items-center cursor-pointer`}
              onClick={() => setActiveStep(index)}
            >
              {React.cloneElement(step.icon, { className: `${activeStep === index ? 'text-white' : 'text-gray-900'}` })}
            </div>
          ))}
        </div>

        <div className="mb-8">
          <Outlet />
        </div>

        <div className="flex justify-between">
          <button
            onClick={handlePrev}
            disabled={isFirstStep}
            className="select-none rounded-lg bg-gray-300 py-3 px-6 text-center text-xs font-bold uppercase text-gray-700 shadow-md transition-all hover:bg-gray-400 focus:opacity-85 disabled:pointer-events-none disabled:opacity-50"
          >
            Anterior
          </button>
          <button
            onClick={handleNext}
            disabled={isLastStep}
            className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center text-xs font-bold uppercase text-white shadow-md transition-all hover:bg-gray-800 focus:opacity-85 disabled:pointer-events-none disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComprarP;