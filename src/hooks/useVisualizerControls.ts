import { useState, useEffect } from 'react';

interface UseVisualizerControlsOptions {
  onGenerateArray: () => void;
}

export const useVisualizerControls = <TStep,>(
  steps: TStep[],
  options: UseVisualizerControlsOptions
) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(500);

  const { onGenerateArray } = options;

  // Auto-play effect
  useEffect(() => {
    if (isPlaying && currentStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (currentStep >= steps.length - 1) {
      setIsPlaying(false);
    }
  }, [isPlaying, currentStep, steps.length, speed]);

  // Reset when new steps are generated
  useEffect(() => {
    setCurrentStep(0);
    setIsPlaying(false);
  }, [steps]);

  const handlePlay = () => {
    if (currentStep >= steps.length - 1) {
      setCurrentStep(0);
    }
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleNewArray = () => {
    onGenerateArray();
  };

  const currentStepData = steps[currentStep] || steps[0];
  const totalSteps = steps.length - 1;

  return {
    currentStep,
    currentStepData,
    totalSteps,
    isPlaying,
    speed,
    setSpeed,
    handlePlay,
    handlePause,
    handleReset,
    handleNext,
    handlePrevious,
    handleNewArray,
  };
};
