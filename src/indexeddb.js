import { DB_NAME, DB_VERSION } from "./config";

// This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
const indexedDB = window.indexedDB ||
                  window.mozIndexedDB ||
                  window.webkitIndexedDB ||
                  window.msIndexedDB ||
                  window.shimIndexedDB;

function openDB(dbName, version) {
    const open = indexedDB.open(dbName, version);

    open.onupgradeneeded = (event) => {
        const db = event.target.result;

        const objectStoreProjects = db.createObjectStore("projects", {keyPath: "id"});
        objectStoreProjects.createIndex("file", "file", { unique: false });
        objectStoreProjects.createIndex("name", "name", { unique: false });
        objectStoreProjects.createIndex("remote", "remote", { unique: false });
        
        const objectStorePages = db.createObjectStore("pages", {keyPath: "id"});
    }

    return open;
}

function closeDB(db) {
    db.close();
}

function putInDB(obj, objectStore) {
    const open = openDB(DB_NAME, DB_VERSION);
    open.onsuccess = () => {
        const db = open.result;
        const transaction = db.transaction(objectStore, "readwrite");
        const objStore = transaction.objectStore(objectStore);
        objStore.put(obj);

        transaction.oncomplete = () => {
            closeDB(db);
        }
    }
}