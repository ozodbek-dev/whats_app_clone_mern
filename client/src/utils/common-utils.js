export const formatDate = (date) => {
    const hours = new Date(date).getHours()
    const mins = new Date(date).getMinutes()
    return `${hours < 10 ? '0' + hours : hours}:${mins < 10 ? '0' + mins : mins}`
}

export const donwloadFile = (e, originalImage) => {
    e.preventDefault();
    fetch(originalImage).then(res => res.blob()).then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a')
        a.style.display = 'none';
        a.href = url;
        const nameSplit = originalImage.split('/')
        const dublicateName = nameSplit.pop();
        a.download = "" + dublicateName + ''
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url)
    }).catch(err => console.log(`Error while donwloading image \n` + err.message))
}