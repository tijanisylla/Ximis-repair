import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/ThemeProvider";
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
    <ThemeProvider defaultTheme="dark" storageKey="ximi-theme">
      <div className="App min-h-screen bg-background text-foreground">
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
              className: 'bg-card text-card-foreground border-border',
            }}
          />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
