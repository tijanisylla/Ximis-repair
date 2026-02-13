import { lazy, Suspense } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/ThemeProvider";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { PageLoader } from "./components/PageLoader";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { StickyCallButton } from "./components/layout/StickyCallButton";
import { LiveChatWidget } from "./components/layout/LiveChatWidget";

// Pages (lazy-loaded so spinner shows while new page chunk loads)
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const BookAppointment = lazy(() => import("./pages/BookAppointment"));
const Specials = lazy(() => import("./pages/Specials"));
const Contact = lazy(() => import("./pages/Contact"));
const Admin = lazy(() => import("./pages/Admin"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ximi-theme">
      <div className="App min-h-screen bg-background text-foreground">
        <BrowserRouter basename={process.env.PUBLIC_URL || ''}>
            <AuthProvider>
              <Navbar />
              <main>
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/book" element={<BookAppointment />} />
                    <Route path="/specials" element={<Specials />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
              <StickyCallButton />
              <LiveChatWidget />
            </AuthProvider>
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
