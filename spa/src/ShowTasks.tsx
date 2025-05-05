import axios from "axios";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

interface Task {
    id: string,
    name: string
}

interface Props {
    reload: boolean;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

function ShowTasks({reload, setReload}: Props){
    const [tasks, setTasks] = useState<Task[]>([]);
    
    const fetchTasks = async () => {
        try {
            const resp = await axios.get('/api/tasks');
            console.log(resp);
            setTasks(resp.data);
            setReload(false);
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchTasks();
    }, [])

    useEffect(() => {
        if(reload){
            fetchTasks();
        }
    }, [reload])

    return (
        <div className="flex flex-col gap-2">
            <p className="italic px-4">All Tasks:</p>
            <div className="">
                {
                    tasks.length > 0 
                    ? <div>
                        <ul className="flex flex-col gap-2">
                            {tasks.map(task => (<li key={v4()} className="px-4 py-1 rounded-md bg-indigo-100">{task?.name}</li>))}
                        </ul>
                    </div>
                    : <p className="px-4 py-2 rounded-md bg-indigo-100 italic text-red-500">No tasks yet!</p>
                }
            </div>
        </div>
    )
}   

export default ShowTasks;