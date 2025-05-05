import axios from "axios";
import { Formik, Field, Form } from "formik";

interface Props {
    setReload: React.Dispatch<React.SetStateAction<boolean>>
}

function CreateTask ({setReload}: Props){
    const handleSubmit = async (json: string) => {
        try {
            const response = await axios.post('/api/tasks', json, {headers: {'Content-Type': 'application/json'}});
            setReload(true);
            console.log(response)
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <Formik
            initialValues={{
                name: '',
            }}
            onSubmit={async (values) => {
                const json = JSON.stringify(values);
                await handleSubmit(json);
            }}
        >
            <Form className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <Field id="name" name="name" placeholder="Add a task..." className="px-2 py-1.5 bg-indigo-200 outline-none grow-1 rounded-sm" />
                    <button type="submit" className="px-3 py-1 bg-indigo-500 text-white hover:bg-indigo-600 rounded-sm">Add</button>
                </div>
            </Form>
        </Formik>
    )
}

export default CreateTask;