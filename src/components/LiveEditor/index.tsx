import * as SWC from '@swc/wasm-web';
import React, { ChangeEventHandler } from 'react';
import { FC } from 'react';
import { UpdateLiveCode } from '../types';

interface LiveEditorProps {
  updateLiveCode: UpdateLiveCode;
}

export const LiveEditor: FC<LiveEditorProps> = ({
  updateLiveCode,
}) => {
  const handleTextAreaChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const result = SWC.transformSync(e.target.value, {})
    console.log(result)
    updateLiveCode(result)
  }

  return <textarea 

    onChange={handleTextAreaChange}
  >
    
  </textarea>
}

