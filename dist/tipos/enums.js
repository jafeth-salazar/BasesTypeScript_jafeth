"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudioLevel = AudioLevel.medium;
    console.log(currentAudioLevel);
    console.log(`Hola`);
})();
//# sourceMappingURL=enums.js.map