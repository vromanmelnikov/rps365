class LocalStorageService {
  constructor() {
    this.eventBus = new EventBus();
  }

  getItem(key) {
    return window.localStorage.getItem(key);
  }

  setItem(key, value) {
    const oldValue = this.getItem(key, value);
    if (oldValue === value) return; // если значение не изменилось - ничего не делаем

    window.localStorage.setItem(key, value);
    this.eventBus.notify(key, value);
  }

  subscribe(key, cb) {
    this.eventBus.subscribe(key, cb);
    return () => this.eventBus.unsubscribe(key, cb);
  }
}

// экспортируем экземпляр класса
export const localStorageService = new LocalStorageService();
