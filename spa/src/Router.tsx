import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Tasks from "./Tasks";
import Login from "./Login";

const routes = createRoutesFromElements(
    <Route path="/">
        <Route path="tasks" element={<Tasks />}/>
        <Route path="login" element={<Login />}/>
    </Route>
)

export const router = createBrowserRouter(routes);