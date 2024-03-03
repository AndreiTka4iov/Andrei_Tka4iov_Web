import { VariantColorsResolver, defaultVariantColorsResolver, parseThemeColor } from "@mantine/core";

export const useVariantColorResolver: VariantColorsResolver = (input) => {
    const defaultResolvedColors = defaultVariantColorsResolver(input);
    const parsedColor = parseThemeColor({
      color: input.color || input.theme.primaryColor,
      theme: input.theme,
    });
    // Override some properties for variant
    if (parsedColor.isThemeColor && parsedColor.color === 'white' && input.variant === 'filled') {
      return {
        ...defaultResolvedColors,
        color: 'var(--mantine-color-black)',
        hoverColor: 'var(--mantine-color-red)',
      };
    }
  
    return defaultResolvedColors;
  };