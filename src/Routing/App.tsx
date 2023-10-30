import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const App: FC<Props> = ({ children }) => <div className="App">{children}</div>;

export default App;
