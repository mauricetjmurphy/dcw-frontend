import { useRoutes } from 'react-router-dom';
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function AppRoutes() {
  return useRoutes([MainRoutes]);
}
