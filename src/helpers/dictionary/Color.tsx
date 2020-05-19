export const Color = (color: string | undefined) => {
    switch (color) {
        case "yellow":
            return "var(--yellow)";
        case "accent":
            return "var(--accent)";
        case "blue":
            return "var(--blue)";
        case "green":
            return "var(--green)";
        default:
            break;
    }
};