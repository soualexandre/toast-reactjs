import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer />
        <FLex>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={notify}
              width="400px">
              Button
            </Button>
        </FLex>
    </div>
  );
}

export default App;
