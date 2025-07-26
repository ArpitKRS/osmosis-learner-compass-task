import React from 'react';
import { Bot, ArrowRight, ExternalLink, Clock } from 'lucide-react';

export function AIRecommendations() {
  const recommendations = [
    {
      type: 'Skill Gap',
      title: 'Master PyTorch Fundamentals',
      description: 'PyTorch is critical for ML engineering roles. Start with the official tutorial.',
      priority: 'high',
      estimatedTime: '2-3 weeks',
      action: 'Start Course',
      link: '#'
    },
    {
      type: 'Project',
      title: 'Build an End-to-End ML Pipeline',
      description: 'Showcase your MLOps skills with a complete project from data to deployment.',
      priority: 'high',
      estimatedTime: '3-4 weeks',
      action: 'View Template',
      link: '#'
    },
    {
      type: 'Certification',
      title: 'AWS Machine Learning Specialty',
      description: 'Industry-recognized certification for cloud ML engineering.',
      priority: 'medium',
      estimatedTime: '6-8 weeks',
      action: 'Learn More',
      link: '#'
    },
    {
      type: 'Networking',
      title: 'Connect with ML Engineers',
      description: 'Join ML engineering communities and start building professional connections.',
      priority: 'medium',
      estimatedTime: 'Ongoing',
      action: 'Find Groups',
      link: '#'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-amber-100 text-amber-700';
      case 'low': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">AI Recommendations</h2>
          <p className="text-sm text-slate-600">Personalized for your ML Engineer goal</p>
        </div>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div key={index} className="group p-4 rounded-xl bg-lavender-light hover:bg-lavender/50 transition-all duration-200">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                  {rec.type}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(rec.priority)}`}>
                  {rec.priority} priority
                </span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-slate-500">
                <Clock className="w-3 h-3" />
                <span>{rec.estimatedTime}</span>
              </div>
            </div>
            
            <h3 className="font-semibold text-slate-900 mb-1">{rec.title}</h3>
            <p className="text-sm text-slate-600 mb-3">{rec.description}</p>
            
            <button className="flex items-center space-x-2 text-sm font-medium text-purple hover:text-purple/80 transition-colors">
              <span>{rec.action}</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-lavender to-purple-light/40 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-slate-900">Weekly Check-in</p>
            <p className="text-sm text-slate-600">Schedule a call with your AI advisor</p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white text-purple rounded-lg shadow-sm hover:shadow-md transition-all">
            <span>Schedule</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}