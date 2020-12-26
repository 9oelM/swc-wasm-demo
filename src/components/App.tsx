import React, { useCallback } from 'react';
import { FC, useState } from 'react';
import { MainWrapper } from './styles/common';
import { LiveEditor } from './LiveEditor';
import { UpdateLiveCode } from './types';
import { TranspiledOutput } from './TranspiledOutput';

export const App: FC = () => {
  const [liveCode, setLiveCode] = useState<Readonly<string>>('')
  const updateLiveCode: UpdateLiveCode = useCallback(
    (nextCode) => {
      setLiveCode(nextCode)
    },
    [],
  )

  return <MainWrapper>
    <LiveEditor
      updateLiveCode={updateLiveCode}
    />
    <TranspiledOutput
      transpiledCode={liveCode}
    />
  </MainWrapper>
}