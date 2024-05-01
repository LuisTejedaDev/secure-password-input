/* Aqui todas las validaciones que tengan que ver con campos */

export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export const validatePassword = (password) => {
    return String(password)
        .match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]){8,15}/
        );
};

export const AnUpperLetterAtLeast = (text) => {
    return String(text)
        .match(
            /(?=.*[A-Z])/
        );
};

export const ALowerLetterAtLeast = (text) => {
    return String(text)
        .match(
            /(?=.*[a-z])/
        );
};

export const minMaxLenght = (text, min, max) => {
    const regex = new RegExp(`^.{${min},${max}}$`);
    if(regex.test(text)) return [text]
    else return undefined
};

export const ANumberAtLeast = (text) => {
    return String(text)
        .match(
            /(?=.*\d)/
        );
};

export const ASpecialCharacterAtLeast = (text) => {
    return String(text)
        .match(
            /(?=.*[!@#$%^&*])/
        );
};

