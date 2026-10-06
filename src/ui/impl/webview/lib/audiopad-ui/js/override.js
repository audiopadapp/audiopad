// --- Vector SVG Icons (Desktop Soundboard Aesthetics) ---
const icons = {
  logo: `<svg viewBox="0 0 512 512" width="18" height="18" fill="none"><g fill="currentColor"><rect x="72" y="213" width="51" height="85" rx="25"/><rect x="154" y="149" width="51" height="213" rx="25"/><rect x="236" y="64" width="51" height="384" rx="25"/><rect x="318" y="149" width="51" height="213" rx="25"/><rect x="400" y="213" width="51" height="85" rx="25"/></g></svg>`,
  folder: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,
  folderOpen: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><path d="M2 10h20"></path></svg>`,
  favorites: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  settings: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
  systemInfo: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
  help: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
  play: `<svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2.5" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
  stop: `<svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2.5" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect></svg>`,
  plus: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
  trash: `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`,
  close: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  volume: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`,
  search: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  openLink: `<svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
  repeat: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23 3 19 7 15"></path><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>`,
  pause: `<svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2.5" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`,
  spinner: `<svg class="spin-loader" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>`,
  music: `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`,
  list: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>`,
  grid: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
  deck: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect></svg>`,
  table: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line></svg>`,
  soundpad: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>`,
  image: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`,
  link: `<svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
  headphones: `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>`,
  mic: `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`,
  sun: `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  moon: `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
};

// --- Application Reactive State ---
let state = {
  tabs: [],
  activeTabId: null,
  currentView: 'folder', // 'folder', 'favorites', 'settings', 'system-info', 'help'
  searchQuery: '',
  listViewMode: 'deck', // 'deck' (Stream Deck Macro Tiles), 'table' (High-density Table), 'grid' (Media Grid)
  activeVolumePopoverSoundId: null,
  hoveredVolumeSoundId: null,
  isMasterVolumeOpen: false,
  isMasterVolumeHovered: false,

  contextMenu: {
    visible: false,
    x: 0,
    y: 0,
    soundId: null
  },
  multiImageModal: {
    visible: false,
    selectedSoundIds: [],
    imageDataUrl: ''
  },
  
  recordingHotkeySoundId: null,
  recordedKeys: [],
  recordedKeyNames: '',
  recordingTarget: null, // 'sound', 'stop', 'ptt'
  
  settings: {
    theme: 0,
    syncVolumes: false,
    allowMultipleOutputs: false,
    useAsDefaultDevice: false,
    muteDuringPlayback: false,
    allowOverlapping: true,
    minimizeToTray: false,
    tabHotkeysOnly: false,
    deleteToTrash: true,
    localVolume: 50,
    remoteVolume: 100,
    pushToTalkKeys: [],
    stopHotkey: [],
    outputs: []
  },
  
  isLinux: false,
  isElevated: false,
  isVBCableInstalled: false,
  isVBCableSetup: false,
  dismissedVBCablePrompt: false,
  isCheckingVBCable: false,
  outputDevices: [],
  playbackApps: [],
  recordingDevices: [],
  selectedMic: null,
  systemInfo: '',
  
  playingSounds: {}, // Maps sound.id -> PlayingSound details
  currentPlayingSoundId: null,
  isDraggingSeekbar: false,
  dragSeekPosition: 0,
  toasts: []
};

let isInitializing = false;
let isInitialized = false;

// --- Initial Setup & Bindings Sync ---
async function init() {
  if (isInitializing || isInitialized) return;
  isInitializing = true;

  try {
    // Wait until C++ bindings are fully loaded onto window (with timeout)
    let attempts = 0;
    while (!window.getTabs || !window.getSettings || !window.isLinux) {
      await new Promise(r => setTimeout(r, 50));
      attempts++;
      if (attempts > 100) {
        console.warn("Backend bindings timed out, proceeding with defaults");
        break;
      }
    }

    // Hide Vuetify default container completely
    const defaultApp = document.getElementById('app');
    if (defaultApp) {
      defaultApp.style.display = 'none';
    }

    // Create our custom layout container if not present
    let customApp = document.getElementById('custom-app');
    if (!customApp) {
      customApp = document.createElement('div');
      customApp.id = 'custom-app';
      document.body.appendChild(customApp);
    }

    // Sync basic states from backend
    if (window.isLinux) {
      try {
        state.isLinux = await window.isLinux();
      } catch (e) {
        console.warn("Failed to query isLinux:", e);
      }
    }
    if (window.getTabs) {
      try {
        state.tabs = (await window.getTabs()) || [];
        if (state.tabs && state.tabs.length > 0) {
          state.activeTabId = state.tabs[0].id;
        }
      } catch (e) {
        console.warn("Failed to query getTabs:", e);
      }
    }
    
    if (window.getSettings) {
      try {
        const savedSettings = await window.getSettings();
        if (savedSettings) {
          state.settings = { ...state.settings, ...savedSettings };
          applyThemeStyles();
        }
      } catch (e) {
        console.warn("Failed to query getSettings:", e);
      }
    }

    // Load output and recording devices for selectors on startup
    if (window.getOutputs) {
      try {
        state.outputDevices = (await window.getOutputs()) || [];
      } catch (e) {
        console.warn("Failed to query getOutputs:", e);
      }
    }
    if (window.isElevated) {
      try {
        state.isElevated = await window.isElevated();
      } catch (e) {
        console.warn("Failed to query isElevated:", e);
      }
    }
    if (!state.isLinux) {
      if (window.getRecordingDevices) {
        try {
          const recData = await window.getRecordingDevices();
          if (recData) {
            state.recordingDevices = Array.isArray(recData) ? (recData[0] || []) : (recData.first || recData.devices || []);
            state.selectedMic = Array.isArray(recData) ? (recData[1] || null) : (recData.second || recData.selected || null);
          }
        } catch (e) {
          console.warn("Failed to query getRecordingDevices:", e);
        }
      }
      if (window.isVBCableProperlySetup) {
        try {
          state.isVBCableSetup = await window.isVBCableProperlySetup();
        } catch (e) {
          console.warn("Failed to query isVBCableProperlySetup:", e);
        }
      }
      if (window.isVBCableInstalled) {
        try {
          state.isVBCableInstalled = await window.isVBCableInstalled();
        } catch (e) {
          console.warn("Failed to query isVBCableInstalled:", e);
        }
      }
    }

    // Load system theme overrides
    applyThemeStyles();

    // Listen for OS light/dark changes when theme mode is set to Follow System (0)
    if (window.matchMedia) {
      try {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
          if (state.settings.theme === 0) {
            applyThemeStyles();
            renderApp();
          }
        });
      } catch (e) {}
    }

    // Attach global keyboard listeners (for hotkey recording overlays)
    window.addEventListener('keydown', handleGlobalKeydown);

    // Global pointerup/mouseup listener to release slider drag lock
    window.addEventListener('pointerup', () => {
      if (isDraggingSlider) {
        isDraggingSlider = false;
        if (state.hoveredVolumeSoundId !== null && state.activeVolumePopoverSoundId === null) {
          handleVolumeMouseLeave(state.hoveredVolumeSoundId, null);
        }
        if (state.isMasterVolumeHovered && !state.isMasterVolumeOpen) {
          handleMasterVolumeMouseLeave(null);
        }
      }
    });
    window.addEventListener('mouseup', () => {
      if (isDraggingSlider) {
        isDraggingSlider = false;
        if (state.hoveredVolumeSoundId !== null && state.activeVolumePopoverSoundId === null) {
          handleVolumeMouseLeave(state.hoveredVolumeSoundId, null);
        }
        if (state.isMasterVolumeHovered && !state.isMasterVolumeOpen) {
          handleMasterVolumeMouseLeave(null);
        }
      }
    });

    // Window blur listener to release any drag lock immediately
    window.addEventListener('blur', () => {
      cleanupScrubberDrag();
    });

    // Click-outside listener to dismiss volume popovers and context menu
    document.addEventListener('click', (e) => {
      let shouldRender = false;
      if (state.contextMenu && state.contextMenu.visible && !e.target.closest('.custom-context-menu')) {
        state.contextMenu.visible = false;
        shouldRender = true;
      }
      if (!e.target.closest('.volume-popover-container')) {
        if (state.activeVolumePopoverSoundId !== null || state.isMasterVolumeOpen) {
          state.activeVolumePopoverSoundId = null;
          state.isMasterVolumeOpen = false;
          shouldRender = true;
        }
      }
      if (shouldRender) {
        renderApp();
      }
    });

    // Hook C++ callbacks to update our state dynamically
    bindCppCallbacks();

    // Load initial view
    isInitialized = true;
    renderApp();

    // Poll directories and tabs configuration changes from backend
    setInterval(async () => {
      if (window.getTabs && 
          state.recordingHotkeySoundId === null && 
          state.activeVolumePopoverSoundId === null && 
          state.hoveredVolumeSoundId === null && 
          !isDraggingSlider && 
          !state.isMasterVolumeOpen && 
          !state.isMasterVolumeHovered) {
        try {
          const newTabs = await window.getTabs();
          if (newTabs && JSON.stringify(newTabs) !== JSON.stringify(state.tabs)) {
            state.tabs = newTabs;
            renderApp();
          }
        } catch (e) {
          console.warn("Polling tabs error:", e);
        }
      }
    }, 1000);
  } catch (err) {
    console.error("Critical error during init:", err);
    renderApp();
  } finally {
    isInitializing = false;
  }
}

// Apply colors and layout depending on user settings / system preferences
function applyThemeStyles() {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let isDark = false;
  if (state.settings.theme === 1) {
    isDark = true;
  } else if (state.settings.theme === 2) {
    isDark = false;
  } else {
    // 0 = Follow system settings
    isDark = prefersDark;
  }
    
  if (isDark) {
    document.documentElement.classList.remove('light-theme');
    document.documentElement.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  } else {
    document.documentElement.classList.remove('dark-theme');
    document.documentElement.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }
}

// Quick toggle between Light and Dark themes
function toggleTheme() {
  const currentIsLight = document.body.classList.contains('light-theme');
  const nextTheme = currentIsLight ? 1 : 2; // If currently light -> 1 (Dark), if dark -> 2 (Light)
  updateSetting('theme', nextTheme);
}

// Binds custom triggers called by C++ Webview shell
function bindCppCallbacks() {
  window.onSoundPlayed = function(playingSound) {
    if (!playingSound || !playingSound.sound) return;
    if (!state.settings.allowOverlapping) {
      state.playingSounds = {};
    }
    state.playingSounds[playingSound.sound.id] = playingSound;
    state.currentPlayingSoundId = playingSound.sound.id;
    cleanupScrubberDrag();
    renderApp();
  };

  window.updateSound = function(playingSound) {
    if (!playingSound || !playingSound.sound) return;
    state.playingSounds[playingSound.sound.id] = playingSound;
    if (state.currentPlayingSoundId === null || state.currentPlayingSoundId === undefined) {
      state.currentPlayingSoundId = playingSound.sound.id;
    }
    updatePlaybackDockInPlace(playingSound);
  };

  window.finishSound = function(playingSound) {
    if (playingSound && playingSound.sound) {
      delete state.playingSounds[playingSound.sound.id];
      const tileProgress = document.getElementById(`deck-progress-${playingSound.sound.id}`);
      if (tileProgress) {
        tileProgress.style.width = '0%';
      }
    }
    if (playingSound && playingSound.id) {
      delete state.playingSounds[playingSound.id];
    }
    if (state.currentPlayingSoundId === (playingSound && playingSound.sound ? playingSound.sound.id : null)) {
      const remainingIds = Object.keys(state.playingSounds);
      state.currentPlayingSoundId = remainingIds.length > 0 ? remainingIds[remainingIds.length - 1] : null;
    }
    cleanupScrubberDrag();
    renderApp();
  };

  window.onAllSoundsFinished = function() {
    state.playingSounds = {};
    state.currentPlayingSoundId = null;
    cleanupScrubberDrag();
    renderApp();
  };

  window.onError = function(errorCode) {
    const errorMessages = {
      0: "Failed to play sound",
      1: "Failed to seek sound",
      2: "Failed to pause sound",
      3: "Failed to repeat sound",
      4: "Failed to resume sound",
      5: "Failed to route outputs",
      6: "Sound file not found",
      7: "Directory folder does not exist",
      8: "Tab category does not exist",
      9: "Failed to register hotkey",
      10: "Failed to start audio passthrough",
      29: "Failed to delete file",
      31: "Failed to adjust custom volume"
    };
    const message = errorMessages[errorCode] || `Unknown error occurred (Code: ${errorCode})`;
    showToast(message, 'error');
  };

  window.hotkeyReceived = function(hotkeySequence, keys) {
    if (state.recordingHotkeySoundId !== null || state.recordingTarget !== null) {
      state.recordedKeys = keys;
      state.recordedKeyNames = hotkeySequence;
      renderApp();
    }
  };
}

// Show standard clean toast warning/success indicators
function showToast(text, type = 'info') {
  const id = Date.now();
  state.toasts.push({ id, text, type });
  renderApp();
  setTimeout(() => {
    state.toasts = state.toasts.filter(t => t.id !== id);
    renderApp();
  }, 4000);
}

// --- Navigation Operations ---
function changeView(view, tabId = null) {
  state.currentView = view;
  if (tabId !== null) {
    state.activeTabId = tabId;
  }
  state.searchQuery = '';
  
  // Trigger loaders depending on the view selected
  if (view === 'settings') {
    loadSettingsAssets();
  } else if (view === 'system-info') {
    loadSystemInfo();
  }
  
  renderApp();
}

async function loadSettingsAssets() {
  if (window.getOutputs) {
    state.outputDevices = await window.getOutputs();
  }
  if (state.isLinux && window.getPlayback) {
    state.playbackApps = await window.getPlayback();
  }
  if (window.isElevated) {
    try {
      state.isElevated = await window.isElevated();
    } catch (e) {
      console.warn("Failed to query isElevated:", e);
    }
  }
  if (!state.isLinux) {
    if (window.getRecordingDevices) {
      const recData = await window.getRecordingDevices();
      if (recData) {
        state.recordingDevices = Array.isArray(recData) ? (recData[0] || []) : (recData.first || recData.devices || []);
        state.selectedMic = Array.isArray(recData) ? (recData[1] || null) : (recData.second || recData.selected || null);
      }
    }
    if (window.isVBCableProperlySetup) {
      state.isVBCableSetup = await window.isVBCableProperlySetup();
    }
    if (window.isVBCableInstalled) {
      state.isVBCableInstalled = await window.isVBCableInstalled();
    }
  }
  renderApp();
}

