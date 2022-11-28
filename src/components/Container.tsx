import React from 'react';

type ContainerProps = {
  style: React.CSSProperties
}

const Container = ({style}: ContainerProps) => {
  return (
    <div style={style}>
        Text content goes here
    </div>
  );
};

export default Container;