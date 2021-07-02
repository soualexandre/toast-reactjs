import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';     


function App() {

  const notify = () => toast(
    "Wow so easy!",{
      position: "bottom-left",
      autoClose: "3000"
  }
  );

  return (
    <div>
      <ToastContainer />
      <button onClick={notify}>Notify!</button>
    </div>
  );
}

export default App;
