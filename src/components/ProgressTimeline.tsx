import React, { useState } from 'react';
import { Calendar, TrendingUp, BookOpen, Code, Award, Target, Filter } from 'lucide-react';

export function ProgressTimeline() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const timelineData = [
    {
      date: '2025-01-15',
      type: 'project',
      title: 'Completed Sentiment Analysis Dashboard',
      description: 'Built a real-time Twitter sentiment analysis tool using BERT and Streamlit',
      skills: ['Python', 'BERT', 'Streamlit', 'Pandas', 'Matplotlib'],
      impact: 'Enhanced NLP and web development skills',
      icon: Code,
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      date: '2025-01-10',
      type: 'skill',
      title: 'TensorFlow Skill Level Up',
      description: 'Improved proficiency from 65% to 70% through hands-on practice',
      skills: ['TensorFlow', 'Deep Learning'],
      impact: 'Better prepared for neural network implementation',
      icon: TrendingUp,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      date: '2025-01-05',
      type: 'course',
      title: 'Deep Learning Specialization - Course 2 Completed',
      description: 'Finished "Improving Deep Neural Networks" by Andrew Ng',
      skills: ['Deep Learning', 'Neural Networks', 'Optimization'],
      impact: 'Advanced understanding of hyperparameter tuning',
      icon: BookOpen,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      date: '2025-01-03',
      type: 'project',
      title: 'Customer Churn Prediction',
      description: 'ML pipeline predicting customer churn with 89% accuracy using ensemble methods',
      skills: ['Scikit-learn', 'XGBoost', 'Flask', 'Docker', 'Feature Engineering'],
      impact: 'Mastered ensemble methods and model deployment techniques',
      icon: Code,
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      date: '2024-12-28',
      type: 'certificate',
      title: 'AWS Cloud Practitioner Certification',
      description: 'Achieved AWS Cloud Practitioner certification',
      skills: ['AWS', 'Cloud Computing'],
      impact: 'Foundation for cloud-based ML deployment',
      icon: Award,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      date: '2024-12-15',
      type: 'project',
      title: 'Stock Price Forecasting Model',
      description: 'Developed LSTM-based model with 85% accuracy for stock prediction',
      skills: ['TensorFlow', 'LSTM', 'Time Series', 'NumPy', 'Plotly'],
      impact: 'Mastered sequential data modeling techniques',
      icon: Code,
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      date: '2024-12-01',
      type: 'skill',
      title: 'Python Programming Milestone',
      description: 'Achieved 85% proficiency in Python programming',
      skills: ['Python', 'Data Structures', 'Algorithms'],
      impact: 'Strong foundation for ML development',
      icon: TrendingUp,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      date: '2024-11-20',
      type: 'course',
      title: 'Machine Learning Course Completed',
      description: 'Finished Stanford\'s Machine Learning course on Coursera',
      skills: ['Machine Learning', 'Linear Regression', 'Logistic Regression'],
      impact: 'Solid theoretical foundation in ML algorithms',
      icon: BookOpen,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Activities', count: timelineData.length },
    { id: 'project', label: 'Projects', count: timelineData.filter(item => item.type === 'project').length },
    { id: 'course', label: 'Courses', count: timelineData.filter(item => item.type === 'course').length },
    { id: 'skill', label: 'Skills', count: timelineData.filter(item => item.type === 'skill').length },
    { id: 'certificate', label: 'Certificates', count: timelineData.filter(item => item.type === 'certificate').length }
  ];

  const filteredData = selectedFilter === 'all' 
    ? timelineData 
    : timelineData.filter(item => item.type === selectedFilter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Learning Progress Timeline</h1>
        <p className="text-slate-600">Track your journey toward becoming an ML Engineer</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Code className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Projects</p>
              <p className="text-2xl font-bold text-slate-900">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Courses</p>
              <p className="text-2xl font-bold text-slate-900">8</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Skills Improved</p>
              <p className="text-2xl font-bold text-slate-900">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Certificates</p>
              <p className="text-2xl font-bold text-slate-900">5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30 mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <Filter className="w-5 h-5 text-slate-600" />
          <h2 className="text-lg font-semibold text-slate-900">Filter Activities</h2>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                selectedFilter === filter.id
                  ? 'bg-purple-light/40 text-purple shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>{filter.label}</span>
              <span className="bg-lavender-light px-2 py-1 rounded-full text-xs font-medium">
                {filter.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-light/50"></div>
          
          <div className="space-y-8">
            {filteredData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative flex items-start space-x-6">
                  <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center ${item.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <div className="flex-1 min-w-0 pb-8">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                        <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-slate-500">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(item.date)}</span>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-purple-light/40 text-slate-700 text-sm font-medium rounded-lg">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-3 bg-gradient-to-r from-lavender to-purple-light/40 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-purple" />
                        <span className="text-sm font-medium text-slate-900">Impact:</span>
                      </div>
                      <p className="text-sm text-slate-700 mt-1">{item.impact}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <div className="mt-8 bg-gradient-to-r from-lavender to-purple-light/40 rounded-2xl p-6 border border-purple-light/50">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-purple rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Progress Summary</h3>
            <p className="text-sm text-slate-600">Your learning journey insights</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-purple">73%</p>
            <p className="text-sm text-slate-600">Career Readiness</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-light">+15%</p>
            <p className="text-sm text-slate-600">Growth This Month</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple">6 months</p>
            <p className="text-sm text-slate-600">Est. Time to Goal</p>
          </div>
        </div>
      </div>
    </div>
  );
}