import React, { useState } from 'react';
import { MapPin, ArrowRight, TrendingUp, Users, DollarSign, Clock, Target } from 'lucide-react';

export function CareerExplorer() {
  const [selectedPath, setSelectedPath] = useState('ml-engineer');

  const careerPaths = {
    'ml-engineer': {
      title: 'Machine Learning Engineer',
      description: 'Design and implement ML systems in production environments',
      currentMatch: 73,
      salaryRange: '$95K - $180K',
      demandLevel: 'Very High',
      timeToReady: '6-8 months',
      requiredSkills: [
        { name: 'Python', current: 85, required: 90, gap: 5 },
        { name: 'TensorFlow', current: 70, required: 85, gap: 15 },
        { name: 'PyTorch', current: 35, required: 80, gap: 45 },
        { name: 'AWS/Cloud', current: 25, required: 75, gap: 50 },
        { name: 'Docker', current: 40, required: 70, gap: 30 },
        { name: 'MLOps', current: 20, required: 70, gap: 50 },
      ],
      nextSteps: [
        'Complete PyTorch fundamentals course',
        'Build 2-3 end-to-end ML projects',
        'Learn AWS SageMaker and MLflow',
        'Practice system design for ML systems'
      ]
    },
    'data-scientist': {
      title: 'Data Scientist',
      description: 'Extract insights from data and build predictive models',
      currentMatch: 68,
      salaryRange: '$85K - $160K',
      demandLevel: 'High',
      timeToReady: '4-6 months',
      requiredSkills: [
        { name: 'Python', current: 85, required: 85, gap: 0 },
        { name: 'R', current: 45, required: 75, gap: 30 },
        { name: 'SQL', current: 78, required: 85, gap: 7 },
        { name: 'Statistics', current: 60, required: 90, gap: 30 },
        { name: 'Tableau', current: 30, required: 70, gap: 40 },
        { name: 'A/B Testing', current: 25, required: 80, gap: 55 },
      ],
      nextSteps: [
        'Strengthen statistics and hypothesis testing',
        'Learn advanced R programming',
        'Master data visualization tools',
        'Practice business case studies'
      ]
    },
    'ai-researcher': {
      title: 'AI Research Scientist',
      description: 'Conduct research in artificial intelligence and publish findings',
      currentMatch: 55,
      salaryRange: '$120K - $250K',
      demandLevel: 'Medium',
      timeToReady: '12-18 months',
      requiredSkills: [
        { name: 'Python', current: 85, required: 95, gap: 10 },
        { name: 'Mathematics', current: 70, required: 95, gap: 25 },
        { name: 'Research', current: 40, required: 90, gap: 50 },
        { name: 'Publications', current: 0, required: 60, gap: 60 },
        { name: 'PyTorch', current: 35, required: 90, gap: 55 },
        { name: 'Paper Writing', current: 30, required: 85, gap: 55 },
      ],
      nextSteps: [
        'Pursue graduate studies or research internship',
        'Read and implement recent AI papers',
        'Contribute to open-source AI projects',
        'Start writing technical blog posts'
      ]
    },
    'product-manager': {
      title: 'AI Product Manager',
      description: 'Lead product development for AI-powered applications',
      currentMatch: 45,
      salaryRange: '$110K - $200K',
      demandLevel: 'High',
      timeToReady: '8-12 months',
      requiredSkills: [
        { name: 'Technical Knowledge', current: 80, required: 75, gap: 0 },
        { name: 'Product Strategy', current: 30, required: 85, gap: 55 },
        { name: 'User Research', current: 20, required: 75, gap: 55 },
        { name: 'Analytics', current: 50, required: 80, gap: 30 },
        { name: 'Communication', current: 60, required: 90, gap: 30 },
        { name: 'Business Acumen', current: 25, required: 80, gap: 55 },
      ],
      nextSteps: [
        'Learn product management frameworks',
        'Practice user interview techniques',
        'Study successful AI product case studies',
        'Develop business and strategy skills'
      ]
    }
  };

  const pathIds = Object.keys(careerPaths);
  const currentPath = careerPaths[selectedPath as keyof typeof careerPaths];

  const getGapColor = (gap: number) => {
    if (gap === 0) return 'text-emerald-600';
    if (gap <= 15) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getGapBgColor = (gap: number) => {
    if (gap === 0) return 'bg-emerald-100';
    if (gap <= 15) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Career Path Explorer</h1>
        <p className="text-slate-600">Discover different career paths and understand the skills needed for each</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Career Path Selection */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Available Paths</h2>
            <div className="space-y-3">
              {pathIds.map((pathId) => {
                const path = careerPaths[pathId as keyof typeof careerPaths];
                return (
                  <button
                    key={pathId}
                    onClick={() => setSelectedPath(pathId)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      selectedPath === pathId
                        ? 'bg-purple-light/40 border-2 border-purple-light'
                        : 'bg-slate-50 hover:bg-slate-100 border-2 border-transparent'
                    }`}
                  >
                    <h3 className="font-semibold text-slate-900 mb-1">{path.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{path.currentMatch}% match</span>
                      <div className={`w-12 h-2 rounded-full ${
                        path.currentMatch >= 70 ? 'bg-purple-light/40' : 
                        path.currentMatch >= 50 ? 'bg-lavender' : 'bg-red-200'
                      }`}>
                        <div 
                          className={`h-full rounded-full ${
                            path.currentMatch >= 70 ? 'bg-purple' : 
                            path.currentMatch >= 50 ? 'bg-purple-light' : 'bg-red-500'
                          }`}
                          style={{ width: `${path.currentMatch}%` }}
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Career Path Details */}
        <div className="lg:col-span-3 space-y-8">
          {/* Overview */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{currentPath.title}</h2>
                <p className="text-slate-600 mb-4">{currentPath.description}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-purple mb-1">{currentPath.currentMatch}%</div>
                <div className="text-sm text-slate-500">Current Match</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Salary Range</p>
                  <p className="font-semibold text-slate-900">{currentPath.salaryRange}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Market Demand</p>
                  <p className="font-semibold text-slate-900">{currentPath.demandLevel}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Time to Ready</p>
                  <p className="font-semibold text-slate-900">{currentPath.timeToReady}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Skills Gap</p>
                  <p className="font-semibold text-slate-900">
                    {currentPath.requiredSkills.filter(skill => skill.gap > 0).length} skills
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Gap Analysis */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Skills Gap Analysis</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentPath.requiredSkills.map((skill, index) => (
                <div key={index} className="p-4 rounded-xl bg-lavender-light">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-slate-900">{skill.name}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGapBgColor(skill.gap)}`}>
                        <span className={getGapColor(skill.gap)}>
                          {skill.gap === 0 ? 'Met' : `${skill.gap}% gap`}
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-slate-600">
                      <span>Current: {skill.current}%</span>
                      <span>Required: {skill.required}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-purple rounded-full transition-all duration-300"
                        style={{ width: `${(skill.current / skill.required) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-purple-light/60 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-purple" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Recommended Next Steps</h3>
            </div>

            <div className="space-y-4">
              {currentPath.nextSteps.map((step, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-lavender to-purple-light/40">
                  <div className="w-8 h-8 bg-purple text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-slate-900 font-medium flex-1">{step}</p>
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Career Transition Map */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Career Transition Options</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pathIds.filter(id => id !== selectedPath).map((pathId) => {
                const path = careerPaths[pathId as keyof typeof careerPaths];
                return (
                  <button
                    key={pathId}
                    onClick={() => setSelectedPath(pathId)}
                    className="group p-4 rounded-xl bg-lavender-light hover:bg-lavender/50 transition-all text-left"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">{path.title}</h4>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                    </div>
                    <p className="text-sm text-slate-600 mb-2">{path.currentMatch}% match</p>
                    <p className="text-xs text-slate-500">{path.timeToReady} to transition</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

