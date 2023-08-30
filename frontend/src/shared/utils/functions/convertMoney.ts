export const numberWithCommas = (number: number) => {
    return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};