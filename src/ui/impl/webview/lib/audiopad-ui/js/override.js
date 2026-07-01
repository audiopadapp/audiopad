// --- Vector SVG Icons (Notion / Linear / Stripe Aesthetics) ---
const icons = {
  logo: `<svg viewBox="0 0 512 512" width="18" height="18" fill="none"><g fill="currentColor"><rect x="72" y="213" width="51" height="85" rx="25"/><rect x="154" y="149" width="51" height="213" rx="25"/><rect x="236" y="64" width="51" height="384" rx="25"/><rect x="318" y="149" width="51" height="213" rx="25"/><rect x="400" y="213" width="51" height="85" rx="25"/></g></svg>`,
  folder: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,
  folderOpen: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><path d="M2 10h20"></path></svg>`,
  favorites: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  downloader: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
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
  soundpad: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>`
};

// --- Application Reactive State ---
let state = {
  tabs: [],
  activeTabId: null,
  currentView: 'folder', // 'folder', 'favorites', 'downloader', 'settings', 'system-info', 'help'
  searchQuery: '',
  listViewMode: 'list', // 'list', 'grid', 'soundpad'
  
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
  outputDevices: [],
  playbackApps: [],
  recordingDevices: [],
  selectedMic: null,
  systemInfo: '',
  
  downloader: {
    url: '',
    progress: 0,
    eta: '',
    isDownloading: false,
    status: '',
    error: null,
    isYoutubeDLAvailable: false
  },
  
  playingSounds: {}, // Maps sound.id -> PlayingSound details
  toasts: []
};

