import React from 'react';
import {
  ArrowLeft,
  TrendingUp,
  BookOpen,
  Code,
  Award,
  Target,
  Clock,
} from 'lucide-react';

interface SkillsDetailProps {
  selectedSkill: string | null;
  onBack: () => void;
}

export function SkillsDetail({ selectedSkill, onBack }: SkillsDetailProps) {
  // Dynamic skill data based on selected skill
  const getSkillData = (skillName: string) => {
    const skillsDatabase = {
      Python: {
        name: 'Python',
        currentLevel: 85,
        targetLevel: 90,
        category: 'Programming Language',
        lastUpdated: '2 days ago',
        trend: '+5% this month',
        description:
          'Python is essential for ML engineering, used for data processing, model development, and deployment.',

        learningPath: [
          { title: 'Advanced Python Concepts', progress: 100, type: 'course' },
          {
            title: 'Data Structures & Algorithms',
            progress: 85,
            type: 'course',
          },
          {
            title: 'Python for Machine Learning',
            progress: 90,
            type: 'course',
          },
          { title: 'FastAPI Development', progress: 60, type: 'course' },
          { title: 'Python Testing & Debugging', progress: 45, type: 'course' },
        ],

        appliedIn: [
          {
            name: 'Sentiment Analysis Dashboard',
            skills: ['Pandas', 'NumPy', 'Matplotlib'],
          },
          {
            name: 'Customer Churn Prediction',
            skills: ['Scikit-learn', 'Flask', 'Docker'],
          },
          {
            name: 'Stock Price Forecasting',
            skills: ['TensorFlow', 'NumPy', 'Plotly'],
          },
        ],

        recommendations: [
          {
            title: 'Complete FastAPI Microservices Course',
            description: 'Learn to build scalable ML APIs with FastAPI',
            priority: 'high',
            estimatedTime: '2-3 weeks',
            provider: 'Coursera',
          },
          {
            title: 'Advanced Python Testing Workshop',
            description: 'Master pytest, mocking, and test-driven development',
            priority: 'medium',
            estimatedTime: '1-2 weeks',
            provider: 'Udemy',
          },
          {
            title: 'Python Performance Optimization',
            description: 'Learn profiling and optimization techniques',
            priority: 'low',
            estimatedTime: '3-4 weeks',
            provider: 'edX',
          },
        ],
      },
      R: {
        name: 'R',
        currentLevel: 45,
        targetLevel: 70,
        category: 'Programming Language',
        lastUpdated: '1 week ago',
        trend: '+8% this month',
        description:
          'R is powerful for statistical analysis, data visualization, and statistical modeling in data science.',

        learningPath: [
          { title: 'R Programming Fundamentals', progress: 80, type: 'course' },
          {
            title: 'Data Manipulation with dplyr',
            progress: 60,
            type: 'course',
          },
          { title: 'Statistical Analysis in R', progress: 40, type: 'course' },
          {
            title: 'Data Visualization with ggplot2',
            progress: 35,
            type: 'course',
          },
          { title: 'R Shiny Web Applications', progress: 20, type: 'course' },
        ],

        appliedIn: [
          {
            name: 'Statistical Analysis Project',
            skills: ['ggplot2', 'dplyr', 'tidyr'],
          },
          {
            name: 'A/B Testing Framework',
            skills: ['Statistical Tests', 'R Markdown'],
          },
        ],

        recommendations: [
          {
            title: 'Complete R for Data Science Specialization',
            description: 'Master data manipulation and visualization in R',
            priority: 'high',
            estimatedTime: '4-6 weeks',
            provider: 'Coursera',
          },
          {
            title: 'Statistical Learning with R',
            description: 'Learn advanced statistical methods and modeling',
            priority: 'high',
            estimatedTime: '3-4 weeks',
            provider: 'edX',
          },
          {
            title: 'R Shiny Dashboard Development',
            description: 'Build interactive web applications with R',
            priority: 'medium',
            estimatedTime: '2-3 weeks',
            provider: 'DataCamp',
          },
        ],
      },
      SQL: {
        name: 'SQL',
        currentLevel: 78,
        targetLevel: 85,
        category: 'Database Language',
        lastUpdated: '3 days ago',
        trend: '+3% this month',
        description:
          'SQL is crucial for data extraction, manipulation, and analysis in database systems.',

        learningPath: [
          { title: 'SQL Fundamentals', progress: 100, type: 'course' },
          { title: 'Advanced SQL Queries', progress: 85, type: 'course' },
          {
            title: 'Database Design & Optimization',
            progress: 70,
            type: 'course',
          },
          { title: 'SQL for Data Analysis', progress: 80, type: 'course' },
          { title: 'NoSQL Databases', progress: 50, type: 'course' },
        ],

        appliedIn: [
          {
            name: 'Customer Analytics Dashboard',
            skills: ['PostgreSQL', 'Window Functions'],
          },
          {
            name: 'Sales Data Pipeline',
            skills: ['MySQL', 'Stored Procedures'],
          },
          {
            name: 'User Behavior Analysis',
            skills: ['BigQuery', 'Complex Joins'],
          },
        ],

        recommendations: [
          {
            title: 'Advanced SQL for Data Scientists',
            description:
              'Master window functions, CTEs, and performance optimization',
            priority: 'medium',
            estimatedTime: '2-3 weeks',
            provider: 'DataCamp',
          },
          {
            title: 'Database Performance Tuning',
            description: 'Learn indexing strategies and query optimization',
            priority: 'medium',
            estimatedTime: '2-3 weeks',
            provider: 'Pluralsight',
          },
          {
            title: 'NoSQL Database Fundamentals',
            description:
              'Understand MongoDB, Cassandra, and document databases',
            priority: 'low',
            estimatedTime: '3-4 weeks',
            provider: 'MongoDB University',
          },
        ],
      },
      TensorFlow: {
        name: 'TensorFlow',
        currentLevel: 70,
        targetLevel: 85,
        category: 'ML Framework',
        lastUpdated: '1 day ago',
        trend: '+7% this month',
        description:
          "TensorFlow is Google's open-source platform for machine learning and deep neural networks.",

        learningPath: [
          { title: 'TensorFlow Fundamentals', progress: 90, type: 'course' },
          { title: 'Building Neural Networks', progress: 80, type: 'course' },
          {
            title: 'TensorFlow for Computer Vision',
            progress: 65,
            type: 'course',
          },
          {
            title: 'TensorFlow Serving & Deployment',
            progress: 45,
            type: 'course',
          },
          { title: 'TensorFlow Extended (TFX)', progress: 30, type: 'course' },
        ],

        appliedIn: [
          {
            name: 'Image Classification Model',
            skills: ['CNN', 'Transfer Learning'],
          },
          { name: 'Stock Price Forecasting', skills: ['LSTM', 'Time Series'] },
          {
            name: 'Recommendation System',
            skills: ['Collaborative Filtering', 'Embeddings'],
          },
        ],

        recommendations: [
          {
            title: 'TensorFlow Developer Certificate',
            description: 'Get certified in TensorFlow development practices',
            priority: 'high',
            estimatedTime: '4-6 weeks',
            provider: 'TensorFlow',
          },
          {
            title: 'Advanced Computer Vision with TensorFlow',
            description: 'Master object detection and image segmentation',
            priority: 'high',
            estimatedTime: '3-4 weeks',
            provider: 'Coursera',
          },
          {
            title: 'TensorFlow Model Deployment',
            description:
              'Learn TensorFlow Serving, TensorFlow Lite, and TensorFlow.js',
            priority: 'medium',
            estimatedTime: '2-3 weeks',
            provider: 'Google Cloud',
          },
        ],
      },
      PyTorch: {
        name: 'PyTorch',
        currentLevel: 35,
        targetLevel: 80,
        category: 'ML Framework',
        lastUpdated: '5 days ago',
        trend: '+12% this month',
        description:
          "PyTorch is Facebook's dynamic deep learning framework, popular in research and production.",

        learningPath: [
          { title: 'PyTorch Fundamentals', progress: 60, type: 'course' },
          { title: 'Deep Learning with PyTorch', progress: 40, type: 'course' },
          {
            title: 'PyTorch for Computer Vision',
            progress: 25,
            type: 'course',
          },
          { title: 'PyTorch Lightning', progress: 15, type: 'course' },
          { title: 'PyTorch Model Deployment', progress: 10, type: 'course' },
        ],

        appliedIn: [
          {
            name: 'Neural Style Transfer',
            skills: ['CNN', 'Transfer Learning'],
          },
          { name: 'Text Generation Model', skills: ['RNN', 'Transformers'] },
        ],

        recommendations: [
          {
            title: 'PyTorch for Deep Learning Bootcamp',
            description:
              'Comprehensive PyTorch training from basics to advanced',
            priority: 'high',
            estimatedTime: '6-8 weeks',
            provider: 'Udemy',
          },
          {
            title: 'Deep Learning with PyTorch Specialization',
            description:
              'Master neural networks and deep learning with PyTorch',
            priority: 'high',
            estimatedTime: '4-6 weeks',
            provider: 'Coursera',
          },
          {
            title: 'PyTorch Lightning Workshop',
            description:
              'Learn to structure PyTorch code for research and production',
            priority: 'medium',
            estimatedTime: '2-3 weeks',
            provider: 'PyTorch Lightning',
          },
        ],
      },
      'AWS SageMaker': {
        name: 'AWS SageMaker',
        currentLevel: 25,
        targetLevel: 75,
        category: 'Cloud ML Platform',
        lastUpdated: '1 week ago',
        trend: '+15% this month',
        description:
          'AWS SageMaker is a fully managed service for building, training, and deploying ML models at scale.',

        learningPath: [
          { title: 'AWS SageMaker Fundamentals', progress: 40, type: 'course' },
          { title: 'Model Training & Tuning', progress: 25, type: 'course' },
          { title: 'SageMaker Pipelines', progress: 15, type: 'course' },
          {
            title: 'Model Deployment & Monitoring',
            progress: 20,
            type: 'course',
          },
          { title: 'SageMaker Studio', progress: 30, type: 'course' },
        ],

        appliedIn: [
          {
            name: 'ML Model Deployment POC',
            skills: ['SageMaker Endpoints', 'Model Registry'],
          },
        ],

        recommendations: [
          {
            title: 'AWS Machine Learning Specialty Certification',
            description: 'Get certified in AWS ML services including SageMaker',
            priority: 'high',
            estimatedTime: '8-10 weeks',
            provider: 'AWS',
          },
          {
            title: 'SageMaker MLOps Workshop',
            description: 'Learn end-to-end ML pipelines with SageMaker',
            priority: 'high',
            estimatedTime: '3-4 weeks',
            provider: 'AWS Training',
          },
          {
            title: 'Advanced SageMaker Features',
            description:
              'Master SageMaker Clarify, Data Wrangler, and Feature Store',
            priority: 'medium',
            estimatedTime: '4-5 weeks',
            provider: 'A Cloud Guru',
          },
        ],
      },
      JavaScript: {
        name: 'JavaScript',
        currentLevel: 60,
        targetLevel: 60,
        category: 'Programming Language',
        lastUpdated: '4 days ago',
        trend: '+2% this month',
        description:
          'JavaScript is essential for web development and increasingly used in ML deployment through Node.js and browser-based ML applications.',

        learningPath: [
          { title: 'Modern JavaScript (ES6+)', progress: 85, type: 'course' },
          { title: 'Node.js Fundamentals', progress: 70, type: 'course' },
          { title: 'React.js Development', progress: 65, type: 'course' },
          {
            title: 'JavaScript for ML (TensorFlow.js)',
            progress: 40,
            type: 'course',
          },
          {
            title: 'API Development with Express',
            progress: 55,
            type: 'course',
          },
        ],

        appliedIn: [
          { name: 'ML Model Dashboard', skills: ['React', 'D3.js', 'Express'] },
          {
            name: 'Data Visualization Tool',
            skills: ['Chart.js', 'Node.js', 'REST APIs'],
          },
          {
            name: 'Portfolio Website',
            skills: ['HTML5', 'CSS3', 'Responsive Design'],
          },
        ],

        recommendations: [
          {
            title: 'TensorFlow.js for Browser ML',
            description: 'Learn to deploy ML models directly in web browsers',
            priority: 'medium',
            estimatedTime: '3-4 weeks',
            provider: 'Google Developers',
          },
          {
            title: 'Full Stack JavaScript Development',
            description: 'Master MERN stack for complete web applications',
            priority: 'low',
            estimatedTime: '6-8 weeks',
            provider: 'freeCodeCamp',
          },
          {
            title: 'Node.js API Development',
            description: 'Build scalable backend services for ML applications',
            priority: 'medium',
            estimatedTime: '2-3 weeks',
            provider: 'Udemy',
          },
        ],
      },
      'Scikit-learn': {
        name: 'Scikit-learn',
        currentLevel: 80,
        targetLevel: 75,
        category: 'ML Library',
        lastUpdated: '1 day ago',
        trend: '+3% this month',
        description:
          'Scikit-learn is the most popular Python library for traditional machine learning algorithms and data preprocessing.',

        learningPath: [
          { title: 'Scikit-learn Fundamentals', progress: 95, type: 'course' },
          { title: 'Classification Algorithms', progress: 90, type: 'course' },
          { title: 'Regression & Time Series', progress: 85, type: 'course' },
          {
            title: 'Clustering & Dimensionality Reduction',
            progress: 75,
            type: 'course',
          },
          {
            title: 'Model Selection & Evaluation',
            progress: 80,
            type: 'course',
          },
        ],

        appliedIn: [
          {
            name: 'Customer Churn Prediction',
            skills: ['Random Forest', 'XGBoost', 'Feature Engineering'],
          },
          {
            name: 'House Price Prediction',
            skills: ['Linear Regression', 'Cross Validation', 'Grid Search'],
          },
          {
            name: 'Customer Segmentation',
            skills: ['K-Means', 'PCA', 'Preprocessing'],
          },
        ],

        recommendations: [
          {
            title: 'Advanced Feature Engineering',
            description:
              'Master feature selection, creation, and transformation techniques',
            priority: 'medium',
            estimatedTime: '2-3 weeks',
            provider: 'Kaggle Learn',
          },
          {
            title: 'Ensemble Methods Deep Dive',
            description:
              'Advanced techniques with Random Forest, Gradient Boosting, and Stacking',
            priority: 'low',
            estimatedTime: '3-4 weeks',
            provider: 'DataCamp',
          },
          {
            title: 'Model Interpretability with SHAP',
            description: 'Learn to explain and interpret ML model predictions',
            priority: 'medium',
            estimatedTime: '2-3 weeks',
            provider: 'Coursera',
          },
        ],
      },
      Keras: {
        name: 'Keras',
        currentLevel: 65,
        targetLevel: 70,
        category: 'Deep Learning Framework',
        lastUpdated: '3 days ago',
        trend: '+4% this month',
        description:
          'Keras is a high-level neural networks API that makes deep learning accessible and easy to implement.',

        learningPath: [
          { title: 'Keras Fundamentals', progress: 85, type: 'course' },
          { title: 'Building Neural Networks', progress: 70, type: 'course' },
          {
            title: 'Convolutional Neural Networks',
            progress: 60,
            type: 'course',
          },
          { title: 'Recurrent Neural Networks', progress: 55, type: 'course' },
          {
            title: 'Transfer Learning with Keras',
            progress: 50,
            type: 'course',
          },
        ],

        appliedIn: [
          {
            name: 'Image Classification Model',
            skills: ['CNN', 'Data Augmentation', 'Transfer Learning'],
          },
          {
            name: 'Text Sentiment Analysis',
            skills: ['LSTM', 'Embedding Layers', 'Preprocessing'],
          },
          {
            name: 'Stock Price Prediction',
            skills: ['RNN', 'Time Series', 'Sequential Models'],
          },
        ],

        recommendations: [
          {
            title: 'Advanced CNN Architectures',
            description: 'Learn ResNet, DenseNet, and modern CNN architectures',
            priority: 'high',
            estimatedTime: '3-4 weeks',
            provider: 'Fast.ai',
          },
          {
            title: 'Keras Functional API Mastery',
            description:
              'Build complex models with multiple inputs and outputs',
            priority: 'medium',
            estimatedTime: '2-3 weeks',
            provider: 'TensorFlow',
          },
          {
            title: 'Custom Layers and Training Loops',
            description:
              'Advanced Keras customization for research applications',
            priority: 'low',
            estimatedTime: '4-5 weeks',
            provider: 'Coursera',
          },
        ],
      },
      Docker: {
        name: 'Docker',
        currentLevel: 40,
        targetLevel: 65,
        category: 'DevOps Tool',
        lastUpdated: '1 week ago',
        trend: '+10% this month',
        description:
          'Docker is essential for containerizing ML applications and ensuring consistent deployment across different environments.',

        learningPath: [
          { title: 'Docker Fundamentals', progress: 60, type: 'course' },
          { title: 'Dockerfile Best Practices', progress: 45, type: 'course' },
          { title: 'Docker Compose', progress: 35, type: 'course' },
          { title: 'Container Orchestration', progress: 25, type: 'course' },
          { title: 'Docker for ML Applications', progress: 40, type: 'course' },
        ],

        appliedIn: [
          {
            name: 'ML Model API Deployment',
            skills: ['Flask', 'Docker Compose', 'Environment Management'],
          },
          {
            name: 'Data Pipeline Containerization',
            skills: ['Multi-stage Builds', 'Volume Mounting'],
          },
        ],

        recommendations: [
          {
            title: 'Docker for Data Science',
            description:
              'Learn to containerize ML workflows and Jupyter environments',
            priority: 'high',
            estimatedTime: '3-4 weeks',
            provider: 'Docker',
          },
          {
            title: 'Kubernetes Fundamentals',
            description: 'Scale containerized applications with Kubernetes',
            priority: 'medium',
            estimatedTime: '4-6 weeks',
            provider: 'CNCF',
          },
          {
            title: 'CI/CD with Docker',
            description: 'Automate deployment pipelines with containerization',
            priority: 'medium',
            estimatedTime: '2-3 weeks',
            provider: 'GitLab',
          },
        ],
      },
      Git: {
        name: 'Git',
        currentLevel: 75,
        targetLevel: 70,
        category: 'Version Control',
        lastUpdated: '2 days ago',
        trend: '+1% this month',
        description:
          'Git is the industry standard for version control, essential for collaborative development and project management.',

        learningPath: [
          { title: 'Git Basics', progress: 100, type: 'course' },
          { title: 'Branching and Merging', progress: 85, type: 'course' },
          { title: 'Advanced Git Workflows', progress: 70, type: 'course' },
          { title: 'Git for Team Collaboration', progress: 75, type: 'course' },
          { title: 'Git Hooks and Automation', progress: 50, type: 'course' },
        ],

        appliedIn: [
          {
            name: 'All ML Projects',
            skills: ['GitHub', 'Pull Requests', 'Code Reviews'],
          },
          {
            name: 'Open Source Contributions',
            skills: ['Forking', 'Issue Tracking', 'Documentation'],
          },
          {
            name: 'Team Collaboration',
            skills: ['Git Flow', 'Conflict Resolution', 'Release Management'],
          },
        ],

        recommendations: [
          {
            title: 'Advanced Git Workflows',
            description: 'Master Git Flow, GitHub Flow, and GitLab Flow',
            priority: 'low',
            estimatedTime: '1-2 weeks',
            provider: 'Atlassian',
          },
          {
            title: 'Git Hooks and Automation',
            description: 'Automate workflows with pre-commit hooks and CI/CD',
            priority: 'medium',
            estimatedTime: '2-3 weeks',
            provider: 'GitHub',
          },
          {
            title: 'Open Source Contribution Guide',
            description:
              'Learn best practices for contributing to open source projects',
            priority: 'low',
            estimatedTime: '1-2 weeks',
            provider: 'freeCodeCamp',
          },
        ],
      },
      Jupyter: {
        name: 'Jupyter',
        currentLevel: 90,
        targetLevel: 80,
        category: 'Development Environment',
        lastUpdated: '1 day ago',
        trend: '+2% this month',
        description:
          'Jupyter notebooks are the standard tool for data science experimentation, prototyping, and sharing analytical work.',

        learningPath: [
          { title: 'Jupyter Notebook Basics', progress: 100, type: 'course' },
          {
            title: 'JupyterLab Advanced Features',
            progress: 95,
            type: 'course',
          },
          {
            title: 'Jupyter Extensions & Widgets',
            progress: 85,
            type: 'course',
          },
          { title: 'Jupyter for Production', progress: 80, type: 'course' },
          {
            title: 'Jupyter Hub & Cloud Deployment',
            progress: 70,
            type: 'course',
          },
        ],

        appliedIn: [
          {
            name: 'Data Analysis Projects',
            skills: ['Interactive Widgets', 'Visualization', 'Documentation'],
          },
          {
            name: 'ML Model Prototyping',
            skills: ['Experiment Tracking', 'Version Control', 'Sharing'],
          },
          {
            name: 'Educational Content',
            skills: ['Markdown', 'Code Presentation', 'Storytelling'],
          },
        ],

        recommendations: [
          {
            title: 'Jupyter Book Creation',
            description:
              'Create interactive books and documentation from notebooks',
            priority: 'low',
            estimatedTime: '2-3 weeks',
            provider: 'Jupyter',
          },
          {
            title: 'Advanced Jupyter Widgets',
            description: 'Build interactive dashboards and applications',
            priority: 'medium',
            estimatedTime: '2-3 weeks',
            provider: 'Jupyter',
          },
          {
            title: 'Jupyter in Production',
            description: 'Deploy notebooks as web applications and APIs',
            priority: 'low',
            estimatedTime: '3-4 weeks',
            provider: 'Voilà',
          },
        ],
      },
    };

    return skillsDatabase[skillName as keyof typeof skillsDatabase];
  };

  const skillData = getSkillData(selectedSkill || 'Python');

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'low':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Skill Overview */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">
                  {skillData.name}
                </h1>
                <p className="text-slate-600 mb-4">{skillData.description}</p>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <span>Category: {skillData.category}</span>
                  <span>•</span>
                  <span>Last updated: {skillData.lastUpdated}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  {skillData.currentLevel}%
                </div>
                <div className="text-sm text-emerald-600 font-medium">
                  {skillData.trend}
                </div>
              </div>
            </div>

            {/* Progress Visualization */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-slate-600 mb-2">
                <span>Current Level</span>
                <span>Target: {skillData.targetLevel}%</span>
              </div>
              <div className="h-3 bg-lavender-light rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-light to-purple rounded-full transition-all duration-300"
                  style={{ width: `${skillData.currentLevel}%` }}
                />
              </div>
              <div className="mt-2 text-sm text-slate-600">
                Gap to target: {skillData.targetLevel - skillData.currentLevel}%
                remaining
              </div>
            </div>
          </div>

          {/* Learning Path */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Learning Path
            </h2>
            <div className="space-y-4">
              {skillData.learningPath.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-lavender-light"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      item.progress === 100
                        ? 'bg-emerald-100 text-emerald-600'
                        : 'bg-blue-100 text-blue-600'
                    }`}
                  >
                    <BookOpen className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium text-slate-900">{item.title}</h3>
                    <div className="flex items-center space-x-3 mt-2">
                      <div className="flex-1 h-2 bg-purple-light/40 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            item.progress === 100
                              ? 'bg-purple'
                              : 'bg-purple-light'
                          }`}
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      <span className="text-sm text-slate-600">
                        {item.progress}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Applied In Projects */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Applied in Projects
            </h2>
            <div className="space-y-4">
              {skillData.appliedIn.map((project, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-lavender-light hover:bg-lavender/50 transition-all"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-purple/30 rounded-xl flex items-center justify-center">
                      <Code className="w-5 h-5 text-purple" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-slate-900 mb-2">
                        {project.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-white text-slate-700 text-xs font-medium rounded-lg border border-purple-light/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Skill Stats */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Skill Statistics
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm text-slate-600">Industry Rank</span>
                </div>
                <span className="font-semibold text-slate-900">
                  {skillData.currentLevel >= 80
                    ? 'Top 10%'
                    : skillData.currentLevel >= 60
                    ? 'Top 25%'
                    : 'Top 50%'}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-slate-600">Growth Rate</span>
                </div>
                <span className="font-semibold text-slate-900">
                  {skillData.trend}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span className="text-sm text-slate-600">Time Invested</span>
                </div>
                <span className="font-semibold text-slate-900">
                  {skillData.currentLevel >= 70
                    ? '120+ hours'
                    : skillData.currentLevel >= 40
                    ? '60+ hours'
                    : '30+ hours'}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-orange-600" />
                  <span className="text-sm text-slate-600">Certifications</span>
                </div>
                <span className="font-semibold text-slate-900">
                  {skillData.currentLevel >= 80
                    ? '3'
                    : skillData.currentLevel >= 50
                    ? '2'
                    : '1'}
                </span>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-light/30">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Recommendations
            </h3>
            <div className="space-y-4">
              {skillData.recommendations.map((rec, index) => (
                <div key={index} className="p-4 rounded-xl bg-lavender-light">
                  <div className="flex items-start justify-between mb-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                        rec.priority
                      )}`}
                    >
                      {rec.priority} priority
                    </span>
                    <span className="text-xs text-slate-500">
                      {rec.estimatedTime}
                    </span>
                  </div>

                  <h4 className="font-medium text-slate-900 mb-1">
                    {rec.title}
                  </h4>
                  <p className="text-sm text-slate-600 mb-2">
                    {rec.description}
                  </p>
                  <p className="text-xs text-slate-500">
                    Provider: {rec.provider}
                  </p>

                  <button className="w-full mt-3 py-2 text-sm font-medium text-purple hover:text-purple/80 hover:bg-lavender/50 rounded-lg transition-all">
                    Start Learning
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
