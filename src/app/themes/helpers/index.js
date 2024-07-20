export const clickEvent = (theme) => {
    return {
        "&:hover": {
            userSelect: "none",
            cursor: "pointer",
            opacity: 0.75,
            color: theme && theme.aTagHoverColorKey ? `${theme.colors[theme.aTagHoverColorKey]} !important` : undefined
        },
        "&:active": {
            transform: "translateY(2px)",
            transition: "transform 0.2s",
            userSelect: "none"
        }
    };
};
