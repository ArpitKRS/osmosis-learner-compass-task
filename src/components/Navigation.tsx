import React from 'react';
import { ViewType } from '../App';
import { Compass, TrendingUp, MapPin, Clock, User, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export function Navigation({ currentView, onViewChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'dashboard' as ViewType, label: 'Dashboard', icon: Compass },
    { id: 'skills' as ViewType, label: 'Skills Map', icon: TrendingUp },
    { id: 'timeline' as ViewType, label: 'Progress', icon: Clock },
    { id: 'career' as ViewType, label: 'Career Paths', icon: MapPin },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white backdrop-blur-sm border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center">
            <Compass className="w-6 h-6 text-white" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-slate-900">Learner's Compass</h1>
            <p className="text-sm text-slate-600">Career Preparation Dashboard</p>
          </div>
          <div className="sm:hidden">
            <h1 className="text-lg font-bold text-slate-900">Learner's Compass</h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-purple-light/40 text-slate-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Desktop User Profile */}
        <div className="hidden lg:flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-slate-900">Ananya Sharma</p>
            <p className="text-xs text-slate-600">CS Student • ML Engineer Track</p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onViewChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-purple-light/40 text-slate-700 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
            
            {/* Mobile User Profile */}
            <div className="flex items-center space-x-3 px-4 py-3 mt-4 border-t border-gray-200">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">Ananya Sharma</p>
                <p className="text-xs text-slate-600">CS Student • ML Engineer Track</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}