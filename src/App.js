import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import logo from './logo.svg';
import './App.css';
import './css/index.css';
import Header from './components/Header';
import Arrowfun from './components/Arrowfun';
import Namedanddefault4, { Namedanddefault, Namedanddefault2, Namedanddefault3 } from './components/Namedanddefault';
import Classbasecomp from './components/Classbasecomp';
import Stateconcept from './components/Stateconcept';
import Destructure from './components/Destructure';
import { Destructuretwo } from './components/Destructure';
import { Destructurethree, Destructurefour, Destructurefive, Destructuresix } from './components/Destructure';
import Handlerfun from './components/Hnadlerfun';
import { Handlerfuntwo } from './components/Hnadlerfun';
import { Eventbing, EventBindingThree } from './components/Eventbing';
import { Binding } from "./components/Binding";
import PassingMethod from './components/PassingMethod';
import PassingMethodParent from './components/PassingMethodParent';
import ConditionalRendering from './components/ConditionalRendering';
import MapFun from './components/MapFun';
import StyleInline from './components/StyleInline';
import External from './components/External';
import ModueCss from './components/ModueCss';
import HookComp from './components/HookComp';
import HookWithObj from './components/HookWithObj';
import HookWithArray from './components/HookWithArray';
import UseeffectComp from './components/UseeffectComp';
import UseeffectConditionally from './components/UseeffectConditionally';
import { Suspense, createContext, lazy, useEffect, useState } from 'react';
import CompA from './context/CompA';
import FormCl from './form/FormCl';
import FormF from './form/FormF';
import FormCMultpleInput from './form/FormCMultpleInput';
import FormFMultiple from './form/FormFMultiple';
import Checkboxx from './form/Checkboxx';
import FormMCheckboxes from './form/FormMCheckboxes';
import FormCCheckboxes from './form/FormCCheckboxes';
import Myref from './form/Myref';
import Uncontrolledcomp from './form/Uncontrolledcomp';
import Callbackref from './form/Callbackref';
import Useref from './form/Useref';
import Userefform from './form/Userefform';
import Userefnorender from './form/Userefnorender';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Myhome from './myroutes/Myhome';
import Contact from './myroutes/Contact';
import About from './myroutes/About';
import Navbar from './myroutes/Navbar';
import Pagenotfound from './myroutes/Pagenotfound';
import Products from './myroutes/Products';
import Shirts from './myroutes/Shirts';
import Clothes from './myroutes/Clothes';
import Cotton from './myroutes/Cotton';
import Users from './myroutes/Users';
import UserDetails from './myroutes/UserDetails';
import AdminDetails from './myroutes/AdminDetails';
import Search from './myroutes/Search';
import Useparams from './myroutes/Useparams';
import Examfind from './myroutes/Examfind';
import Formwithformik from './formikyup/Formwithformik';
import DestructureFormwithformik from './formikyup/DestructureFormwithformik';
import FormikOnly from './formikyup/FormikOnly';
import Usereducers from './myReducers/Usereducers';
import GetAxios from './myReducers/GetAxios';
import PostAxios from './myReducers/PostAxios';
import Create from './myReducers/Create';
import Read from './myReducers/Read';
import Delete from './myReducers/Delete';
import { increase, decrease, add, minus, reset, add2, minus2, reset2 } from './actions';
import { incrementsfile,decrementsfile } from './ToolKitSliceFile';
import Update from './myReducers/Update';

import { useDispatch, useSelector } from 'react-redux';

import { decrements,increments,increments2,decrements2,resetTool} from './ToolKitSlice';

const ComLazOne = lazy(() => import("./myroutes/ComLazOne"))
const ComLazTwo = lazy(() => import("./myroutes/ComLazTwo"))
export const NameContext = createContext();
export const ChannelContext = createContext();
export const emailContext = createContext();

