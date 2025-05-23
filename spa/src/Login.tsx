import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useAuth } from "./providers/AuthProvider";
import { useNavigate } from "react-router-dom";

function Login() {
    const { fetchUser } = useAuth();
    const navigate = useNavigate()

    const handleSubmit = async (json: string) => {
        try {
            await axios.get('/sanctum/csrf-cookie');
            await axios.post('/login', json, {headers: {"Content-Type": 'application/json', 'Accept': 'application/json'}});
            fetchUser();
            return navigate('/')
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div className="px-8 py-4 rounded-md bg-indigo-50 min-w-sm">
            <p className="text-center text-lg font-semibold">Login</p>
             <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={async (values) => {
                    const json = JSON.stringify(values);
                    await handleSubmit(json);
                }}
            >
                <Form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" placeholder="john@doe.com" className="px-2 py-1.5 bg-indigo-200 outline-none grow-1 rounded-sm" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" type="password" className="px-2 py-1.5 bg-indigo-200 outline-none grow-1 rounded-sm" />
                    </div>
                    <button type="submit" className="px-3 py-1 bg-indigo-500 text-white hover:bg-indigo-600 rounded-sm">Login</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Login;