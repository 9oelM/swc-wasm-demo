import React, { ReactNode, useCallback, useMemo, useState } from 'react';
import { FC, useRef, useEffect, ChangeEventHandler } from 'react';
import { importSwcWasm } from '../misc/util';
import { MonacoEditor, MonacoEditorProps } from '../MonacoEditor';
import { SwcWasm } from '../types';
interface LiveEditorProps {
  updateLiveCode: (nextCode: string) => void;
}


export const LiveEditor: FC<LiveEditorProps> = ({
  updateLiveCode,
}) => {
  const swcWasm = useRef<SwcWasm | null>(null);
  const [isSwcWasmLoading, setSwcWasmLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const wasm: SwcWasm = await importSwcWasm();

      swcWasm.current = wasm;
      setSwcWasmLoading(false);
    })()
  }, [])

  const handleTextAreaChange: MonacoEditorProps['onLiveCodeChange'] = useCallback((nextCode) => {
    try {
      if (!swcWasm.current) return;
      const { transformSync } = swcWasm.current;

      updateLiveCode(transformSync(nextCode, {}).code)
    } catch (e) {
      console.error(e)
    }
  }, [updateLiveCode])

  const loadingUIOrEditor: ReactNode =
    useMemo(() => 
      isSwcWasmLoading ? 
        'loading...' : 
        <MonacoEditor onLiveCodeChange={handleTextAreaChange} />, [isSwcWasmLoading]
    )

  return <>{loadingUIOrEditor}</>;
}
