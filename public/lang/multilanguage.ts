/* eslint-disable import/no-anonymous-default-export */
import viVN from "./vi-VN"
import enEN from "./en-EN"

const MultiLanguague = (localization: string) => {
    return localization === 'vi' ? viVN : enEN
}

export default { MultiLanguague}