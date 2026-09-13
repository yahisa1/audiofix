import { ReactNative as RN } from "@vendetta/metro/common";

export const onLoad = () => {
    console.log(
        "[AudioFix] NativeModules:",
        Object.entries(RN.NativeModules)
            .filter(([name]) =>
                /audio|rtc|communication|media|sound/i.test(name)
            )
            .map(([name, module]) => ({
                name,
                functions: module
                    ? Object.keys(module).filter(
                          key => typeof module[key] === "function"
                      )
                    : []
            }))
    );
};
