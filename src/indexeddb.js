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

function initiateTransaction(db, objectStore, mode) {
    const transaction = db.transaction(objectStore, mode);
    transaction.oncomplete = () => {
        closeDB(db);
    }

    return transaction;
}

export function addToDB(obj, objectStore) {
    const open = openDB(DB_NAME, DB_VERSION);
    open.onsuccess = () => {
        const db = open.result;
        const transaction = initiateTransaction(db, objectStore, "readwrite");
        const store = transaction.objectStore(objectStore);
        store.add(obj);
    }
}

export function getFromDB(key, objectStore) {
    const open = openDB(DB_NAME, DB_VERSION);
    open.onsuccess = () => {
        const db = open.result;
        const transaction = initiateTransaction(db, objectStore, "readwrite");
        const store = transaction.objectStore(objectStore);
        const get = store.get(key);

        get.onsuccess = () => {
            console.log(get.result);
        };
    }
}

export function updateRecordInDB(obj, objectStore) {
    const open = openDB(DB_NAME, DB_VERSION);
    open.onsuccess = () => {
        const db = open.result;
        const transaction = initiateTransaction(db, objectStore, "readwrite");
        const store = transaction.objectStore(objectStore);
        store.put(obj);
    }
}

export function deleteFromDB(key, objectStore) {
    const open = openDB(DB_NAME, DB_VERSION);
    open.onsuccess = () => {
        const db = open.result;
        const transaction = initiateTransaction(db, objectStore, "readwrite");
        const store = transaction.objectStore(objectStore);
        store.delete(key);
    }
}