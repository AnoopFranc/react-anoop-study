export const msToHMS = ( ms: number ) => {
    // 1- Convert to seconds:
    let seconds =Math.ceil(ms / 1000) ;
    // 2- Extract hours:
    const hours = Math.floor(seconds / 3600) ; // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    const minutes = Math.floor(seconds / 60); // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = seconds % 60;
    return (hours+':'+minutes+':'+seconds)
}