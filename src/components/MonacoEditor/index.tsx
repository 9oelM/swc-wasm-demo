import React, { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';
import { liveCodeExample } from '../misc/liveCodeExample';

// @ts-ignore
self.MonacoEnvironment = {
  getWorkerUrl: function (_moduleId: any, label: string) {
    if (label === 'json') {
      return './json.worker.bundle.js';
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return './css.worker.bundle.js';
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return './html.worker.bundle.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return './ts.worker.bundle.js';
    }
    return './editor.worker.bundle.js';
  }
};

export interface MonacoEditorProps {
  onLiveCodeChange: (nextCode: string) => void;
}

export const MonacoEditor: React.FC<MonacoEditorProps> = ({
  onLiveCodeChange,
}) => {
  const divEl = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!divEl.current) return;

    const editor: monaco.editor.IStandaloneCodeEditor = monaco.editor.create(divEl.current, {
      value: liveCodeExample,
      language: 'javascript',
      automaticLayout: true,
    });

    const model = editor.getModel();
    if (!model) return;

    const initialValue: string = model.getValue();
    onLiveCodeChange(initialValue);

    model.onDidChangeContent(() => {
      onLiveCodeChange(model.getValue())
    });

    return () => {
      editor.dispose();
    };
  }, [onLiveCodeChange]);
  return <div className="Editor" ref={divEl}></div>;
};