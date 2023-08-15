import React from 'react';

function AuthPage({
  params,
}: {
  params: { authentication: 'signup' | 'signin' };
}) {
  if (params.authentication === 'signin') {
    return <h3 className="text-2xl">Please Sign in</h3>;
  }
  return <h3 className="text-2xl">Join Now</h3>;
}
export default AuthPage;
