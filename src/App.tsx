import "./App.css";
import { AuthProvider } from "./lessons/Lesson4/Lesson4_1/context/AuthContext";
import Lesson4_1 from "./lessons/Lesson4/Lesson4_1/Lesson4_1";

function App() {
  return (
    <div className="flex items-center max-w-4xl mx-auto py-8 text-2xl">
      {/* <Lesson1_1 /> */}
      {/* <Lesson1_2 /> */}
      {/* <Lesson2_1 /> */}
      {/* <Lesson3_1 /> */}
      {/* ... */}
      <AuthProvider>
        <Lesson4_1 />
      </AuthProvider>
    </div>
  );
}

export default App;
