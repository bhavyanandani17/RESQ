import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import MobileDrawer from './components/MobileDrawer';
import DashboardView from './components/DashboardView';
import SheltersView from './components/SheltersView';
import AssistantView from './components/AssistantView';
import ReportDangerView from './components/ReportDangerView';
import SurvivalGuideView from './components/SurvivalGuideView';
import ContactsView from './components/ContactsView';
import CommunityFeedView from './components/CommunityFeedView';
import AboutModal from './components/AboutModal';
import SOSModal from './components/SOSModal';
import SafeCheckModal from './components/SafeCheckModal';
import NotificationPopover from './components/NotificationPopover';

export default function App() {
  const [currentTab, setTab] = useState('dashboard');
  const [scenarioKey, setScenarioKey] = useState('gwalior');
  const [isSOSOpen, setIsSOSOpen] = useState(false);
  const [isSafeOpen, setIsSafeOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isOfflineMode, setIsOfflineMode] = useState(false);

  // If user clicks SOS or Safe from navigation, we can open modal or show full screen view
  const handleNavTab = (tabId) => {
    if (tabId === 'sos') {
      setIsSOSOpen(true);
    } else if (tabId === 'safe') {
      setIsSafeOpen(true);
    } else {
      setTab(tabId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Desktop Sidebar Navigation (Matching Image 1) */}
      <Sidebar
        currentTab={currentTab}
        setTab={handleNavTab}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 pb-16 md:pb-0">
        {/* Header Bar */}
        <Header
          scenarioKey={scenarioKey}
          setScenarioKey={setScenarioKey}
          onOpenMobileMenu={() => setIsMobileDrawerOpen(true)}
          onOpenNotifications={() => setIsNotificationsOpen(true)}
          isOfflineMode={isOfflineMode}
          setIsOfflineMode={setIsOfflineMode}
          setTab={setTab}
        />

        {/* View Routing */}
        <main className="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto">
          {currentTab === 'dashboard' && (
            <DashboardView
              scenarioKey={scenarioKey}
              setTab={handleNavTab}
              onTriggerSOS={() => setIsSOSOpen(true)}
              onTriggerSafe={() => setIsSafeOpen(true)}
            />
          )}

          {currentTab === 'shelters' && (
            <SheltersView
              scenarioKey={scenarioKey}
              setTab={setTab}
            />
          )}

          {currentTab === 'assistant' && (
            <AssistantView
              setTab={setTab}
              onTriggerSOS={() => setIsSOSOpen(true)}
            />
          )}

          {currentTab === 'report' && (
            <ReportDangerView
              scenarioKey={scenarioKey}
              setTab={setTab}
            />
          )}

          {currentTab === 'guide' && (
            <SurvivalGuideView
              setTab={setTab}
            />
          )}

          {currentTab === 'contacts' && (
            <ContactsView
              scenarioKey={scenarioKey}
              setTab={setTab}
            />
          )}

          {currentTab === 'community' && (
            <CommunityFeedView
              scenarioKey={scenarioKey}
              setTab={setTab}
            />
          )}

          {currentTab === 'about' && (
            <AboutModal
              setTab={setTab}
            />
          )}
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar (Matching Image 2) */}
      <MobileNav
        currentTab={currentTab}
        setTab={handleNavTab}
      />

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        currentTab={currentTab}
        setTab={handleNavTab}
      />

      {/* SOS Modal with 5-Second countdown & Web Audio siren */}
      <SOSModal
        isOpen={isSOSOpen}
        onClose={() => setIsSOSOpen(false)}
        scenarioKey={scenarioKey}
      />

      {/* "I Am Safe" Broadcast Modal */}
      <SafeCheckModal
        isOpen={isSafeOpen}
        onClose={() => setIsSafeOpen(false)}
        scenarioKey={scenarioKey}
      />

      {/* Notifications Popover */}
      <NotificationPopover
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />
    </div>
  );
}
