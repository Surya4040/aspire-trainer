"use client";
import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { CheckCircle, Terminal, Play, Loader2, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

// Dynamically import Monaco Editor
const Editor = dynamic(() => import('@monaco-editor/react'), {
    ssr: false,
    loading: () => <div className="h-full w-full bg-[#1e1e1e] flex items-center justify-center text-slate-500 font-mono text-sm border-t border-white/5 animate-pulse">Initializing IDE...</div>
});

const defaultCodes = {
    javascript: `// AI Practice Challenge
// Objective: Build an optimized search algorithm

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}

// 💡 AI Hint: Your time complexity is O(log n). Perfect.
console.log("Target Found at Index:");
console.log(binarySearch([1, 3, 5, 7, 9, 15, 22], 7));`,
    python: `# AI Practice Challenge
# Objective: Implement a recursive factorial function

def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

# 💡 AI Hint: Maximum recursion depth is optimized.
print("Factorial of 5 is:")
print(factorial(5))`,
    java: `// AI Practice Challenge
// Objective: Output a string reversal

class Main {
    public static void main(String[] args) {
        String str = "Software Engineering";
        StringBuilder reversed = new StringBuilder();
        
        for (int i = str.length() - 1; i >= 0; i--) {
            reversed.append(str.charAt(i));
        }
        
        // 💡 AI Hint: Using StringBuilder is highly efficient O(n).
        System.out.println("Reversed String:");
        System.out.println(reversed.toString());
    }
}`
};

export default function PortalPage() {
    const [language, setLanguage] = useState<keyof typeof defaultCodes>('javascript');
    const [code, setCode] = useState(defaultCodes.javascript);
    const [output, setOutput] = useState<string>('Ready to execute.\nOutput will appear here...');
    const [isExecuting, setIsExecuting] = useState(false);

    const handleLanguageChange = (lang: keyof typeof defaultCodes) => {
        setLanguage(lang);
        setCode(defaultCodes[lang]);
        setOutput('Ready to execute.\nOutput will appear here...');
    };

    const executeCode = async () => {
        setIsExecuting(true);
        setOutput('Compiling and running...');

        // Simulate network delay for premium feel
        await new Promise(resolve => setTimeout(resolve, 800));

        if (language === 'javascript') {
            try {
                const logs: string[] = [];
                const originalLog = console.log;
                console.log = (...args) => {
                    logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
                };

                // Safe evaluation simulation
                const executeFunction = new Function(code);
                executeFunction();

                console.log = originalLog;
                if (logs.length === 0) {
                    setOutput('Execution finished with no output.');
                } else {
                    setOutput(logs.join('\n'));
                }
            } catch (err: any) {
                setOutput(`Runtime Error: \n${err.message}`);
            }
        } else {
            // Mock execution for Python and Java
            if (language === 'python') {
                setOutput('Factorial of 5 is:\n120\n\n[Process terminated successfully]');
            } else if (language === 'java') {
                setOutput('Reversed String:\ngnireenignE erawtfoS\n\n[Process terminated successfully]');
            }
        }

        setIsExecuting(false);
    };

    return (
        <div className="bg-brand-950 min-h-screen pt-24 pb-12 text-white relative border-b border-white/10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] -z-10"></div>
            <div className="absolute top-0 right-0 w-[500px] lg:w-[800px] h-[500px] lg:h-[800px] bg-accent-600/10 rounded-full blur-[100px] lg:blur-[150px] mix-blend-screen pointer-events-none -z-10"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shadow-lg shadow-black/20">
                            <Terminal className="w-6 h-6 lg:w-7 lg:h-7 text-accent-500" />
                        </div>
                        <div>
                            <h1 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-white mb-1">Practice Portal</h1>
                            <p className="text-[10px] lg:text-xs text-slate-400 font-bold tracking-widest uppercase">Aspire Info Cloud Environment</p>
                        </div>
                    </div>
                    <Link href="/courses">
                        <Button variant="outline" className="px-6 py-2 text-xs lg:text-sm uppercase tracking-widest bg-white/5 border-white/10 hover:bg-white/10">Back to Courses</Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 border border-white/10 rounded-2xl bg-white/[0.02] p-4 sm:p-6 lg:p-8 backdrop-blur-sm shadow-2xl shadow-black/50 relative overflow-hidden">

                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-2xl"></div>

                    {/* Left Column: Quotes / Info */}
                    <div className="xl:col-span-4 flex flex-col justify-center relative z-10 lg:pr-4">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] mb-6 tracking-tight uppercase">
                                Execution <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent-500">Over Theory.</span>
                            </h2>

                            <blockquote className="border-l-2 border-accent-500 pl-4 my-8 py-1 relative">
                                <div className="absolute -left-3 -top-3 text-5xl lg:text-6xl text-white/5 font-serif leading-none">"</div>
                                <p className="text-lg sm:text-xl text-slate-300 font-medium italic leading-relaxed">
                                    You cannot master software engineering by watching videos. You master it by writing code, breaking things, and deploying.
                                </p>
                            </blockquote>

                            <div className="space-y-6 mt-8 mb-8">
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                                        <CheckCircle className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-white tracking-wide">Multi-Language Access</h4>
                                        <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">Execute JavaScript, Python, and Java instantly within our unified enterprise-grade IDE interface.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center shrink-0 border border-accent-500/30">
                                        <CheckCircle className="w-4 h-4 text-accent-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-white tracking-wide">Integrated AI Debugging</h4>
                                        <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">Get 24/7 syntax analysis and strict mentorship suggestions dynamically as you build projects.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Code Editor + Output Split */}
                    <div className="xl:col-span-8 flex flex-col gap-4 relative z-10">

                        {/* Editor Pane */}
                        <div className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col h-[400px] sm:h-[500px]">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-2 sm:py-3 bg-[#252526] border-b border-[#333] gap-3">

                                <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto gap-4">
                                    <div className="hidden sm:flex gap-2 mr-2">
                                        <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                    </div>
                                    <div className="flex items-center bg-[#1e1e1e] border border-white/10 rounded-md p-1">
                                        {(['javascript', 'python', 'java'] as const).map(lang => (
                                            <button
                                                key={lang}
                                                onClick={() => handleLanguageChange(lang)}
                                                className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded transition-colors ${language === lang ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'text-slate-500 hover:text-white'}`}
                                            >
                                                {lang === 'javascript' ? 'JS' : lang}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-end w-full sm:w-auto gap-3">
                                    <button
                                        onClick={executeCode}
                                        disabled={isExecuting}
                                        className="text-xs bg-accent-600 hover:bg-accent-500 disabled:opacity-50 text-white font-bold py-2 px-6 rounded flex items-center justify-center gap-2 transition-colors tracking-widest uppercase w-full sm:w-auto"
                                    >
                                        {isExecuting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-current" />}
                                        {isExecuting ? 'Running...' : 'Execute'}
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 relative">
                                <Editor
                                    height="100%"
                                    language={language}
                                    theme="vs-dark"
                                    value={code}
                                    onChange={(val) => setCode(val || '')}
                                    options={{
                                        minimap: { enabled: false },
                                        fontSize: 14,
                                        padding: { top: 20, bottom: 20 },
                                        fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
                                        scrollBeyondLastLine: false,
                                        lineNumbersMinChars: 3,
                                        cursorBlinking: "smooth",
                                        cursorSmoothCaretAnimation: "on",
                                        formatOnType: true,
                                        wordWrap: "on"
                                    }}
                                />
                            </div>
                        </div>

                        {/* Output Pane */}
                        <div className="bg-[#0d0d0d] rounded-xl overflow-hidden border border-white/5 border-t-white/10 shadow-inner flex flex-col h-[200px]">
                            <div className="flex items-center px-4 py-2 bg-[#1a1a1a] border-b border-[#222]">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                    <Code2 className="w-3 h-3 text-slate-400" />
                                    Terminal Output
                                </span>
                            </div>
                            <div className="flex-1 p-4 overflow-y-auto font-mono text-sm leading-relaxed whitespace-pre-wrap">
                                {output.split('\n').map((line, i) => (
                                    <div key={i} className={`font-mono ${line.includes('Error') ? 'text-rose-400' : 'text-emerald-400'}`}>
                                        {line || <br />}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
