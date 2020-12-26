import React from 'react';
import { FC } from 'react';
import { Codeblock } from '../styles';

interface TranspiledOutputProps {
  readonly transpiledCode: string;
}

export const TranspiledOutput: FC<TranspiledOutputProps> = ({
  transpiledCode,
}) => {
  return <Codeblock>
    {transpiledCode}
  </Codeblock>
}