async function loadSystemInfo() {
  if (window.getSystemInfo) {
    state.systemInfo = await window.getSystemInfo();
    renderApp();
  }
}

// --- Actions Dispatchers ---
async function handlePlaySound(soundId) {
  if (window.playSound) {
    try {
      const playingSound = await window.playSound(soundId);
      if (playingSound && playingSound.sound) {
        if (!state.settings.allowOverlapping) {
          state.playingSounds = {};
        }
        state.playingSounds[playingSound.sound.id] = playingSound;
        state.currentPlayingSoundId = playingSound.sound.id;
        cleanupScrubberDrag();
        renderApp();
      }
    } catch (e) {
      console.warn("Failed to play sound:", e);
    }
  }
}

async function handleStopSound(soundId) {
  const ps = state.playingSounds[soundId];
  const targetId = (ps && ps.id) ? ps.id : soundId;
  try {
    if (window.stopSound) {
      await window.stopSound(targetId);
    }
  } catch (e) {
    console.warn("stopSound error:", e);
  }
  delete state.playingSounds[soundId];
  if (ps && ps.id) {
    delete state.playingSounds[ps.id];
  }
  if (state.currentPlayingSoundId === soundId || (ps && state.currentPlayingSoundId === ps.id)) {
    const remainingIds = Object.keys(state.playingSounds);
    state.currentPlayingSoundId = remainingIds.length > 0 ? remainingIds[remainingIds.length - 1] : null;
  }
  cleanupScrubberDrag();
  renderApp();
}

async function handleStopAll() {
  try {
    if (window.stopSounds) {
      await window.stopSounds();
    }
  } catch (e) {
    console.warn("stopSounds error:", e);
  }
  state.playingSounds = {};
  state.currentPlayingSoundId = null;
  cleanupScrubberDrag();
  renderApp();
}

async function handleAddTab() {
  if (window.addTab) {
    const updated = await window.addTab();
    if (updated && updated.length > 0) {
      state.tabs = updated;
      state.activeTabId = updated[updated.length - 1].id;
      changeView('folder', state.activeTabId);
    }
  }
}

async function handleDeleteTab(tabId) {
  if (window.removeTab) {
    if (confirm("Are you sure you want to remove this folder directory?")) {
      const updated = await window.removeTab(tabId);
      state.tabs = updated;
      if (state.activeTabId === tabId && updated.length > 0) {
        state.activeTabId = updated[0].id;
      }
      renderApp();
    }
  }
}

async function toggleFavorite(soundId, currentFavState) {
  if (window.markFavorite) {
    await window.markFavorite(soundId, !currentFavState);
    state.tabs = await window.getTabs();
    renderApp();
  }
}

function handleSearch(val) {
  state.searchQuery = val;
  renderApp();
}

// --- Sound Image & Context Menu Operations ---
function handleSoundContextMenu(soundId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const mouseX = event ? event.clientX : window.innerWidth / 2;
  const mouseY = event ? event.clientY : window.innerHeight / 2;

  const menuWidth = 230;
  const menuHeight = 240;

  const x = (mouseX + menuWidth > window.innerWidth) ? Math.max(10, window.innerWidth - menuWidth - 10) : mouseX;
  const y = (mouseY + menuHeight > window.innerHeight) ? Math.max(10, window.innerHeight - menuHeight - 10) : mouseY;

  state.contextMenu = {
    visible: true,
    x,
    y,
    soundId
  };
  renderApp();
}

function closeContextMenu() {
  if (state.contextMenu && state.contextMenu.visible) {
    state.contextMenu.visible = false;
    renderApp();
  }
}

async function handleAssignSoundImage(soundId) {
  closeContextMenu();
  let imageDataUrl = '';

  if (window.pickImageFile) {
    imageDataUrl = await window.pickImageFile();
  }

  if (!imageDataUrl && !window.pickImageFile) {
    imageDataUrl = await new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return resolve('');
        const reader = new FileReader();
        reader.onload = (ev) => resolve(ev.target.result);
        reader.readAsDataURL(file);
      };
      input.click();
    });
  }

  if (imageDataUrl) {
    if (window.setSoundImage) {
      await window.setSoundImage(soundId, imageDataUrl);
    }
    for (const tab of state.tabs) {
      const s = (tab.sounds || []).find(snd => snd.id === soundId);
      if (s) s.image = imageDataUrl;
    }
    showToast("Image background assigned successfully!", "success");
    renderApp();
  }
}

async function handleRemoveSoundImage(soundId) {
  closeContextMenu();
  if (window.setSoundImage) {
    await window.setSoundImage(soundId, "");
  }
  for (const tab of state.tabs) {
    const s = (tab.sounds || []).find(snd => snd.id === soundId);
    if (s) s.image = "";
  }
  showToast("Image background removed", "info");
  renderApp();
}

function handleOpenMultiImageModal(initialSoundId = null) {
  closeContextMenu();
  const currentTab = state.tabs.find(t => t.id === state.activeTabId) || state.tabs[0];
  const soundIds = currentTab && currentTab.sounds ? currentTab.sounds.map(s => s.id) : [];

  state.multiImageModal = {
    visible: true,
    selectedSoundIds: initialSoundId ? [initialSoundId] : soundIds,
    imageDataUrl: ''
  };
  renderApp();
}

function handleCloseMultiImageModal() {
  state.multiImageModal = {
    visible: false,
    selectedSoundIds: [],
    imageDataUrl: ''
  };
  renderApp();
}

function handleToggleSelectSoundForImage(soundId) {
  const idx = state.multiImageModal.selectedSoundIds.indexOf(soundId);
  if (idx >= 0) {
    state.multiImageModal.selectedSoundIds.splice(idx, 1);
  } else {
    state.multiImageModal.selectedSoundIds.push(soundId);
  }
  renderApp();
}

function handleSelectAllSoundsForImage(selectAll) {
  const currentTab = state.tabs.find(t => t.id === state.activeTabId) || state.tabs[0];
  if (!currentTab || !currentTab.sounds) return;

  if (selectAll) {
    state.multiImageModal.selectedSoundIds = currentTab.sounds.map(s => s.id);
  } else {
    state.multiImageModal.selectedSoundIds = [];
  }
  renderApp();
}

async function handleBrowseMultiImage() {
  let imageDataUrl = '';
  if (window.pickImageFile) {
    imageDataUrl = await window.pickImageFile();
  }
  if (!imageDataUrl && !window.pickImageFile) {
    imageDataUrl = await new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return resolve('');
        const reader = new FileReader();
        reader.onload = (ev) => resolve(ev.target.result);
        reader.readAsDataURL(file);
      };
      input.click();
    });
  }

  if (imageDataUrl) {
    state.multiImageModal.imageDataUrl = imageDataUrl;
    renderApp();
  }
}

async function handleApplyMultiSoundImage() {
  const { selectedSoundIds, imageDataUrl } = state.multiImageModal;
  if (!imageDataUrl) {
    showToast("Please select an image first", "error");
    return;
  }
  if (selectedSoundIds.length === 0) {
    showToast("Please select at least one sound", "error");
    return;
  }

  if (window.setSoundsImage) {
    await window.setSoundsImage(selectedSoundIds, imageDataUrl);
  }

  for (const tab of state.tabs) {
    for (const snd of (tab.sounds || [])) {
      if (selectedSoundIds.includes(snd.id)) {
        snd.image = imageDataUrl;
      }
    }
  }

  showToast(`Image assigned to ${selectedSoundIds.length} sounds!`, "success");
  handleCloseMultiImageModal();
}

let volumeHoverTimeout = null;
let masterVolumeHoverTimeout = null;
let isDraggingSlider = false;

function handleSliderDragStart(e) {
  isDraggingSlider = true;
  if (e) e.stopPropagation();
}

function handleVolumeMouseEnter(soundId, event) {
  if (volumeHoverTimeout) {
    clearTimeout(volumeHoverTimeout);
    volumeHoverTimeout = null;
  }
  state.hoveredVolumeSoundId = soundId;
  
  const target = event ? event.currentTarget : null;
  if (target) {
    target.classList.add('is-hovered');
    const parentSoundpad = target.closest('.soundpad-btn');
    if (parentSoundpad) parentSoundpad.classList.add('has-open-popover');
    const parentCard = target.closest('.sound-grid-card');
    if (parentCard) parentCard.classList.add('has-open-popover');
    const parentRow = target.closest('.sound-row');
    if (parentRow) parentRow.classList.add('has-open-popover');
  }
}

function handleVolumeMouseLeave(soundId, event) {
  const target = event ? event.currentTarget : null;
  
  if (volumeHoverTimeout) {
    clearTimeout(volumeHoverTimeout);
  }
  
  volumeHoverTimeout = setTimeout(() => {
    if (isDraggingSlider) return;
    if (state.activeVolumePopoverSoundId === soundId) return;
    
    if (state.hoveredVolumeSoundId === soundId) {
      state.hoveredVolumeSoundId = null;
    }
    
    if (target) {
      target.classList.remove('is-hovered');
      const parentSoundpad = target.closest('.soundpad-btn');
      if (parentSoundpad && state.activeVolumePopoverSoundId !== soundId) {
        parentSoundpad.classList.remove('has-open-popover');
      }
      const parentCard = target.closest('.sound-grid-card');
      if (parentCard && state.activeVolumePopoverSoundId !== soundId) {
        parentCard.classList.remove('has-open-popover');
      }
      const parentRow = target.closest('.sound-row');
      if (parentRow && state.activeVolumePopoverSoundId !== soundId) {
        parentRow.classList.remove('has-open-popover');
      }
    } else {
      document.querySelectorAll('.volume-popover-container.is-hovered').forEach(el => el.classList.remove('is-hovered'));
      document.querySelectorAll('.soundpad-btn.has-open-popover').forEach(el => {
        if (!el.querySelector('.volume-popover-container.open')) el.classList.remove('has-open-popover');
      });
      document.querySelectorAll('.sound-grid-card.has-open-popover').forEach(el => {
        if (!el.querySelector('.volume-popover-container.open')) el.classList.remove('has-open-popover');
      });
      document.querySelectorAll('.sound-row.has-open-popover').forEach(el => {
        if (!el.querySelector('.volume-popover-container.open')) el.classList.remove('has-open-popover');
      });
    }
  }, 300);
}

function handleMasterVolumeMouseEnter(event) {
  if (masterVolumeHoverTimeout) {
    clearTimeout(masterVolumeHoverTimeout);
    masterVolumeHoverTimeout = null;
  }
  state.isMasterVolumeHovered = true;
  const target = event ? event.currentTarget : null;
  if (target) {
    target.classList.add('is-hovered');
  }
}

function handleMasterVolumeMouseLeave(event) {
  const target = event ? event.currentTarget : null;
  if (masterVolumeHoverTimeout) {
    clearTimeout(masterVolumeHoverTimeout);
  }
  masterVolumeHoverTimeout = setTimeout(() => {
    if (isDraggingSlider) return;
    if (state.isMasterVolumeOpen) return;
    state.isMasterVolumeHovered = false;
    if (target) {
      target.classList.remove('is-hovered');
    } else {
      const el = document.querySelector('.master-volume-container');
      if (el) el.classList.remove('is-hovered');
    }
  }, 300);
}

function toggleVolumePopover(soundId, event) {
  if (event) event.stopPropagation();
  state.isMasterVolumeOpen = false;
  state.activeVolumePopoverSoundId = (state.activeVolumePopoverSoundId === soundId) ? null : soundId;
  renderApp();
}

function toggleMasterVolumePopover(event) {
  if (event) event.stopPropagation();
  state.activeVolumePopoverSoundId = null;
  state.isMasterVolumeOpen = !state.isMasterVolumeOpen;
  renderApp();
}

async function handleSoundVolumeInput(soundId, type, val) {
  const numVal = parseInt(val, 10);
  
  // Real-time label update without DOM re-render
  const textElem = document.getElementById(`vol-text-${soundId}-${type}`);
  if (textElem) {
    textElem.innerText = `${numVal}%`;
  }

  // Update in memory
  for (const tab of state.tabs) {
    if (tab.sounds) {
      const snd = tab.sounds.find(s => s.id === soundId);
      if (snd) {
        if (type === 'local') snd.localVolume = numVal;
        if (type === 'remote') snd.remoteVolume = numVal;
        break;
      }
    }
  }

  // Call C++ Webview bridge
  if (type === 'local' && window.setCustomLocalVolume) {
    await window.setCustomLocalVolume(soundId, numVal);
  } else if (type === 'remote' && window.setCustomRemoteVolume) {
    await window.setCustomRemoteVolume(soundId, numVal);
  }
}

async function handleResetSoundVolume(soundId, event) {
  if (event) event.stopPropagation();

  for (const tab of state.tabs) {
    if (tab.sounds) {
      const snd = tab.sounds.find(s => s.id === soundId);
      if (snd) {
        snd.localVolume = null;
        snd.remoteVolume = null;
        break;
      }
    }
  }

  if (window.setCustomLocalVolume) {
    await window.setCustomLocalVolume(soundId, null);
  }
  if (window.setCustomRemoteVolume) {
    await window.setCustomRemoteVolume(soundId, null);
  }

  renderApp();
}

