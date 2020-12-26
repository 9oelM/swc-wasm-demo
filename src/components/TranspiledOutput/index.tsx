import React from 'react';
import { FC } from 'react';

interface TranspiledOutputProps {
  readonly transpiledCode: string;
}

export const TranspiledOutput: FC<TranspiledOutputProps> = ({
  transpiledCode,
}) => {
  return <pre>
    {transpiledCode}
  </pre>
}