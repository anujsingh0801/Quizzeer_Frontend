import logo from './logo.svg';
import './App.css';
import Test from "./Component/Test"
import Header from './Component/Header';
import Subject from './Component/Subject';
import Courses from './Component/Courses';
import { Row, Col } from 'reactstrap';
import Menu from './Component/Menu';
import Home  from './Component/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import StartTest from './Component/StartTest'
import Result from './Component/Result';
import UpdateSubject from './Component/UpdateSubject'
import addSubject from './Component/addSubject'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Row>
          <Col xs="2">
            <Menu />
          </Col>
          <Col>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/subjects" Component={Courses} />
                <Route path="/startTest" Component={StartTest} />
                <Route path="/result" Component={Result} />
                <Route path="/update-subject" Component={UpdateSubject} />
                {/* <Route path="/add-subject" Component={addSubject} /> */}
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
    </div>
  );
}

export default App;
