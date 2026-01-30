import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { StickyCallButton } from "./components/layout/StickyCallButton";
import { LiveChatWidget } from "./components/layout/LiveChatWidget";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import BookAppointment from "./pages/BookAppointment";
import Specials from "./pages/Specials";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App bg-brand-dark min-h-screen">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book" element={<BookAppointment />} />
            <Route path="/specials" element={<Specials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <StickyCallButton />
        <LiveChatWidget />
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#1A1A1A',
              color: '#F5F0E8',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
