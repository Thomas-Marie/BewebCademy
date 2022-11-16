import React from 'react';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        footerLink: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        footerLink?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        footerLink: true;
        h3: false;
    }
}