async function handleMasterVolumeInput(type, val) {
  const numVal = Math.max(0, Math.min(100, parseInt(val, 10) || 0));
  
  if (state.settings.syncVolumes) {
    state.settings.localVolume = numVal;
    state.settings.remoteVolume = numVal;
    
    const elements = [
      { id: 'master-vol-text-local', text: `${numVal}%` },
      { id: 'master-vol-text-remote', text: `${numVal}%` },
      { id: 'settings-vol-text-local', text: `${numVal}%` },
      { id: 'settings-vol-text-remote', text: `${numVal}%` },
      { id: 'master-vol-input-local', val: numVal },
      { id: 'master-vol-input-remote', val: numVal },
      { id: 'settings-vol-input-local', val: numVal },
      { id: 'settings-vol-input-remote', val: numVal }
    ];
    elements.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) {
        if (item.text !== undefined) el.innerText = item.text;
        if (item.val !== undefined) {
          el.value = item.val;
          el.setAttribute('value', item.val);
        }
      }
    });
  } else {
    if (type === 'local') {
      state.settings.localVolume = numVal;
      const t1 = document.getElementById('master-vol-text-local');
      const t2 = document.getElementById('settings-vol-text-local');
      if (t1) t1.innerText = `${numVal}%`;
      if (t2) t2.innerText = `${numVal}%`;
      const i1 = document.getElementById('master-vol-input-local');
      const i2 = document.getElementById('settings-vol-input-local');
      if (i1) { i1.value = numVal; i1.setAttribute('value', numVal); }
      if (i2) { i2.value = numVal; i2.setAttribute('value', numVal); }
    } else {
      state.settings.remoteVolume = numVal;
      const t1 = document.getElementById('master-vol-text-remote');
      const t2 = document.getElementById('settings-vol-text-remote');
      if (t1) t1.innerText = `${numVal}%`;
      if (t2) t2.innerText = `${numVal}%`;
      const i1 = document.getElementById('master-vol-input-remote');
      const i2 = document.getElementById('settings-vol-input-remote');
      if (i1) { i1.value = numVal; i1.setAttribute('value', numVal); }
      if (i2) { i2.value = numVal; i2.setAttribute('value', numVal); }
    }
  }

  const headerLabel = document.getElementById('header-master-vol-label');
  if (headerLabel) {
    headerLabel.innerText = `Master: ${state.settings.localVolume}% / ${state.settings.remoteVolume}%`;
  }

  if (window.changeSettings) {
    try {
      await window.changeSettings(state.settings);
    } catch (e) {
      console.warn("changeSettings error:", e);
    }
  }
}

// Backwards-compatible alias
async function changeVolume(soundId, type, val) {
  await handleSoundVolumeInput(soundId, type, val);
}

async function handleSetSortMode(tabId, mode) {
  if (window.setSortMode) {
    const parsedMode = parseInt(mode, 10);
    state.tabs = await window.setSortMode(tabId, parsedMode);
    renderApp();
  }
}

async function handleOpenFolder(tabId) {
  if (window.openFolder) {
    await window.openFolder(tabId);
  }
}

// --- Settings Changes Operations ---
async function updateSetting(key, val) {
  state.settings[key] = val;
  if (key === 'syncVolumes' && val) {
    state.settings.remoteVolume = state.settings.localVolume;
  }
  if (key === 'theme') {
    applyThemeStyles();
  }
  renderApp();
  if (window.changeSettings) {
    try {
      await window.changeSettings(state.settings);
    } catch (e) {
      console.warn("Failed to persist setting:", key, e);
    }
  }
}

async function toggleOutputDevice(deviceName) {
  let outputs = [...state.settings.outputs];
  if (state.settings.allowMultipleOutputs) {
    if (outputs.includes(deviceName)) {
      outputs = outputs.filter(name => name !== deviceName);
    } else {
      outputs.push(deviceName);
    }
  } else {
    outputs = [deviceName];
  }
  await updateSetting('outputs', outputs);
  loadSettingsAssets(); // Refresh settings inputs
}

async function handleSelectOutputDevice(deviceName) {
  await updateSetting('outputs', [deviceName]);
  if (window.getOutputs) {
    state.outputDevices = await window.getOutputs();
  }
  renderApp();
}

async function handleVBCableSetup() {
  if (window.setupVBCable) {
    if (!state.isVBCableInstalled) {
      showToast("VB-Audio Virtual Cable not detected. Opening download site...", "info");
      if (window.openUrl) {
        window.openUrl("https://vb-audio.com/Cable/");
      }
      return;
    }

    let micGuid = "";
    if (state.selectedMic && state.selectedMic.guid) {
      micGuid = state.selectedMic.guid;
    } else if (state.recordingDevices.length > 0) {
      micGuid = state.recordingDevices[0].guid;
    }

    if (!micGuid) {
      showToast("No recording device available to route", "error");
      return;
    }

    if (!state.isElevated) {
      showToast("Requesting Administrator privileges to configure Windows audio...", "info");
      if (window.restartAsAdmin) {
        await window.restartAsAdmin();
      }
      return;
    }

    const res = await window.setupVBCable(micGuid);
    if (res === "ok" || res === true) {
      showToast("VB-Cable configured successfully!", "success");
    } else if (res === "vb_cable_not_installed") {
      showToast("VB-Audio Virtual Cable not found. Opening download page...", "info");
      if (window.openUrl) {
        window.openUrl("https://vb-audio.com/Cable/");
      }
    } else {
      showToast("Could not configure device automatically. Use 'Sound Control Panel' button below to configure.", "error");
    }
    await loadSettingsAssets();
  }
}

async function handleMicOverrideChange(micGuid) {
  if (window.setupVBCable) {
    const selected = state.recordingDevices.find(d => d.guid === micGuid);
    const devName = selected ? selected.name : micGuid;

    if (!micGuid) {
      await window.setupVBCable("");
      showToast("Microphone override disabled", 'info');
      await loadSettingsAssets();
      return;
    }

    if (!state.isVBCableInstalled) {
      showToast("VB-Audio Virtual Cable not detected. Opening download site...", "info");
      if (window.openUrl) {
        window.openUrl("https://vb-audio.com/Cable/");
      }
      await loadSettingsAssets();
      return;
    }

    if (!state.isElevated) {
      showToast("Requesting Administrator privileges to change microphone override...", "info");
      if (window.restartAsAdmin) {
        await window.restartAsAdmin();
      }
      return;
    }

    const res = await window.setupVBCable(micGuid);
    if (res === "ok" || res === true) {
      showToast(`Microphone override set to: ${devName}`, 'success');
    } else if (res === "vb_cable_not_installed") {
      showToast("VB-Audio Cable is not installed. Opening download page...", "info");
      if (window.openUrl) {
        window.openUrl("https://vb-audio.com/Cable/");
      }
    } else {
      showToast("Could not set override automatically. Use 'Sound Control Panel' button below to configure manually.", 'error');
    }
    await loadSettingsAssets();
  }
}

async function handleRestartAsAdmin() {
  if (window.restartAsAdmin) {
    await window.restartAsAdmin();
  }
}

async function handleOpenSoundControlPanel() {
  if (window.openSoundControlPanel) {
    await window.openSoundControlPanel();
  }
}

function handleDownloadVBCable() {
  if (window.openUrl) {
    window.openUrl("https://vb-audio.com/Cable/");
  } else {
    window.open("https://vb-audio.com/Cable/", "_blank");
  }
  showToast("Opening VB-Audio Cable download page in your browser...", "info");
}

async function handleCheckVBCableInstalled() {
  state.isCheckingVBCable = true;
  renderApp();
  
  if (window.getOutputs) {
    state.outputDevices = await window.getOutputs();
  }
  if (window.getRecordingDevices) {
    const recData = await window.getRecordingDevices();
    if (recData) {
      state.recordingDevices = Array.isArray(recData) ? (recData[0] || []) : (recData.first || recData.devices || []);
      state.selectedMic = Array.isArray(recData) ? (recData[1] || null) : (recData.second || recData.selected || null);
    }
  }
  if (window.isVBCableInstalled) {
    state.isVBCableInstalled = await window.isVBCableInstalled();
  }
  if (window.isVBCableProperlySetup) {
    state.isVBCableSetup = await window.isVBCableProperlySetup();
  }

  state.isCheckingVBCable = false;

  if (state.isVBCableInstalled) {
    showToast("VB-Audio Virtual Cable detected! Welcome to AudioPad.", "success");
    renderApp();
  } else {
    showToast("VB-Audio Virtual Cable not detected yet. Please ensure setup completed.", "error");
    renderApp();
  }
}

function handleSkipVBCablePrompt() {
  state.dismissedVBCablePrompt = true;
  showToast("AudioPad loaded in local-playback mode. Microphone routing is disabled.", "warning");
  renderApp();
}

async function handleLinuxPassthrough(appName, activeState) {
  if (activeState) {
    if (window.stopPassthrough) {
      await window.stopPassthrough(appName);
    }
  } else {
    if (window.startPassthrough) {
      await window.startPassthrough(appName);
    }
  }
  loadSettingsAssets();
}

async function handleUnloadSwitchOnConnect() {
  if (window.unloadSwitchOnConnect) {
    await window.unloadSwitchOnConnect();
    showToast("Switch-on-connect module modified", "info");
    loadSettingsAssets();
  }
}


function handleOpenUrl(url) {
  if (window.openUrl) {
    window.openUrl(url);
  }
}

// --- Keyboard listener for Hotkey recorders & Desktop Shortcuts ---
function handleGlobalKeydown(e) {
  if (state.recordingHotkeySoundId === null && state.recordingTarget === null) {
    if (e.key === 'Escape') {
      if (state.contextMenu && state.contextMenu.visible) {
        state.contextMenu.visible = false;
        renderApp();
        return;
      }
      if (state.multiImageModal && state.multiImageModal.visible) {
        handleCloseMultiImageModal();
        return;
      }
      handleStopAll();
      return;
    }
    if ((e.ctrlKey || e.metaKey) && (e.key === 'f' || e.key === 'F')) {
      e.preventDefault();
      const searchEl = document.getElementById('search-input');
      if (searchEl) {
        searchEl.focus();
        searchEl.select();
      }
      return;
    }
    return;
  }
  e.preventDefault();

  const code = e.keyCode;
  if (!state.recordedKeys.includes(code)) {
    state.recordedKeys.push(code);
  }

  // Feed current key codes list back to get names formatting
  if (window.getHotkeySequence) {
    window.getHotkeySequence(state.recordedKeys).then(seq => {
      state.recordedKeyNames = seq;
      renderApp();
    });
  } else {
    state.recordedKeyNames = state.recordedKeys.join(' + ');
    renderApp();
  }
}

function startRecordHotkey(soundId, target = 'sound') {
  state.recordingHotkeySoundId = soundId;
  state.recordingTarget = target;
  state.recordedKeys = [];
  state.recordedKeyNames = 'Press key combination...';
  
  if (window.requestHotkey) {
    window.requestHotkey(true); // Expose hotkey intercept to frontend
  }
  renderApp();
}

function cancelRecordHotkey() {
  state.recordingHotkeySoundId = null;
  state.recordingTarget = null;
  state.recordedKeys = [];
  state.recordedKeyNames = '';
  
  if (window.requestHotkey) {
    window.requestHotkey(false);
  }
  renderApp();
}

async function saveRecordedHotkey() {
  if (window.requestHotkey) {
    window.requestHotkey(false);
  }

  if (state.recordingTarget === 'sound' && state.recordingHotkeySoundId !== null && window.setHotkey) {
    await window.setHotkey(state.recordingHotkeySoundId, state.recordedKeys);
    state.tabs = await window.getTabs();
  } else if (state.recordingTarget === 'stop') {
    await updateSetting('stopHotkey', state.recordedKeys);
  } else if (state.recordingTarget === 'ptt') {
    await updateSetting('pushToTalkKeys', state.recordedKeys);
  }
  
  cancelRecordHotkey();
}

async function clearRecordedHotkey() {
  if (window.requestHotkey) {
    window.requestHotkey(false);
  }

  if (state.recordingTarget === 'sound' && state.recordingHotkeySoundId !== null && window.setHotkey) {
    await window.setHotkey(state.recordingHotkeySoundId, []);
    state.tabs = await window.getTabs();
  } else if (state.recordingTarget === 'stop') {
    await updateSetting('stopHotkey', []);
  } else if (state.recordingTarget === 'ptt') {
    await updateSetting('pushToTalkKeys', []);
  }
  
  cancelRecordHotkey();
}

// Helper to filter sounds
function handleSearch(val) {
  state.searchQuery = val;
  renderApp();
  const input = document.getElementById('search-input');
  if (input) {
    input.focus();
    input.setSelectionRange(val.length, val.length);
  }
}

// Change list layout view mode
function changeListViewMode(mode) {
  state.listViewMode = mode;
  renderApp();
}

// --- Templates Rendering ---
function renderVBCableRequiredPage() {
  return `
    <div style="width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; background: var(--bg-app); font-family: var(--font-sans); padding: 24px; box-sizing: border-box; overflow-y: auto;">
      <div style="max-width: 520px; width: 100%; background: var(--bg-surface); border: 1px solid var(--border-strong); border-radius: var(--radius-lg); padding: 28px 24px; box-shadow: var(--shadow-lg); display: flex; flex-direction: column; gap: 18px;">
        
        <!-- Header Icon & Title -->
        <div style="display: flex; align-items: flex-start; gap: 14px;">
          <div style="width: 42px; height: 42px; border-radius: var(--radius-sm); background: var(--bg-surface-inset); border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; color: var(--color-accent);">
            🎙️
          </div>
          <div>
            <h2 style="margin: 0; font-size: 15px; font-weight: 700; color: var(--color-primary); letter-spacing: -0.01em;">
              VB-Audio Virtual Cable Required
            </h2>
            <p style="margin: 4px 0 0 0; font-size: 12px; color: var(--color-secondary); line-height: 1.45;">
              AudioPad uses the VB-Audio Virtual Cable driver to route soundboard effects into your microphone for Discord, OBS, TeamSpeak, and games.
            </p>
          </div>
        </div>

        <!-- 3-Step Installation Guide -->
        <div style="display: flex; flex-direction: column; gap: 8px; background: var(--bg-surface-inset); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px 14px;">
          <div style="display: flex; align-items: flex-start; gap: 10px;">
            <span style="font-family: var(--font-mono); font-size: 10.5px; font-weight: 700; background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--color-primary); width: 20px; height: 20px; border-radius: var(--radius-xs); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">1</span>
            <div style="font-size: 12px; color: var(--color-primary); line-height: 1.4;">
              <strong>Download Driver:</strong> Download the official VB-CABLE driver zip archive.
            </div>
          </div>
          
          <div style="display: flex; align-items: flex-start; gap: 10px;">
            <span style="font-family: var(--font-mono); font-size: 10.5px; font-weight: 700; background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--color-primary); width: 20px; height: 20px; border-radius: var(--radius-xs); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">2</span>
            <div style="font-size: 12px; color: var(--color-primary); line-height: 1.4;">
              <strong>Install as Administrator:</strong> Extract the archive, right-click <code style="font-family: var(--font-mono); font-size: 11px; background: rgba(255,255,255,0.08); padding: 1px 4px; border-radius: 2px;">VBCABLE_Setup_x64.exe</code>, select <em>Run as administrator</em>, and click <em>Install Driver</em>.
            </div>
          </div>

          <div style="display: flex; align-items: flex-start; gap: 10px;">
            <span style="font-family: var(--font-mono); font-size: 10.5px; font-weight: 700; background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--color-primary); width: 20px; height: 20px; border-radius: var(--radius-xs); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">3</span>
            <div style="font-size: 12px; color: var(--color-primary); line-height: 1.4;">
              <strong>Verify Connection:</strong> Once installed, click <strong>"Check Installation Status"</strong> below to activate microphone routing.
            </div>
          </div>
        </div>

        <!-- Buttons -->
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <button class="btn-primary" style="padding: 10px 16px; font-size: 12.5px; width: 100%;" onclick="handleDownloadVBCable()">
            Download VB-Audio Virtual Cable (Official Website)
          </button>

          <button class="btn-primary" style="padding: 9px 16px; font-size: 12px; background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--color-primary); width: 100%;" onclick="handleCheckVBCableInstalled()">
            <span>${state.isCheckingVBCable ? icons.spinner : '🔄'}</span> Check Installation Status
          </button>
        </div>

        <!-- Subtle Skip Link -->
        <div style="text-align: center; margin-top: -4px;">
          <button style="background: none; border: none; color: var(--color-muted); font-size: 11.5px; cursor: pointer; text-decoration: underline;" onclick="handleSkipVBCablePrompt()">
            Continue in local playback mode (soundboard on speakers only)
          </button>
        </div>

      </div>
    </div>
  `;
}

