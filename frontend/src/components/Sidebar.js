import React from 'react';
import { BookOpen, Lock, Users, Database } from 'lucide-react';
import { sidebarItems } from '../data/mockData';

const iconMap = {
  BookOpen,
  Lock,
  Users,
  Database
};

const Sidebar = ({ selectedEndpoint, onSelectEndpoint }) => {
  return (
    <aside className="w-64 min-h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <nav className="p-6">
        <div className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = iconMap[item.icon];
            const isSelected = selectedEndpoint === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onSelectEndpoint(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                  isSelected
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{item.title}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
            Quick Links
          </h3>
          <div className="space-y-1">
            <a 
              href="#" 
              className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              API Status
            </a>
            <a 
              href="#" 
              className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              Changelog
            </a>
            <a 
              href="#" 
              className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              Support
            </a>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;