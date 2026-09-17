import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Maximize2, Minimize2, Trash2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { skillCategories } from '../data/skills';
import { projects } from '../data/projects';

/**
 * Terminal: Interactive client-side Heisenberg CLI.
 * Strictly zero backend, zero external API, zero AI.
 * Responds to user commands with formatted system diagnostics, portfolio records,
 * and project files.
 */
export default function Terminal({ isFloating = false, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: `LOGICSHIFT HEISENBERG SHELL [v1.0.4 - PILLAI OS]\nType 'help' to inspect available system commands.\n------------------------------------------------`
    }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const trimmed = inputVal.trim();
    if (!trimmed) return;

    // Add to command history
    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    const cmdParts = trimmed.toLowerCase().split(' ');
    const rootCmd = cmdParts[0];

    const userEntry = { type: 'user', text: `logicshift@pillai:~$ ${trimmed}` };
    let responseText = '';

    switch (rootCmd) {
      case 'help':
        responseText = `AVAILABLE COMMANDS:
  help       - Print this command directory
  about      - Display LogicShift manifesto & team ethos
  skills     - Print technical stack & domain capabilities
  projects   - Query active experiment files & project logs
  contact    - Retrieve communication channels & mail link
  status     - Query real-time build telemetry
  city       - Inspect Navi Mumbai 'City of Ideas' matrix
  clear      - Wipe terminal buffer
  heisenberg - Authenticate identity`;
        break;

      case 'about':
        responseText = `TEAM IDENTITY: LOGICSHIFT
SLOGAN: "${siteConfig.tagline}"
EVENT:  ${siteConfig.competition} @ ${siteConfig.institution}
LOCATION: ${siteConfig.campusLocation} [${siteConfig.coordinates}]

MANIFESTO:
${siteConfig.manifesto}`;
        break;

      case 'skills':
        responseText = `TECHNICAL DOMAINS & TOOLCHAINS:
` + skillCategories.map(cat => 
          `[${cat.title}] -> ${cat.skills.map(s => s.name).join(', ')}`
        ).join('\n');
        break;

      case 'projects':
        responseText = `PROJECT LOGS ARCHIVE:
` + projects.map(p => 
          `* ${p.projectNumber}: ${p.name}
    Tech: ${p.technologies.join(', ')}
    Status: ${p.status}`
        ).join('\n\n') + `\n\nRun 'view /projects' or click Explore Projects in the navigation.`;
        break;

      case 'contact':
        responseText = `COMMUNICATION CHANNELS:
  EMAIL:    ${siteConfig.contacts.email}
  GITHUB:   ${siteConfig.contacts.github}
  LINKEDIN: ${siteConfig.contacts.linkedin}
  CAMPUS:   ${siteConfig.contacts.location}`;
        break;

      case 'status':
        responseText = `SYSTEM TELEMETRY:
  SYSTEM:    ${siteConfig.telemetry.system}
  BUILD:     ${siteConfig.telemetry.build}
  MODE:      ${siteConfig.telemetry.mode}
  LOCATION:  ${siteConfig.telemetry.location}
  NODES:     ${siteConfig.telemetry.nodeCount}
  LATENCY:   ${siteConfig.telemetry.latency}
  UPTIME:    ${siteConfig.telemetry.uptime}`;
        break;

      case 'city':
        responseText = `NAVI MUMBAI CITY MATRIX:
  The urban skyline represents active development nodes across Panvel.
  Every building signifies an engineering idea in progress:
  - SEC-01: ASYNC EVENT QUEUE
  - SEC-02: STATE DELTA ENGINE
  - SEC-04: TELEMETRY MATRIX
  - SEC-06: BYTECODE SANDBOX
  - SEC-08: EVENT LOG PERSIST`;
        break;

      case 'heisenberg':
        responseText = `[HEISENBERG PROTOCOL ENGAGED]
"I am the one who codes."
Say our name: LOGICSHIFT.
Execution mode: UNCOMPROMISING FIRST PRINCIPLES.`;
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        responseText = `Command not recognized: '${rootCmd}'. Type 'help' to see valid operations.`;
    }

    setHistory(prev => [...prev, userEntry, { type: 'response', text: responseText }]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInputVal(commandHistory[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    }
  };

  return (
    <div className={`terminal-container corner-frame ${isMaximized ? 'terminal-maximized' : ''}`}>
      {/* Terminal Title Bar */}
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="term-dot dot-red" onClick={() => setHistory([])} title="Clear buffer"></span>
          <span className="term-dot dot-amber" onClick={() => setIsMaximized(!isMaximized)} title="Maximize"></span>
          <span className="term-dot dot-green"></span>
        </div>

        <div className="terminal-title">
          <TerminalIcon size={14} className="term-icon" />
          <span className="mono">logicshift_terminal // heisenberg_cli</span>
        </div>

        <div className="terminal-actions">
          <button 
            className="term-btn" 
            onClick={() => setIsMaximized(!isMaximized)} 
            title={isMaximized ? "Restore" : "Maximize"}
            aria-label="Toggle terminal size"
          >
            {isMaximized ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          </button>
          <button 
            className="term-btn" 
            onClick={() => setHistory([])} 
            title="Clear buffer"
            aria-label="Clear buffer"
          >
            <Trash2 size={13} />
          </button>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div 
        className="terminal-body" 
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, idx) => (
          <div key={idx} className={`term-line line-${entry.type}`}>
            <pre className="mono term-pre">{entry.text}</pre>
          </div>
        ))}

        {/* Active Command Input Line */}
        <form onSubmit={handleCommand} className="term-input-row">
          <span className="mono term-prompt">logicshift@pillai:~$</span>
          <input
            ref={inputRef}
            type="text"
            className="mono term-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            spellCheck="false"
            autoComplete="off"
            placeholder="Type 'help'..."
          />
          <button type="submit" className="term-submit-icon" aria-label="Execute command">
            <CornerDownLeft size={12} />
          </button>
        </form>

        <div ref={terminalEndRef} />
      </div>

      {/* Quick Suggestion Chips */}
      <div className="terminal-chips">
        <span className="mono chip-label">QUICK:</span>
        {['help', 'about', 'skills', 'projects', 'status', 'heisenberg'].map((cmd) => (
          <button
            key={cmd}
            className="term-chip mono"
            onClick={() => {
              setInputVal(cmd);
              inputRef.current?.focus();
            }}
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
