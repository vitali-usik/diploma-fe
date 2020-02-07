import React, { FunctionComponent } from 'react';

interface Props {
  text: string | undefined;
}

const TypeScriptTest: FunctionComponent<Props> = ({ text }) => <div>TS is working! {text}</div>;

export default TypeScriptTest;
