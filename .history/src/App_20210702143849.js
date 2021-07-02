import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';     


function App() {

  const notify = () => toast(
    "Wow so easy!",{
      position: "bottom-left",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
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