function renderApp() {
  const container = document.getElementById('custom-app');
  if (!container) return;

  if (state.isDraggingSeekbar) {
    cleanupScrubberDrag();
  }

  try {
    // Save scroll positions before re-rendering so list never jumps
  const wsBody = document.querySelector('.workspace-body');
  const wsScrollTop = wsBody ? wsBody.scrollTop : 0;
  const wsScrollLeft = wsBody ? wsBody.scrollLeft : 0;

  const folderList = document.querySelector('.folder-list');
  const folderScrollTop = folderList ? folderList.scrollTop : 0;

  const tableContainer = document.querySelector('.table-container');
  const tableScrollTop = tableContainer ? tableContainer.scrollTop : 0;
  const tableScrollLeft = tableContainer ? tableContainer.scrollLeft : 0;

  const activeElemId = document.activeElement && document.activeElement.id ? document.activeElement.id : null;
  const activeElemStart = (document.activeElement && 'selectionStart' in document.activeElement) ? document.activeElement.selectionStart : null;
  const activeElemEnd = (document.activeElement && 'selectionEnd' in document.activeElement) ? document.activeElement.selectionEnd : null;

  // On Windows, if VB-Cable is NOT installed and user hasn't dismissed, show mandatory setup screen
  if (!state.isLinux && !state.isVBCableInstalled && !state.dismissedVBCablePrompt) {
    container.innerHTML = renderVBCableRequiredPage();
    return;
  }

  // Retrieve current active category
  let activeTitle = "";
  let soundsList = [];
  let isFolderView = false;
  let activeTab = null;

  if (state.currentView === 'folder') {
    activeTab = state.tabs.find(t => t.id === state.activeTabId) || state.tabs[0];
    if (activeTab) {
      activeTitle = activeTab.name;
      soundsList = activeTab.sounds || [];
      isFolderView = true;
    } else {
      activeTitle = "Soundboard";
    }
  } else if (state.currentView === 'favorites') {
    activeTitle = "Favorites";
    // Filter all sounds in all categories marked as favorite
    const favs = [];
    state.tabs.forEach(t => {
      if (t.sounds) {
        t.sounds.forEach(s => {
          if (s.isFavorite) favs.push(s);
        });
      }
    });
    soundsList = favs;
  } else if (state.currentView === 'settings') {
    activeTitle = "Settings";
  } else if (state.currentView === 'system-info') {
    activeTitle = "System Info";
  } else if (state.currentView === 'help') {
    activeTitle = "Help & Support";
  }

  // Filter lists based on search
  if (state.searchQuery.trim() && (state.currentView === 'folder' || state.currentView === 'favorites')) {
    soundsList = soundsList.filter(s => s.name.toLowerCase().includes(state.searchQuery.toLowerCase()));
  }

  const totalSounds = state.tabs.reduce((acc, t) => acc + (t.sounds ? t.sounds.length : 0), 0);
  const totalFavs = state.tabs.reduce((acc, t) => acc + (t.sounds ? t.sounds.filter(s => s.isFavorite).length : 0), 0);

  container.innerHTML = `
    <div class="custom-layout">
      <!-- Left Compact Category Rail -->
      <aside class="custom-sidebar">
        <div class="sidebar-header">
          <div class="sidebar-brand">
            <span class="sidebar-logo">${icons.logo}</span>
            <span class="logo-text">AudioPad</span>
          </div>
        </div>
        
        <div class="sidebar-section-header">
          <span>Categories</span>
          <span class="sidebar-count-badge">${state.tabs.length}</span>
        </div>

        <div class="folder-list">
          <div class="folder-item ${state.currentView === 'favorites' ? 'active' : ''}" onclick="changeView('favorites')">
            <div class="folder-name-container">
              <span class="nav-icon" style="color: var(--color-warning);">${icons.favorites}</span>
              <span>Favorites</span>
            </div>
            <span class="category-count">${totalFavs}</span>
          </div>

          ${state.tabs.map(t => {
            const count = t.sounds ? t.sounds.length : 0;
            const isActive = state.currentView === 'folder' && t.id === state.activeTabId;
            return `
              <div class="folder-item ${isActive ? 'active' : ''}" onclick="changeView('folder', ${t.id})">
                <div class="folder-name-container">
                  <span class="nav-icon">${isActive ? icons.folderOpen : icons.folder}</span>
                  <span title="${t.name}">${t.name}</span>
                </div>
                <span class="category-count">${count}</span>
                <div class="folder-actions">
                  <button class="folder-action-btn" title="Open in File Explorer" onclick="event.stopPropagation(); handleOpenFolder(${t.id})">
                    ${icons.openLink}
                  </button>
                  <button class="folder-action-btn delete" title="Remove Folder" onclick="event.stopPropagation(); handleDeleteTab(${t.id})">
                    ${icons.trash}
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
        
        <button class="add-folder-btn" onclick="handleAddTab()">
          ${icons.plus} New Category
        </button>

        <!-- Sidebar Bottom Utility Dock -->
        <div class="sidebar-utility-dock">
          <div class="nav-item ${state.currentView === 'settings' ? 'active' : ''}" onclick="changeView('settings')">
            <span class="nav-icon">${icons.settings}</span>
            <span>Settings & Audio</span>
          </div>
          <div class="nav-item ${state.currentView === 'system-info' ? 'active' : ''}" onclick="changeView('system-info')">
            <span class="nav-icon">${icons.systemInfo}</span>
            <span>Diagnostics</span>
          </div>
          <div class="nav-item ${state.currentView === 'help' ? 'active' : ''}" onclick="changeView('help')">
            <span class="nav-icon">${icons.help}</span>
            <span>Help & Guide</span>
          </div>
        </div>
      </aside>
      
      <!-- Right Main content area -->
      <main class="custom-main">
        <header class="main-header">
          <div class="header-title-container">
            <h2 class="header-title">${activeTitle}</h2>
            ${!state.isLinux ? (state.isVBCableSetup ? `
              <span class="status-pill active" title="Microphone routing to VB-Cable is active">● Mic Active</span>
            ` : `
              <span class="status-pill warning" title="VB-Cable passthrough not active (speakers only)">○ Local Only</span>
            `) : ''}
          </div>
          
          <div class="header-actions">
            <!-- Direct Master Volume Hardware Faders Strip -->
            <div class="header-faders-strip" title="Master Hardware Audio Faders">
              <div class="fader-item" title="Local playback volume (Speakers/Headphones)">
                <span class="fader-icon">${icons.headphones}</span>
                <span class="fader-name">Phones</span>
                <input type="range" id="master-vol-input-local" class="fader-range" min="0" max="100" 
                       value="${state.settings.localVolume}" 
                       onpointerdown="handleSliderDragStart(event)" 
                       onmousedown="handleSliderDragStart(event)" 
                       oninput="handleMasterVolumeInput('local', this.value)">
                <span id="master-vol-text-local" class="fader-val">${state.settings.localVolume}%</span>
              </div>
              <div class="fader-item" title="Remote playback volume (Microphone passthrough)">
                <span class="fader-icon">${icons.mic}</span>
                <span class="fader-name">Mic Out</span>
                <input type="range" id="master-vol-input-remote" class="fader-range" min="0" max="100" 
                       value="${state.settings.remoteVolume}" 
                       onpointerdown="handleSliderDragStart(event)" 
                       onmousedown="handleSliderDragStart(event)" 
                       oninput="handleMasterVolumeInput('remote', this.value)">
                <span id="master-vol-text-remote" class="fader-val">${state.settings.remoteVolume}%</span>
              </div>
              <button class="fader-sync-btn ${state.settings.syncVolumes ? 'active' : ''}" 
                      title="${state.settings.syncVolumes ? 'Volumes Locked (Click to Unlock)' : 'Lock Local & Remote Volumes'}" 
                      onclick="updateSetting('syncVolumes', !state.settings.syncVolumes)">
                ${icons.link}
              </button>
            </div>

            ${state.outputDevices.length > 0 ? `
              <div class="output-select-container" style="display: flex; align-items: center;">
                <select class="sort-select" style="max-width: 170px; height: 28px; font-size: 11px;" onchange="handleSelectOutputDevice(this.value)">
                  ${state.outputDevices.map(d => {
                    const isActive = state.settings.outputs.includes(d.name);
                    return `<option value="${d.name}" ${isActive ? 'selected' : ''}>Out: ${d.name} ${d.isDefault ? '(Default)' : ''}</option>`;
                  }).join('')}
                </select>
              </div>
            ` : ''}

            ${(state.currentView === 'folder' || state.currentView === 'favorites') ? `
              <div class="search-container">
                <span class="nav-icon" style="color: var(--color-muted);">${icons.search}</span>
                <input type="text" id="search-input" class="search-input" placeholder="Search (Ctrl+F)..." oninput="handleSearch(this.value)" value="${state.searchQuery}">
              </div>

              <div class="view-switcher">
                <button class="view-btn ${state.listViewMode === 'deck' ? 'active' : ''}" title="Stream Deck Macro Pads" onclick="changeListViewMode('deck')">
                  ${icons.deck}
                </button>
                <button class="view-btn ${state.listViewMode === 'table' || state.listViewMode === 'list' ? 'active' : ''}" title="Soundpad High-Density Table" onclick="changeListViewMode('table')">
                  ${icons.table}
                </button>
                <button class="view-btn ${state.listViewMode === 'grid' ? 'active' : ''}" title="Media Grid View" onclick="changeListViewMode('grid')">
                  ${icons.grid}
                </button>
              </div>
            ` : ''}
            
            <!-- Theme Quick Toggle -->
            <button class="action-btn theme-toggle-btn" 
                    style="width: 28px; height: 28px;" 
                    title="${document.body.classList.contains('light-theme') ? 'Switch to Dark Slate Theme' : 'Switch to Light Soft Theme'}" 
                    onclick="toggleTheme()">
              ${document.body.classList.contains('light-theme') ? icons.moon : icons.sun}
            </button>

            <!-- Emergency Panic Button -->
            <button class="panic-stop-btn" onclick="handleStopAll()" title="Emergency Panic Button (ESC)">
              <span class="panic-key">ESC</span>
              <span>STOP ALL</span>
            </button>
          </div>
        </header>
        
        <div class="workspace-body">
          ${renderViewContent(soundsList, isFolderView, activeTab)}
        </div>
      </main>
    </div>
    
    ${renderPlaybackDock()}
    
    <!-- Modal Overlays -->
    ${renderModalOverlays()}
    ${renderContextMenu()}
    ${renderMultiImageModal()}
    
    <!-- Toast Notifications container -->
    <div class="toast-container" id="toast-container">
      ${state.toasts.map(t => `
        <div class="toast-message ${t.type}">
          <span>${t.text}</span>
        </div>
      `).join('')}
    </div>
  `;

  // Restore scroll positions so the sound list never jumps to the top
  const newWsBody = document.querySelector('.workspace-body');
  if (newWsBody) {
    newWsBody.scrollTop = wsScrollTop;
    newWsBody.scrollLeft = wsScrollLeft;
  }
  const newFolderList = document.querySelector('.folder-list');
  if (newFolderList) {
    newFolderList.scrollTop = folderScrollTop;
  }
  const newTableContainer = document.querySelector('.table-container');
  if (newTableContainer) {
    newTableContainer.scrollTop = tableScrollTop;
    newTableContainer.scrollLeft = tableScrollLeft;
  }
  if (activeElemId) {
    const el = document.getElementById(activeElemId);
    if (el) {
      el.focus();
      if (activeElemStart !== null && 'setSelectionRange' in el) {
        try { el.setSelectionRange(activeElemStart, activeElemEnd); } catch (e) {}
      }
    }
  }
} catch (err) {
    console.error("Critical error in renderApp:", err);
    container.innerHTML = `
      <div style="padding: 40px; color: #ef4444; font-family: sans-serif; text-align: center;">
        <h2 style="margin-bottom: 12px;">Soundboard Interface Error</h2>
        <p style="color: #94a3b8; font-size: 13px;">An error occurred while displaying the application view.</p>
        <pre style="color: #cbd5e1; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); padding: 16px; border-radius: 8px; max-width: 600px; margin: 20px auto; overflow: auto; text-align: left; font-size: 12px;">${err.stack || err.message}</pre>
        <button style="margin-top: 16px; padding: 8px 16px; background: #3b82f6; border: none; border-radius: 6px; color: #fff; cursor: pointer;" onclick="renderApp()">Retry</button>
      </div>
    `;
  }
}

// Helper to format track durations consistently
function formatDuration(ms) {
  if (!ms) return '';
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  return `${m}:${(s % 60).toString().padStart(2, '0')}`;
}

// Render dynamic subcomponents inside the workspace body
function renderViewContent(soundsList, isFolderView, activeTab) {
  if (state.currentView === 'folder' || state.currentView === 'favorites') {
    let contentHtml = '';
    
    if (soundsList.length === 0) {
      contentHtml = `
        <div class="table-container">
          <div class="empty-state">
            <div class="empty-icon" style="font-size: 24px;">📁</div>
            <div class="empty-text">No sounds found here</div>
            <div style="font-size: 12px; color: var(--color-muted); margin-top: 4px;">Add audio files to folders or configure favorite items</div>
          </div>
        </div>
      `;
    } else if (state.listViewMode === 'deck' || state.listViewMode === 'soundpad') {
      contentHtml = `
        <div class="deck-grid">
          ${soundsList.map(sound => {
            const ps = state.playingSounds[sound.id];
            const isPlaying = !!ps;
            const hasImage = !!sound.image;
            const length = ps ? (ps.lengthInMs || 1) : 0;
            const current = ps ? (ps.readInMs || 0) : 0;
            const percentage = length > 0 ? Math.min((current / length) * 100, 100) : 0;

            return `
              <div class="deck-tile ${isPlaying ? 'playing' : ''} ${hasImage ? 'has-card-image' : ''}" 
                   style="${hasImage ? `background-image: url('${sound.image}');` : ''}"
                   onclick="handlePlaySound(${sound.id})"
                   oncontextmenu="handleSoundContextMenu(${sound.id}, event)">
                ${hasImage ? `<div class="card-image-overlay"></div>` : ''}

                <!-- Top: Favorite + Hotkey Keycap -->
                <div class="deck-tile-top" onclick="event.stopPropagation()">
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <span class="fav-star ${sound.isFavorite ? 'active' : ''}" onclick="toggleFavorite(${sound.id}, ${sound.isFavorite})" title="Favorite">★</span>
                    <button class="action-btn" style="width: 20px; height: 20px; padding: 2px;" title="${hasImage ? 'Change Image (or RMB)' : 'Assign Image (or RMB)'}" onclick="handleAssignSoundImage(${sound.id})">
                      ${icons.image}
                    </button>
                  </div>
                  <button class="macro-keycap ${!sound.hotkeys || !sound.hotkeys.length ? 'unassigned' : ''}" onclick="startRecordHotkey(${sound.id})" title="Click to assign hotkey">
                    ${sound.hotkeys && sound.hotkeys.length > 0 ? sound.hotkeySequence : '+ Key'}
                  </button>
                </div>

                <!-- Middle: Sound Name & Icon -->
                <div class="deck-tile-mid">
                  ${hasImage ? '' : `<div style="color: var(--color-muted); font-size: 22px;">${icons.music}</div>`}
                  <span class="deck-sound-name" title="${sound.name}">${sound.name}</span>
                </div>

                <!-- Bottom: Equalizer / Duration + Transport -->
                <div class="deck-tile-bottom" onclick="event.stopPropagation()">
                  <div>
                    ${isPlaying ? `
                      <div class="eq-bars">
                        <span class="eq-bar"></span>
                        <span class="eq-bar"></span>
                        <span class="eq-bar"></span>
                        <span class="eq-bar"></span>
                      </div>
                    ` : `
                      <span class="deck-duration-pill">${sound.lengthInMs ? formatDuration(sound.lengthInMs) : ''}</span>
                    `}
                  </div>

                  <div style="display: flex; align-items: center; gap: 3px;">
                    <button class="action-btn play-btn" style="width: 24px; height: 24px;" onclick="handlePlaySound(${sound.id})" title="Play Sound">
                      ${icons.play}
                    </button>
                    <button class="action-btn stop-btn" style="width: 24px; height: 24px;" onclick="handleStopSound(${sound.id})" title="Stop Sound">
                      ${icons.stop}
                    </button>
                    
                    <div class="volume-popover-container ${state.activeVolumePopoverSoundId === sound.id ? 'open' : ''} ${state.hoveredVolumeSoundId === sound.id ? 'is-hovered' : ''}" 
                         onmouseenter="handleVolumeMouseEnter(${sound.id}, event)" 
                         onmouseleave="handleVolumeMouseLeave(${sound.id}, event)">
                      <button class="action-btn ${state.activeVolumePopoverSoundId === sound.id ? 'active' : ''} ${sound.localVolume !== null || sound.remoteVolume !== null ? 'has-custom' : ''}" 
                              style="width: 24px; height: 24px;" title="Volume Override" onclick="toggleVolumePopover(${sound.id}, event)">
                        ${icons.volume}
                      </button>
                      <div class="volume-dropdown ${state.activeVolumePopoverSoundId === sound.id ? 'open' : ''}" 
                           onmousedown="event.stopPropagation()" onpointerdown="event.stopPropagation()" onclick="event.stopPropagation()">
                        <div class="volume-dropdown-header">
                          <span class="vol-dropdown-title">Volume Overrides</span>
                          ${(sound.localVolume !== null || sound.remoteVolume !== null) ? `
                            <button class="vol-reset-btn" onclick="handleResetSoundVolume(${sound.id}, event)" title="Reset to Master Volume">Reset</button>
                          ` : ''}
                        </div>
                        <div class="vol-slider-row">
                          <div class="vol-label-group">
                            <label>Local</label>
                            <span id="vol-text-${sound.id}-local" class="vol-val-badge">${sound.localVolume !== null ? sound.localVolume + '%' : 'Default (' + state.settings.localVolume + '%)'}</span>
                          </div>
                          <input type="range" min="0" max="100" 
                                 value="${sound.localVolume !== null ? sound.localVolume : state.settings.localVolume}" 
                                 onpointerdown="handleSliderDragStart(event)" onmousedown="handleSliderDragStart(event)" 
                                 oninput="handleSoundVolumeInput(${sound.id}, 'local', this.value)">
                        </div>
                        <div class="vol-slider-row">
                          <div class="vol-label-group">
                            <label>Remote</label>
                            <span id="vol-text-${sound.id}-remote" class="vol-val-badge">${sound.remoteVolume !== null ? sound.remoteVolume + '%' : 'Default (' + state.settings.remoteVolume + '%)'}</span>
                          </div>
                          <input type="range" min="0" max="100" 
                                 value="${sound.remoteVolume !== null ? sound.remoteVolume : state.settings.remoteVolume}" 
                                 onpointerdown="handleSliderDragStart(event)" onmousedown="handleSliderDragStart(event)" 
                                 oninput="handleSoundVolumeInput(${sound.id}, 'remote', this.value)">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Live progress underline -->
                <div id="deck-progress-${sound.id}" class="deck-progress-line" style="width: ${percentage}%;"></div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    } else if (state.listViewMode === 'grid') {
      contentHtml = `
        <div class="sound-grid">
          ${soundsList.map(sound => {
            const isPlaying = !!state.playingSounds[sound.id];
            const hasImage = !!sound.image;
            return `
              <div class="sound-grid-card ${isPlaying ? 'playing' : ''} ${hasImage ? 'has-card-image' : ''}" 
                   style="${hasImage ? `background-image: url('${sound.image}');` : ''}"
                   oncontextmenu="handleSoundContextMenu(${sound.id}, event)">
                ${hasImage ? `<div class="card-image-overlay"></div>` : ''}
                <div class="card-top" onclick="event.stopPropagation()">
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <span class="fav-star ${sound.isFavorite ? 'active' : ''}" onclick="toggleFavorite(${sound.id}, ${sound.isFavorite})" title="Favorite">
                      ★
                    </span>
                    <button class="action-btn" style="width: 20px; height: 20px; padding: 2px;" title="${hasImage ? 'Change Image (or RMB)' : 'Assign Image (or RMB)'}" onclick="handleAssignSoundImage(${sound.id})">
                      ${icons.image}
                    </button>
                  </div>
                  <button class="macro-keycap ${!sound.hotkeys || !sound.hotkeys.length ? 'unassigned' : ''}" onclick="startRecordHotkey(${sound.id})">
                    ${sound.hotkeys && sound.hotkeys.length > 0 ? sound.hotkeySequence : '+ Key'}
                  </button>
                </div>
                <div class="card-middle" onclick="handlePlaySound(${sound.id})">
                  ${hasImage ? '' : `<div class="card-sound-icon">${icons.music}</div>`}
                  <span class="card-sound-name" title="${sound.name}">${sound.name}</span>
                </div>
                <div class="card-bottom" onclick="event.stopPropagation()">
                  <div style="display: flex; gap: 4px;">
                    <button class="action-btn play-btn" onclick="handlePlaySound(${sound.id})" title="Play">
                      ${icons.play}
                    </button>
                    <button class="action-btn stop-btn" onclick="handleStopSound(${sound.id})" title="Stop">
                      ${icons.stop}
                    </button>
                  </div>
                  
                  <div class="volume-popover-container ${state.activeVolumePopoverSoundId === sound.id ? 'open' : ''} ${state.hoveredVolumeSoundId === sound.id ? 'is-hovered' : ''}" 
                       onmouseenter="handleVolumeMouseEnter(${sound.id}, event)" 
                       onmouseleave="handleVolumeMouseLeave(${sound.id}, event)" 
                       onclick="event.stopPropagation()">
                    <button class="action-btn ${state.activeVolumePopoverSoundId === sound.id ? 'active' : ''} ${sound.localVolume !== null || sound.remoteVolume !== null ? 'has-custom' : ''}" title="Adjust Volume" onclick="toggleVolumePopover(${sound.id}, event)">
                      ${icons.volume}
                    </button>
                    <div class="volume-dropdown ${state.activeVolumePopoverSoundId === sound.id ? 'open' : ''}" 
                         onmousedown="event.stopPropagation()" 
                         onpointerdown="event.stopPropagation()" 
                         onclick="event.stopPropagation()">
                      <div class="volume-dropdown-header">
                        <span class="vol-dropdown-title">Volume Overrides</span>
                        ${(sound.localVolume !== null || sound.remoteVolume !== null) ? `
                          <button class="vol-reset-btn" onclick="handleResetSoundVolume(${sound.id}, event)" title="Reset to Master Volume">Reset</button>
                        ` : ''}
                      </div>
                      <div class="vol-slider-row">
                        <div class="vol-label-group">
                          <label>Local</label>
                          <span id="vol-text-${sound.id}-local" class="vol-val-badge">${sound.localVolume !== null ? sound.localVolume + '%' : 'Default (' + state.settings.localVolume + '%)'}</span>
                        </div>
                        <input type="range" min="0" max="100" 
                               value="${sound.localVolume !== null ? sound.localVolume : state.settings.localVolume}" 
                               onpointerdown="handleSliderDragStart(event)" 
                               onmousedown="handleSliderDragStart(event)" 
                               oninput="handleSoundVolumeInput(${sound.id}, 'local', this.value)">
                      </div>
                      <div class="vol-slider-row">
                        <div class="vol-label-group">
                          <label>Remote</label>
                          <span id="vol-text-${sound.id}-remote" class="vol-val-badge">${sound.remoteVolume !== null ? sound.remoteVolume + '%' : 'Default (' + state.settings.remoteVolume + '%)'}</span>
                        </div>
                        <input type="range" min="0" max="100" 
                               value="${sound.remoteVolume !== null ? sound.remoteVolume : state.settings.remoteVolume}" 
                               onpointerdown="handleSliderDragStart(event)" 
                               onmousedown="handleSliderDragStart(event)" 
                               oninput="handleSoundVolumeInput(${sound.id}, 'remote', this.value)">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    } else {
      // Soundpad High-Density Table View
      contentHtml = `
        <div class="table-container">
          <table class="sounds-table">
            <thead>
              <tr>
                <th style="width: 34px; text-align: center;">#</th>
                <th style="width: 30px; text-align: center;">★</th>
                <th style="width: 36px; text-align: center;">Play</th>
                <th>Sound Name</th>
                <th style="width: 120px;">Hotkey</th>
                <th style="width: 60px;">Length</th>
                <th style="width: 65px;">Status</th>
                <th style="width: 70px;">Volume</th>
                <th style="width: 90px; text-align: right;">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${soundsList.map((sound, idx) => {
                const isPlaying = !!state.playingSounds[sound.id];
                return `
                  <tr class="sound-row ${isPlaying ? 'playing' : ''}" 
                      ondblclick="handlePlaySound(${sound.id})" 
                      oncontextmenu="handleSoundContextMenu(${sound.id}, event)">
                    <td style="text-align: center; font-family: var(--font-mono); font-size: 11px; color: var(--color-muted);">${idx + 1}</td>
                    <td style="text-align: center;">
                      <span class="fav-star ${sound.isFavorite ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${sound.id}, ${sound.isFavorite})">
                        ★
                      </span>
                    </td>
                    <td style="text-align: center;">
                      <button class="action-btn ${isPlaying ? 'stop-btn' : 'play-btn'}" style="width: 22px; height: 22px; margin: 0 auto;" onclick="event.stopPropagation(); ${isPlaying ? `handleStopSound(${sound.id})` : `handlePlaySound(${sound.id})`}">
                        ${isPlaying ? icons.stop : icons.play}
                      </button>
                    </td>
                    <td>
                      <div class="sound-name-wrapper" style="display: flex; align-items: center; gap: 7px;">
                        ${sound.image ? `
                          <div class="sound-row-avatar" style="background-image: url('${sound.image}');" title="Assigned image"></div>
                        ` : ''}
                        <span class="sound-name-text">${sound.name}</span>
                      </div>
                    </td>
                    <td>
                      <button class="macro-keycap ${!sound.hotkeys || !sound.hotkeys.length ? 'unassigned' : ''}" onclick="event.stopPropagation(); startRecordHotkey(${sound.id})">
                        ${sound.hotkeys && sound.hotkeys.length > 0 ? sound.hotkeySequence : '+ Key'}
                      </button>
                    </td>
                    <td>
                      <span style="font-family: var(--font-mono); font-size: 10.5px; color: var(--color-muted);">
                        ${sound.lengthInMs ? formatDuration(sound.lengthInMs) : '--'}
                      </span>
                    </td>
                    <td>
                      ${isPlaying ? `
                        <div class="eq-bars">
                          <span class="eq-bar"></span>
                          <span class="eq-bar"></span>
                          <span class="eq-bar"></span>
                          <span class="eq-bar"></span>
                        </div>
                      ` : `<span style="font-size: 11px; color: var(--color-muted);">Ready</span>`}
                    </td>
                    <td>
                      <span style="font-family: var(--font-mono); font-size: 11px; color: ${sound.localVolume !== null || sound.remoteVolume !== null ? 'var(--color-accent)' : 'var(--color-muted)'};">
                        ${sound.localVolume !== null ? sound.localVolume + '%' : 'Default'}
                      </span>
                    </td>
                    <td>
                      <div class="action-buttons" onclick="event.stopPropagation()">
                        <button class="action-btn" style="width: 22px; height: 22px;" title="${sound.image ? 'Change Image' : 'Assign Image'}" onclick="handleAssignSoundImage(${sound.id})">
                          ${icons.image}
                        </button>
                        
                        <!-- Volume Sliders Popover trigger -->
                        <div class="volume-popover-container ${state.activeVolumePopoverSoundId === sound.id ? 'open' : ''} ${state.hoveredVolumeSoundId === sound.id ? 'is-hovered' : ''}" 
                             onmouseenter="handleVolumeMouseEnter(${sound.id}, event)" 
                             onmouseleave="handleVolumeMouseLeave(${sound.id}, event)">
                          <button class="action-btn ${state.activeVolumePopoverSoundId === sound.id ? 'active' : ''} ${sound.localVolume !== null || sound.remoteVolume !== null ? 'has-custom' : ''}" style="width: 22px; height: 22px;" title="Adjust Volume" onclick="toggleVolumePopover(${sound.id}, event)">
                            ${icons.volume}
                          </button>
                          <div class="volume-dropdown ${state.activeVolumePopoverSoundId === sound.id ? 'open' : ''}" 
                               onmousedown="event.stopPropagation()" 
                               onpointerdown="event.stopPropagation()" 
                               onclick="event.stopPropagation()">
                            <div class="volume-dropdown-header">
                              <span class="vol-dropdown-title">Volume Overrides</span>
                              ${(sound.localVolume !== null || sound.remoteVolume !== null) ? `
                                <button class="vol-reset-btn" onclick="handleResetSoundVolume(${sound.id}, event)" title="Reset to Master Volume">Reset</button>
                              ` : ''}
                            </div>
                            <div class="vol-slider-row">
                              <div class="vol-label-group">
                                <label>Local Volume</label>
                                <span id="vol-text-${sound.id}-local" class="vol-val-badge">${sound.localVolume !== null ? sound.localVolume + '%' : 'Default (' + state.settings.localVolume + '%)'}</span>
                              </div>
                              <input type="range" min="0" max="100" 
                                     value="${sound.localVolume !== null ? sound.localVolume : state.settings.localVolume}" 
                                     onpointerdown="handleSliderDragStart(event)" 
                                     onmousedown="handleSliderDragStart(event)" 
                                     oninput="handleSoundVolumeInput(${sound.id}, 'local', this.value)">
                            </div>
                            <div class="vol-slider-row">
                              <div class="vol-label-group">
                                <label>Remote Volume</label>
                                <span id="vol-text-${sound.id}-remote" class="vol-val-badge">${sound.remoteVolume !== null ? sound.remoteVolume + '%' : 'Default (' + state.settings.remoteVolume + '%)'}</span>
                              </div>
                              <input type="range" min="0" max="100" 
                                     value="${sound.remoteVolume !== null ? sound.remoteVolume : state.settings.remoteVolume}" 
                                     onpointerdown="handleSliderDragStart(event)" 
                                     onmousedown="handleSliderDragStart(event)" 
                                     oninput="handleSoundVolumeInput(${sound.id}, 'remote', this.value)">
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    return `
      ${isFolderView && activeTab ? `
        <div class="table-header-wrapper">
          <div class="checkbox-desc">Sort mode settings automatically sync with files order</div>
          <select class="sort-select" onchange="handleSetSortMode(${activeTab.id}, this.value)">
            <option value="0" ${activeTab.sortMode === 0 ? 'selected' : ''}>Modified Date (Asc)</option>
            <option value="1" ${activeTab.sortMode === 1 ? 'selected' : ''}>Modified Date (Desc)</option>
            <option value="2" ${activeTab.sortMode === 2 ? 'selected' : ''}>Alphabetical (Asc)</option>
            <option value="3" ${activeTab.sortMode === 3 ? 'selected' : ''}>Alphabetical (Desc)</option>
          </select>
        </div>
      ` : ''}
      
      ${contentHtml}
    `;
  }


  if (state.currentView === 'settings') {
    return `
      <div class="settings-grid">
        <!-- Settings Panel Column 1 -->
        <div style="display: flex; flex-direction: column; gap: var(--spacing-xl);">
          <div class="card-section">
            <div class="card-title">Playback Configurations</div>
            <div style="display: flex; flex-direction: column; gap: var(--spacing-md);">
              <label class="checkbox-row">
                <input type="checkbox" ${state.settings.muteDuringPlayback ? 'checked' : ''} onchange="updateSetting('muteDuringPlayback', this.checked)">
                <div class="checkbox-label-wrapper">
                  <span class="checkbox-title">Mute Microphones during playback</span>
                  <span class="checkbox-desc">Mute your active micro input signal while playing soundboard effects.</span>
                </div>
              </label>
              <label class="checkbox-row">
                <input type="checkbox" ${state.settings.allowOverlapping ? 'checked' : ''} onchange="updateSetting('allowOverlapping', this.checked)">
                <div class="checkbox-label-wrapper">
                  <span class="checkbox-title">Allow Overlapping Sounds</span>
                  <span class="checkbox-desc">Permit multiple sound streams to play simultaneously without cutoffs.</span>
                </div>
              </label>
              <label class="checkbox-row">
                <input type="checkbox" ${state.settings.minimizeToTray ? 'checked' : ''} onchange="updateSetting('minimizeToTray', this.checked)">
                <div class="checkbox-label-wrapper">
                  <span class="checkbox-title">Minimize to system tray</span>
                  <span class="checkbox-desc">Minimize the soundboard window to the system taskbar tray on close.</span>
                </div>
              </label>
              <label class="checkbox-row">
                <input type="checkbox" ${state.settings.tabHotkeysOnly ? 'checked' : ''} onchange="updateSetting('tabHotkeysOnly', this.checked)">
                <div class="checkbox-label-wrapper">
                  <span class="checkbox-title">Restrict Hotkeys to Active Tab</span>
                  <span class="checkbox-desc">Disable hotkeys belonging to files outside the currently selected directory.</span>
                </div>
              </label>
              <label class="checkbox-row">
                <input type="checkbox" ${state.settings.deleteToTrash ? 'checked' : ''} onchange="updateSetting('deleteToTrash', this.checked)">
                <div class="checkbox-label-wrapper">
                  <span class="checkbox-title">Delete files to trash bin</span>
                  <span class="checkbox-desc">Move deleted soundboard files to system recycle bin rather than erasing.</span>
                </div>
              </label>
            </div>
          </div>
          
          <div class="card-section">
            <div class="card-title">System Themes</div>
            <div class="form-group">
              <label for="theme-select">Visual Design Appearance</label>
              <select id="theme-select" class="sort-select" style="width: 100%; height: 36px;" onchange="updateSetting('theme', parseInt(this.value, 10))">
                <option value="0" ${state.settings.theme === 0 ? 'selected' : ''}>Follow System Settings</option>
                <option value="1" ${state.settings.theme === 1 ? 'selected' : ''}>Dark Slate Theme</option>
                <option value="2" ${state.settings.theme === 2 ? 'selected' : ''}>Light Soft Theme</option>
              </select>
            </div>
          </div>
          
          <div class="card-section">
            <div class="card-title">Global Shortcut Hotkeys</div>
            <div style="display: flex; flex-direction: column; gap: var(--spacing-md);">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div class="checkbox-label-wrapper">
                  <span class="checkbox-title">PTT (Push-To-Talk) keys</span>
                  <span class="checkbox-desc">Exempt these keys from mute blocks.</span>
                </div>
                <button class="hotkey-badge" onclick="startRecordHotkey(null, 'ptt')">
                  ${state.settings.pushToTalkKeys && state.settings.pushToTalkKeys.length > 0 ? 'PTT Active' : 'Assign'}
                </button>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div class="checkbox-label-wrapper">
                  <span class="checkbox-title">Stop Hotkey</span>
                  <span class="checkbox-desc">Emergency shortcut to stop all audios.</span>
                </div>
                <button class="hotkey-badge" onclick="startRecordHotkey(null, 'stop')">
                  ${state.settings.stopHotkey && state.settings.stopHotkey.length > 0 ? 'Stop Active' : 'Assign'}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Settings Panel Column 2 -->
        <div style="display: flex; flex-direction: column; gap: var(--spacing-xl);">
          <div class="card-section">
            <div class="card-title">Master Audio Volumes</div>
            <div style="display: flex; flex-direction: column; gap: var(--spacing-md); margin-bottom: var(--spacing-md);">
              <div class="vol-slider-row">
                <div class="vol-label-group">
                  <label>Master Local Volume (You Hear)</label>
                  <span id="settings-vol-text-local" class="vol-val-badge">${state.settings.localVolume}%</span>
                </div>
                <input type="range" id="settings-vol-input-local" min="0" max="100" value="${state.settings.localVolume}" oninput="handleMasterVolumeInput('local', this.value)">
              </div>
              <div class="vol-slider-row">
                <div class="vol-label-group">
                  <label>Master Remote Volume (Others Hear)</label>
                  <span id="settings-vol-text-remote" class="vol-val-badge">${state.settings.remoteVolume}%</span>
                </div>
                <input type="range" id="settings-vol-input-remote" min="0" max="100" value="${state.settings.remoteVolume}" oninput="handleMasterVolumeInput('remote', this.value)">
              </div>
            </div>
            <label class="checkbox-row">
              <input type="checkbox" ${state.settings.syncVolumes ? 'checked' : ''} onchange="updateSetting('syncVolumes', this.checked)">
              <div class="checkbox-label-wrapper">
                <span class="checkbox-title">Sync Volume levels</span>
                <span class="checkbox-desc">Bind local and remote playback output slider volume levels together.</span>
              </div>
            </label>
          </div>

          <div class="card-section">
            <div class="card-title">Audio Output Routing</div>
            <label class="checkbox-row">
              <input type="checkbox" ${state.settings.allowMultipleOutputs ? 'checked' : ''} onchange="updateSetting('allowMultipleOutputs', this.checked)">
              <div class="checkbox-label-wrapper">
                <span class="checkbox-title">Allow multi-device routing</span>
                <span class="checkbox-desc">Output sound streams to multiple output targets concurrently.</span>
              </div>
            </label>
            <label class="checkbox-row">
              <input type="checkbox" ${state.settings.useAsDefaultDevice ? 'checked' : ''} onchange="updateSetting('useAsDefaultDevice', this.checked)">
              <div class="checkbox-label-wrapper">
                <span class="checkbox-title">Use as Default Devices</span>
                <span class="checkbox-desc">Inject audio outputs as defaults.</span>
              </div>
            </label>
            
            <div style="margin-top: var(--spacing-md);">
              <span class="checkbox-title" style="font-size: 12px; font-weight: 600;">Available Sound Destinations</span>
              <div class="output-list">
                ${state.outputDevices.length === 0 ? `
                  <div class="checkbox-desc">No playback devices recognized</div>
                ` : state.outputDevices.map(d => {
                  const isActive = state.settings.outputs.includes(d.name);
                  return `
                    <div class="output-item ${isActive ? 'active' : ''}" onclick="toggleOutputDevice('${d.name}')">
                      <div style="width: 8px; height: 8px; border-radius: 50%; background-color: ${isActive ? 'var(--color-accent)' : 'var(--color-muted)'}; margin-right: 4px;"></div>
                      <span>${d.name} ${d.isDefault ? '(Default)' : ''}</span>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
          
          <!-- OS Specific Tools panels -->
          ${renderOsSettingsPanel()}
        </div>
      </div>
    `;
  }

  if (state.currentView === 'system-info') {
    const rawLines = state.systemInfo ? state.systemInfo.split('\n') : [];
    return `
      <div class="card-section">
        <div class="card-title">Hardware and Environment Specifications</div>
        <div class="system-info-grid">
          ${rawLines.map(line => {
            const parts = line.split(':');
            if (parts.length < 2) return '';
            return `
              <div class="info-card">
                <div class="info-card-label">${parts[0].trim()}</div>
                <div class="info-card-value">${parts.slice(1).join(':').trim()}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  if (state.currentView === 'help') {
    return `
      <div class="card-section">
        <div class="card-title">Soundboard Documentation & Help</div>
        <div style="display: flex; flex-direction: column; gap: var(--spacing-md); font-size: 13px; color: var(--color-secondary); line-height: 1.6;">
          <p>Welcome to <strong>Audiopad</strong>! This soundboard application allows you to play audio tracks through your output speakers and virtual microphones simultaneously to other channels (e.g. Discord, TeamSpeak, Skype).</p>
          
          <h4 style="font-weight: 600; color: var(--color-primary); margin-top: var(--spacing-sm);">Quick Instructions:</h4>
          <ol style="margin-left: var(--spacing-lg); display: flex; flex-direction: column; gap: var(--spacing-xs);">
            <li>Add folder directories holding your sound files (*.mp3, *.wav, *.ogg) in the left sidebar directory list.</li>
            <li>Assign custom shortcuts (hotkeys) by clicking the badge inside the sounds list rows.</li>
            <li>Configure audio sinks and mic settings in the <strong>Settings</strong> page to verify routing works.</li>
          </ol>
          
          <div style="display: flex; gap: var(--spacing-sm); margin-top: var(--spacing-md);">
            <button class="btn-primary" onclick="handleOpenUrl('https://audiopad.vercel.app/')">
              Visit Website
            </button>
            <button class="btn-primary" style="background-color: var(--color-secondary);" onclick="handleOpenUrl('https://github.com/audiopadapp/audiopad')">
              Source Code Repository
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

// Render dynamic Windows/Linux settings panel depending on OS detected
function renderOsSettingsPanel() {
  if (!state.isLinux) {
    // Windows VB-Cable settings
    const isSetup = !!state.isVBCableSetup;
    const isInstalled = !!state.isVBCableInstalled;
    const isElevated = !!state.isElevated;
    const selectedName = state.selectedMic ? state.selectedMic.name : '';
    return `
      <div class="card-section">
        <div class="card-title">Windows Routing Tools</div>
        <div style="display: flex; flex-direction: column; gap: var(--space-md);">
          ${!isInstalled ? `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; background: var(--color-warning-subtle); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: var(--radius-sm);">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 16px;">⚠️</span>
                <div>
                  <div style="font-size: 11.5px; font-weight: 600; color: var(--color-warning);">VB-Audio Cable Not Detected</div>
                  <div style="font-size: 10.5px; color: var(--color-secondary);">Install driver to route soundboard audio into microphone.</div>
                </div>
              </div>
              <button class="btn-primary" style="padding: 5px 10px; font-size: 11px;" onclick="window.openUrl && window.openUrl('https://vb-audio.com/Cable/')">
                Download Cable
              </button>
            </div>
          ` : ''}

          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div class="checkbox-label-wrapper">
              <div style="display: flex; align-items: center; gap: 6px;">
                <span class="checkbox-title">VB-Audio Cable Integration</span>
                <span class="status-pill ${isSetup ? 'active' : (isInstalled ? 'warning' : 'admin')}">
                  ${isSetup ? '● Active' : (isInstalled ? '○ Not Configured' : '○ Missing Driver')}
                </span>
              </div>
              <span class="checkbox-desc">
                ${isSetup && selectedName 
                  ? `Routing <strong>${selectedName}</strong> audio stream to VB-Cable.` 
                  : (isInstalled ? `Routes microphone audio to virtual cable output.` : `Requires free VB-Audio Virtual Cable driver.`)}
              </span>
            </div>
            <button class="btn-primary" style="padding: 5px 10px; font-size: 11px; ${isSetup ? 'background-color: var(--bg-surface); border: 1px solid var(--border-color); color: var(--color-primary);' : ''}" onclick="handleVBCableSetup()">
              ${isSetup ? 'Reconfigure' : (isInstalled ? 'Configure Routing' : 'Get Driver')}
            </button>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <label for="mic-override-select" style="font-size: 11px; color: var(--color-secondary);">Override Microphone device</label>
            <select id="mic-override-select" class="sort-select" style="width: 100%; height: 30px;" onchange="handleMicOverrideChange(this.value)">
              <option value="" ${!isSetup || !state.selectedMic ? 'selected' : ''}>No Override</option>
              ${state.recordingDevices.map(d => {
                const isSelected = isSetup && state.selectedMic && (state.selectedMic.guid === d.guid || state.selectedMic.name === d.name);
                return `<option value="${d.guid}" ${isSelected ? 'selected' : ''}>${d.name}</option>`;
              }).join('')}
            </select>
          </div>
          
          ${isElevated ? `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: var(--color-active-subtle); border: 1px solid rgba(34, 197, 94, 0.25); border-radius: var(--radius-sm);">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 14px;">🛡️</span>
                <div>
                  <div style="font-size: 11.5px; font-weight: 600; color: var(--color-active-signal);">Administrator Privileges</div>
                  <div style="font-size: 10.5px; color: var(--color-secondary);">Direct audio endpoint permissions active</div>
                </div>
              </div>
              <button class="btn-primary" style="padding: 4px 10px; font-size: 11px; background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--color-primary);" onclick="handleOpenSoundControlPanel()">
                Sound Control Panel
              </button>
            </div>
          ` : `
            <div style="display: flex; flex-direction: column; gap: 6px;">
              <button class="btn-primary" style="width: 100%; padding: 7px 12px;" onclick="handleRestartAsAdmin()">
                🛡️ Elevate Privileges (UAC)
              </button>
              <button class="btn-primary" style="padding: 5px 10px; font-size: 11px; background: transparent; border: 1px solid var(--border-color); color: var(--color-secondary); width: 100%;" onclick="handleOpenSoundControlPanel()">
                Open Sound Control Panel (Manual Fallback)
              </button>
            </div>
          `}
        </div>
      </div>
    `;
  } else {
    // Linux PulseAudio passthrough settings
    return `
      <div class="card-section">
        <div class="card-title">Linux PulseAudio Sinks</div>
        <div style="display: flex; flex-direction: column; gap: var(--space-md);">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div class="checkbox-label-wrapper">
              <span class="checkbox-title">PulseAudio Switch-On-Connect</span>
              <span class="checkbox-desc">Configure PA module connection state.</span>
            </div>
            <button class="btn-primary" style="padding: 4px 10px; font-size: 11px;" onclick="handleUnloadSwitchOnConnect()">
              Reset Modules
            </button>
          </div>
          
          <div style="margin-top: 4px;">
            <span class="checkbox-title" style="font-size: 11.5px; font-weight: 600;">Running Applications Passthrough</span>
            <div class="output-list" style="margin-top: 4px;">
              ${state.playbackApps.length === 0 ? `
                <div class="checkbox-desc">No running playback apps recognized</div>
              ` : state.playbackApps.map(app => {
                const isPassthroughActive = !!app.passthroughActive;
                return `
                  <div class="output-item ${isPassthroughActive ? 'active' : ''}" onclick="handleLinuxPassthrough('${app.name}', ${isPassthroughActive})">
                    <span>${app.name} ${isPassthroughActive ? '(Routing)' : '(No Routing)'}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

function formatMs(ms) {
  if (!ms || ms < 0) return '0:00';
  const totalSecs = Math.floor(ms / 1000);
  const mins = Math.floor(totalSecs / 60);
  const secs = totalSecs % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function getActivePlayback() {
  if (state.currentPlayingSoundId !== null && state.currentPlayingSoundId !== undefined) {
    const details = state.playingSounds[state.currentPlayingSoundId];
    if (details) {
      const playId = (details.id !== undefined) ? details.id : (details.sound ? details.sound.id : state.currentPlayingSoundId);
      const soundId = (details.sound && details.sound.id !== undefined) ? details.sound.id : playId;
      return { soundKey: state.currentPlayingSoundId, details, playId, soundId };
    }
  }

  const activeIds = Object.keys(state.playingSounds);
  if (activeIds.length === 0) return null;
  for (let i = activeIds.length - 1; i >= 0; i--) {
    const soundKey = activeIds[i];
    const details = state.playingSounds[soundKey];
    if (details) {
      const playId = (details.id !== undefined) ? details.id : (details.sound ? details.sound.id : soundKey);
      const soundId = (details.sound && details.sound.id !== undefined) ? details.sound.id : playId;
      state.currentPlayingSoundId = soundKey;
      return { soundKey, details, playId, soundId };
    }
  }
  return null;
}

function updateDockControlsInPlace() {
  const active = getActivePlayback();
  const isPlaying = active !== null;
  const details = active ? active.details : null;

  const btnRepeat = document.getElementById('dock-btn-repeat');
  if (btnRepeat) {
    if (details && details.repeat) {
      btnRepeat.classList.add('active');
      btnRepeat.style.color = 'var(--color-accent)';
    } else {
      btnRepeat.classList.remove('active');
      btnRepeat.style.color = 'inherit';
    }
    btnRepeat.disabled = !isPlaying;
  }

  const btnPlay = document.getElementById('dock-btn-playpause');
  if (btnPlay) {
    const isPaused = !details || !!details.paused;
    btnPlay.innerHTML = (isPlaying && !isPaused) ? icons.pause : icons.play;
    btnPlay.title = isPlaying ? (isPaused ? 'Resume Playback' : 'Pause Playback') : 'Play';
    btnPlay.disabled = !isPlaying;
    if (isPlaying && !isPaused) {
      btnPlay.classList.add('play-btn');
    } else {
      btnPlay.classList.remove('play-btn');
    }
  }

  const btnStop = document.getElementById('dock-btn-stop');
  if (btnStop) {
    btnStop.disabled = !isPlaying;
  }

  const eqBars = document.getElementById('dock-eq-bars');
  if (eqBars) {
    eqBars.style.display = (isPlaying && details && details.sound) ? '' : 'none';
    if (details && details.paused) {
      eqBars.classList.add('paused');
      eqBars.title = 'Playback Paused';
    } else {
      eqBars.classList.remove('paused');
      eqBars.title = 'Playing Audio Stream';
    }
  }

  const nameEl = document.getElementById('playback-dock-name');
  if (nameEl && details && details.sound) {
    nameEl.textContent = details.sound.name || 'Active Sound';
    nameEl.style.color = 'var(--color-primary)';
  }

  const pathEl = document.getElementById('playback-dock-path');
  if (pathEl && details && details.sound) {
    const isPaused = !details || !!details.paused;
    const current = details.readInMs || 0;
    const length = details.lengthInMs || 1;
    pathEl.textContent = `${isPaused ? 'Paused' : 'Playing stream'} • ${formatMs(current)} / ${formatMs(length)}`;
  }
}

async function handleTogglePlayPause() {
  const active = getActivePlayback();
  if (!active || !active.details) return;
  const { details, playId } = active;

  const willPause = !details.paused;
  details.paused = willPause;
  updateDockControlsInPlace();

  try {
    if (willPause) {
      if (window.pauseSound) {
        await window.pauseSound(playId);
      }
    } else {
      if (window.resumeSound) {
        await window.resumeSound(playId);
      }
    }
  } catch (e) {
    console.warn("toggle play/pause failed:", e);
    details.paused = !willPause;
    updateDockControlsInPlace();
  }
}

async function handleToggleRepeat() {
  const active = getActivePlayback();
  if (!active || !active.details) return;
  const { details, playId } = active;

  details.repeat = !details.repeat;
  updateDockControlsInPlace();

  try {
    if (window.repeatSound) {
      await window.repeatSound(playId, details.repeat);
    }
  } catch (e) {
    console.warn("toggle repeat failed:", e);
    details.repeat = !details.repeat;
    updateDockControlsInPlace();
  }
}

async function handleStopActiveSound() {
  const active = getActivePlayback();
  if (!active || !active.details) return;
  const { playId, soundId } = active;

  try {
    if (window.stopSound) {
      await window.stopSound(playId);
    }
  } catch (e) {
    console.warn("stopSound error:", e);
  }

  delete state.playingSounds[soundId];
  delete state.playingSounds[playId];
  if (state.currentPlayingSoundId === soundId || state.currentPlayingSoundId === playId) {
    const remainingIds = Object.keys(state.playingSounds);
    state.currentPlayingSoundId = remainingIds.length > 0 ? remainingIds[remainingIds.length - 1] : null;
  }
  cleanupScrubberDrag();
  renderApp();
}

function handleScrubberPointerDown(event) {
  if (event.button !== 0) return;
  event.preventDefault();
  event.stopPropagation();

  const active = getActivePlayback();
  if (!active || !active.details) return;
  const bar = document.getElementById('playback-dock-bar');
  if (!bar) return;

  state.isDraggingSeekbar = true;
  bar.classList.add('dragging');

  try {
    bar.setPointerCapture(event.pointerId);
  } catch (e) {}

  updateScrubberFromEvent(event);

  bar.onpointermove = handleScrubberPointerMove;
  bar.onpointerup = handleScrubberPointerUp;
  bar.onpointercancel = handleScrubberPointerCancel;
}

function updateScrubberFromEvent(event) {
  const active = getActivePlayback();
  if (!active || !active.details) return;
  const bar = document.getElementById('playback-dock-bar');
  if (!bar) return;

  const rect = bar.getBoundingClientRect();
  const width = rect.width;
  if (width <= 0) return;

  let clickX = event.clientX - rect.left;
  clickX = Math.max(0, Math.min(clickX, width));
  const ratio = clickX / width;

  const length = active.details.lengthInMs || 1;
  const previewMs = Math.floor(length * ratio);
  state.dragSeekPosition = previewMs;
  const percentage = Math.min((previewMs / length) * 100, 100);

  const fill = document.getElementById('playback-dock-fill');
  if (fill) fill.style.width = `${percentage}%`;

  const thumb = document.getElementById('playback-dock-thumb');
  if (thumb) {
    thumb.style.left = `${percentage}%`;
    thumb.style.display = 'block';
  }

  const curTime = document.getElementById('playback-dock-current');
  if (curTime) curTime.textContent = formatMs(previewMs);
}

function handleScrubberPointerMove(event) {
  if (!state.isDraggingSeekbar) return;
  updateScrubberFromEvent(event);
}

async function handleScrubberPointerUp(event) {
  if (!state.isDraggingSeekbar) return;
  const bar = document.getElementById('playback-dock-bar');
  if (bar) {
    try {
      if (bar.hasPointerCapture(event.pointerId)) {
        bar.releasePointerCapture(event.pointerId);
      }
    } catch (e) {}
    bar.classList.remove('dragging');
    bar.onpointermove = null;
    bar.onpointerup = null;
    bar.onpointercancel = null;
  }
  state.isDraggingSeekbar = false;

  const active = getActivePlayback();
  if (!active || !active.details) return;

  const seekTargetMs = state.dragSeekPosition;
  active.details.readInMs = seekTargetMs;

  try {
    if (window.seekSound) {
      await window.seekSound(active.playId, seekTargetMs);
    }
  } catch (e) {
    console.warn("seekSound error:", e);
  }
}

function handleScrubberPointerCancel(event) {
  cleanupScrubberDrag();
}

function cleanupScrubberDrag() {
  state.isDraggingSeekbar = false;
  const bar = document.getElementById('playback-dock-bar');
  if (bar) {
    bar.classList.remove('dragging');
    bar.onpointermove = null;
    bar.onpointerup = null;
    bar.onpointercancel = null;
  }
}

function updatePlaybackDockInPlace(playingSound) {
  if (state.isDraggingSeekbar) {
    return;
  }
  const dock = document.getElementById('playback-dock');
  if (!dock) {
    renderApp();
    return;
  }

  // If dock controls were rendered in an idle/disabled state, promote and refresh the layout
  const playBtn = document.getElementById('dock-btn-playpause');
  if (!playBtn || playBtn.disabled) {
    renderApp();
    return;
  }

  const length = playingSound.lengthInMs || 1;
  const current = playingSound.readInMs || 0;
  const percentage = Math.min((current / length) * 100, 100);
  const isPaused = !!playingSound.paused;

  const curTime = document.getElementById('playback-dock-current');
  if (curTime) curTime.textContent = formatMs(current);

  const totalTime = document.getElementById('playback-dock-length');
  if (totalTime) totalTime.textContent = formatMs(length);

  const fill = document.getElementById('playback-dock-fill');
  if (fill) fill.style.width = `${percentage}%`;

  const thumb = document.getElementById('playback-dock-thumb');
  if (thumb) {
    thumb.style.left = `${percentage}%`;
    thumb.style.display = 'block';
  }

  playBtn.innerHTML = isPaused ? icons.play : icons.pause;
  playBtn.title = isPaused ? 'Resume Playback' : 'Pause Playback';
  if (isPaused) {
    playBtn.classList.remove('play-btn');
  } else {
    playBtn.classList.add('play-btn');
  }

  const repeatBtn = document.getElementById('dock-btn-repeat');
  if (repeatBtn) {
    if (playingSound.repeat) {
      repeatBtn.classList.add('active');
      repeatBtn.style.color = 'var(--color-accent)';
    } else {
      repeatBtn.classList.remove('active');
      repeatBtn.style.color = 'inherit';
    }
  }

  const eqBars = document.getElementById('dock-eq-bars');
  if (eqBars) {
    eqBars.style.display = '';
    if (isPaused) {
      eqBars.classList.add('paused');
      eqBars.title = 'Playback Paused';
    } else {
      eqBars.classList.remove('paused');
      eqBars.title = 'Playing Audio Stream';
    }
  }

  const pathEl = document.getElementById('playback-dock-path');
  if (pathEl) {
    pathEl.textContent = `${isPaused ? 'Paused' : 'Playing stream'} • ${formatMs(current)} / ${formatMs(length)}`;
  }

  const nameEl = document.getElementById('playback-dock-name');
  if (nameEl && playingSound.sound && playingSound.sound.name && nameEl.textContent !== playingSound.sound.name) {
    nameEl.textContent = playingSound.sound.name;
    nameEl.style.color = 'var(--color-primary)';
  }

  if (playingSound.sound && playingSound.sound.id !== undefined) {
    const tileProgress = document.getElementById(`deck-progress-${playingSound.sound.id}`);
    if (tileProgress) {
      tileProgress.style.width = `${percentage}%`;
    }
  }
}

// Global bottom playback & hardware status bar (Docked 100% desktop transport)
function renderPlaybackDock() {
  const active = getActivePlayback();
  const isPlaying = active !== null;
  const details = active ? active.details : null;

  const length = details ? (details.lengthInMs || 1) : 0;
  const current = details ? (details.readInMs || 0) : 0;
  const percentage = length > 0 ? Math.min((current / length) * 100, 100) : 0;
  const isPaused = details ? !!details.paused : false;

  const totalSounds = state.tabs.reduce((acc, t) => acc + (t.sounds ? t.sounds.length : 0), 0);
  const activeDeviceName = state.settings.outputs && state.settings.outputs.length > 0 ? state.settings.outputs[0] : 'Default Speakers';

  return `
    <footer id="playback-dock">
      <div class="dock-track-info">
        <div id="dock-eq-bars" class="eq-bars ${isPaused ? 'paused' : ''}" style="${isPlaying && details && details.sound ? '' : 'display: none;'}" title="${isPaused ? 'Playback Paused' : 'Playing Audio Stream'}">
          <span class="eq-bar"></span>
          <span class="eq-bar"></span>
          <span class="eq-bar"></span>
          <span class="eq-bar"></span>
        </div>
        ${!isPlaying ? `<span id="playback-dock-icon" style="color: var(--color-muted); display: flex; align-items: center;">${icons.music}</span>` : ''}
        <div class="dock-track-text">
          <span id="playback-dock-name" class="dock-track-title" style="${isPlaying && details && details.sound ? '' : 'color: var(--color-secondary);'}">
            ${isPlaying && details && details.sound ? (details.sound.name || 'Active Sound') : 'Soundboard Ready'}
          </span>
          <span id="playback-dock-path" class="dock-track-sub">
            ${isPlaying && details && details.sound ? `${isPaused ? 'Paused' : 'Playing stream'} • ${formatMs(current)} / ${formatMs(length)}` : 'Press hotkey or trigger sound pad'}
          </span>
        </div>
      </div>
      
      <div class="dock-center-transport">
        <div class="dock-transport-controls">
          <button id="dock-btn-repeat" class="action-btn ${details && details.repeat ? 'active' : ''}" 
                  style="color: ${details && details.repeat ? 'var(--color-accent)' : 'inherit'};" 
                  title="Repeat Track" 
                  ${!isPlaying ? 'disabled' : ''}
                  onclick="event.stopPropagation(); handleToggleRepeat()">
            ${icons.repeat}
          </button>
          <button id="dock-btn-playpause" class="action-btn ${isPlaying && !isPaused ? 'play-btn' : ''}" 
                  title="${isPlaying ? (isPaused ? 'Resume Playback' : 'Pause Playback') : 'Play'}" 
                  ${!isPlaying ? 'disabled' : ''}
                  onclick="event.stopPropagation(); handleTogglePlayPause()">
            ${isPlaying && !isPaused ? icons.pause : icons.play}
          </button>
          <button id="dock-btn-stop" class="action-btn stop-btn" 
                  title="Stop Playback" 
                  ${!isPlaying ? 'disabled' : ''}
                  onclick="event.stopPropagation(); handleStopActiveSound()">
            ${icons.stop}
          </button>
        </div>

        <div class="dock-scrub-row">
          <span id="playback-dock-current" class="dock-time-text">${formatMs(current)}</span>
          <div id="playback-dock-bar" class="progress-bar-wrapper" 
               style="cursor: ${isPlaying ? 'pointer' : 'default'};" 
               onpointerdown="${isPlaying ? 'handleScrubberPointerDown(event)' : ''}">
            <div id="playback-dock-fill" class="progress-bar-fill" style="width: ${percentage}%"></div>
            <div id="playback-dock-thumb" class="progress-bar-thumb" style="left: ${percentage}%; display: ${isPlaying ? 'block' : 'none'};"></div>
          </div>
          <span id="playback-dock-length" class="dock-time-text">${formatMs(length)}</span>
        </div>
      </div>
      
      <div class="dock-right-meta">
        <span class="dock-route-pill" title="Audio Device Endpoint Target">
          ${!state.isLinux && state.isVBCableSetup ? '🎙️ Mic Active' : '🔉 ' + activeDeviceName}
        </span>
        <span class="dock-count-text">
          ${totalSounds} sounds
        </span>
      </div>
    </footer>
  `;
}

// Render recording dialog popup modals
function renderModalOverlays() {
  if (state.recordingHotkeySoundId !== null || state.recordingTarget !== null) {
    const isPTT = state.recordingTarget === 'ptt';
    const isStop = state.recordingTarget === 'stop';
    
    let headingText = "Record Hotkey";
    let descText = "Press a key combination now (e.g. Ctrl + Shift + P). System hotkey sequences automatically intercept clicks.";
    
    if (isPTT) {
      headingText = "Record Push-To-Talk Shortcut";
      descText = "Press the key combination you wish to use as Push-To-Talk shortcut.";
    } else if (isStop) {
      headingText = "Record Emergency Stop Shortcut";
      descText = "Press the key combination you wish to use to stop all playbacks.";
    }

    return `
      <div class="modal-overlay">
        <div class="modal-card">
          <h3>${headingText}</h3>
          <p>${descText}</p>
          <div class="recorded-sequence">${state.recordedKeyNames}</div>
          <div class="modal-actions">
            <button class="modal-btn save-btn" onclick="saveRecordedHotkey()">Save Shortcut</button>
            <button class="modal-btn clear-btn" onclick="clearRecordedHotkey()">Clear Shortcut</button>
            <button class="modal-btn cancel-btn" onclick="cancelRecordHotkey()">Cancel</button>
          </div>
        </div>
      </div>
    `;
  }
  return '';
}

// Render sleek custom right-click context menu
function renderContextMenu() {
  if (!state.contextMenu || !state.contextMenu.visible) return '';

  const { x, y, soundId } = state.contextMenu;
  let targetSound = null;
  for (const tab of state.tabs) {
    const s = (tab.sounds || []).find(snd => snd.id === soundId);
    if (s) {
      targetSound = s;
      break;
    }
  }
  if (!targetSound) return '';

  const isPlaying = !!state.playingSounds[soundId];
  const hasImage = !!targetSound.image;

  return `
    <div class="custom-context-menu" style="left: ${x}px; top: ${y}px;" onclick="event.stopPropagation()">
      <div style="padding: 4px 8px 6px 8px; font-size: 11px; font-weight: 700; color: var(--color-muted); text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid var(--border-color); margin-bottom: 3px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
        ${targetSound.name}
      </div>

      <button class="context-menu-item" onclick="closeContextMenu(); handlePlaySound(${soundId})">
        <span class="context-menu-icon">${isPlaying ? icons.stop : icons.play}</span>
        <span>${isPlaying ? 'Restart Sound' : 'Play Sound'}</span>
      </button>

      ${isPlaying ? `
        <button class="context-menu-item danger" onclick="closeContextMenu(); handleStopSound(${soundId})">
          <span class="context-menu-icon">${icons.stop}</span>
          <span>Stop Sound</span>
        </button>
      ` : ''}

      <div class="context-menu-divider"></div>

      <button class="context-menu-item" onclick="handleAssignSoundImage(${soundId})">
        <span class="context-menu-icon">${icons.image}</span>
        <span>${hasImage ? 'Change Image...' : 'Assign Image...'}</span>
      </button>

      <button class="context-menu-item" onclick="handleOpenMultiImageModal(${soundId})">
        <span class="context-menu-icon">📑</span>
        <span>Assign Image to Multiple...</span>
      </button>

      ${hasImage ? `
        <button class="context-menu-item danger" onclick="handleRemoveSoundImage(${soundId})">
          <span class="context-menu-icon">${icons.trash}</span>
          <span>Remove Image</span>
        </button>
      ` : ''}

      <div class="context-menu-divider"></div>

      <button class="context-menu-item" onclick="closeContextMenu(); toggleFavorite(${soundId}, ${targetSound.isFavorite})">
        <span class="context-menu-icon">${targetSound.isFavorite ? '★' : '☆'}</span>
        <span>${targetSound.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</span>
      </button>

      <button class="context-menu-item" onclick="closeContextMenu(); startRecordHotkey(${soundId})">
        <span class="context-menu-icon">⌨️</span>
        <span>Assign Hotkey</span>
      </button>
    </div>
  `;
}

// Render multi-sound image assignment modal
function renderMultiImageModal() {
  if (!state.multiImageModal || !state.multiImageModal.visible) return '';

  const currentTab = state.tabs.find(t => t.id === state.activeTabId) || state.tabs[0];
  const sounds = currentTab ? (currentTab.sounds || []) : [];
  const { selectedSoundIds, imageDataUrl } = state.multiImageModal;

  return `
    <div class="modal-overlay" onclick="handleCloseMultiImageModal()">
      <div class="modal-card" style="max-width: 480px; width: 100%;" onclick="event.stopPropagation()">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
          <h3 style="margin: 0; font-size: 16px; font-weight: 700; color: var(--color-primary);">Assign Image to Multiple Sounds</h3>
          <button class="action-btn" onclick="handleCloseMultiImageModal()">${icons.close}</button>
        </div>

        <p style="font-size: 12px; color: var(--color-muted); margin: 0 0 12px 0;">
          Select the sounds in this folder to apply the image to:
        </p>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-size: 11px; font-weight: 600; color: var(--color-muted);">${selectedSoundIds.length} of ${sounds.length} selected</span>
          <div style="display: flex; gap: 8px;">
            <button style="background: none; border: none; font-size: 11px; color: var(--color-accent); cursor: pointer;" onclick="handleSelectAllSoundsForImage(true)">Select All</button>
            <button style="background: none; border: none; font-size: 11px; color: var(--color-muted); cursor: pointer;" onclick="handleSelectAllSoundsForImage(false)">Clear</button>
          </div>
        </div>

        <div class="multi-image-sound-list">
          ${sounds.map(s => {
            const isChecked = selectedSoundIds.includes(s.id);
            return `
              <div class="multi-image-sound-item" onclick="handleToggleSelectSoundForImage(${s.id})">
                <input type="checkbox" ${isChecked ? 'checked' : ''} onclick="event.stopPropagation(); handleToggleSelectSoundForImage(${s.id})">
                ${s.image ? `
                  <div style="width: 22px; height: 22px; border-radius: 4px; background-image: url('${s.image}'); background-size: cover; background-position: center; border: 1px solid rgba(255,255,255,0.15); flex-shrink: 0;"></div>
                ` : `
                  <div style="width: 22px; height: 22px; border-radius: 4px; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; font-size: 10px; color: var(--color-muted); flex-shrink: 0;">🎵</div>
                `}
                <span style="font-size: 12px; color: var(--color-primary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex-grow: 1;">${s.name}</span>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Image Selector & Preview -->
        <div style="margin-top: 14px;">
          <button class="btn-primary" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 10px;" onclick="handleBrowseMultiImage()">
            ${icons.image} <span>${imageDataUrl ? 'Change Selected Image...' : 'Choose Image File...'}</span>
          </button>

          ${imageDataUrl ? `
            <div class="multi-image-preview-box" style="background-image: url('${imageDataUrl}'); border-style: solid; border-color: var(--color-accent);"></div>
          ` : `
            <div class="multi-image-preview-box">No image selected yet</div>
          `}
        </div>

        <div class="modal-actions" style="margin-top: 16px;">
          <button class="modal-btn save-btn" onclick="handleApplyMultiSoundImage()" ${!imageDataUrl || selectedSoundIds.length === 0 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>Apply Image</button>
          <button class="modal-btn cancel-btn" onclick="handleCloseMultiImageModal()">Cancel</button>
        </div>
      </div>
    </div>
  `;
}

// Run initial execution safely
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
