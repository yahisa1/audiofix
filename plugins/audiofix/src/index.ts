import { ReactNative as RN } from "@vendetta/metro/common";

export const onLoad = () => {
    try {
        // RN.NativeModules에 등록된 모든 모듈의 이름을 추출
        const allModules = RN.NativeModules ? Object.keys(RN.NativeModules) : [];
        
        // 이름에 Audio, Voice, Media, Phone 등이 포함된 모듈 필터링
        const audioRelated = allModules.filter(name => 
            /audio|voice|media|phone|sound/i.test(name)
        );

        console.log("All Native Modules:", allModules);
        console.log("Audio Related Modules:", audioRelated);

        if (audioRelated.length > 0) {
            alert("찾은 관련 모듈:\n" + audioRelated.join(", "));
        } else {
            alert("관련 모듈 없음. 전체 모듈 개수: " + allModules.length);
        }
    } catch (e) {
        console.error("스캔 중 에러:", e);
        alert("에러: " + e.message);
    }
};

export const onUnload = () => {};
