import { Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Error404 from './Error404';
import About from './About';
import Contact from './Contact';
import Contacts from './Contacts';

const AppRoutes = () => (
  <App>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/contacts" element={<Contacts />}>
        <Route path=":contactId" element={<Contacts />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  </App>
);

export default AppRoutes;
