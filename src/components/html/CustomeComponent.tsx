import Greet from '../Greet';
import React from 'react';

const CustomeComponent = (props: React.ComponentProps<typeof Greet>) => {
  const {name, isLoggedIn} = props
  return (
    <div>
      {
        isLoggedIn ? `Welcome ${name}` : "Welcome Guest"
      }
    </div>
  );
};

export default CustomeComponent
