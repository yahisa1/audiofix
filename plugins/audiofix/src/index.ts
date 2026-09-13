import { ReactNative as RN } from "@vendetta/metro/common";

export const onLoad = () => {
    try {
        // 디스코드 내부에 존재하는 오디오 관련 네이티브 모듈들을 전부 탐색
        const modules = [
            RN.NativeModules.AudioManager,
            RN.NativeModules.RTNAudioManager,
            RN.NativeModules.AudioModule,
            RN.NativeModules.VoiceEngine
        ];

        let resultText = "";
        modules.forEach((mod, index) => {
            if (mod) {
                resultText += `[Module ${index}] Methods: ${Object.keys(mod).join(", ")}\n\n`;
            }
        });

        if (resultText) {
            console.log("Audio Debug:\n", resultText);
            alert("발견된 오디오 모듈:\n" + resultText.substring(0, 300)); // 너무 길면 잘림
        } else {
            alert("오디오 관련 네이티브 모듈을 전혀 찾지 못했습니다.");
        }
    } catch (e) {
        console.error("스캔 중 에러:", e);
        alert("에러 발생: " + e.message);
    }
};

export const onUnload = () => {};
