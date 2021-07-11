export const removeNull = (data) => {
    Object.fromEntries(Object.entries(data).filter(([_, v]) => v != null));
    return data
}