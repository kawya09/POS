const customerIDRegEx = /^(C00-)[0-9]{3}$/;
const itemIDRegEx = /^(I00-)[0-9]{3}$/;
const telRegEx = /^[0-9]{10}$/;
const priceRegEx = /^[0-9]{1,10}(\.[0-9]{1,2})?$/;

function validate(value, regEx) {
    return regEx.test(value);
}