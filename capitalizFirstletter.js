const firstLetterCapitalied = (str) => {
    const capitalizeFirstLetter = str.charAt(0).toUpperCase()+ str.slice(1);
    return capitalizeFirstLetter;

}

module.exports = {firstLetterCapitalied};