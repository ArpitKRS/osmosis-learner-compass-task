import React from 'react';
import { ExternalLink, Github, Star, Calendar } from 'lucide-react';

export function ProjectShowcase() {
  const projects = [
    {
      title: 'Sentiment Analysis Dashboard',
      description: 'Real-time Twitter sentiment analysis using BERT and Streamlit',
      skills: ['Python', 'BERT', 'Streamlit', 'Pandas', 'Matplotlib'],
      status: 'completed',
      rating: 4.8,
      date: 'Dec 2024',
      github: '#',
      demo: '#'
    },
    {
      title: 'Customer Churn Prediction',
      description: 'ML pipeline predicting customer churn with 89% accuracy',
      skills: ['Python', 'Scikit-learn', 'XGBoost', 'Docker', 'Flask'],
      status: 'in-progress',
      rating: null,
      date: 'Jan 2025',
      github: '#',
      demo: null
    },
    {
      title: 'Stock Price Forecasting',
      description: 'LSTM-based model for stock price prediction with technical indicators',
      skills: ['Python', 'TensorFlow', 'NumPy', 'Plotly', 'Alpha Vantage API'],
      status: 'completed',
      rating: 4.6,
      date: 'Nov 2024',
      github: '#',
      demo: '#'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-emerald-100 text-emerald-600';
      case 'in-progress': return 'bg-blue-100 text-blue-600';
      case 'planned': return 'bg-slate-100 text-slate-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900">Project Showcase</h2>
        <p className="text-sm text-slate-600">Demonstrating applied skills</p>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="p-5 rounded-xl bg-lavender-light hover:bg-lavender/50 transition-all duration-200">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{project.title}</h3>
                <p className="text-sm text-slate-600 mb-2">{project.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status.replace('-', ' ')}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.skills.map((skill) => (
                <span key={skill} className="px-2 py-1 bg-white text-slate-700 text-xs font-medium rounded-lg border border-purple-light/30">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-sm text-slate-500">
                  <Calendar className="w-4 h-4" />
                  <span>{project.date}</span>
                </div>
                {project.rating && (
                  <div className="flex items-center space-x-1 text-sm text-slate-500">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{project.rating}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-1 px-3 py-1 text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </button>
                {project.demo && (
                  <button className="flex items-center space-x-1 px-3 py-1 bg-purple-light/40 text-purple rounded-lg hover:bg-purple-light/60 transition-colors text-sm">
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-3 text-sm font-medium text-purple hover:text-purple/80 hover:bg-lavender-light rounded-lg transition-all border-2 border-dashed border-purple-light/50 hover:border-purple-light">
        + Add New Project
      </button>
    </div>
  );
}