import React, { memo } from 'react';

import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
  name: string;
  age: number;
  height?: number;
}

// FunctionComponents
const Download: React.FC<IProps> = (props) => {
  return (
    <div>
      <div>name: {props.name}</div>
    </div>
  );
};

// 直接对 props 进行注释
// const Download = (props: IProps) => {
//   return (
//     <div>
//       <div>name: {props.name}</div>
//     </div>
//   );
// };

export default memo(Download);
