import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Tasks from "./Tasks";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";

const routes = createRoutesFromElements(
    <Route path="/">
        <Route index element={<Home />} />
        <Route path="tasks" element={<Tasks />}/>
        <Route path="sign-in" element={<Login />}/>
        <Route path="sign-up" element={<Register />}/>
    </Route>
)

export const router = createBrowserRouter(routes);