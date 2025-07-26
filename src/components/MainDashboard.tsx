import React from 'react';
import { ViewType } from '../App';
import { SkillsOverview } from './SkillsOverview';
import { CareerProgress } from './CareerProgress';
import { RecentActivity } from './RecentActivity';
import { AIRecommendations } from './AIRecommendations';
import { ProjectShowcase } from './ProjectShowcase';
import { Target, TrendingUp, Award, Lightbulb } from 'lucide-react';

interface MainDashboardProps {
  onSkillClick: (skill: string) => void;
  onViewChange: (view: ViewType) => void;
}

export function MainDashboard({ onSkillClick, onViewChange }: MainDashboardProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Career Readiness</p>
              <p className="text-2xl font-bold text-slate-900">73%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Skills Acquired</p>
              <p className="text-2xl font-bold text-slate-900">24/32</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Projects Completed</p>
              <p className="text-2xl font-bold text-slate-900">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Active Goals</p>
              <p className="text-2xl font-bold text-slate-900">5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <CareerProgress onViewChange={onViewChange} />
          <SkillsOverview onSkillClick={onSkillClick} />
          <ProjectShowcase />
        </div>

        <div className="space-y-8">
          <AIRecommendations />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}