export const Color = (color: string | undefined) => {
    switch (color) {
        case "purple":
            return "var(--theme-color-purple)";
        case "yellow":
            return "var(--theme-color-yellow)";
        case "blue":
            return "var(--theme-color-blue)";
        case "green":
            return "var(--theme-color-green)";
        case "red":
            return "var(--theme-color-red)";
        default:
            break;
    }
};