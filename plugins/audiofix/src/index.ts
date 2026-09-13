import { ReactNative as RN } from "@vendetta/metro/common";

const modules = RN.NativeModules;

console.log("[AudioFix] AudioManager:", modules.AudioManager);
console.log("[AudioFix] RTNAudioManager:", modules.RTNAudioManager);

console.log(
    "[AudioFix] AudioManager keys:",
    modules.AudioManager ? Object.keys(modules.AudioManager) : null
);

console.log(
    "[AudioFix] RTNAudioManager keys:",
    modules.RTNAudioManager ? Object.keys(modules.RTNAudioManager) : null
);

export const onUnload = () => {};
