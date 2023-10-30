class EventEmmit {
  constructor() {
    this.subScripts = new Map();
  }

  subScript(type, callBack) {
    if (!this.subScripts.has(type)) {
      this.subScripts.set(type, new Set());
    }

    const cbObj = {
      callBack,
    };
    this.subScripts.get(type).add(cbObj);

    return {
      release: function () {
        this.subScripts.get(type).delete(cbObj);
      },
    };
  }

  onSubmit(type) {
    if (this.subScripts.has(type)) {
      const typeOfSubs = this.subScripts.get(type);

      typeOfSubs.forEach((item) => item.callBack());
    }
  }
}
