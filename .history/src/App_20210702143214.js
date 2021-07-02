import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';     


function App() {

  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <ToastContainer />
      <button onClick={notify}>Notify!</button>
    </div>

  );
}

export default App;
