import { ReactNative as RN } from "@vendetta/metro/common";
import { instead } from "@vendetta/patcher";

let unpatch = null;

export const onLoad = () => {
    try {
        const AudioModule = RN.NativeModules.AudioManager || RN.NativeModules.RTNAudioManager;
        
        if (AudioModule && typeof AudioModule.setCommunicationModeOn === "function") {
            unpatch = instead("setCommunicationModeOn", AudioModule, () => {});
        } else {
            console.warn("[AudioFix] setCommunicationModeOn 함수를 찾을 수 없습니다. One UI 버전에서는 오디오 구조가 변경되었을 수 있습니다.");
        }
    } catch (e) {
        console.error("[AudioFix] 패치 적용 실패:", e);
    }
};

export const onUnload = () => {
    if (unpatch) unpatch();
};
