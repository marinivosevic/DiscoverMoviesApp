import { PropsWithChildren, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import  useAuth  from '../Hooks/useAuth';
import React from 'react';
interface ProtectedRoutesProps {

  layout: React.ComponentType;

}

 const  ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ layout: Layout }) => {
  const {auth} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth === null) {
      navigate('/login', { replace: true });
    }
  }, [navigate, auth]);

  return <Outlet />;
}

export default ProtectedRoutes;