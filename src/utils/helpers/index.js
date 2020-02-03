export const sleep = (ms) =>{
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const capitalizeFirst = (string) => {
    if(string)
        return string[0].toUpperCase() + string.slice(1);
};