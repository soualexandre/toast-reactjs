import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from "@chakra-ui/react"

function App() {

  const notify = () => toast(
    "Wow so easy!", {
    type: 'error',
    position: "bottom-left",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }
  );

  return (
    <div>
      <ChakraProvider>
        <ToastContainer />
        <button onClick={notify}>Notify!</button>
      </ChakraProvider>
    </div>
  );
}

export default App;
