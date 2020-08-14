export const getYearDifference = year => {
    return new Date().getFullYear() - parseInt(year);
}

// These items should be from DB via Backend API instead!
export const calculateBrand = brand => {
    let increment;

    switch(brand) {
        case 'Proton Saga':
            increment = 1.30;
            break;
        case 'Proton X70':
            increment = 1.30;
            break;     
        case 'Proton Persona':
            increment = 1.30;
            break;     
        case 'Toyota Camry':
            increment = 1.30;
            break;     
        case 'Toyota Vios':
            increment = 1.30;
            break;                             
        case 'Nissan Almera':
            increment = 1.15;
            break;
        case 'Nissan Leaf':
            increment = 1.05;
            break;
        default:
            break;
    }

    return increment;
}

export const getPlan = plan => {
    return (plan === 'basic') ? 1.20 : 1.50;
}

export const capitalize = text => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}