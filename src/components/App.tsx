import React, { useCallback } from 'react';
import { FC, useState } from 'react';
import { CodesWrapper, Header, MainWrapper } from './styles';
import { LiveEditor } from './LiveEditor';
import { TranspiledOutput } from './TranspiledOutput';
import debounce from 'lodash.debounce';

export const App: FC = () => {
  const [liveCode, setLiveCode] = useState<Readonly<string>>('')
  const updateLiveCode: (nextCode: string) => void = useCallback(
    debounce((nextCode) => {
      setLiveCode(nextCode)
    }, 1000),
    [],
  )

  return <MainWrapper>
    <Header>swc demo in wasm</Header>
    <CodesWrapper as='section'>
    <LiveEditor
      updateLiveCode={updateLiveCode}
    />
    <TranspiledOutput
      transpiledCode={liveCode}
    />
    </CodesWrapper>
  </MainWrapper>
}