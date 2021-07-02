import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider, Button, Center } from "@chakra-ui/react"

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

  const notifySuccess = () => toast(
    "Wow so easy!", {
    type: 'success',
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
        <Center mt={200}>
          <Button
            type="success"
            colorScheme="teal"
            variant="outline"
            onClick={notify}
            width="400px">
            Button
          </Button>
        </Center>
      </ChakraProvider>
    </div>
  );
}

export default App;
