import { useState } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Home from "@/pages/Home";
import StoryPage from "@/pages/StoryPage";
import EditorPage from "@/pages/EditorPage";
import SamplesPage from "@/pages/SamplesPage";
import WorksheetPage from "@/pages/WorksheetPage";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderPage = () => {
    switch (activeSection) {
      case 'story':
        return <StoryPage />;
      case 'editor':
        return <EditorPage />;
      case 'samples':
        return <SamplesPage />;
      case 'worksheet':
        return <WorksheetPage />;
      default:
        return <Home onNavigate={setActiveSection} />;
    }
  };

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
          <main>
            {renderPage()}
          </main>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