function App() {
      const myState = useSelector((state) => state.inc_dec);
      const myStateTwo = useSelector((state) => state.addMinus);
      const myStateThree = useSelector((state) => state.addMinus2);
      const dispatch = useDispatch();
      const dispatch2 = useDispatch();
      const dispatch3 = useDispatch();


const tooState=useSelector((state)=>state.counter.count);
const toolDispatch=useDispatch();

const tooState2=useSelector((state)=>state.counter.count2);
const toolDispatch2=useDispatch();

const tooStatefile=useSelector((state)=>state.countertwo.count);
const toolDispatchfile=useDispatch();


      const [num, setNum] = useState(0);
      var email = "affan123@";
      var age = "24";
      const friends = ["aabid ", "abubakar ", " saud"];
      const team = ['TeamA ', ' TeamB', ' TeamC'];
      const arr = ["value1", "value2", "value3"];
      let propsDrilling = "propsDrilling";
      let emailC = "emailCemailCemailC";


      return (
            <div className="App">

                  <BrowserRouter>
                        <Navbar ></Navbar>
                        <Routes>
                              <Route path='/' element={<Myhome />} />

                              <Route path='/products' element={<Products />}>

                                    <Route index element={<Shirts></Shirts>} />
                                    <Route path='shirts' element={<Shirts />} />
                                    <Route path='clothes' element={<Clothes />}>
                                          <Route path='cotton' element={<Cotton />} />

                                    </Route>
                              </Route>
                              <Route path='/about' element={<About />} />
                              <Route path='/users' element={<Users />} >
                                    <Route path=':id' element={<UserDetails></UserDetails>}></Route>
                                    <Route path='admindetails' element={<AdminDetails></AdminDetails>}></Route>
                              </Route>


                              {/* dynamic routes */}
                              {/* <Route path='/users/1' element={<UserDetails />} />
                              <Route path='/users/2' element={<UserDetails />} />
                              <Route path='/users/3' element={<UserDetails />} /> */}
                              <Route path='/users/:id' element={<UserDetails />} />
                              {/* fix route */}
                              {/* pehlay fix route ko dhoondega  */}
                              {/* <Route path='/users/admindetails' element={<AdminDetails></AdminDetails>} /> */}


                              <Route path='/contact' element={<Contact />} />

                              <Route path='*' element={<Pagenotfound />} />
                              <Route path='/search' element={<Search />} />

                              {/* <Route path='/useparams' element={<Useparams></Useparams>} /> */}
                              {/* <Route path='/useparams/1' element={<Examfind></Examfind>} /> */}

                              <Route path='/useparams' element={<Useparams></Useparams>} >
                                    <Route path=':id' element={<Examfind></Examfind>} />
                              </Route>

                              <Route path='/formik-form' element={<FormikOnly></FormikOnly>}></Route>
                              <Route path='/Usereducers' element={<Usereducers />}></Route>
                              <Route path='/getaxios' element={<GetAxios />}></Route>
                              <Route path='/postaxios' element={<PostAxios />}></Route>
                              <Route path='/create' element={<Create />}></Route>
                              <Route path='/read' element={<Read />}></Route>
                              <Route path='/update' element={<Update />}></Route>
                        </Routes>
                  </BrowserRouter>

                  <br></br><br></br><br></br>
                  <h1> Redux Store | Store In Redux | React Redux Store | React JS | React Redux Tutorial (Hindi/Urdu)</h1>
                  <button onClick={() => dispatch(increase())}>increment</button>
                  <input type='text' value={myState} />
                  <button onClick={() => dispatch(decrease())}>decrement</button>
                  <br></br><br></br><br></br>
                   <h1> Redux Tool Kit In React JS </h1>
                  <button onClick={()=>toolDispatch(increments())}>increment</button>
                  <h6>{tooState}</h6>
                  <button onClick={()=>toolDispatch(decrements())}>decrement</button> 

                  <br></br><br></br><br></br>
    
                  <button onClick={()=>toolDispatch2(increments2())}>increment</button>
                  <h6>{tooState2}</h6>
                  <button onClick={()=>toolDispatch2(decrements2())}>decrement</button> 
                  <button onClick={()=>toolDispatch2(resetTool())}>resetTool</button> 

                  <br></br><br></br><br></br>


                  <br></br><br></br><br></br>

                  <br></br><br></br><br></br>
                  <button onClick={() => dispatch2(add())}>increment</button>
                  <input type='text' value={myStateTwo} /> <b>{myStateTwo}</b>
                  <button onClick={() => dispatch2(minus())}>decrement</button>
                  <button onClick={() => dispatch2(reset())}>Delete All</button>

                  <br></br><br></br><br></br>
                  <h1>seconf slice for checking</h1>
                  <button onClick={() => toolDispatchfile(incrementsfile())}>increment</button>
                  <input type='text' value={tooStatefile} /> <b>{tooStatefile}</b>
                  <button onClick={() => toolDispatchfile(decrementsfile())}>decrement</button>

                  <br></br><br></br><br></br>
                  <br></br><br></br><br></br>
                  <button onClick={() => dispatch3(add2())}>increment</button>
                  <input type='text' value={myStateThree} /> <b>{myStateTwo}</b>
                  <button onClick={() => dispatch3(minus2())}>decrement</button>
                  <button onClick={() => dispatch3(reset2())}>Delete All</button>

                  <br></br><br></br><br></br>


                  <Formwithformik></Formwithformik>
                  <br></br>
                  <DestructureFormwithformik></DestructureFormwithformik>
                  <br></br>
                  <Userefnorender></Userefnorender>
                  <br></br>
                  <br></br>
                  <Userefform></Userefform>
                  <br></br>
                  <br></br>
                  <Useref></Useref>
                  <br></br>


                  <Suspense fallback={<div>LOADIN....</div>}>
                        <ComLazOne></ComLazOne>
                  </Suspense>
                  <Suspense fallback={<div>LOADIN....</div>}>
                        <ComLazTwo></ComLazTwo>
                  </Suspense>
                  <br></br>
                  <Callbackref></Callbackref>
                  <br></br>
                  <br></br>
                  <Uncontrolledcomp></Uncontrolledcomp>
                  <br></br>
                  <br></br>
                  <Myref></Myref>
                  <br></br>
                  <br></br>
                  <FormCCheckboxes></FormCCheckboxes>
                  <br></br>
                  <br></br>
                  <FormMCheckboxes></FormMCheckboxes>
                  <br></br>
                  <br></br>
                  <Checkboxx></Checkboxx>
                  <br></br>
                  <br></br>
                  <FormFMultiple></FormFMultiple>
                  <br></br>
                  <br></br>
                  <br></br>
                  <FormCMultpleInput></FormCMultpleInput>
                  <br></br>
                  <br></br>
                  <br></br>
                  <FormF></FormF>
                  <br></br>
                  <br></br>
                  <br></br>
                  <FormCl></FormCl>
                  <br></br>
                  <br></br>

                  <br></br>
                  {/* <CompA propsDrilling={propsDrilling}></CompA>
      <NameContext.Provider value={'osama using context'}>
      <ChannelContext.Provider value={"affane using useContext"}>
        <emailContext.Provider value={emailC}>
      <CompA></CompA>
      </emailContext.Provider>
      </ChannelContext.Provider>
            </NameContext.Provider> */}
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <b>useEffect with props  {num}</b>
                  <UseeffectConditionally num={num} ></UseeffectConditionally>
                  <button onClick={() => setNum(num + 1)}>useEffect with props</button>
                  <br></br>
                  <UseeffectComp></UseeffectComp>
                  <br></br>
                  <HookWithArray></HookWithArray>
                  <br></br>
                  <HookWithObj></HookWithObj>
                  <br></br>
                  <HookComp></HookComp>
                  <br></br>
                  <ModueCss cond={true}></ModueCss>
                  <br></br>
                  <External cond={true}></External>
                  <br></br>
                  <StyleInline></StyleInline>
                  <br></br>
                  <MapFun></MapFun>
                  <br></br>
                  <ConditionalRendering></ConditionalRendering>
                  <br></br>
                  <PassingMethodParent></PassingMethodParent>
                  <br></br>
                  {/* <PassingMethod></PassingMethod> */}
                  <br></br>
                  <br></br>
                  <Binding></Binding>
                  <br></br>
                  <br></br>
                  <EventBindingThree></EventBindingThree>
                  <Eventbing></Eventbing>
                  <br></br>
                  <br></br>
                  <Handlerfun name="this name will be change"></Handlerfun>
                  <Handlerfuntwo data="propsssssssss"></Handlerfuntwo>
                  <Destructuresix name="irfan" semester="H.M.E" arr={arr}></Destructuresix>
                  <Destructurefive name="anwar" semester="h.m.e" arr={arr}></Destructurefive>
                  <Destructurefour name="saud" semester="sfitment" ></Destructurefour>
                  <Destructurethree name="abubakar" semester="taylor"></Destructurethree>
                  <Destructuretwo name="aabid" semester="sixth"></Destructuretwo>
                  <Destructure name="osama" semester=" last"></Destructure>

                  <Stateconcept email="osama@gmail.com"></Stateconcept>
                  <br></br>
                  <br></br>
                  <br></br>
                  <Classbasecomp country="pakistan" team={team} booLv={false}>
                        this is Children props data
                  </Classbasecomp>
                  <br></br>
                  <br></br>
                  <br></br>
                  <Header name="affan ahmad" email={email} age={123} isMarried={true} arr={friends}>
                        <h4>this is Children</h4>
                  </Header>

                  <Arrowfun></Arrowfun>
                  <Namedanddefault></Namedanddefault>
                  <Namedanddefault2></Namedanddefault2>
                  <Namedanddefault3></Namedanddefault3>
                  <Namedanddefault4></Namedanddefault4>

            </div>
      );
}

export default App;
