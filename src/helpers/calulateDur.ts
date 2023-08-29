import { VisualizationSpeed } from "../constants/enums";
export const calculateDuration = (speed: VisualizationSpeed): number => {
  let duration = speed;
  switch (speed) {
    case VisualizationSpeed.ULTRA_FAST:
      duration = speed / 70;
      break;
    case VisualizationSpeed.FASTER:
      duration = speed / 100;
      break;
    case VisualizationSpeed.FAST:
      duration = speed / 150;
      break;
    case VisualizationSpeed.AVERAGE:
      duration = speed / 250;
      break;
    case VisualizationSpeed.SLOWER:
      duration = speed / 400;
      break;
    case VisualizationSpeed.SLOW:
      duration = speed / 200;
      break;
    case VisualizationSpeed.ULTRA_SLOW:
      duration = speed / 1500;
      break;
    default:
      duration = speed / 150;
  }
  return duration;
};
