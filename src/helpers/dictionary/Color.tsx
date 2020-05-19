export const Color = (color: string | undefined) => {
    switch (color) {
        case "purple":
            return "#E5E7FA";
        case "yellow":
            return "#FDF2D6";
        case "blue":
            return "#D5E9FA";
        case "green":
            return "#D5F2EA";
        default:
            break;
    }
};