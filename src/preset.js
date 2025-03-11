import Aura from "@primevue/themes/aura";
import { definePreset } from "@primevue/themes";

export default definePreset(Aura, {
  primitive: {
    borderRadius: {
      none: "0px",
      xs: "2px",
      sm: "4px",
      md: "6px",
      lg: "10px",
      xl: "20px",
    },
    green: {
      "050": "#dbe8bb",
      100: "#c8db8f",
      150: "#bede6e",
      190: "#aacb5a",
      200: "#a8ca58",
      250: "#a3ce46",
      300: "#78a300",
      400: "#7a9a28",
      600: "#4cae4f",
      700: "#2d672f",
      800: "#A1CA3D",
    },
    orange: {
      "025": " #fff2dd",
      "050": " #fce7c3",
      "075": " #f9f3c9",
      100: " #ebd5b1",
      150: " #f6c169",
      200: " #e0ae5a",
      500: " #f5a623",
      600: " orange",
      900: " #e06c30",
    },
    gray: {
      "020": " #f9fafb",
      "035": " #f2f2f2",
      "050": " #eeeeee",
      100: " #e9eff1",
      200: " #edf1f3",
      220: " #ebebeb",
      230: " #dfe5e8",
      240: " #e0e0e0",
      250: " #d8d8d8",
      300: " #cdcdcd",
      350: " #c4c4c4",
      380: " #adadad",
      390: " #acacac",
      400: " grey",
      450: "#7d7c7c",
      500: "#253950",
      600_95: "rgba(55, 55, 55, .95)",
      700: "#4a4a4a",
      disabled: "#CDCECE",
    },
    red: {
      "025": "#ffb2b2",
      "050": "#eba495",
      100: "#db6f6f",
      380: "#e45050",
      390: "#eb5757",
      400: "#da4343",
      420: "#d13333",
      450: "#ea4221",
      470: "#fe3406",
      500: "#ac290e",
      600: "#79250e",
    },
  },
  semantic: {
    primary: {
      "050": "#d2dce2",
      "060": "#d8e6f7",
      "070": "#a4e0d7",
      100: "#09cfe0",
      125: "#edf4fc",
      140: "#c8d7e9",
      150: "#abdaff",
      175: "#bad7f9",
      200: "#aab9c9",
      300: "#4a90e2",
      350: "#337ab7",
      400: "#3470b2",
      450: "#005a95",
      500: "#1c497b",
      600: "#2a415a",
      800: "#1A2A3C",
    },
    colorScheme: {
      light: {
        surface: {
          0: "#ffffff",
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#2a415a",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        primary: {
          color: "{primary.500}",
          contrastColor: "#ffffff",
          hoverColor: "{primary.600}",
          activeColor: "{primary.700}",
        },
        highlight: {
          background: "{primary.50}",
          focusBackground: "{primary.100}",
          color: "{primary.700}",
          focusColor: "{primary.800}",
        },
        mask: {
          background: "rgba(255,255,255,0.4)",
          color: "{text.color}",
        },
        formField: {
          background: "{surface.0}",
          disabledBackground: "{surface.200}",
          filledBackground: "{surface.50}",
          filledHoverBackground: "{surface.50}",
          filledFocusBackground: "{surface.50}",
          borderColor: "{surface.300}",
          hoverBorderColor: "{surface.400}",
          focusBorderColor: "{primary.color}",
          invalidBorderColor: "{red.400}",
          color: "{surface.700}",
          disabledColor: "{surface.500}",
          placeholderColor: "{gray.disabled}",
          invalidPlaceholderColor: "{red.600}",
          floatLabelColor: "{surface.500}",
          floatLabelFocusColor: "{primary.600}",
          floatLabelActiveColor: "{surface.500}",
          floatLabelInvalidColor: "{form.field.invalid.placeholder.color}",
          iconColor: "{primary.800}",
          shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)",
          paddingY: "0.759rem",
        },
        text: {
          color: "{surface.700}",
          hoverColor: "{surface.800}",
          mutedColor: "{surface.500}",
          hoverMutedColor: "{surface.600}",
        },
        content: {
          background: "{surface.0}",
          hoverBackground: "{surface.100}",
          borderColor: "{surface.200}",
          color: "{text.color}",
          hoverColor: "{text.hover.color}",
        },
        overlay: {
          select: {
            background: "{surface.0}",
            borderColor: "{surface.200}",
            color: "{text.color}",
          },
          popover: {
            background: "{surface.0}",
            borderColor: "{surface.200}",
            color: "{text.color}",
          },
          modal: {
            background: "{surface.0}",
            borderColor: "{surface.200}",
            color: "{text.color}",
          },
        },
        list: {
          option: {
            focusBackground: "{surface.100}",
            selectedBackground: "{highlight.background}",
            selectedFocusBackground: "{highlight.focus.background}",
            color: "{text.color}",
            focusColor: "{text.hover.color}",
            selectedColor: "{highlight.color}",
            selectedFocusColor: "{highlight.focus.color}",
            icon: {
              color: "{surface.400}",
              focusColor: "{surface.500}",
            },
          },
          optionGroup: {
            background: "transparent",
            color: "{text.muted.color}",
          },
        },
        navigation: {
          item: {
            focusBackground: "{surface.100}",
            activeBackground: "{surface.100}",
            color: "{text.color}",
            focusColor: "{text.hover.color}",
            activeColor: "{text.hover.color}",
            icon: {
              color: "{surface.400}",
              focusColor: "{surface.500}",
              activeColor: "{surface.500}",
            },
          },
          submenuLabel: {
            background: "transparent",
            color: "{text.muted.color}",
          },
          submenuIcon: {
            color: "{surface.400}",
            focusColor: "{surface.500}",
            activeColor: "{surface.500}",
          },
        },
      },
      dark: {
        surface: {
          0: "#ffffff",
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b",
        },
        primary: {
          color: "{primary.400}",
          contrastColor: "{surface.900}",
          hoverColor: "{primary.300}",
          activeColor: "{primary.200}",
        },
        highlight: {
          background: "color-mix(in srgb, {primary.400}, transparent 84%)",
          focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)",
          color: "rgba(255,255,255,.87)",
          focusColor: "rgba(255,255,255,.87)",
        },
        mask: {
          background: "rgba(0,0,0,0.6)",
          color: "{surface.200}",
        },
        formField: {
          background: "{surface.950}",
          disabledBackground: "{surface.700}",
          filledBackground: "{surface.800}",
          filledHoverBackground: "{surface.800}",
          filledFocusBackground: "{surface.800}",
          borderColor: "{surface.600}",
          hoverBorderColor: "{surface.500}",
          focusBorderColor: "{primary.color}",
          invalidBorderColor: "{red.300}",
          color: "{surface.0}",
          disabledColor: "{surface.400}",
          placeholderColor: "{surface.400}",
          invalidPlaceholderColor: "{red.400}",
          floatLabelColor: "{surface.400}",
          floatLabelFocusColor: "{primary.color}",
          floatLabelActiveColor: "{surface.400}",
          floatLabelInvalidColor: "{form.field.invalid.placeholder.color}",
          iconColor: "{surface.400}",
          shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)",
        },
        text: {
          color: "{surface.0}",
          hoverColor: "{surface.0}",
          mutedColor: "{surface.400}",
          hoverMutedColor: "{surface.300}",
        },
        content: {
          background: "{surface.900}",
          hoverBackground: "{surface.800}",
          borderColor: "{surface.700}",
          color: "{text.color}",
          hoverColor: "{text.hover.color}",
        },
        overlay: {
          select: {
            background: "{surface.900}",
            borderColor: "{surface.700}",
            color: "{text.color}",
          },
          popover: {
            background: "{surface.900}",
            borderColor: "{surface.700}",
            color: "{text.color}",
          },
          modal: {
            background: "{surface.900}",
            borderColor: "{surface.700}",
            color: "{text.color}",
          },
        },
        list: {
          option: {
            focusBackground: "{surface.800}",
            selectedBackground: "{highlight.background}",
            selectedFocusBackground: "{highlight.focus.background}",
            color: "{text.color}",
            focusColor: "{text.hover.color}",
            selectedColor: "{highlight.color}",
            selectedFocusColor: "{highlight.focus.color}",
            icon: {
              color: "{surface.500}",
              focusColor: "{surface.400}",
            },
          },
          optionGroup: {
            background: "transparent",
            color: "{text.muted.color}",
          },
        },
        navigation: {
          item: {
            focusBackground: "{surface.800}",
            activeBackground: "{surface.800}",
            color: "{text.color}",
            focusColor: "{text.hover.color}",
            activeColor: "{text.hover.color}",
            icon: {
              color: "{surface.500}",
              focusColor: "{surface.400}",
              activeColor: "{surface.400}",
            },
          },
          submenuLabel: {
            background: "transparent",
            color: "{text.muted.color}",
          },
          submenuIcon: {
            color: "{surface.500}",
            focusColor: "{surface.400}",
            activeColor: "{surface.400}",
          },
        },
      },
    },
    maskBackground: "#ffffff",
  },
  components: {
    checkbox: {
      colorScheme: {
        light: {
          root: {
            borderColor: "{primary.600}",
          },
        },
      },
    },
    datatable: {
      sortIcon: {
        color: "{gray.300}",
      },
      header: {
        padding: "0",
        borderColor: "{primary.600}",
      },
      headerCell: {
        padding: "1rem 1.2rem",
        background: "{primary.600}",
        color: "{primary.contrastColor}",
        selectedBackground: "{primary.600}",
        selectedColor: "{orange.500}",
      },
    },
    menubar: {
      background: "{primary.600}",
      color: "white",
      gap: "0",
      padding: "0 3rem",
      border: "0",
      borderWidth: "0",
      borderRadius: "0",
      base: {
        item: {
          padding: "1.2rem 1rem",
        },
      },
      item: {
        focusBackground: "transparent",
        color: "{primary.contrastColor}",
        focusColor: "{primary.contrastColor}",
        hoverColor: "transparent",
      },
      mobile: {
        button: {
          color: "{primary.contrastColor}",
        },
      },
    },
    inputtext: {
      border: {
        radius: "{borderRadius.sm}",
      },
      colorScheme: {
        light: {
          root: {
            borderColor: "{gray.disabled}",
            // focusBorderColor: "{primary.800}",
          },
        },
      },
    },

    button: {
      borderRadius: "{borderRadius.sm}",
      fontSize: "1.333rem",
      paddingX: "1.667rem",
      labelFontWeight: "bold",
      colorScheme: {
        light: {
          root: {
            primary: {
              color: "white",
              hoverColor: "white",
              background: "{primary.300}",
              hoverBackground: "{primary.400}",
              borderColor: "{primary.300}",
              hoverBorderColor: "{primary.400}",
              activeBackground: "{primary.400}",
              activeBorderColor: "{primary.400}",
            },

            secondary: {
              color: "{primary.800}",
              hoverColor: "{primary.800}",
              background: "{green.190}",
              hoverBackground: "{green.400}",
              borderColor: "{green.190}",
              hoverBorderColor: "{green.400}",
              activeBackground: "{green.400}",
              activeBorderColor: "{green.400}",
            },
            success: {
              color: "white",
              hoverColor: "white",
              background: "{green.190}",
              hoverBackground: "{green.150}",
              borderColor: "{green.190}",
              hoverBorderColor: "{green.150}",
            },
          },
        },
      },
    },
    toggleswitch: {
      width: "3.417rem",
      height: "1.917rem",
      handleSize: "1.583rem",
      colorScheme: {
        light: {
          root: {
            checkedBackground: "{green.190}",
            checkedHoverBackground: "{green.190}",
          },
          handle: {
            checkedBackground: "white",
            checkedHoverBackground: "{gray.050}",
            disabledBackground: "{surface.300}",
          },
        },
        dark: {
          root: {
            checkedBackground: "{green.190}",
            checkedHoverBackground: "{green.150}",
          },
          handle: {
            checkedBackground: "{gray.050}",
            checkedHoverBackground: "white",
          },
        },
      },
    },
    select: {
      borderRadius: "{borderRadius.sm}",
    },

    paginator: {
      nav: {
        button: {
          height: "1.5rem",
          width: "1.5rem",
          borderRadius: "{borderRadius.sm}",
        },
      },
      colorScheme: {
        light: {
          root: {
            nav: {
              button: {
                selected: {
                  background: "{primary.600}",
                  color: "{primary.contrastColor}",
                },
              },
            },
          },
        },
      },
    },
  },
});