// --- Initial Setup & Bindings Sync ---
async function init() {
  // Wait until C++ bindings are fully loaded onto window
  while (!window.getTabs || !window.getSettings || !window.isLinux) {
    await new Promise(r => setTimeout(r, 50));
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
  state.isLinux = await window.isLinux();
  state.tabs = await window.getTabs();
  if (state.tabs && state.tabs.length > 0) {
    state.activeTabId = state.tabs[0].id;
  }
  
  const savedSettings = await window.getSettings();
  if (savedSettings) {
    state.settings = { ...state.settings, ...savedSettings };
  }

  // Load system theme overrides
  applyThemeStyles();

  // Attach global keyboard listeners (for hotkey recording overlays)
  window.addEventListener('keydown', handleGlobalKeydown);

  // Hook C++ callbacks to update our state dynamically
  bindCppCallbacks();

  // Load initial view
  renderApp();

  // Poll directories and tabs configuration changes from backend
  setInterval(async () => {
    if (window.getTabs && state.recordingHotkeySoundId === null) {
      const newTabs = await window.getTabs();
      // Compare values to minimize layout cycles
      if (JSON.stringify(newTabs) !== JSON.stringify(state.tabs)) {
        state.tabs = newTabs;
        renderApp();
      }
    }
  }, 1000);
}

// Apply colors and layout depending on user settings / system preferences
function applyThemeStyles() {
  const isDarkTheme = 
    state.settings.theme === 1 || 
    (state.settings.theme === 0 && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
  if (isDarkTheme) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}

// Binds custom triggers called by C++ Webview shell
function bindCppCallbacks() {
  window.onSoundPlayed = function(playingSound) {
    state.playingSounds[playingSound.sound.id] = playingSound;
    renderApp();
  };

  window.updateSound = function(playingSound) {
    state.playingSounds[playingSound.sound.id] = playingSound;
    renderApp();
  };

  window.finishSound = function(playingSound) {
    delete state.playingSounds[playingSound.sound.id];
    renderApp();
  };

  window.downloadProgressed = function(progress, eta) {
    state.downloader.progress = progress;
    state.downloader.eta = eta;
    state.downloader.isDownloading = true;
    if (progress >= 100) {
      state.downloader.status = 'Converting...';
    } else {
      state.downloader.status = `Downloading: ${progress.toFixed(1)}%`;
    }
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
      25: "YouTube-DL binaries not found",
      26: "Invalid YouTube-DL video URL",
      27: "Failed to parse metadata",
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
  } else if (view === 'downloader') {
    checkYoutubeDLAvailability();
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
  if (!state.isLinux && window.getRecordingDevices) {
    const recData = await window.getRecordingDevices();
    if (recData) {
      state.recordingDevices = recData.first || [];
      state.selectedMic = recData.second || null;
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

async function checkYoutubeDLAvailability() {
  if (window.isYoutubeDLAvailable) {
    state.downloader.isYoutubeDLAvailable = await window.isYoutubeDLAvailable();
    renderApp();
  }
}

// --- Actions Dispatchers ---
async function handlePlaySound(soundId) {
  if (window.playSound) {
    await window.playSound(soundId);
  }
}

async function handleStopSound(soundId) {
  if (window.stopSound) {
    await window.stopSound(soundId);
  }
}

async function handleStopAll() {
  if (window.stopSounds) {
    await window.stopSounds();
  }
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

async function changeVolume(soundId, type, val) {
  const numVal = parseInt(val, 10);
  if (type === 'local' && window.setCustomLocalVolume) {
    await window.setCustomLocalVolume(soundId, numVal);
  } else if (type === 'remote' && window.setCustomRemoteVolume) {
    await window.setCustomRemoteVolume(soundId, numVal);
  }
  // Refresh tabs info to represent updated volume
  state.tabs = await window.getTabs();
  renderApp();
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
  if (key === 'theme') {
    applyThemeStyles();
  }
  if (window.changeSettings) {
    await window.changeSettings(state.settings);
  }
  renderApp();
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

async function handleVBCableSetup() {
  if (window.setupVBCable) {
    const activeMicName = state.selectedMic ? state.selectedMic.name : "";
    const success = await window.setupVBCable(activeMicName);
    if (success) {
      showToast("VB-Cable installed and configured successfully", "success");
    } else {
      showToast("Failed to install VB-Cable. Run app as administrator.", "error");
    }
    loadSettingsAssets();
  }
}

async function handleMicOverrideChange(micName) {
  if (window.setupVBCable) {
    await window.setupVBCable(micName);
    showToast(`Microphone override set to: ${micName}`, 'success');
    loadSettingsAssets();
  }
}

async function handleRestartAsAdmin() {
  if (window.restartAsAdmin) {
    await window.restartAsAdmin();
  }
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

// --- YouTube-DL Downloader Actions ---
async function handleStartDownload() {
  const url = state.downloader.url.trim();
  if (!url) {
    showToast("Please enter a valid video URL", "error");
    return;
  }
  if (!state.downloader.isYoutubeDLAvailable) {
    showToast("YouTube-DL is not installed", "error");
    return;
  }

  state.downloader.isDownloading = true;
  state.downloader.progress = 0;
  state.downloader.eta = '';
  state.downloader.status = 'Analyzing link...';
  renderApp();

  if (window.startYoutubeDLDownload) {
    const success = await window.startYoutubeDLDownload(url);
    if (success) {
      showToast("Download started successfully", "success");
    } else {
      state.downloader.isDownloading = false;
      showToast("Failed to download. Check URL configuration.", "error");
    }
  }
}

async function handleCancelDownload() {
  if (window.stopYoutubeDLDownload) {
    await window.stopYoutubeDLDownload();
    state.downloader.isDownloading = false;
    state.downloader.progress = 0;
    state.downloader.eta = '';
    state.downloader.status = 'Cancelled';
    showToast("Download cancelled", "info");
    renderApp();
  }
}

function handleOpenUrl(url) {
  if (window.openUrl) {
    window.openUrl(url);
  }
}

// --- Keyboard listener for Hotkey recorders ---
function handleGlobalKeydown(e) {
  if (state.recordingHotkeySoundId === null && state.recordingTarget === null) return;
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
function renderApp() {
  const container = document.getElementById('custom-app');
  if (!container) return;

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
  } else if (state.currentView === 'downloader') {
    activeTitle = "YouTube Downloader";
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

  container.innerHTML = `
    <div class="custom-layout">
      <!-- Left Sidebar panel -->
      <aside class="custom-sidebar">
        <div class="sidebar-header">
          <span class="sidebar-logo">${icons.logo}</span>
          <span class="logo-text">Audiopad</span>
        </div>
        
        <div class="sidebar-label">Navigation</div>
        <div class="nav-list">
          <div class="nav-item ${state.currentView === 'favorites' ? 'active' : ''}" onclick="changeView('favorites')">
            <span class="nav-icon">${icons.favorites}</span>
            <span>Favorites</span>
          </div>
          <div class="nav-item ${state.currentView === 'downloader' ? 'active' : ''}" onclick="changeView('downloader')">
            <span class="nav-icon">${icons.downloader}</span>
            <span>Downloader</span>
          </div>
          <div class="nav-item ${state.currentView === 'settings' ? 'active' : ''}" onclick="changeView('settings')">
            <span class="nav-icon">${icons.settings}</span>
            <span>Settings</span>
          </div>
          <div class="nav-item ${state.currentView === 'system-info' ? 'active' : ''}" onclick="changeView('system-info')">
            <span class="nav-icon">${icons.systemInfo}</span>
            <span>System Info</span>
          </div>
          <div class="nav-item ${state.currentView === 'help' ? 'active' : ''}" onclick="changeView('help')">
            <span class="nav-icon">${icons.help}</span>
            <span>Help</span>
          </div>
        </div>
        
        <div class="sidebar-label">Folders</div>
        <div class="folder-list">
          ${state.tabs.map(t => `
            <div class="folder-item ${state.currentView === 'folder' && t.id === state.activeTabId ? 'active' : ''}" onclick="changeView('folder', ${t.id})">
              <div class="folder-name-container">
                <span class="nav-icon">${state.currentView === 'folder' && t.id === state.activeTabId ? icons.folderOpen : icons.folder}</span>
                <span>${t.name}</span>
              </div>
              <div class="folder-actions">
                <button class="folder-action-btn" title="Open Directory Location" onclick="event.stopPropagation(); handleOpenFolder(${t.id})">
                  ${icons.openLink}
                </button>
                <button class="folder-action-btn" title="Remove Folder" onclick="event.stopPropagation(); handleDeleteTab(${t.id})">
                  ${icons.trash}
                </button>
              </div>
            </div>
          `).join('')}
        </div>
        
        <button class="add-folder-btn" onclick="handleAddTab()">
          ${icons.plus} Add Folder
        </button>
      </aside>
      
      <!-- Right Main content area -->
      <main class="custom-main">
        <header class="main-header">
          <div class="header-title-container">
            <h2 class="header-title">${activeTitle}</h2>
          </div>
          
          <div class="header-actions">
            ${(state.currentView === 'folder' || state.currentView === 'favorites') ? `
              <div class="view-switcher" style="margin-right: 8px;">
                <button class="view-btn ${state.listViewMode === 'list' ? 'active' : ''}" title="List View" onclick="changeListViewMode('list')">
                  ${icons.list}
                </button>
                <button class="view-btn ${state.listViewMode === 'grid' ? 'active' : ''}" title="Grid View" onclick="changeListViewMode('grid')">
                  ${icons.grid}
                </button>
                <button class="view-btn ${state.listViewMode === 'soundpad' ? 'active' : ''}" title="Soundpad View" onclick="changeListViewMode('soundpad')">
                  ${icons.soundpad}
                </button>
              </div>
              
              <div class="search-container">
                <span class="nav-icon" style="color: var(--color-muted);">${icons.search}</span>
                <input type="text" id="search-input" class="search-input" placeholder="Search sounds..." oninput="handleSearch(this.value)" value="${state.searchQuery}">
              </div>
            ` : ''}
            
            <button class="btn-stop-all" onclick="handleStopAll()">
              ${icons.stop} Stop All
            </button>
          </div>
        </header>
        
        <div class="workspace-body">
          ${renderViewContent(soundsList, isFolderView, activeTab)}
        </div>
      </main>
    </div>
    
    <!-- Modal Overlays -->
    ${renderModalOverlays()}
    
    <!-- Toast Notifications container -->
    <div class="toast-container" id="toast-container">
      ${state.toasts.map(t => `
        <div class="toast-message ${t.type}">
          <span>${t.text}</span>
        </div>
      `).join('')}
    </div>
  `;
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
    } else if (state.listViewMode === 'grid') {
      contentHtml = `
        <div class="sound-grid">
          ${soundsList.map(sound => {
            const isPlaying = !!state.playingSounds[sound.id];
            return `
              <div class="sound-grid-card ${isPlaying ? 'playing' : ''}">
                <div class="card-top" onclick="event.stopPropagation()">
                  <span class="fav-star ${sound.isFavorite ? 'active' : ''}" onclick="toggleFavorite(${sound.id}, ${sound.isFavorite})">
                    ★
                  </span>
                  <button class="hotkey-badge" onclick="startRecordHotkey(${sound.id})">
                    ${sound.hotkeys && sound.hotkeys.length > 0 ? sound.hotkeySequence : 'Assign'}
                  </button>
                </div>
                <div class="card-middle" onclick="handlePlaySound(${sound.id})">
                  <div class="card-sound-icon">${icons.music}</div>
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
                  
                  <div class="volume-popover-container">
                    <button class="action-btn" title="Volume">
                      ${icons.volume}
                    </button>
                    <div class="volume-dropdown" onclick="event.stopPropagation()">
                      <div class="vol-slider-row">
                        <label>Local</label>
                        <input type="range" min="0" max="100" value="${sound.localVolume !== null ? sound.localVolume : 100}" onchange="changeVolume(${sound.id}, 'local', this.value)">
                      </div>
                      <div class="vol-slider-row">
                        <label>Remote</label>
                        <input type="range" min="0" max="100" value="${sound.remoteVolume !== null ? sound.remoteVolume : 100}" onchange="changeVolume(${sound.id}, 'remote', this.value)">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    } else if (state.listViewMode === 'soundpad') {
      contentHtml = `
        <div class="soundpad-grid">
          ${soundsList.map(sound => {
            const isPlaying = !!state.playingSounds[sound.id];
            return `
              <div class="soundpad-btn ${isPlaying ? 'playing' : ''}" onclick="handlePlaySound(${sound.id})">
                <div class="soundpad-btn-content">
                  <span class="soundpad-sound-name" title="${sound.name}">${sound.name}</span>
                  <span class="soundpad-hotkey">${sound.hotkeys && sound.hotkeys.length > 0 ? sound.hotkeySequence : ''}</span>
                </div>
                <div class="soundpad-hover-actions" onclick="event.stopPropagation()">
                  <span class="fav-star ${sound.isFavorite ? 'active' : ''}" style="font-size: 11px;" onclick="toggleFavorite(${sound.id}, ${sound.isFavorite})">★</span>
                  <button class="soundpad-action-mini" style="color: var(--color-error);" onclick="handleStopSound(${sound.id})" title="Stop">${icons.stop}</button>
                  
                  <div class="volume-popover-container">
                    <button class="soundpad-action-mini" title="Volume">${icons.volume}</button>
                    <div class="volume-dropdown" onclick="event.stopPropagation()">
                      <div class="vol-slider-row">
                        <label>Local</label>
                        <input type="range" min="0" max="100" value="${sound.localVolume !== null ? sound.localVolume : 100}" onchange="changeVolume(${sound.id}, 'local', this.value)">
                      </div>
                      <div class="vol-slider-row">
                        <label>Remote</label>
                        <input type="range" min="0" max="100" value="${sound.remoteVolume !== null ? sound.remoteVolume : 100}" onchange="changeVolume(${sound.id}, 'remote', this.value)">
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
      contentHtml = `
        <div class="table-container">
          <table class="sounds-table">
            <thead>
              <tr>
                <th style="width: 50px;"></th>
                <th>Name</th>
                <th style="width: 180px;">Hotkey</th>
                <th style="width: 180px; text-align: right;">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${soundsList.map(sound => {
                const isPlaying = !!state.playingSounds[sound.id];
                return `
                  <tr class="sound-row ${isPlaying ? 'playing' : ''}">
                    <td>
                      <span class="fav-star ${sound.isFavorite ? 'active' : ''}" onclick="toggleFavorite(${sound.id}, ${sound.isFavorite})">
                        ★
                      </span>
                    </td>
                    <td>
                      <div class="sound-name-wrapper">
                        <span class="sound-name-text">${sound.name}</span>
                      </div>
                    </td>
                    <td>
                      <button class="hotkey-badge" onclick="startRecordHotkey(${sound.id})">
                        ${sound.hotkeys && sound.hotkeys.length > 0 ? sound.hotkeySequence : 'Assign Hotkey'}
                      </button>
                    </td>
                    <td>
                      <div class="action-buttons">
                        <button class="action-btn play-btn" title="Play Sound" onclick="handlePlaySound(${sound.id})">
                          ${icons.play}
                        </button>
                        <button class="action-btn stop-btn" title="Stop Sound" onclick="handleStopSound(${sound.id})">
                          ${icons.stop}
                        </button>
                        
                        <!-- Volume Sliders Popover trigger -->
                        <div class="volume-popover-container">
                          <button class="action-btn" title="Adjust Volume">
                            ${icons.volume}
                          </button>
                          <div class="volume-dropdown" onclick="event.stopPropagation()">
                            <div class="vol-slider-row">
                              <label>Local Volume</label>
                              <input type="range" min="0" max="100" value="${sound.localVolume !== null ? sound.localVolume : 100}" onchange="changeVolume(${sound.id}, 'local', this.value)">
                            </div>
                            <div class="vol-slider-row">
                              <label>Remote Volume</label>
                              <input type="range" min="0" max="100" value="${sound.remoteVolume !== null ? sound.remoteVolume : 100}" onchange="changeVolume(${sound.id}, 'remote', this.value)">
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
      
      ${renderPlaybackDock()}
    `;
  }

  if (state.currentView === 'downloader') {
    return `
      <div class="card-section">
        <div class="card-title">YouTube Video / Audio Downloader</div>
        
        ${!state.downloader.isYoutubeDLAvailable ? `
          <div style="background-color: rgba(217,119,6,0.08); border: 1px solid var(--color-warning); border-radius: var(--radius-md); padding: var(--spacing-md); display: flex; flex-direction: column; gap: var(--spacing-sm);">
            <div style="font-size: 13px; font-weight: 600; color: var(--color-warning);">YouTube-DL is not installed</div>
            <div style="font-size: 12px; color: var(--color-secondary);">Audiopad requires YouTube-DL or Yt-Dlp libraries installed on the system path to parse and pull remote links.</div>
            <button class="btn-primary" style="align-self: flex-start;" onclick="handleOpenUrl('https://github.com/audiopadapp/audiopad/wiki/Downloader-support')">
              Read Installation Wiki
            </button>
          </div>
        ` : `
          <div class="form-group">
            <label for="downloader-url">Insert Video Link URL (YouTube, Vimeo, etc.)</label>
            <div class="form-control-row">
              <input type="text" id="downloader-url" class="form-input" placeholder="https://www.youtube.com/watch?v=..." value="${state.downloader.url}" oninput="state.downloader.url = this.value">
              
              ${state.downloader.isDownloading ? `
                <button class="btn-primary" style="background-color: var(--color-error);" onclick="handleCancelDownload()">
                  ${icons.spinner} Cancel
                </button>
              ` : `
                <button class="btn-primary" onclick="handleStartDownload()">
                  ${icons.downloader} Download & Import
                </button>
              `}
            </div>
          </div>
        `}
        
        ${state.downloader.isDownloading ? `
          <div class="downloader-progress-container">
            <div class="progress-meta">
              <span style="font-weight: 600; color: var(--color-primary);">${state.downloader.status}</span>
              <span>${state.downloader.eta || ''}</span>
            </div>
            <div class="progress-bar-wrapper">
              <div class="progress-bar-fill" style="width: ${state.downloader.progress}%"></div>
            </div>
          </div>
        ` : ''}
      </div>
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
            <div class="card-title">Audio Output Routing</div>
            <label class="checkbox-row">
              <input type="checkbox" ${state.settings.allowMultipleOutputs ? 'checked' : ''} onchange="updateSetting('allowMultipleOutputs', this.checked)">
              <div class="checkbox-label-wrapper">
                <span class="checkbox-title">Allow multi-device routing</span>
                <span class="checkbox-desc">Output sound streams to multiple output targets concurrently.</span>
              </div>
            </label>
            <label class="checkbox-row">
              <input type="checkbox" ${state.settings.syncVolumes ? 'checked' : ''} onchange="updateSetting('syncVolumes', this.checked)">
              <div class="checkbox-label-wrapper">
                <span class="checkbox-title">Sync Volume levels</span>
                <span class="checkbox-desc">Bind local and remote playback output slider volume levels together.</span>
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
    return `
      <div class="card-section">
        <div class="card-title">Windows Routing Tools</div>
        <div style="display: flex; flex-direction: column; gap: var(--spacing-md);">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div class="checkbox-label-wrapper">
              <span class="checkbox-title">VB-Audio Cable Integration</span>
              <span class="checkbox-desc">Routes audio stream to microphone.</span>
            </div>
            <button class="btn-primary" style="padding: var(--spacing-xs) var(--spacing-sm); font-size: 11px;" onclick="handleVBCableSetup()">
              Install Setup
            </button>
          </div>
          
          <div class="form-group" style="margin-bottom: 0;">
            <label for="mic-override-select">Override Microphone device</label>
            <select id="mic-override-select" class="sort-select" style="width: 100%; height: 36px;" onchange="handleMicOverrideChange(this.value)">
              <option value="">No Override</option>
              ${state.recordingDevices.map(d => `
                <option value="${d.name}" ${state.selectedMic && state.selectedMic.name === d.name ? 'selected' : ''}>${d.name}</option>
              `).join('')}
            </select>
          </div>
          
          <button class="btn-primary" style="background-color: var(--color-error); width: 100%;" onclick="handleRestartAsAdmin()">
            Restart as Administrator Privileges
          </button>
        </div>
      </div>
    `;
  } else {
    // Linux PulseAudio passthrough settings
    return `
      <div class="card-section">
        <div class="card-title">Linux PulseAudio Sinks</div>
        <div style="display: flex; flex-direction: column; gap: var(--spacing-md);">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div class="checkbox-label-wrapper">
              <span class="checkbox-title">PulseAudio Switch-On-Connect</span>
              <span class="checkbox-desc">Configure PA module connection state.</span>
            </div>
            <button class="btn-primary" style="padding: var(--spacing-xs) var(--spacing-sm); font-size: 11px;" onclick="handleUnloadSwitchOnConnect()">
              Reset Modules
            </button>
          </div>
          
          <div style="margin-top: var(--spacing-sm);">
            <span class="checkbox-title" style="font-size: 12px; font-weight: 600;">Running Applications Passthrough</span>
            <div class="output-list" style="margin-top: var(--spacing-xs);">
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

// Global bottom playback controller bar showing progress details
function renderPlaybackDock() {
  const activeIds = Object.keys(state.playingSounds);
  if (activeIds.length === 0) return '';
  
  // Render details for the first active sound
  const playSoundId = activeIds[0];
  const details = state.playingSounds[playSoundId];
  if (!details) return '';

  const length = details.lengthInMs || 1;
  const current = details.readInMs || 0;
  const percentage = Math.min((current / length) * 100, 100);

  const formatMs = (ms) => {
    const totalSecs = Math.floor(ms / 1000);
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return `
    <div style="position: fixed; bottom: 20px; left: 270px; right: 20px; background-color: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); padding: var(--spacing-md); display: flex; align-items: center; justify-content: space-between; z-index: 500; gap: var(--spacing-lg);">
      <div style="display: flex; flex-direction: column; width: 30%;">
        <span style="font-size: 13px; font-weight: 600; color: var(--color-primary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${details.sound.name}</span>
        <span style="font-size: 11px; color: var(--color-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${details.sound.path}</span>
      </div>
      
      <div style="display: flex; align-items: center; gap: var(--spacing-sm); flex-grow: 1; justify-content: center;">
        <span style="font-size: 11px; color: var(--color-muted);">${formatMs(current)}</span>
        <div class="progress-bar-wrapper" style="width: 60%; height: 6px; cursor: pointer;" onclick="handleProgressBarSeek(${playSoundId}, event)">
          <div class="progress-bar-fill" style="width: ${percentage}%"></div>
        </div>
        <span style="font-size: 11px; color: var(--color-muted);">${formatMs(length)}</span>
      </div>
      
      <div style="display: flex; align-items: center; gap: var(--spacing-sm); width: 20%; justify-content: flex-end;">
        <button class="action-btn ${details.repeat ? 'active' : ''}" style="color: ${details.repeat ? 'var(--color-accent)' : 'inherit'};" title="Repeat Track" onclick="event.stopPropagation(); window.repeatSound(${playSoundId}, ${!details.repeat})">
          ${icons.repeat}
        </button>
        <button class="action-btn" title="${details.paused ? 'Resume Playback' : 'Pause Playback'}" onclick="event.stopPropagation(); details.paused ? window.resumeSound(${playSoundId}) : window.pauseSound(${playSoundId})">
          ${details.paused ? icons.play : icons.pause}
        </button>
        <button class="action-btn stop-btn" title="Stop Playback" onclick="event.stopPropagation(); handleStopSound(${playSoundId})">
          ${icons.stop}
        </button>
      </div>
    </div>
  `;
}

// Handle clicking on progress bar to seek audio stream
function handleProgressBarSeek(soundId, event) {
  const bar = event.currentTarget;
  const rect = bar.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const width = rect.width;
  const ratio = clickX / width;
  
  const details = state.playingSounds[soundId];
  if (details && details.lengthInMs && window.seekSound) {
    const seekPosition = Math.floor(details.lengthInMs * ratio);
    window.seekSound(soundId, seekPosition);
  }
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

// Run initial execution
window.addEventListener('DOMContentLoaded', init);
init();
