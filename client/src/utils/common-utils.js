export const formatDate = (date) => {
    const hours = new Date(date).getHours()
    const mins = new Date(date).getMinutes()
    return `${hours < 10 ? '0' + hours : hours}:${mins < 10 ? '0' + mins : mins}`
}