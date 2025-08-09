import React from 'react';
import { apiData } from '../data/mockData';
import CodeBlock from './CodeBlock';
import EndpointCard from './EndpointCard';

const MainContent = ({ selectedEndpoint }) => {
  const content = apiData[selectedEndpoint];

  if (!content) return null;

  return (
    <main className="flex-1 max-w-none">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {content.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* Endpoint Card */}
        {content.endpoint && (
          <div className="mb-8">
            <EndpointCard endpoint={content.endpoint} />
          </div>
        )}

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <div
            className="text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{
              __html: content.content.replace(/```([^`]+)```/g, '<code class="block bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4 text-sm">$1</code>')
            }}
          />
        </div>

        {/* Code Examples */}
        {content.codeExamples && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Code Examples
            </h2>
            <div className="space-y-6">
              <CodeBlock 
                title="cURL"
                language="bash"
                code={content.codeExamples.curl}
              />
              <CodeBlock 
                title="JavaScript"
                language="javascript"
                code={content.codeExamples.javascript}
              />
              <CodeBlock 
                title="Python"
                language="python"
                code={content.codeExamples.python}
              />
            </div>
          </div>
        )}

        {/* Try It Out Section */}
        {content.endpoint && (
          <div className="mt-12 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Try it out
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Test this endpoint directly from the documentation with your API key.
            </p>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
              Open API Console
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default MainContent;