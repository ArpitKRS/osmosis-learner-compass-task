import React from 'react';
import { ChevronRight, TrendingUp, AlertCircle } from 'lucide-react';

interface SkillsOverviewProps {
  onSkillClick: (skill: string) => void;
}

export function SkillsOverview({ onSkillClick }: SkillsOverviewProps) {
  const skillCategories = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Python', current: 85, required: 90, status: 'strong' },
        { name: 'R', current: 45, required: 70, status: 'gap' },
        { name: 'SQL', current: 78, required: 85, status: 'improving' },
        { name: 'JavaScript', current: 60, required: 60, status: 'sufficient' },
      ]
    },
    {
      name: 'ML/AI Frameworks',
      skills: [
        { name: 'TensorFlow', current: 70, required: 85, status: 'improving' },
        { name: 'PyTorch', current: 35, required: 80, status: 'gap' },
        { name: 'Scikit-learn', current: 80, required: 75, status: 'strong' },
        { name: 'Keras', current: 65, required: 70, status: 'improving' },
      ]
    },
    {
      name: 'Cloud & Tools',
      skills: [
        { name: 'AWS SageMaker', current: 25, required: 75, status: 'gap' },
        { name: 'Docker', current: 40, required: 65, status: 'gap' },
        { name: 'Git', current: 75, required: 70, status: 'strong' },
        { name: 'Jupyter', current: 90, required: 80, status: 'strong' },
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'strong': return 'bg-emerald-100 text-emerald-700';
      case 'improving': return 'bg-blue-100 text-blue-700';
      case 'gap': return 'bg-red-100 text-red-700';
      case 'sufficient': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'strong': return <TrendingUp className="w-4 h-4" />;
      case 'improving': return <TrendingUp className="w-4 h-4" />;
      case 'gap': return <AlertCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900">Skills Map</h2>
        <p className="text-sm text-slate-600">ML Engineer Requirements</p>
      </div>

      <div className="space-y-6">
        {skillCategories.map((category) => (
          <div key={category.name}>
            <h3 className="text-sm font-semibold text-slate-700 mb-3">{category.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <button
                  key={skill.name}
                  onClick={() => onSkillClick(skill.name)}
                  className="group p-4 rounded-xl bg-lavender-light hover:bg-lavender/50 transition-all duration-200 text-left"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-slate-900">{skill.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(skill.status)}`}>
                        {getStatusIcon(skill.status)}
                        <span className="capitalize">{skill.status}</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                      <span>Current</span>
                      <span>{skill.current}%</span>
                    </div>
                    <div className="h-2 bg-purple-light/40 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-light to-purple rounded-full transition-all duration-300"
                        style={{ width: `${skill.current}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Target: {skill.required}%</span>
                    <span className={skill.current >= skill.required ? 'text-purple' : 'text-red-600'}>
                      {skill.current >= skill.required ? 'Met' : `Gap: ${skill.required - skill.current}%`}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}