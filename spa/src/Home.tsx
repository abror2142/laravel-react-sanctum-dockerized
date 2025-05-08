import { useAuth } from "./providers/AuthProvider";
import Tasks from "./Tasks";

function Home(){
    const { user, logout } = useAuth();
    return (
        <div className="flex flex-col gap-2">
            <div className="bg-indigo-50 px-8 py-2 rounded-md">
             {
                user 
                ? <div className="flex gap-2">
                    <a href="/tasks" className="text-blue-500 hover:underline hover:text-blue-700">/tasks</a>
                    <div onClick={logout} className="ml-auto bg-indigo-500 hover:bg-indigo-600 text-white py-0.2 px-2 rounded-sm">/logout</div>
                </div>
                : <div className="flex gap-2">
                    <a href="/sign-in" className="text-blue-500 hover:underline hover:text-blue-700">/login</a>
                    <a href="/sign-up" className="text-blue-500 hover:underline hover:text-blue-700">/register</a>
                </div>
            }
            </div>
            <div>
                {
                    user 
                    ? <Tasks />
                    : <div className="px-8 py-4 bg-indigo-50 rounded-sm min-w-sm">
                        <p>To use this app <span className="font-semibold">login/register</span> first!</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Home;