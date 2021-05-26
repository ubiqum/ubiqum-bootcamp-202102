function isSalvoInLocation(salvoes, location) {
    return salvoes.some(salvoe => salvoe.location.includes(location))
}