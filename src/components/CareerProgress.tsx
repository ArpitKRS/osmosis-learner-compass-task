import React from 'react';
import { ViewType } from '../App';
import { MapPin, ArrowRight, Calendar } from 'lucide-react';

interface CareerProgressProps {
  onViewChange: (view: ViewType) => void;
}

export function CareerProgress({ onViewChange }: CareerProgressProps) {
  const milestones = [
    { label: 'Foundation Skills', progress: 90, completed: true },
    { label: 'ML Fundamentals', progress: 85, completed: true },
    { label: 'Deep Learning', progress: 65, completed: false },
    { label: 'MLOps & Deployment', progress: 30, completed: false },
    { label: 'Industry Experience', progress: 15, completed: false },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Career Progress</h2>
          <p className="text-sm text-slate-600">ML Engineer at Top Tech Company</p>
        </div>
        <button
          onClick={() => onViewChange('career')}
          className="flex items-center space-x-2 px-4 py-2 bg-purple-light/40 text-slate-700 rounded-lg hover:bg-purple-light/60 transition-colors"
        >
          <MapPin className="w-4 h-4" />
          <span>Explore Paths</span>
        </button>
      </div>

      <div className="space-y-4">
        {milestones.map((milestone, index) => (
          <div key={milestone.label} className="flex items-center space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              milestone.completed 
                ? 'bg-emerald-100 text-emerald-600' 
                : milestone.progress > 0 
                  ? 'bg-purple-light/60 text-slate-600' 
                  : 'bg-slate-100 text-slate-400'
            }`}>
              {index + 1}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className={`font-medium ${milestone.completed ? 'text-slate-900' : 'text-slate-700'}`}>
                  {milestone.label}
                </span>
                <span className="text-sm text-slate-500">{milestone.progress}%</span>
              </div>
              
              <div className="h-2 bg-purple-light/40 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${
                    milestone.completed 
                      ? 'bg-purple' 
                      : 'bg-gradient-to-r from-purple-light to-purple'
                  }`}
                  style={{ width: `${milestone.progress}%` }}
                />
              </div>
            </div>
            
            {index < milestones.length - 1 && (
              <ArrowRight className="w-4 h-4 text-slate-300" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-lavender to-purple-light/40 rounded-xl">
        <div className="flex items-center space-x-3">
          <Calendar className="w-5 h-5 text-purple" />
          <div>
            <p className="font-medium text-slate-900">Estimated Timeline</p>
            <p className="text-sm text-slate-600">6-8 months to reach job-ready status</p>
          </div>
        </div>
      </div>
    </div>
  );
}