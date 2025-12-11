import React from 'react';
import useRole from '../hooks/useRole';
import LoadingSpinner from '../components/common/LoadingSpinner';

const CreatorRoute = ({children}) => {
    const [role, isRoleLoading] = useRole()

  if (isRoleLoading) return <LoadingSpinner />
  if (role === 'creator') return children
  return <Navigate to='/' replace='true' />
}

export default CreatorRoute;