import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import  useAuth  from '../Hooks/useAuth';

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }:ProtectedRouteProps) {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate('/login', { replace: true });
    }
  }, [navigate, user]);

  return children;
}