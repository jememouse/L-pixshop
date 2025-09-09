/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface FixPanelProps {
  onApplyFix: (prompt: string) => void;
  isLoading: boolean;
}

const FixPanel: React.FC<FixPanelProps> = ({ onApplyFix, isLoading }) => {
  const fixPrompt = 'Remove all scratches, dust, and blemishes from this old photo, restoring it to its original quality.';

  const handleApply = () => {
    onApplyFix(fixPrompt);
  };

  return (
    <div className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex flex-col items-center gap-4 animate-fade-in backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-gray-300">Photo Restoration</h3>
      <p className="text-sm text-gray-400 -mt-2 text-center max-w-md">
        Automatically repair scratches, dust, and other damage on your photo with a single click.
      </p>
      
      <button
        onClick={handleApply}
        className="w-full max-w-xs mt-2 bg-gradient-to-br from-blue-600 to-blue-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-px active:scale-95 active:shadow-inner text-base disabled:from-blue-800 disabled:to-blue-700 disabled:shadow-none disabled:cursor-not-allowed disabled:transform-none"
        disabled={isLoading}
      >
        Auto-Fix Scratches
      </button>
    </div>
  );
};

export default FixPanel;
