export const required = value => (value ? undefined : 'Required')

export const maxLengthCreator = (maxLength) => (value) => {
    if(value?.length < maxLength && value?.length > 0) return undefined;
    if(!value?.length) return 'You should type anything before sending'
    return `Max length is ${maxLength} symbols`
}


