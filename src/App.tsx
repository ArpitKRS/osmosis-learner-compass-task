import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { MainDashboard } from './components/MainDashboard';
import { SkillsDetail } from './components/SkillsDetail';
import { ProgressTimeline } from './components/ProgressTimeline';
import { CareerExplorer } from './components/CareerExplorer';

export type ViewType = 'dashboard' | 'skills' | 'timeline' | 'career';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-light to-purple-light/30">
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="pt-20 lg:pt-20 pt-24">
        {currentView === 'dashboard' && (
          <MainDashboard 
            onSkillClick={(skill) => {
              setSelectedSkill(skill);
              setCurrentView('skills');
            }}
            onViewChange={setCurrentView}
          />
        )}
        {currentView === 'skills' && (
          <SkillsDetail 
            selectedSkill={selectedSkill}
            onBack={() => setCurrentView('dashboard')}
          />
        )}
        {currentView === 'timeline' && <ProgressTimeline />}
        {currentView === 'career' && <CareerExplorer />}
      </main>
    </div>
  );
}

export default App;