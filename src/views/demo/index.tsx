import React, { memo } from 'react';

import type { ReactNode, FC } from 'react';

interface IProps {
  children?: ReactNode;
  name: string;
  age: number;
  height?: number;
}

// FunctionComponents
const Demo: FC<IProps> = (props) => {
  return (
    <div>
      <div>name: {props.name}</div>
    </div>
  );
};

// 直接对 props 进行注释
// const Demo = (props: IProps) => {
//   return (
//     <div>
//       <div>name: {props.name}</div>
//     </div>
//   );
// };

export default memo(Demo);
