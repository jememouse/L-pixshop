/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface RedrawPanelProps {
  onApplyRedraw: (prompt: string) => void;
  isLoading: boolean;
}

const RedrawPanel: React.FC<RedrawPanelProps> = ({ onApplyRedraw, isLoading }) => {
  const redrawPrompt = 'Redraw the front of the packaging in the image as a high-resolution, print-ready, flat, rectangular vector-style illustration. Faithfully retain all original text, logos, and graphic details. Output only the flat illustration with a transparent background.';

  const handleApply = () => {
    onApplyRedraw(redrawPrompt);
  };

  return (
    <div className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex flex-col items-center gap-4 animate-fade-in backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-gray-300">包装重绘</h3>
      <p className="text-sm text-gray-400 -mt-2 text-center max-w-md">
        将照片中的产品包装自动转换为可用于印刷的扁平矢量风格插图。
      </p>
      
      <button
        onClick={handleApply}
        className="w-full max-w-xs mt-2 bg-gradient-to-br from-blue-600 to-blue-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-px active:scale-95 active:shadow-inner text-base disabled:from-blue-800 disabled:to-blue-700 disabled:shadow-none disabled:cursor-not-allowed disabled:transform-none"
        disabled={isLoading}
      >
        生成插图
      </button>
    </div>
  );
};

export default RedrawPanel;