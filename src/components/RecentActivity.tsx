import React from 'react';
import { Calendar, Award, BookOpen, Code, TrendingUp } from 'lucide-react';

export function RecentActivity() {
  const activities = [
    {
      type: 'project',
      title: 'Completed Sentiment Analysis Project',
      description: 'Used Pandas, Matplotlib, and NLTK',
      timestamp: '2 days ago',
      icon: Code,
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      type: 'course',
      title: 'Deep Learning Specialization - Course 2',
      description: 'Neural Networks and Deep Learning',
      timestamp: '5 days ago',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      type: 'skill',
      title: 'TensorFlow Skill Level Up',
      description: 'Improved from 65% to 70%',
      timestamp: '1 week ago',
      icon: TrendingUp,
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      type: 'certificate',
      title: 'AWS Cloud Practitioner Certified',
      description: 'Foundation certification completed',
      timestamp: '2 weeks ago',
      icon: Award,
      color: 'bg-amber-100 text-amber-600'
    },
    {
      type: 'project',
      title: 'Started Customer Churn Prediction',
      description: 'Using Random Forest and XGBoost',
      timestamp: '3 weeks ago',
      icon: Code,
      color: 'bg-emerald-100 text-emerald-600'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
      <div className="flex items-center space-x-3 mb-6">
        <Calendar className="w-5 h-5 text-slate-600" />
        <h2 className="text-xl font-bold text-slate-900">Recent Activity</h2>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div key={index} className="flex items-start space-x-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activity.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="font-medium text-slate-900 truncate">{activity.title}</p>
                <p className="text-sm text-slate-600">{activity.description}</p>
                <p className="text-xs text-slate-500 mt-1">{activity.timestamp}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-6 py-2 text-sm font-medium text-purple hover:text-purple/80 hover:bg-lavender-light rounded-lg transition-all">
        View All Activity
      </button>
    </div>
  );
}