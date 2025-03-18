import bcrypt from 'bcryptjs';

export const compareTohash = bcrypt.compareSync;


export function gethHashFromClearText(password) {
    return bcrypt.hashSync(password, 10);
}