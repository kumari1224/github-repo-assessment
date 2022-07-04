export const formatName = (name) => name && name.replace(/[-_]/g, " ");

export const getTokens = str => str && str.split(",");