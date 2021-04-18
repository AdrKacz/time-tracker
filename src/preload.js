const { contextBridge, ipcRenderer } = require('electron');
const { join } = require('path');
const { open } = require('fs/promises');
const { EOL } = require('os');

let FILE_PATH = null;

contextBridge.exposeInMainWorld('api', {
  appendTime: (items) => {
    if (FILE_PATH === null) {
      FILE_PATH = ipcRenderer.sendSync('sync-get-file-path');
    };
    let localFileHandle = null;
    open(FILE_PATH, 'a')
    .then((fileHandle) => {
      localFileHandle = fileHandle;
      return localFileHandle.writeFile(items.map((item, _) => (new String(item))).join(",") + EOL);
    })
    .catch((err) => {
      console.error(`ERROR while writing data to ${FILE_PATH} :\n${err}`);
    })
    .finally((_) => {
      localFileHandle?.close()
      localFileHandle = null;
    });
    return;
  },
});
